import * as React from "react";
import { View, Image, Button, Alert } from "react-native";

const Demo1 = () => {
  return (
    <View
      style={{
        alignItems: "center"
      }}
    >
      <Image
        style={{ width: 50, height: 50, margin: 16 }}
        source={{
          uri: "https://facebook.github.io/react-native/img/tiny_logo.png"
        }}
      />
      <Button
        title="Click me!"
        onPress={() => {
          Alert.alert(
            "Hello World!",
            "I'm an alert dialog :)",
            [
              {
                text: "Neutral Button",
                onPress: () => console.log("Ask me later pressed")
              },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              {
                text: "OK",
                onPress: () => console.log("OK Pressed")
              }
            ],
            { cancelable: false }
          );
        }}
      />
    </View>
  );
};

export default Demo1;
