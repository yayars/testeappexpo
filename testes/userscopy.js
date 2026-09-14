import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import CardUser from '../components/CardSerie'
import { useRouter } from 'expo-router';

export default function UsersScreen() {

  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.logo}
          source={'https://bahiaeconomica.com.br/wp/wp-content/uploads/2024/07/netflix-symbol-black.png'}
        />
        <Text>Relatos</Text>
      </View>
      <View style={styles.box2}>



        <View style={styles.botoes}>
          <Button title="Ir para Home" onPress={() => router.push('/')} color="#ff0404"/>
        </View>


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
          name={'Gustav'}
          email={'gugu@gmail.com'}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#680000',
    flex: 1,
  },
  box: {
    flex: 1,
    backgroundColor: '#971a1a',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  box2: {
    flex: 5,
    backgroundColor: '#000000',
  },
  logo: {
    width: 100,
    height: 100
  }


});