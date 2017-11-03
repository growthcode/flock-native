import React, { PropTypes } from 'react'

import { StyleSheet } from 'react-native';

import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title,
  View,
} from 'native-base';

import TempCommonPage from '../TempCommonPage';

export default function Directory (props) {
  return (
    <TempCommonPage navigation={ props.navigation } />
  )
}
