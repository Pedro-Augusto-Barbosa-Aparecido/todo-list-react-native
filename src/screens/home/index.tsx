import { useState } from "react"

import { Alert, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/header";
import { styles } from "./styles";
import { colors } from "../../utils/colors";

import { PlusCircle } from "phosphor-react-native"
import { Counter } from "../../components/counter";

import uuid from "react-native-uuid"; 
import { List } from "../../components/List";

interface Task {
  id: string;
  taskName: string;
  completed: boolean;
}

export function Home() {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false)
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false)

  const [task, setTask] = useState<string>("")

  const [tasks, setTasks] = useState<Task[]>([])

  function handleAddTask () {
    const taskToAdd: Task = {
      completed: false,
      taskName: task,
      id: String(uuid.v4())
    }

    setTasks(state => [...state, taskToAdd])
    setTask("")

    Alert.alert("Success", `Task added:\n\n"${task.slice(0, 50)}".`)
  }

  const taskCompleted = tasks.filter(_task => _task.completed).length
  const taskToComplete = tasks.filter(_task => !_task.completed).length

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.form}>
        <TextInput 
          style={[styles.input, isInputFocus && styles.inputFocused]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray300}
          onFocus={() => setIsInputFocus(true)}
          onBlur={() => setIsInputFocus(false)}
          value={task}
          onChangeText={setTask}
        /> 
        <TouchableOpacity 
          style={[styles.button, isButtonClicked && {backgroundColor: colors.blue}]}
          onPressIn={() => setIsButtonClicked(true)}  
          onPressOut={() => setIsButtonClicked(false)}  
          onPress={handleAddTask}
        >
          <PlusCircle color={colors.gray100} weight="bold" size={20} />
        </TouchableOpacity>
      </View>
      <Counter taskCompleted={taskCompleted} taskToComplete={taskToComplete} />

      <List data={tasks} />
    </View>
  )
}