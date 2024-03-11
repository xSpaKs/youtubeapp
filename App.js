/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {React, useContext, createContext} from 'react';
import {
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Accueil from './src/features/accueil';
import Abonnements from './src/features/abonnement';
import Camera from './src/features/camera';
import Shorts from './src/features/shorts';
import Profil from './src/features/profil';

import IconFoundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {useAuth, AuthProvider} from './hooks/authContext';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function BottomNavigator() {
  const {user} = useAuth();
  console.log(user);

  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      activeColor="blue"
      barStyle={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Accueil"
        component={Accueil}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({color}) => (
            <IconFoundation name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shorts"
        component={Shorts}
        options={{
          tabBarLabel: 'Shorts',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="replay-5" size={30} color={color} />
          ),
        }}
      />
      {user !== null && (
        <Tab.Screen
          name="Camera"
          component={Camera}
          options={{
            tabBarLabel: 'Camera',
            tabBarIcon: ({color}) => (
              <AntDesign name="pluscircleo" size={30} color={color} />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Abonnements"
        component={Abonnements}
        options={{
          tabBarLabel: 'Abonnements',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="youtube-subscription"
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{}}>
          <Stack.Screen name="BottomNav" component={BottomNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
