import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {videoStyles} from './video.styles';

export default function Video({title}) {
  return (
    <View style={videoStyles.container}>
      <View style={videoStyles.video} />
      <Text style={videoStyles.title}>{title}</Text>
    </View>
  );
}
