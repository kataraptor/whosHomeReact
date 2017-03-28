import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class IsHome extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    usersHome: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired
    })).isRequired
  }

    onPress() {
      console.log("butts");
    }

    render() {
        return (
            // JSX
            <View style={[styles.container, this.props.style]}>
              <Text style={styles.titleText}>{ this.props.title }</Text>
              {this.props.usersHome.map(member => (
                <Text key={member.key}>{member.name}</Text>
              ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20
  },
  container : {
  }
})
