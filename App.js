import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  Platform,
  Modal,
  Alert,
  Animated,
  Touchable, 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Home } from './src/features/home/Home';
import { Focus } from './src/features/focus/Focus';
import {History} from './src/components/History'
import {statuses} from './src/utils/constants/Statuses'
import convertNumToTime from './src/utils/ConvertNumToTime'

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);
  const [startingMinutes, setStartingMinutes] = useState(1)

  const addFocusHistoryWithState = (subject, status, minutesLeft = "") => {
    setFocusHistory([...focusHistory, { subject, status, minutesLeft: convertNumToTime(minutesLeft), minutes:minutesLeft}]);
    setFocusSubject(null)
  };

  const onClear = async ()=>{
    setFocusHistory([])
    await AsyncStorage.setItem("focusHistory", JSON.stringify([]))

  }

  const saveFocusHistory= async ()=>{
    try{
        await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory))
    }catch(e){
        console.log(e)
    }
  }

  const loadFocusHistory = async ()=>{
    try{
        const history = await AsyncStorage.getItem("focusHistory")
        console.log("HISTORY"+ await AsyncStorage.getItem("focusHistory"))
        if (history && JSON.parse(history).length)
          setFocusHistory(JSON.parse(history))
    }catch(e){
        console.log(e)
    }
  }

  useEffect(()=>{
    if (focusHistory.length){
      saveFocusHistory()
    }
  }, [focusHistory])

  useEffect(()=>{
    loadFocusHistory()
  }, [])

  const addSubject = (subject, minutes) => {
    if (subject === null || subject === '')
      Alert.alert('Uh oh', 'You forgot to add a subject', [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ]);
    else {
      setFocusSubject(subject);
      setStartingMinutes(minutes)
    }
  };

  const onCountdownEnd = () => {
    addFocusHistoryWithState(focusSubject, statuses.COMPLETE);
  };

  const clearSubject = (minutes) => {
    addFocusHistoryWithState(focusSubject, statuses.CANCELLED, minutes);
  };

  return (
    <View style={styles.container}>
      <Modal visible={focusSubject !== null} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Focus
              focusSubject={focusSubject}
              addSubject={addSubject}
              onCountdownEnd={onCountdownEnd}
              clearSubject={clearSubject}
              startingMinutes={startingMinutes}
              setStartingMinutes={setStartingMinutes}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
        
        <View>
          <View>
            <Home addSubject={addSubject} focusHistory={focusHistory} onClear={onClear} />
          </View>
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
