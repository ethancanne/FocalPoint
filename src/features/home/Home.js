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
  Platform,
  Alert
} from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { ButtonTypes } from '../../utils/constants/ButtonTypes';
import { styles } from './styles';
import {History} from '../../components/History'
export const Home = ({ addSubject, focusHistory, onClear }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focal Point</Text>
      <History focusHistory={focusHistory} onClear={onClear} addSubject={addSubject}/>
      <KeyboardAvoidingView
        style={{ flex: 1, zIndex: 1, position: "absolute", bottom: 0, left:0, width: "100%" }}
        behavior={'position'}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.focusTxtInput}
            onChange={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
            }}
            value={subject}
          />
          <RoundedButton
            title="Start"
            type={ButtonTypes.COMPLETE_BTN}
            onPress={() => {
              addSubject(subject, 10);
              setSubject(null)
            }}
          />
        </View>
      </KeyboardAvoidingView>
      {focusHistory.length ?
        <View style={styles.clearView}>
          <RoundedButton
            title="Clear"
            type={ButtonTypes.CLEAR_BTN}
            width="100%"
            shadow={false}
            style={{ position: 'absolute', top: 3 }}
            onPress={onClear}
          />
        </View>
       : <></>}
    </View>
  );
};
