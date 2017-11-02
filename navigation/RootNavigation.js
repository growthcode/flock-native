import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import ActivityScreen from '../screens/ActivityScreen';
import DirectoryScreen from '../screens/DirectoryScreen';
import UserScreen from '../screens/UserScreen';


const RootStackNavigator = StackNavigator({
  // Main: {
  //   screen: MainTabNavigator,
  // },
  Activity: { screen: ActivityScreen },
  Directory: { screen: DirectoryScreen },
  User: { screen: UserScreen },
  // User: {
  //   screen: UserScreen,
  // },
  // {
  //   navigationOptions: () => ({
  //     headerTitleStyle: {
  //       fontWeight: 'normal',
  //     },
  //   }),
  // }
});

export default class RootNavigator extends React.Component {

  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return (
      <RootStackNavigator />
    )
  }


  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`
    );
  };
}








  // render() {
  //   return (
  //     <Container>
  //       <Header>
  //         <Left>
  //           <Button transparent>
  //             <Icon name='menu' />
  //           </Button>
  //         </Left>
  //         <Body>
  //           <Title>Header</Title>
  //         </Body>
  //         <Right />
  //       </Header>
  //       <Content>
  //         <DirectoryContainer />
  //       </Content>
  //       <Footer>
  //         <FooterTab>
  //           <Button full>
  //             <Text>Footer</Text>
  //           </Button>
  //         </FooterTab>
  //       </Footer>
  //     </Container>
  //   );
  // }
