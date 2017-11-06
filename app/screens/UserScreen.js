import React from 'react';
import { ScrollView, View, StyleSheet, Platform, Image } from 'react-native';
import { Container, Tabs, Tab, } from 'native-base';

import {
  Avatar,
  Button,
  Text,
  FormInput,
  FormLabel,
  CheckBox,
  List,
  ListItem,
  SearchBar,
  Header,
} from 'react-native-elements';

import Profile from '../components/Profile/Profile';
import Activity from '../components/Activity/Activity';
import Directory from '../components/Directory/Directory';
import TempUniqNameDirectory from '../components/Directory/Directory';
import FooterBar from '../components/Footer/FooterBar.js';
import LeftHeaderComponent from '../components/Header/LeftHeaderComponent'

export default class UserScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: ( <LeftHeaderComponent navigation={navigation} /> ),
      title: 'Profile',
    }
  };

  render() {
    return (
      <ScrollView>
        <Tabs>
          <Tab heading="Profile" style={{flex: 1, alignItems: 'stretch'}}>
            <Profile {...this.props} />
          </Tab>
          <Tab heading="Tasks">
            <Text>Tasks Tab</Text>
          </Tab>
          <Tab heading="Benefits">
            <TempUniqNameDirectory {...this.props} />
            <Text>Benefits Tab</Text>
          </Tab>
        </Tabs>
      </ScrollView>
    );
  }
}


