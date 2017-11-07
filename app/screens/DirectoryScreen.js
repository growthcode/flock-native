import React from 'react';
import { ScrollView } from 'react-native';
import Directory from '~/components/Directory/Directory';
import LeftHeaderComponent from '~/components/Header/LeftHeaderComponent'

export default class DirectoryScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Directory',
      headerLeft: ( <LeftHeaderComponent navigation={navigation} /> ),
    }
  };

  render() {
    return (
      <ScrollView>
        <Directory {...this.props} />
      </ScrollView>
    );
  }
}
