import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class ActivityScreen extends React.Component {
  static navigationOptions = {
    title: 'Activity',
  };

  render() {
    const { navigate } = this.props.navigation

    return (
        <Container>
          <View>
            <Text>Hello Activity Screen</Text>
          </View>
          <View>
            <Button
                onPress={() => navigate('Activity')}
            >
              <Text>Activity</Text>
            </Button>
          </View>
          <View>
            <Button
                onPress={() => navigate('Directory')}
            >
              <Text>Directory</Text>
            </Button>
          </View>
          <View>
            <Button
                onPress={() => navigate('User')}
            >
              <Text>User</Text>
            </Button>
          </View>
        </Container>
    );
  }
}
            // onPress={() => navigate('Directory')}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});


