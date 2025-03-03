
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "./global.css"
import Home from './screens/Home'

export default function App() {
  const Stack = createStackNavigator();
  function MyStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        
      </Stack.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

