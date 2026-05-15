import {
  View, Text, StyleSheet, Pressable, Linking, Alert,} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {

  const abrirInstagram = () => {
    Linking.openURL(
      'https://www.instagram.com/_bertonibruno'
    );
  };

  const abrirGithub = () => {
    Linking.openURL(
      'https://github.com/brunobertoni777'
    );
  };

  return (
  <SafeAreaView style={{ flex: 1 }}>
    <LinearGradient
      colors={['#1e293b', '#334155', '#475569']}
      style={styles.container}
    >
      <View style={styles.card}>

        <Text style={styles.titulo}>
          Contactos
        </Text>

        <View style={styles.linea} />

        <View style={styles.botones}>

          <Pressable
            onPress={abrirInstagram}

            onPressIn={() =>
              console.log("Tocando Instagram")
            }

            onPressOut={() =>
              console.log("Soltó Instagram")
            }

            onLongPress={() => {
              Alert.alert(
                "Instagram",
                "Mantuviste presionado el botón"
              );
            }}

            delayLongPress={800}

            hitSlop={20}

            style={({ pressed }) => [
              styles.botonInstagram,
              {
                opacity: pressed ? 0.5 : 1,
                transform: [
                  {
                    scale: pressed ? 0.95 : 1,
                  },
                ],
              },
            ]}
          >
            <FontAwesome
              name="instagram"
              size={18}
              color="white"
            />

            <Text style={styles.botonTexto}>
              Instagram
            </Text>
          </Pressable>

          <Pressable
            onPress={abrirGithub}

            onPressIn={() =>
              console.log("Tocando GitHub")
            }

            onPressOut={() =>
              console.log("Soltó GitHub")
            }

            onLongPress={() => {
              Alert.alert(
                "GitHub",
                "Mantuviste presionado el botón"
              );
            }}

            delayLongPress={800}

            hitSlop={20}

            style={({ pressed }) => [
              styles.botonGithub,
              {
                opacity: pressed ? 0.5 : 1,
                transform: [
                  {
                    scale: pressed ? 0.95 : 1,
                  },
                ],
              },
            ]}
          >
            <FontAwesome
              name="github"
              size={18}
              color="white"
            />

            <Text style={styles.botonTexto}>
              GitHub
            </Text>
          </Pressable>

        </View>

      </View>
    </LinearGradient>
</SafeAreaView>
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

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
  },

  linea: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e8f0',
    marginBottom: 25,
  },

  botones: {
    gap: 15,
    width: '100%',
  },

  botonInstagram: {
    backgroundColor: '#E1306C',
    paddingVertical: 14,
    borderRadius: 12,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  botonGithub: {
    backgroundColor: '#24292e',
    paddingVertical: 14,
    borderRadius: 12,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },

});