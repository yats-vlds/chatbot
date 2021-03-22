import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Chatbot} from "./src/components/ChatBot";



export default function App() {
    return (
        <View contentContainerStyle={styles.container}>
                <Chatbot/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "700"
    },
    scroll: {
        flexGrow: 1,
        backgroundColor: '#E5E5E5',
    }
})
