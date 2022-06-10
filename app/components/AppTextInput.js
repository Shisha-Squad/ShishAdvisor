import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={[styles.container]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        /> 
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    width: '100%',
    marginVertical: 10,
    marginTop: 40
  },
  icon: {
    marginRight: 10,
  }
});

export default AppTextInput;