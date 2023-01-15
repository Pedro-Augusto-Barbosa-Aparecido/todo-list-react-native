import { useState } from "react"

import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/header";
import { styles } from "./styles";
import { colors } from "../../utils/colors";

import { PlusCircle } from "phosphor-react-native"
import { Counter } from "../../components/counter";

import uuid from "react-native-uuid"; 
import clipboard from "../../assets/clipboard.png";
import { Card } from "../../components/Card";

import { styles as listStyles } from "../../components/List/styles";

import Toast from 'react-native-toast-message';

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
      taskName: task.trim(),
      id: String(uuid.v4())
    }

    if (taskToAdd.taskName.length === 0) {
      return Toast.show({
        type: "error",
        text1: "Tarefa inválida",
        text2: `Insira um conteúdo válido, para adicionar uma tarefa!`
      })
    }

    if (taskToAdd.taskName.length < 15) {
      return Toast.show({
        type: "error",
        text1: "Tarefa inválida",
        text2: `Para criar uma tarefa é necessário ter no mínimo 15 caracteres!`
      })
    }

    setTasks(state => [...state, taskToAdd])
    setTask("")

    Toast.show({
      type: "success",
      text1: "Criação concluída",
      text2: `Task "${task}" criada com sucesso!`
    })
  }

  function handleCheckTask(taskId: string) {
    setTasks(state => state.map(_task => {
      if (_task.id === taskId) {
        _task.completed = !_task.completed;

        Toast.show({
          type: "success",
          text1: "Sucesso",
          text2: `Status da tarefa alterado com sucesso!`
        })
      }
      
      return _task;
    }))
  }

  function handleDeleteTask(taskId: string) {
    Alert.alert("Delete Task", "Deseja mesmo deletar a tarefa?", [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => {
          setTasks(state => state.filter(_task => _task.id !== taskId))
          Toast.show({
            type: "success",
            text1: "Sucesso",
            text2: `Tarefa deletada com sucesso!`
          })
        }
      }
    ])
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

      <FlatList
        style={listStyles.container}
        data={tasks}
        keyExtractor={item => item.id}

        ListEmptyComponent={() => {
          return (
            <View style={listStyles.emptyContainer}>
              <Image source={clipboard} style={listStyles.image} />

              <Text style={[listStyles.text, { fontWeight: "bold" }]}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={listStyles.text}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )
        }}
        renderItem={({ item }) => (
          <Card 
            key={item.id} 
            onDeleteTask={handleDeleteTask} 
            onCheckTask={handleCheckTask} 
            {...item} 
          />
        )}

        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}