import React from 'react';
import { StyleSheet, Text, View, NativeModules } from 'react-native';
import IsHome from './app/IsHome';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusBarHeight: 20
    }
    try {
      NativeModules.StatusBarManager.getHeight(
        (statusBarFrameData) => {
          this.setState({statusBarHeight: statusBarFrameData.height});
        }
      );
    } catch (e) {
        console.log("There was an errkr getting the status bar");
    }
  }

  data = {
    usersHome: [
      {
        name: "Denny",
        key: 1
      },
      {
        name: "Travis",
        key: 2
      }
    ],
    notHome: [
      {
        name: "Katrina",
        key: 1
      }
    ]
  }

  render() {
    return (
      <View style={[styles.container, {
            marginTop: this.state.statusBarHeight
          }]}>
      <IsHome title="Who's Home" usersHome={ this.data.usersHome } />
      <IsHome title="Who's not Home" style={{marginTop: 20}} usersHome={ this.data.notHome } />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100
  },
});

let StatusBarSizeIOS = {};
