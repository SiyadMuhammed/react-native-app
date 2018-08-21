import React, { Component } from 'react';
import { Container, Header, Icon, Content, Accordion, View,
   Text, Left, Right, Body, Button, Title } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  header: { 
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#A9DAD6" 
  },
  content: { 
    backgroundColor: "#e3f1f1",
    padding: 10,
    fontStyle: "italic"
  }
});

class Achievements extends Component {
  constructor() {
    super()
    this.state = { achievements: [] } ;
  }

  componentWillMount () {
    this.setState({ 
      achievements: this.props.challenges
    });
  }

  _renderHeader(data, expanded) {
    return (
      <View style ={styles.header}>
        <Text style={{ fontWeight: "600" }}>
          {data.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    );
  }
  _renderContent(data) {
    return (
      <Text style={styles.content}>
        {data.description}
      </Text>
    );
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
            <Title>Achievements</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Accordion
            dataArray={this.state.achievements}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  challenges: state.challenges
});

export default connect(mapStateToProps)(Achievements);