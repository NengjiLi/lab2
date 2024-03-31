import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    if(taskText.length > 0) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <ScrollView>
          <ToDoList tasks={tasks} />
        </ScrollView>
        <ToDoForm addTask={addTask} />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </SafeAreaView>
    </MainLayout>
  );
}

export default HomeScreen;
