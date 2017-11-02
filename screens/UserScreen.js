import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { TabNavigator } from 'react-navigation';
import ActivityScreen from '../screens/ActivityScreen';
import DirectoryScreen from '../screens/DirectoryScreen';

export class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'User',
  };

  render() {
    const { navigate } = this.props.navigation

    return (
        <Container>
          <View>
            <Text>Hello Profile Screen</Text>
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

const UserTabs = TabNavigator({
  Profile: { screen: ProfileScreen },
  Tasks: { screen: DirectoryScreen },
  Benefits: { screen: ActivityScreen },
  // Tasks: { screen: TasksScreen },
  // Benefits: { screen: BenefitsScreen },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});



export default class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'User',
  };

  render() {
    const { navigate } = this.props.navigation

    return (
      <UserTabs />
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



    // return (
    //     <Container>
    //       <View>
    //         <UserTabs />
    //       </View>
    //       <View>
    //         <Text>Hello User Screen</Text>
    //       </View>
    //       <View>
    //         <Button
    //             onPress={() => navigate('Activity')}
    //         >
    //           <Text>Activity</Text>
    //         </Button>
    //       </View>
    //       <View>
    //         <Button
    //             onPress={() => navigate('Directory')}
    //         >
    //           <Text>Directory</Text>
    //         </Button>
    //       </View>
    //       <View>
    //         <Button
    //             onPress={() => navigate('User')}
    //         >
    //           <Text>User</Text>
    //         </Button>
    //       </View>
    //     </Container>
    // );
