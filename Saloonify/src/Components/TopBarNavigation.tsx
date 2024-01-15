import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const TopNavigationBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log("Menu pressed")}>
        {/* Add your menu icon image here */}
        <Image
          source={require("../../assets/user.jpg")}
          style={styles.menuIcon}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Saloonify</Text>
      {/* Add additional components for other options or icons */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 40, // Adjust as needed
    backgroundColor: COLORS.transparentBlack3, // Set your desired background color
  },
  title: {
    fontSize:30,
    fontWeight: "bold",
    color: "black",
  },
  menuIcon: {
    width:50,
    height:50,
    borderRadius:45,
    margin:10
  },
});

export default TopNavigationBar;
