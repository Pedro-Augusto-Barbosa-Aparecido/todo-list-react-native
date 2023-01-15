import { useState } from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Trash } from "phosphor-react-native";

import Checkbox from 'expo-checkbox';

import { colors } from "../../utils/colors";

interface CardProps {
  id: string;
  taskName: string;
  completed: boolean;
  onCheckTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function Card({ taskName, id, onCheckTask, onDeleteTask }: CardProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [doesButtonClicked, setButtonClicked] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <View style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
      }}>
        <Checkbox 
          style={styles.checkbox}
          value={isChecked}
          onValueChange={(ev) => {
            setIsChecked(ev)
            onCheckTask(id)
          }}
          color={isChecked ? colors.blueDark : undefined}
        />
        <Text 
          style={[styles.text, isChecked && { textDecorationLine: "line-through", color: colors.gray300 }]}
        >
          {taskName}
        </Text>
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPressIn={() => setButtonClicked(true)}
        onPressOut={() => setButtonClicked(false)}
        onPress={() => onDeleteTask(id)}
      >
        <Trash weight="bold" color={doesButtonClicked ? colors.danger : colors.gray300} size={18} />
      </TouchableOpacity>
    </View>
  )
}