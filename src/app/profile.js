import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Perfil
      </Text>

      <Link href="/login" style={styles.botao}>
        Sair (Login)
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
    borderColor: '#91e78e',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 40,
    color: '#000',
  },
});