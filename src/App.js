import React, { useState } from 'react';
import { ChakraProvider, Box, Heading, VStack, Input, Button, List, ListItem, Checkbox } from '@chakra-ui/react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <ChakraProvider>
      <Box maxW="md" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg">
        <Heading mb={6} textAlign="center">Todo App</Heading>
        <VStack spacing={4}>
          <Input 
            placeholder="Add a new task" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
          />
          <Button onClick={addTask} colorScheme="teal" width="100%">Add Task</Button>
          <List spacing={3} width="100%">
            {tasks.map((task, index) => (
              <ListItem key={index} display="flex" alignItems="center">
                <Checkbox 
                  isChecked={task.completed} 
                  onChange={() => toggleTaskCompletion(index)} 
                  mr={3}
                />
                <Box as="span" textDecoration={task.completed ? 'line-through' : 'none'}>
                  {task.text}
                </Box>
              </ListItem>
            ))}
          </List>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default App;