import React, { PropTypes } from 'react'
import { ScrollView, View, StyleSheet, Platform, Image, Text, Alert, Button } from 'react-native';
import { Header } from 'react-native-elements';
import LeftHeaderComponent from './LeftHeaderComponent'

Header.propTypes = {

}

export default function (props) {
  console.log(this, props)
  return (
    <Header>
      <LeftHeaderComponent  style={{marginTop: 5}}/>
    </Header>
  )
}

const styles = StyleSheet.create({

})
// <LeftHeaderComponent
//   style={{marginTop: 20}}
// />
