import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, FlatList, Platform } from 'react-native';
import { statuses } from '../utils/constants/Statuses';
import {FocusHistoryItem} from './FocusHistoryItem'

export const History = ({ focusHistory, onClear, addSubject }) => {
  const clearHistory = () => {
    onClear();
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.listTitle}>Today’s focus</Text>
      <View style={{flex: 1}}>
        {focusHistory.length ? (
          <FlatList
            style={{backgroundColor: "white", flex: 1}}
            data={focusHistory}
            contentContainerStyle={styles.listItem}
            renderItem={({item, index})=>( 
              <FocusHistoryItem
                subject={item.subject}
                status={item.status}
                addSubject={addSubject}
                index={index}
                focusHistory={focusHistory}
              />)}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text style={styles.emptyListTxt}>Nothing yet</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: Platform.OS === 'ios' ? 0.70 : 0.63
  },
  emptyListTxt:{
    width: "100%",
    textAlign: "center",
    color: "gray",
    fontSize: 30,
    padding: 30,
    backgroundColor: "white",
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity:0.05,
    shadowRadius: 3,
  },
  listTitle: {
    marginLeft: 10,
    marginTop: 20,

    fontWeight: "bold",
    color: "gray"

  },
});
