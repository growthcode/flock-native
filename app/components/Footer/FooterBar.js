import React, { PropTypes } from 'react'

import { StyleSheet } from 'react-native';

import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title,
  View,
} from 'native-base';

export default function FooterBar (props) {
  const { navigate } = props.navigation
  const { routeName } = props.navigation.state
  return (
    <Footer>
      <FooterTab>
        <Button onPress={() => navigate('Activity')} active={routeName === 'Activity'} >
          <Text>Activity</Text>
        </Button>
        <Button onPress={() => navigate('User')} active={routeName === 'User'} >
          <Text>User</Text>
        </Button>
        <Button onPress={() => navigate('Directory')} active={routeName === 'Directory'} >
          <Text>Directory</Text>
        </Button>
        <Button onPress={() => navigate('DrawerToggle')} >
          <Text>Drawer</Text>
        </Button>
      </FooterTab>
    </Footer>
  )
}
