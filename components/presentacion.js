import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import {
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';

export default function Presentacion() {

  return (
    <LinearGradient
      colors={['#1e293b', '#334155', '#475569']}
      style={styles.container}
    >
      <View style={styles.card}>

        <Image
          source={require('../assets/fotomia.jpg')}
          style={styles.imagen}
        />

        <Text style={styles.nombre}>
          Bruno Bertoni
        </Text>

        <Text style={styles.subtitulo}>
          17 años • Argentina
        </Text>

        <View style={styles.linea} />

        <View style={styles.info}>
          <Text style={styles.texto}>⚽ Fútbol</Text>
          <Text style={styles.texto}>💻 Tecnología</Text>
          <Text style={styles.texto}>📚 Aprendiendo programación</Text>
        </View>

        <View style={styles.skillsContainer}>

          <View style={styles.skill}>
            <FontAwesome5
              name="python"
              size={18}
              color="#3776AB"
            />

            <Text style={styles.skillTexto}>
              Python
            </Text>
          </View>

          <View style={styles.skill}>
            <MaterialIcons
              name="storage"
              size={18}
              color="#F29111"
            />

            <Text style={styles.skillTexto}>
              SQL
            </Text>
          </View>

        </View>

        <View style={styles.footer}>
          <MaterialIcons
            name="code"
            size={16}
            color="#94a3b8"
          />

          <Text style={styles.footerTexto}>
            Hecho con React Native + Expo
          </Text>
        </View>

      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: 320,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    padding: 30,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 8,
  },

  imagen: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 18,
    borderWidth: 4,
    borderColor: '#f1f5f9',
  },

  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
  },

  subtitulo: {
    fontSize: 15,
    color: '#64748b',
    marginTop: 4,
    marginBottom: 20,
  },

  linea: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e8f0',
    marginBottom: 20,
  },

  info: {
    width: '100%',
    marginBottom: 25,
  },

  texto: {
    fontSize: 15,
    color: '#334155',
    marginBottom: 10,
  },

  skillsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 10,
  },

  skill: {
    backgroundColor: '#f1f5f9',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,

    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  skillTexto: {
    color: '#1e293b',
    fontWeight: '600',
    fontSize: 14,
  },

  footer: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  footerTexto: {
    color: '#94a3b8',
    fontSize: 12,
  },

});