import { useState } from "react"

import { TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/header";
import { styles } from "./styles";
import { colors } from "../../utils/colors";

import { PlusCircle } from "phosphor-react-native"

export function Home() {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false)
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false)

  const [task, setTask] = useState<string>("")

  function handleAddTask () {

  }

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
    </View>
  )
}