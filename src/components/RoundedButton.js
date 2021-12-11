import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonTypes } from '../utils/constants/ButtonTypes';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  width = 60,
  height = 40,
  shadow=true,
  ...props
}) => {
  const [btnType, setBtnType] = useState(props.type);
  let color = ''
  let backgroundColor =''


  switch (btnType) {
    case ButtonTypes.COMPLETE_BTN:
      backgroundColor = '#8FA87F';
      color = 'white';
      break;
    case ButtonTypes.DESTRUCTIVE_BTN:
      backgroundColor = '#A60000';
      color = 'white';
      break;

    case ButtonTypes.NORMAL_BTN:
      backgroundColor = 'white';
      color = 'black';
      break;

    case ButtonTypes.NORMAL_BTN2:
      backgroundColor = '#F2F2F2';
      color = 'black';
      break;

    case ButtonTypes.CLEAR_BTN:
      backgroundColor = 'rgba(52, 52, 52, 0)';
      color = 'white';
      break;
  }
  return (
    <TouchableOpacity
      style={[styles(width, height, color, backgroundColor, shadow).button, style]} onPress={props.onPress}>
      <Text
        style={[styles(width, height, color, backgroundColor, shadow).text, textStyle]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};


const styles = (width, height, color, backgroundColor, shadow) =>{
  let shadowObj = {}
  if (shadow)
    shadowObj ={
      shadowColor: shadow && 'black',
        shadowOffset: shadow && { width: 2, height: 4 },
        shadowOpacity:shadow &&  0.05,
        shadowRadius: shadow && 3,
    }
  return(
    StyleSheet.create({
      button: {
        backgroundColor: backgroundColor,
        height:height,
        width: width,
        borderRadius: 4,
        ...shadowObj,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },

      text: {
        color: color,
        fontWeight: 'bold',
      },
    }
  ))
}
  
