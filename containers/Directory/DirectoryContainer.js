import React, { PropTypes, Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Directory from '../../components/Directory/Directory'

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 4,
    padding: 5,
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10,
  },
  activeTitle: {
    color: 'red',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default class DirectoryContainer extends Component {
  render () {
    return (
        <Directory tempTestingStyle={styles.title}/>
    )
  }
}

// console.log(styles)

// renderItem = ({item}) => {
//   return (
//     <Text style={styles.row}>
//       {item.text}
//     </Text>
//   )
// }

// render() {
//   return (
//     <FlatList
//       style={styles.container}
//       data={rows}
//       renderItem={this.renderItem}
//       keyExtractor={extractKey}
//     />
//   );
// }
        // <Text style={padding: 5, borderWidth: 0.5, borderColor: 'black', margin: 5}>
      // <View style={styles.container}>
        // <Text style={styles.title}>
          // Logo goes here
        // </Text>

      // </View>
