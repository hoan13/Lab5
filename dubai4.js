import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export class DulieuBai4 extends Component {
  state = { animating: true };
  closeActivityIndicator = () =>
    setTimeout(() => this.setState({ animating: false }), 6000);
  componentDidMount = () => this.closeActivityIndicator();
  render() {
    const animating = this.state.animating;
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={animating}
          color="black"
          size="large"
          style={styles.activitylndicator}
        />
      </View>
    );
  }
}

export default DulieuBai4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  activitylndicator: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
  text1:{
fontSize:30,
  },
});
