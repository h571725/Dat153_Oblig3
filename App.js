import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Demo1 from "./screens/Demo1";
import Demo2 from "./screens/Demo2";
import Demo3 from "./screens/Demo3";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Demo1")}
      >
        <Text>Go to Demo1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Demo2")}
      >
        <Text>Go to Demo2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Demo3")}
      >
        <Text>Go to Demo3</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Demo1" component={Demo1} />
        <Stack.Screen name="Demo2" component={Demo2} />
        <Stack.Screen name="Demo3" component={Demo3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    margin: 8
  }
});

export default App;
