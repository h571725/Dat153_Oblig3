import React from "react";
import { SafeAreaView, Image, FlatList, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

const DATA = [
  {
    id: "1",
    uri: require("../image1.jpeg")
  },
  {
    id: "2",
    uri: require("../image2.jpg")
  },
  {
    id: "3",
    uri: require("../image3.jpg")
  },
  {
    id: "4",
    uri: require("../image4.jpg")
  },
  {
    id: "5",
    uri: require("../image5.jpg")
  }
];

function Item({ uri }) {
  return (
    <Image
      source={uri}
      style={{
        width: null,
        resizeMode: "contain",
        height: 220
      }}
    />
  );
}

export default function App() {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected]
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item uri={item.uri} />}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});
