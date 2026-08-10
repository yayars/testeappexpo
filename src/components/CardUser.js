import { View, Text, StyleSheet } from 'react-native';

export default function CardSerie({ titulo, plataforma }) {
  return (
    <View style={styles.card}>
      <View style={styles.imagem}></View>

      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.plataforma}>{plataforma}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    alignItems: 'center',
    margin: 10,
  },

  imagem: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 10,
  },

  titulo: {
    fontWeight: 'bold',
    textAlign: 'center',
  },

  plataforma: {
    color: 'gray',
  },
});