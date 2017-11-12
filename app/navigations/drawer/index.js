import React from 'react'
import { DrawerNavigator } from 'react-navigation'

import HomeScreen from '~/navigations/drawer/screens/home'
import DirectoryScreen from '~/navigations/drawer/screens/directory'
import EmployeeScreen from '~/navigations/drawer/screens/employee'
import NavBarItem from '~/components/navBarItem'

const Drawer = DrawerNavigator({
  Directory: { screen: DirectoryScreen },
  Home: { screen: HomeScreen },
  Employee: { screen: EmployeeScreen },
},
{
  navigationOptions: ({ navigation }) => {
    const { state, navigate } = navigation
    const primaryColor = '#3498db'
    const secondaryColor = 'white'
    return ({
      title: state.routeName,
      headerStyle: {
        backgroundColor: primaryColor,
      },
      headerTitleStyle: {
        color: secondaryColor,
      },
      headerTintColor: {
        tintColor: secondaryColor,
      },
      headerLeft: (
        <NavBarItem
          iconName='bars'
          onPress={ () => { navigate('DrawerToggle') } }/>
      ),
    })
  },
})

export default Drawer
