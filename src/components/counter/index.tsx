import { Text, View } from "react-native";

import { styles } from "./styles";

interface CounterProps {
  taskToComplete: number;
  taskCompleted: number;
}

export function Counter({ taskCompleted, taskToComplete }: CounterProps) {
  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.span}>Criadas</Text> 
        <View style={styles.counterNumberContainer}>
          <Text style={styles.counterNumber}>{taskToComplete}</Text>
        </View>
      </View>
      <View style={styles.counterContainer}>
        <Text style={styles.span}>Concluídas</Text> 
        <View style={styles.counterNumberContainer}>
          <Text style={styles.counterNumber}>{taskCompleted}</Text>
        </View>
      </View>
    </View>
  )
}