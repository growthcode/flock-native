import employees from '../../../constants/Employees.js';
import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Platform } from 'react-native';

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
  return (
    <ScrollView>
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
              <ListItem
                key={i}
                roundAvatar
                title={`${employee.first_name} ${employee.last_name}`}
                subtitle={employee.title}
                avatar={{uri:employee.avatar_url}}
              />
            ))
          }
        </List>
      </View>
    </ScrollView>
  )
}
