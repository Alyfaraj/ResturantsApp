import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Platform
} from "react-native";
import { Colors, Dimensions, Fonts } from "../../theme";

const AppButton = ({
  title,
  disabled,
  containerStyle,
  onPress,
  loading,
  titleStyle,
  btWidth = 86,
  btHight = 55
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: btHight, //Dimensions.DEVICE_HEIGHT * (btHight / 100),
          width: Dimensions.DEVICE_WIDTH * (btWidth / 100),
          backgroundColor: disabled ? Colors.textSubtitle : Colors.primary,
          borderRadius: btHight * 0.5
        },
        styles.container,
        containerStyle
      ]}
      activeOpacity={0.7}
      disabled={disabled || loading}
    >
      {loading
        ? <ActivityIndicator size={30} color={Colors.white} />
        : <Text style={[styles.title, titleStyle]}>
            {title}
          </Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: Dimensions.DEVICE_HEIGHT * 0.05,
    shadowOpacity:.1
  },
  title: {
    color:Colors.green,
    fontSize: Dimensions.DEVICE_HEIGHT * 0.018,
    textAlignVertical: "center",
    fontWeight: "800"
  }
});

export default AppButton;
