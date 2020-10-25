import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import mainPage from '../../../mainPage';
import SearchPage from '../../../SearchPage';
import MainPost from '../../../MainPost';
import SearchResult from '../../../SearchResult';
import SearchHistory from '../../../SearchHistory';
import Friend from '../../../components/Friend';
import VideoTab from '../../../components/VideoTab';
import SuggestionFriend from '../../../components/SuggestionFriend';
import AllFriends from '../../../components/AllFriends';
import SearchVideo from '../../../components/SearchVideo';
import CreatAcount from '../../../components/CreatAcount';
import Comment from '../../../Comment';
import AddFriend from '../InterfaceUser/AddFriend';
import EditPage from '../Footer/Footer';
import AfterAddFri from '../InterfaceUser/AfterAddFri';
import Setting from '../InterfaceUser/Friends';
import InterfaceUser from '../InterfaceUser/InterfaceUser';
import PopupCamera from '../InterfaceUser/PopupCamera';
import PopupImage from '../InterfaceUser/PopupImage';
import SettingFriend from '../InterfaceUser/SettingFriend';
import Invited from '../InterfaceUser/Invited';
import UserPage from '../InterfaceUser/UserPage';
const Tab = createBottomTabNavigator();


class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator tabBar={props => (<></>)}>
        <Tab.Screen name="mainPage" component={UserPage} />
        <Tab.Screen name="SearchPage" component={SearchPage} />
        <Tab.Screen name="MainPost" component={MainPost} />
        <Tab.Screen name="SearchResult" component={SearchResult} />
        <Tab.Screen name="SearchHistory" component={SearchHistory} />
        <Tab.Screen name="Friend" component={Friend} />
        <Tab.Screen name="Video" component={VideoTab} />
        <Tab.Screen name="Suggestion" component={SuggestionFriend} />
        <Tab.Screen name="AllFriend" component={AllFriends} />
        <Tab.Screen name="SearchVideo" component={SearchVideo} />
        <Tab.Screen name="UserPage" component={UserPage} />
      </Tab.Navigator>
    );
  }
}

export default MainPage;