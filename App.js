import { StatusBar } from "expo-status-bar";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Image,
} from "react-native";
import { useState } from "react";

const image = require("./assets/images/stars-on-night.jpg");

const ServiceAPI = (q, page) => {
  const options = {
    params: {
      key: "25182566-6d97045846fa1b6cae2a84492",
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: 12,
      q,
      page,
    },
  };

  return axios.get("https://pixabay.com/api/", options);
};

export default function App() {
  // "https://pixabay.com/get/g09d74e9508258b2684e9b99a9e027a2a5493e092f0f857617cb926cd2a18aa98339c40bc7a5fbc4cfef7a5323f3c8a9cc3794cfd61e05c9bffad4614364b269e_1280.jpg"

  const [url, setUrl] = useState("http://");

  ServiceAPI("dog", 1).then((res) => setUrl(res.data.hits[2].largeImageURL));

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.form}>
          <TextInput style={styles.input} textAlign={"center"} />
          <Image
            style={styles.tinyLogo}
            source={{
              uri: url,
            }}
          />
        </View>
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
  tinyLogo: {
    width: 320,
    height: 240,
  },
  form: {
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    color: "#f0f8ff",
    marginHorizontal: 40,
    width: 320,
    height: 40,
    borderRadius: 6,
  },
});
