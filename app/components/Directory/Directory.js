import employees from '../../../constants/Employees.js';
import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Platform, TouchableOpacity } from 'react-native';

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

export default function Directory (props) {
  console.log('directory props:', props)
  return (
    <View>
      <View>
        <SearchBar
          round
          textInputRef="textInputRef"
          placeholder="Search"
        />
      </View>
      <View>
        <List containerStyle={{ marginBottom: 15, marginTop: 15 }}>
            {
              employees.map((employee, i) => (
                <TouchableOpacity
                  {...props}
                  key={employee.id}
                  onPress={() => props.navigation.navigate('User', { employee: employee }) }
                >
                  <ListItem
                    key={employee.id}
                    roundAvatar
                    title={`${employee.first_name} ${employee.last_name}`}
                    subtitle={employee.title}
                    avatar={{uri:employee.avatar_url}}
                  />
                </TouchableOpacity>
              ))
            }
        </List>
      </View>
    </View>
  )
}
