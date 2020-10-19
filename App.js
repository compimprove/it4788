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
import MessengerUser from './components/MessengerUser';
import MessengerMain from './components/MessengerMain';
import MessengerMe from './components/MessengerMe';
import Home from './components/Home';
import Messening from './components/Messening';
const Tab = createBottomTabNavigator();


export default function App() {
  

  return (
    <View style={styles.container}>
      <NavigationContainer     >
          <Tab.Navigator tabBar={props => (<></>)}  >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Friend" component={Friend} />
                <Tab.Screen name="Video" component={VideoTab} />
                <Tab.Screen name="Suggestion" component={SuggestionFriend} />
                <Tab.Screen name="AllFriend" component={AllFriends} />
                <Tab.Screen name="SearchVideo" component={SearchVideo} />
                <Tab.Screen name="MessengerMain" component={MessengerMain} />
                <Tab.Screen name="MessengerMe" component={MessengerMe} />
                <Tab.Screen name="MessengerUser" component={MessengerUser} />
                <Tab.Screen name="Messening" component={Messening} />
                
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


