import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Home
      </Text>

      <Link href="/profile" style={styles.botao}>
        Perfil
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 16,
    marginBottom: 20,
  },

  botao: {
    borderWidth: 2,
    borderColor: '#cc5fe7',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 50,
    color: '#000',
  },
});