import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.logo}
          source={'https://www.sonypictures.com.br/sites/brazil/files/styles/max_375_x_390/public/2022-03/BG_ESPETACULAR%20HOMEM-ARANHA.JPG?itok=NqAr_io-'}
        />
        <Text>Meu App</Text>
      </View>
      <View style={styles.box2}></View>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#881f1f',
    flex: 1,
  },
  box: {
    flex: 1,
    backgroundColor: '#011f83',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  box2: {
    flex: 5,
    backgroundColor: '#7a1616',
  },
  logo: {
    width: 100,
    height: 100
  }
   card:{
    backgroundColor: '#fff',
    margin: 30,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20
  },
  userlogo:{
    width: 70,
    height: 70,
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  name:{
    textAlign: 'center',
    fontSize: '17'
  }

});