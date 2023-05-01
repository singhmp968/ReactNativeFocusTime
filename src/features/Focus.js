import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { colors } from '../utils/colors';
import { spacing } from '../utils/size';
import { RoundedButton } from '../components/RoundedButton';
import { TextInput } from 'react-native-paper';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log('sub', subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />

        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 0.8,
    marginRight: spacing.sm,
  },
});
