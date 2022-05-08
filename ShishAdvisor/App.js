import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  console.log("running!!");
  return (
    <SafeAreaView style={styles.container}>
      <Text>Find and rate shisha places!</Text>
      <Image 
        fadeDuration={2000}
        source={require('./assets/shishaicon.jpg')
      }/>
      <StatusBar style="auto" />
    </SafeAreaView>
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
