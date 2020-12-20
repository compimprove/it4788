import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import UserSetting from '../InterfaceUser/UserSetting';
import UserFriends from '../InterfaceUser/Friends';
import Logout from '../Logout/Logout';
import Messening from "../../../components/Messengering";
import MessengerMe from "../../../components/MessengerMe";
import MessengerUser from "../../../components/MessengerUser";
import MessengerMain from "../../../components/MessengerMain";
import Create from "../../../Component/createPost";
import Notification from "../../../Component/Notification";
import AddEmoji from "../../../Component/addEmoji";
import example from "../../../Component/example";

const Tab = createBottomTabNavigator();


class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let getToken = this.props.route.params.getToken;
    let logout = this.props.route.params.logout
    return (
        <Tab.Navigator tabBar={props => (<></>)}>
          <Tab.Screen
              name="mainPage"
              component={mainPage}
              initialParams={{getToken: getToken}}
          />
          <Tab.Screen name="Invited" component={Invited}/>
          <Tab.Screen name="SettingFriend" component={SettingFriend}/>
          <Tab.Screen name="SearchPage" component={SearchPage}/>
          <Tab.Screen name="MainPost" component={MainPost}/>
          <Tab.Screen name="SearchResult" component={SearchResult}/>
          <Tab.Screen name="SearchHistory" component={SearchHistory}/>
          <Tab.Screen
              name="Friend"
              component={Friend}
              initialParams={{getToken: getToken}}/>
          <Tab.Screen name="Video" component={VideoTab}/>
          <Tab.Screen name="Suggestion" component={SuggestionFriend} initialParams={{getToken: getToken}}/>
          <Tab.Screen
              name="AllFriend"
              component={AllFriends}
              initialParams={{getToken: getToken}}/>
          <Tab.Screen name="SearchVideo" component={SearchVideo}/>
          <Tab.Screen name="InterfaceUser" component={InterfaceUser} initialParams={{getToken: getToken}}/>
          <Tab.Screen name="UserSetting" component={UserSetting}/>
          <Tab.Screen name="UserFriends" component={UserFriends}/>
          <Tab.Screen name="Logout" component={Logout}
                      initialParams={{logout: logout}}/>
          <Tab.Screen name="Messening" component={Messening}/>
          <Tab.Screen name="MessengerMe" component={MessengerMe}/>
          <Tab.Screen name="MessengerUser" component={MessengerUser}/>
          <Tab.Screen name="MessengerMain" component={MessengerMain}/>
          <Tab.Screen name="CreatePost" component={Create}/>
          <Tab.Screen name="Notification" component={Notification}/>
          <Tab.Screen name="AddEmoji" component={AddEmoji}/>
        </Tab.Navigator>
    );
  }
}

export default MainPage;