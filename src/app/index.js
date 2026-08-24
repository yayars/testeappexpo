import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.caixa}>

        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456'}
          />
          <Text style={styles.titulo}>Home Teste</Text>
        </View>

        <View style={styles.linha}>
          <View style={styles.card}>
            <Image
              style={styles.imagem}
              source={'https://m.media-amazon.com/images/S/pv-target-images/2745382833c26f576e1c63466a8cb9ee8ff1f30d3cc05e90c009d014fa0b07bc.jpg'}
            />
            <Text style={styles.nome}>O Mentalista</Text>
            <Text style={styles.plataforma}>Netflix</Text>
          </View>


          <View style={styles.card}>
            <Image
              style={styles.imagem}
              source={'https://daniquedisse.com.br/wp-content/uploads/2017/03/antes-e-depois-one-tree-hill.png'}
            />
            <Text style={styles.nome}>One Tree Hill</Text>
            <Text style={styles.plataforma}>Netflix</Text>
          </View>
        </View>


        <View style={styles.linha}>
          <View style={styles.card}>
            <Image
              style={styles.imagem}
              source={'https://mundonegro.inf.br/wp-content/uploads/2025/03/Copia-de-Copia-de-CAPA-MN-2022-2025-03-12T161209.170-768x432.jpg'}
            />
            <Text style={styles.nome}>Beauty in Black</Text>
            <Text style={styles.plataforma}>Netflix</Text>
          </View>


          <View style={styles.card}>
            <Image
              style={styles.imagem}
              source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSorCl3HXTc--xAjoRVeLFcrAFK6WCR24-jAbWBAIH6Ycsxa4CSqqLc2n5U&s=10'}
            />
            <Text style={styles.nome}>Breaking Bad</Text>
            <Text style={styles.plataforma}>Netflix</Text>
          </View>
        </View>

        <View style={styles.botoes}>
          <Link href="/users">
            <View style={styles.botao}>
              <Text style={styles.textoBotao}>Ir para Usuários</Text>
            </View>
          </Link>

          <Link href="/userscopy">
            <View style={styles.botao}>
              <Text style={styles.textoBotao}>Ir para relatos</Text>
            </View>
          </Link>
        </View>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  caixa: {
    backgroundColor: '#a7242a',
    padding: 50,
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  linha: {
    flexDirection: 'row',
  },

  card: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },

  imagem: {
    width: 180,
    height: 180,
    borderRadius: 15,
  },

  nome: {
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },

  plataforma: {
    color: 'white',
    fontSize: 12,
  },

  botoes: {
  marginTop: 30,
  flexDirection: 'row',
  gap: 20,
},

botao: {
  backgroundColor: '#000',
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 8,
},

textoBotao: {
  color: '#fff',
  fontWeight: 'bold',
},

});