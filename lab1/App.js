import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView horizontal style={{ marginTop: 100 }}>
      <View style={{ height: 750, width: 400 }}>
        <Image
          source={require("./assets/images/pexels-digital-buggu-352899.jpg")}
          style={{ width: 400, height: 500 }}
        ></Image>
      </View>
      <View style={{ height: 750, width: 400 }}>
        <Image
          source={require("./assets/images/crafting-tools-table.jpg")}
          style={{ width: 400, height: 500 }}
        ></Image>
      </View>
      <View style={{ height: 750, width: 400 }}>
        <Image
          source={require("./assets/images/pexels-regiane-tosatti-22823.jpg")}
          style={{ width: 400, height: 500 }}
        ></Image>
      </View>
      <View style={{ height: 750, width: 400 }}>
        <Image
          source={require("./assets/images/pexels-suzy-hazelwood-1232131.jpg")}
          style={{ width: 400, height: 500 }}
        ></Image>
      </View>
      <View style={{ height: 750, width: 400 }}>
        <Image
          source={require("./assets/images/Screenshot 2023-04-22 012008.png")}
          style={{ width: 400, height: 500 }}
        ></Image>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
