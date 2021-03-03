import React, {useRef} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {ChatBot} from "./src/components/ChatBot";
import List from "./src/components/List";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function App() {
    const scrollViewRef = useRef();
    return (
        <View contentContainerStyle={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}
                        ref={scrollViewRef}
                        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({animated: true})}
            >
                <ChatBot/>
            </ScrollView>
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
