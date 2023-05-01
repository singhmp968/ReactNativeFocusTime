import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';
export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState(["temp feature focus"]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimeEnd={(subject) => {
            setHistory([...history,subject])
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
      <Text>dasdas:{currentSubject}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop:Platform.OS ==='ios'? 50:100   if we are using <View style={styles.container}>
    // paddingTop:50
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
