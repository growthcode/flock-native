import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import employees from '../constants/Employees.js';

export default class EmployeesScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>

        <View>

            {
              employees.map((employee) => (
                <Text key={employee.id}>
                  {`${employee.first_name} ${employee.last_name}`}
                </Text>
              ))
            }

        </View>
      </ScrollView>
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
