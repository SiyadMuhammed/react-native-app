import React, { Component } from 'react';
import { Content, Text } from 'native-base';
import { StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

let width = Dimensions.get('window').width;
const imgPath = './assets/abc.png';

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#e8dfcc'
    },
    description: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export class Challenge extends Component {
  render() {
    return (
      <Content style={styles.body}>
      <ScrollView>
      <Image style={{height: width/2, width: width}}
      source={{uri: this.props.activeChallenge.image }} />
        <Text style={styles.description}>
            { this.props.activeChallenge.description }
          </Text>
          </ScrollView>
      </Content>
    );
  }
}