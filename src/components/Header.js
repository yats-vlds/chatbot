import React from "react"
import {View, Text, StyleSheet} from "react-native";
import IconSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

export const HeaderChatbot = ({refreshHandler}) => {
    return (
        <View style={styles.header}>
            <View style={styles.leftHeader}>
            </View>
            <View style={styles.bodyHeader}>
                <Text style={styles.titleText}>
                    Sasha Green
                </Text>
                <Text style={styles.subTitleText}>
                    Your personal assistant
                </Text>
            </View>
            <View style={styles.rightHeader}>
                <IconSimpleLineIcons name="refresh" size={25} color="#252525" style={{transform: [{rotate: "80deg"}]}} onPress={refreshHandler}/>
                <Text style={styles.subtitleIcon}>refresh</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        zIndex: 9999,
        height: 70,
        width: "100%",
        backgroundColor: "#47A897",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    leftHeader: {
        marginLeft: "0%",
        width: "15%",
        backgroundColor: "blue"
    },
    bodyHeader: {
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 18,
        color: "#000000"
    },
    subTitleText: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: 13,
        color: "#000000"
    },
    subtitleIcon: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: 10,
        textAlign: "center",
        color: "#000000"
    },
    rightHeader: {
        marginRight: 10,
        flexDirection: "column",
        alignItems: "center",
        width: "15%"
    }
})
