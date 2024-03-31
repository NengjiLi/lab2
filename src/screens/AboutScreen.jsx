import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  return (
    <MainLayout>
      <Text>My To Do List App</Text>
      <Text>HIIIII</Text>
      <Text>{new Date().toLocaleDateString()}</Text>
    </MainLayout>
  );
}

export default AboutScreen;
