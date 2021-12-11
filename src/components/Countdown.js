import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const minutesToMil = (min) => min * 1000 * 60;
const milToMinutes = (mil) => mil / 1000 / 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ startingMinutes, setTimeLeft, isPaused, onProgress, onEnd, changeTime }) => {
  const [mil, setMil] = useState(100);
  const [minutes, setMinutes] = useState(startingMinutes);

  const interval = useRef(null);

  const countDown = () => {
    setMil((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        if(mil === 0){
          onEnd();
        }
        return time;
      }
      const timeLeft = time - 1000;
      setTimeLeft(Math.round(milToMinutes(timeLeft) * 100) / 100)
      return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  useEffect(() => {
    setMil(minutesToMil(startingMinutes));
  }, [startingMinutes]);

  useEffect(()=>{
  },[mil])

  const formatCustomTime= (time)=>{
    const currentTimeString = String(milToMinutes(mil)) + String(time)
    if (currentTimeString.length > 2 || parseInt(currentTimeString) > 59){
      setMil(0)
      console.log(currentTimeString)
    }else{
       const milValue = time === "Backspace" ? 0 : mil !== 0 ?  minutesToMil(parseInt(currentTimeString)) : minutesToMil(time)
        setMil(milValue)
        changeTime(parseInt(currentTimeString))
    }
  }

  const minute = Math.floor(mil / 1000 / 60) % 60;
  const second = Math.floor(mil / 1000) % 60;

  return (
    <View>
      {isPaused ? (
        <TextInput
          keyboardType="numeric"
          style={styles.timerTxt}
          onKeyPress={({ nativeEvent })=> {
            formatCustomTime(nativeEvent.key)
          }}
          value={formatTime(minute)+":"+formatTime(second)}
          />
      ) : (
        <Text
          style={styles.timerTxt}>
          {formatTime(minute)}:{formatTime(second)}
        </Text>
      )}
      </View>
    );
};

export const styles = StyleSheet.create({
  timerTxt: {
    fontSize: 70,
    textAlign: 'center',
    marginBottom: 10,
  },
});
