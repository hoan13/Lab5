import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  Modal,
} from "react-native";
import React, { Component } from "react";

export class TetBai3 extends Component {
  state = { modalVisible: false };

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bor}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              console.log("Modal has been closed.");
            }}
          >
            <View style={styles.modal}>
              <Text style={styles.text}>Modal đã dc mở</Text>
              <TouchableHighlight
                style={styles.nut}
                onPress={() => {
                  this.toggleModal(!this.state.modalVisible);
                }}
              >
                <Text style={styles.text}>Đóng Modal</Text>
              </TouchableHighlight>
            </View>
          </Modal>
          <TouchableHighlight
            onPress={() => {
              this.toggleModal(true);
            }}
          >
            <Text style={styles.text}>Mở Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default TetBai3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },

  bor: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ede3f2",
  },

  modal: {
    flex:0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7021a",
  },
  text: {
    color: "#3f2949",
    marginTop: 10,
  },
  nut: {
    margin: 30,
  },
});
