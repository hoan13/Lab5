import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { useState } from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={(flex = 1)}>
      <View style={styles.container}>
        <View style={styles.v_btn1}>
          <Button
            title="Bai 2"
            onPress={() => {
              navigation.navigate("bai2");
            }}
          />
        </View>
        <View style={styles.v_btn1}>
          <Button
            title="Bai 3"
            style={styles.btn}
            onPress={() => {
              navigation.navigate("bai3");
            }}
          />
        </View>

        <View style={styles.v_btn1}>
          <Button
            title="Bai 4"
            style={styles.btn}
            onPress={() => {
              navigation.navigate("bai4");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent:"center"
  },
  v_btn1:{
    margin:10,
  }
});
