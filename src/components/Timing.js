import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { ButtonTypes } from '../utils/constants/ButtonTypes';

export const Timing = ({
  onChangeTime
}) => {
  
  return(
    <View style={styles.timingView}>
          <RoundedButton
            height={90}
            type={ButtonTypes.NORMAL_BTN2}
            title="10"
            style={{ marginLeft: 10, marginRight: 10, flex: 1 }}
            onPress={() => {
              onChangeTime(10);
            }}
            textStyle={{ fontSize: 40 }}
          />
          <RoundedButton
            height={90}
            type={ButtonTypes.NORMAL_BTN2}
            title="15"
            style={{ marginLeft: 10, marginRight: 10, flex: 1 }}
            onPress={() => {
              onChangeTime(15);
            }}
            textStyle={{ fontSize: 40 }}
          />
          <RoundedButton
            height={90}
            type={ButtonTypes.NORMAL_BTN2}
            title="20"
            style={{ marginLeft: 10, marginRight: 10, flex: 1 }}
            onPress={() => {
              onChangeTime(20);
            }}
            textStyle={{ fontSize: 40 }}
          />
        </View>
  )
}

export const styles = StyleSheet.create({
  timingView:{
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 120,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
})