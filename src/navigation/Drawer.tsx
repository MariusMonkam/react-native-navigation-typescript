import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Settings from "../screens/Settings";

const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      {/* Drawer screen goes here*/}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
