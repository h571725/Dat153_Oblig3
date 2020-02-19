import * as React from "react";
import { View, Image, Button, Alert } from "react-native";

const Demo3 = () => {
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
                text: "Neutral (Later)",
                onPress: () => console.log("Ask me later pressed")
              },
              {
                text: "Negative (NO)",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              {
                text: "Positive (Yes)",
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

export default Demo3;
