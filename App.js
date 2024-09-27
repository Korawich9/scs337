import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectOne from './screens/ProjectOne';
import DetailsScreen from './screens/DetailsScreen';
import AccommodationScreen from './screens/AccommodationScreen';
import AttractionsScreen from './screens/AttractionsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProjectOne">
        <Stack.Screen name="ProjectOne" component={ProjectOne} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Accommodation" component={AccommodationScreen} />
        <Stack.Screen name="Attractions" component={AttractionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
