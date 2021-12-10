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
  Dimensions,
  Vibration,
} from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { ButtonTypes } from '../../utils/constants/ButtonTypes';
import { Countdown } from '../../components/Countdown';
import { styles } from './Styles';
import { ProgressBar } from 'react-native-paper';
import { Timing } from '../../components/Timing';
import { useKeepAwake } from 'expo-keep-awake';

export const Focus = ({ focusSubject, addSubject, onCountdownEnd, clearSubject, startingMinutes, setStartingMinutes }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [timeLeft, setTimeLeft] = useState(0);

  useKeepAwake();

  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(10000);
    }
  };

  const onEnd = () => {
    onCountdownEnd()
    vibrate();
    setIsStarted(false);
    setProgress(progress);
  };

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const changeTime = (min) => {
    setStartingMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.focusSubjectTxt}>
        Focusing on:{'\n'}
      <Text style={{ fontWeight: 'bold' }}>{focusSubject}</Text>
      </Text>
      <View style={styles.btnAndTimerView}>
        <View style={styles.timerView}>
          <Countdown
            isPaused={!isStarted}
            changeTime={changeTime}
            startingMinutes={startingMinutes}
            onProgress={onProgress}
            setTimeLeft={setTimeLeft}
            onEnd={onEnd}
          />
          <ProgressBar
            color="gray"
            progress={progress}
            style={{ height: 10 }}
          />
        </View>

        <Timing onChangeTime={changeTime} />
      </View>
      <View style={styles.startPauseBtnView}>
        <RoundedButton
          width={Dimensions.get('window').width / 1.2}
          height="40"
          type={ButtonTypes.NORMAL_BTN}
          title={isStarted ? 'Pause' : 'Start'}
          style={{ marginTop: 50, padding: 20 }}
          textStyle={{ fontSize: 30 }}
          onPress={() => {
            setIsStarted(!isStarted);
          }}
        />
      </View>
      <View style={styles.navigationView}>
        <RoundedButton
          type={ButtonTypes.DESTRUCTIVE_BTN}
          title="END"
          style={{ flex: 1, margin: 10 }}
          textStyle={{ fontSize: 15 }}
          onPress={()=>clearSubject(timeLeft)}
        />
        <RoundedButton
          type={ButtonTypes.COMPLETE_BTN}
          title="COMPLETE"
          style={{ flex: 1, margin: 10 }}
          textStyle={{ fontSize: 15 }}
          onPress={onCountdownEnd}
        />
      </View>
    </SafeAreaView>
  );
};
