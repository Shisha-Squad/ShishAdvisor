import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors'

export default function ListItemDeleteAction({onPress}) {
  return (
      <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
        <MaterialCommunityIcons 
            name="trash-can" 
            size={35} 
            color={colors.white} />
      </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    icon: {
        fontSize: 30,
        color: colors.white
    }
})