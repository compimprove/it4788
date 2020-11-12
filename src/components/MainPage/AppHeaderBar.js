import React from 'react';
import { Appbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

class AppHeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  navigate(route) {
    setTimeout(() => {
      this.props.navigation.navigate(route)
    }, 200);
  }
  render() {
    return (
      <View style={styles.appbar}>
        <Appbar style={styles.appbarHead}>
          <Appbar.Content title="facebook" titleStyle={styles.appbarTitle} color={'#007AFF'} />
          <Appbar.Action
            icon="magnify"
            size={28}
            style={styles.setBackgroundGray}
            onPress={() => {
              this.navigate("SearchPage");
            }}
          />
          <Appbar.Action icon="facebook-messenger" size={28} style={styles.setBackgroundGray} onPress={() => { }} />
        </Appbar>
        <Appbar style={styles.appbarBelow}>
          <Appbar.Action color="#555555" icon="home" size={29} onPress={() => {
            this.navigate("mainPage");
          }} />
          <Appbar.Action color="#555555" icon="account-multiple" size={29} onPress={() => { }} />
          <Appbar.Action color="#555555" icon="youtube-tv" size={29} onPress={() => {
            this.navigate("Video")
          }} />
          <Appbar.Action color="#555555" icon="bell-outline" size={29} onPress={() => { }} />
          <Appbar.Action color="#555555" icon="menu" size={29} onPress={() => {
            this.navigate("Logout");
          }} />
        </Appbar>
        <View style={styles.separator} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    backgroundColor: "#ffffff",
  },

  appbarTitle: {
    fontSize: 30,
  },
  setBackgroundGray: {
    backgroundColor: '#E4E6EB'
  },
  appbarHead: {
    elevation: 0,
    backgroundColor: '#ffffff',
    height: 70,
    left: 0,
    right: 0,
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  appbarBelow: {
    elevation: 0,
    backgroundColor: '#ffffff',
    height: 30,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  separator: {
    borderBottomColor: '#000000',
    borderBottomWidth: 0.5,
    elevation: 0,
  },
  postSeparator: {
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 0.5,
    elevation: 0,
  },
  dividerPost: {
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 10,
    elevation: 0,
  },
  appbar: {
    paddingTop: 30
  }
});

export default AppHeaderBar;