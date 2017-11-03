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

export default function TempCommonPage (props) {
  const { navigate } = props.navigation
  return (
    <Content>
      <View>
        <Text>Hello....</Text>
      </View>
      <View>
        <Button onPress={() => navigate('Activity')} >
          <Text>Activity</Text>
        </Button>
      </View>
      <View>
        <Button onPress={() => navigate('Directory')} >
          <Text>Directory</Text>
        </Button>
      </View>
      <View>
        <Button onPress={() => navigate('User')} >
          <Text>User</Text>
        </Button>
      </View>
      <View>
        <Button onPress={() => navigate('DrawerToggle')} >
          <Text>Drawer</Text>
        </Button>
      </View>
    </Content>
  )
}
