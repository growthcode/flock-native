import React from 'react';
import { View } from 'react-native';
import Activity from '~/components/Activity/Activity';
import LeftHeaderComponent from '~/components/Header/LeftHeaderComponent'

import {
  Button,
  Text,
  FormInput,
  FormLabel,
  CheckBox,
  List,
  ListItem,
  SearchBar,
} from 'react-native-elements';

export default class ActivityScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Activity Feed',
      headerLeft: ( <LeftHeaderComponent navigation={navigation} /> ),
    }
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => { this.props.navigation.navigate('DrawerToggle')}}
          title="Press Me"
        />
        <Activity navigation={ this.props.navigation } />
      </View>
    );
  }
}
