import { View, Text, FlatList, Button } from "react-native";

import React from "react";
import DulieuBai4 from "./dubai4";

const Bai4 = ({ navigation}) => {
  return (
    <View>
      <Text
        style={{ fontSize: 50, textAlign: "center", justifyContent: "center" }}
      >
        Bai4
      </Text>
        <DulieuBai4/>
      {/* <Button
        title="Chuyển màn hình"
        onPress={() => {
          navigation.navigate("Home");
        }}
      /> */}
    </View>
  );
};

export default Bai4;
