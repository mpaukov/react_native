import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

const image = require("./assets/images/stars-on-night.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <TextInput style={styles.input} textAlign={"center"} />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    color: "#f0f8ff",
    marginHorizontal: 40,
    height: 40,
    borderRadius: 6,
  },
});
