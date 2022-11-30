import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



import Characters from '../../Pages/Characters'
import CharacterInfo from '../../Pages/CharacterInfo'


const Stack = createNativeStackNavigator()


export default function Routes () {
  return (
      <Stack.Navigator>
          <Stack.Screen name='Home' component={Characters} />
          <Stack.Screen name='CharacterInfo' component={CharacterInfo} />
      </Stack.Navigator>
  )
}