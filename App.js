import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View, Text, Image, } from 'react-native';
import Presentacion from "./components/Presentacion";

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({

          headerShown: false,

          tabBarStyle: {
            backgroundColor: '#111827',
            borderTopWidth: 0,
            height: 65,
          },

          tabBarActiveTintColor: '#60a5fa',
          tabBarInactiveTintColor: '#9ca3af',

          tabBarIcon: ({ color, size }) => {

            let iconName;

            if (route.name === 'Inicio') {
              iconName = 'home';
            } else if (route.name === 'Contactos') {
              iconName = 'call';
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },

        })}
      >

        <Tab.Screen
          name="Inicio"
          component={HomeScreen}
        />

        <Tab.Screen
          name="Contactos"
          component={ContactosScreen}
        />

      </Tab.Navigator>

    </NavigationContainer>
  );
}