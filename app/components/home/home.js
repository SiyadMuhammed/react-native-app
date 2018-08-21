import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Challenge } from '../challenge/challenge';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: 'bold'
  }
});

class Home extends Component {
  constructor() {
    super()
    this.state = {
      activeChallengeIndex: null,
      activeChallenge: null
    }
  }

  componentWillMount () {
    this.setState({ 
      activeChallengeIndex: 0,
      activeChallenge: this.props.challenges[0]
    });
  }

  moveToNextChallenge = function () {
    nextChallengeIndex = this.state.activeChallengeIndex + 1;
    nextChallenge = this.props.challenges[nextChallengeIndex];
    if(nextChallenge) {
      this.setState({ 
        activeChallengeIndex: nextChallengeIndex,
        activeChallenge: nextChallenge
      });
    } else {
      this.setState({ 
        activeChallengeIndex: 0,
        activeChallenge: this.props.challenges[0]
      });
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{this.state.activeChallenge.title}</Title>
          </Body>
          <Right />
        </Header>
        <Challenge activeChallenge={this.state.activeChallenge} />
        <Footer>
          <FooterTab>
            <Button transparent danger
              onPress={ e => this.moveToNextChallenge(e) }>
              <Text style={styles.buttonText}>Skip</Text>
            </Button>
            <Button transparent success
              onPress={ e => this.moveToNextChallenge(e) }>
              <Text style={styles.buttonText}>Done</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  challenges: state.challenges
});

export default connect(mapStateToProps)(Home);