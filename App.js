import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppContainer from './src/AppContainer';
import Comment  from './Comment';
import CommentOffline from './CommentOffline';
import EmptySearchKey from './EmptySearchKey';
import EmptySearchResult from './EmptySearchResult';
import MainPage from './mainPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    else {
      return (
        <MainPage />
      );
    }
  }
}
