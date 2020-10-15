import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import mainPage from '../../../mainPage';
import SearchPage from '../../../SearchPage';
import MainPost from '../../../MainPost';
import SearchResult from '../../../SearchResult';
import SearchHistory from '../../../SearchHistory';
const Stack = createStackNavigator();


class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="mainPage" component={mainPage} />
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="MainPost" component={MainPost} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
        <Stack.Screen name="SearchHistory" component={SearchHistory} />
      </Stack.Navigator>
    );
  }
}

export default MainPage;