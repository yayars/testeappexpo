import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Signup() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Cadastrar
      </Text>

      <Link href="/login" style={styles.botao}>
        Login
      </Link>

      <Link href="/home" style={styles.botao}>
        Home
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
    borderColor: '#ec66c4',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 50,
    color: '#000',
  },
});