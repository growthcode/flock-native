import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import DirectoryContainer from '../containers/Directory/DirectoryContainer';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class DirectoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Directory',
  };
  // <ScrollView style={styles.container}>
  // </ScrollView>
  render() {
    const { navigate } = this.props.navigation
    return (
        <Container>
          <View>
            <Text>Hello Directory Screen</Text>
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
          <View>
            <Button
                onPress={() => navigate('DrawerToggle')}
            >
              <Text>Drawer</Text>
            </Button>
          </View>
          <View>
            <DirectoryContainer />
          </View>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
