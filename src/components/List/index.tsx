import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./styles";

import clipboard from "../../assets/clipboard.png";
import { Card } from "../Card";

interface ListProps {
  data: Array<{
    id: string;
    taskName: string;
    completed: boolean;
  }>
}

export function List({ data }: ListProps) {
  return (
    <FlatList 
      style={styles.container}
      data={data}
      keyExtractor={item => item.id}

      ListEmptyComponent={() => {
        return (
          <View style={styles.emptyContainer}>
            <Image source={clipboard} style={styles.image} />

            <Text style={[styles.text, { fontWeight: "bold" }]}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.text}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )
      }}
      renderItem={({ item }) => <Card key={item.id} {...item} />}

      showsVerticalScrollIndicator={false}
    />
  )
}