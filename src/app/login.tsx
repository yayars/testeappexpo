import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Login
      </Text>

      <Link href="/home" style={styles.botao}>
        Home
      </Link>

      <Link href="/signup" style={styles.botao}>
        Cadastrar
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  titulo: {
    fontSize: 16,
    marginBottom: 15,
  },

  botao: {
    borderWidth: 2,
    borderColor: '#8ba2ee',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 50,
    color: '#000',
  },
});