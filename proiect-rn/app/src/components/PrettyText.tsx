import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface PrettyTextProps {
  text: string;
  size?: number;
  color?: string;
  style?: TextStyle;
}

const PrettyText: React.FC<PrettyTextProps> = ({ text, size = 24, color = '#000', style }) => {
  return (
    <Text style={[styles.heading, { fontSize: size, color }, style]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default PrettyText;