import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, LogBox } from 'react-native';
import Login from './components/Login';
import CreatAcount from './components/CreatAcount';
import Friend from './components/Friend';
import AllFriends from './components/AllFriends';
import SuggestionFriend from './components/SuggestionFriend';
import VideoTab from './components/VideoTab';
import SearchVideo from './components/SearchVideo';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export default function App() {
  

  return (
    <View style={styles.container}>
      <NavigationContainer    >
          <Tab.Navigator  >
                <Tab.Screen name="Home" component={Login} />
                <Tab.Screen name="Friend" component={Friend} />
                <Tab.Screen name="Video" component={VideoTab} />
                <Tab.Screen name="Suggestion" component={SuggestionFriend} />
                <Tab.Screen name="AllFriend" component={AllFriends} />
                <Tab.Screen name="SearchVideo" component={SearchVideo} />
                <Tab.Screen name="CreatAcc" component={CreatAcount} />
        </Tab.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
   // backgroundColor: "#f4fbd2",
    marginTop: 20,
    
    
    
  },
 
  
  
});


