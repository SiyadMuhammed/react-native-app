import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import { Container, Content, Header, Body } from 'native-base'
import { Introduction } from '../introduction/introduction';
import Achievements from '../achievements/achievements';
import Home from '../home/home';

const styles = StyleSheet.create({
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }
});


const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./assets/drawer-cover.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

export default createDrawerNavigator({
  Introduction: { screen: Introduction },
  Home: { screen: Home },
  Achievements: { screen: Achievements }
},
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });