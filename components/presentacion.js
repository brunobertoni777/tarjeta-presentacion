import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

export default function Presentacion() {
  const abrirInstagram = () => {
    Linking.openURL('https://www.instagram.com/_bertonibruno');
  };

  const abrirGithub = () => {
    Linking.openURL('https://github.com/brunobertoni777'); 
  };

  return (
   <SafeAreaProvider> 
    <ScrollView contentContainerStyle={styles.scroll}>
    <View style={styles.container}>
      <View style={styles.card}>

        <Image
          source={require('../assets/fotomia.jpg')}
          style={styles.imagen}
        />

        <Text style={styles.nombre}>Bruno Bertoni</Text>
        <Text style={styles.subtitulo}>17 años • Argentina</Text>
      
       
        <View style={styles.info}>
          <Text style={styles.texto}>⚽ Fútbol</Text>
          <Text style={styles.texto}>💻 Tecnología</Text>
          <Text style={styles.texto}>📚 Aprendiendo programación</Text>
          
        </View>
      
      
        <View style={styles.botones}>
          <TouchableOpacity style={styles.botonInstagram} onPress={abrirInstagram}>
            <Text style={styles.botonTexto}>Instagram</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botonGithub} onPress={abrirGithub}>
            <Text style={styles.botonTexto}>GitHub</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
   </ScrollView>
  </SafeAreaProvider> 
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9eef3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },

  imagen: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },

  subtitulo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },

  info: {
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
  },

  texto: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },

  botones: {
    flexDirection: 'row',
    gap: 10, 
  },

  botonInstagram: {
    backgroundColor: '#E1306C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  botonGithub: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
    scroll: {
    paddingVertical: 40,
    alignItems: 'center',
  },

});