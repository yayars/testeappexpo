import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'
import CardUser from './components/CardSerie'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image 
          style={styles.logo} 
          source={'https://cdn.vectorstock.com/i/500p/66/46/justice-scales-logo-law-amp-legal-vector-27726646.jpg'}
        />
        <Text>Meu App</Text>
      </View>
      <View style={styles.box2}>
        <CardUser 
          avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/3840px-User-avatar.svg.png'}
          name={'Yasmin Rodrigues'}
          email={'yayars28@gmail.com'}
        />
        <CardUser 
          avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/3840px-User-avatar.svg.png'}
          name={'Ana Beatriz'}
          email={'aninha@gmail.com'}
        />
        <CardUser 
          avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/3840px-User-avatar.svg.png'}
          name={'Robert'}
          email={'robert@gmail.com'}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0b5e8',
    flex: 1,
  },
  box:{
    flex: 1,
    backgroundColor: '#f5bed8',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  box2:{
    flex: 5,
    backgroundColor: '#db91b4',
  },
  logo:{
    width: 100,
    height: 100
  }
});