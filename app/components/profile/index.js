import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

Profile.propTypes = {

}

export default function Profile (props) {
  const { employee } = props
  return (
    <View>
      <View>
        <Image
          source={{uri: employee.avatar_url}}
          style={{
            alignSelf: 'center',
            height: 200,
            width: 200,
            borderWidth: 1,
            borderRadius: 100,
            margin: 10,
          }}
        />
      </View>
      <View>
        <Text>{`${employee.first_name} ${employee.last_name}`}</Text>
      </View>
      <View>
        <Text>{`Job Category: ${employee.job_category}`}</Text>
      </View>
      <View>
        <Text>{`Job Title: ${employee.title}`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})
