import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Header} from "./src/components/Header"
import {ChatBot} from "./src/components/ChatBot";
import List from "./src/components/List";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function App() {
  return (
      <View contentContainerStyle={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Header/>
          <ChatBot />
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scroll: {
    flexGrow: 1,
    backgroundColor: '#E5E5E5',
  },
  blockAnswerOnQuestion1: {
    marginTop: 20,
    alignItems: 'baseline',
    height: 37,
    backgroundColor: "#47A897",
    borderRadius: 18.5,
    marginLeft: "auto",
    marginRight: 25,
    marginBottom: 20
  },
  answerOnQuestion1: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 15,
    textAlign: "center",
    padding: 6,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#ffffff"
  },
  questionSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginLeft: 25
  },
  questionIcon: {
    width: 44.57,
    height: 43.02
  },
  questionMessage: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 15,
    textAlign: "center",
    color: "#666666",
    marginLeft: 20
  }
})
