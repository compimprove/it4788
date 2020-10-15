import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import mainPage from '../../../mainPage';
import SearchPage from '../../../SearchPage';
import MainPost from '../../../MainPost';
import SearchResult from '../../../SearchResult';
import SearchHistory from '../../../SearchHistory';
const Tab = createBottomTabNavigator();


class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator tabBar={props => (<></>)}>
        <Tab.Screen name="mainPage" component={mainPage} />
        <Tab.Screen name="SearchPage" component={SearchPage} />
        <Tab.Screen name="MainPost" component={MainPost} />
        <Tab.Screen name="SearchResult" component={SearchResult} />
        <Tab.Screen name="SearchHistory" component={SearchHistory} />
      </Tab.Navigator>
    );
  }
}

export default MainPage;