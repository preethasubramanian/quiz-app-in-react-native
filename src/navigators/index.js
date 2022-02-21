import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen,QuestionAnswer,ScoreCard } from "../screens";


const Stack = createStackNavigator();

const Navigators = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
        
        
          <Stack.Screen
                 name="Splash"
                  component={SplashScreen}/>

       
          <Stack.Screen 
               name="QuestionAnswer" 
                 component={QuestionAnswer} />
              

     
       
           <Stack.Screen 
              name="ScoreCard"
                 component={ScoreCard} />
  
              
           </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Navigators
