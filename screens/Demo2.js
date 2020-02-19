import * as React from "react";
import { View, Text, Button, TextInput } from "react-native";
const Demo2 = () => {
  const [value, onChangeText] = React.useState("");
  const [inputText, setInputText] = React.useState("");
  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        style={{
          margin: 16,
          height: 40,
          width: "40%",
          padding: 10,
          borderColor: "gray",
          borderWidth: 1
        }}
        placeholder="Type here"
        placeholderTextColor="black"
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Button
        title="Click on me!"
        onPress={() => {
          setInputText(`Your input text is: ${value}`);
        }}
      />
      <Text style={{ margin: 16 }}>{inputText}</Text>
    </View>
  );
};

export default Demo2;
