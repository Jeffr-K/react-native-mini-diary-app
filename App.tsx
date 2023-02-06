import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigation from "./src/navigations/RootStack.navigation";


function App() {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
}


export default App;

