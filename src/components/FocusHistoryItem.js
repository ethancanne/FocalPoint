import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { statuses } from '../utils/constants/Statuses';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/Colors';

export const FocusHistoryItem = ({ subject, status, addSubject, index, focusHistory }) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      disabled={status === 1}
      onPress={() => {
        console.log(focusHistory[index].minutesLeft)
        addSubject(subject, focusHistory[index].minutes);
        focusHistory.splice(index,1)
      }}>
      <View>
        <Text
          style={
            status === statuses.COMPLETE
              ? styles.completeSubjectTxt
              : styles.cancelledSubjectTxt
          }>
          {subject}
        </Text>
        { status === statuses.CANCELLED &&
          <Text style={styles.timeRemainingTxt}>
              {focusHistory[index].minutesLeft} Remaining
          </Text>
        }
      </View>

      <View style={{ justifyContent: 'center' }}>
        {status == statuses.COMPLETE ? (
          <Ionicons name="md-checkmark-circle" size={32} color="#8FA87F" />
        ) : (
          <Ionicons name="md-time-sharp" size={32} color="#A60000" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.lightSecondary,
    padding: 20,
    margin: 10,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  completeSubjectTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8FA87F',
  },
  cancelledSubjectTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#A60000',
  },
  timeRemainingTxt:{
    fontWeight: "bold",
    color: "#A60000"
  }
});
