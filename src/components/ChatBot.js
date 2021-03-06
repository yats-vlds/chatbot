import React, {useState} from "react"
import {
    View,
    Image,
    Text,
    StyleSheet,
    LogBox,
    YellowBox,
    Button
} from "react-native"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import IconAntDesign from "react-native-vector-icons/AntDesign"
import {launchImageLibrary} from "react-native-image-picker"
import _ from "lodash"
import SelectMultiple from "react-native-select-multiple"
import {TextInput} from "react-native"
import {TouchableOpacity} from "react-native"
import RadioButtonRN from "radio-buttons-react-native";
import {Header} from "./Header"


const styles = StyleSheet.create({
    chatBot: {
        flex: 1,
        alignItems: "center",
    },
    iconProfile: {
        marginTop: "30%",
        marginBottom: "5%",
        width: 125,
        height: 121
    },
    hr: {
        borderBottomWidth: 1,
        borderBottomColor: "#47A897",
        width: 160.18,
        marginBottom: 13
    },
    titleName: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        color: "#626262"
    },
    subtitle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center",
        color: "#808080",
        marginBottom: 23
    },
    textStatus: {
        width: 261,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        textAlign: "center",
        color: "#666666",
        marginBottom: 23
    },
    questionSection: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginLeft: 50
    },
    questionSection2: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginLeft: 25,
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
        fontSize: 14,
        textAlign: "center",
        padding: 6,
        paddingLeft: 10,
        paddingRight: 10,
        color: "#ffffff"
    }
})

const answerOneData = [
    {
        label: 'STEAK',
        value: "Steak"
    },
    {
        label: 'PRESIDENT OF UNITED STATES',
        value: 'President of united states'
    },
    {
        label: 'READING A BOOKS',
        value: "Reading a books"
    }
];

const data3 = [
    {
        label: 'STEAK',
        value: "Steak"
    },
    {
        label: 'PRESIDENT OF UNITED STATES',
        value: 'President of united states'
    },
    {
        label: 'READING A BOOKS',
        value: "Reading a books"
    }
];


export const ChatBot = () => {
    console.disableYellowBox = true;
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs();//Ignore all log notifications
    YellowBox.ignoreWarnings(['componentWillReceiveProps']);
    const _console = _.clone(console);
    console.warn = message => {
        if (message.indexOf('componentWillReceiveProps') <= -1) {
            _console.warn(message);
        }
    };

    const [answerOnQuestion1, setAnswerOnQuestion1] = useState(null)
    const [threeAnswer, setThreeAnswer] = useState([])
    const [answerOnQuestion2, setAnswerOnQuestion2] = useState(null)
    const [answerOnQuestion5, setAnswerOnQuestion5] = useState(null)
    const [date, setDate] = useState(null)
    const [answerOnQuestion2Blur, setAnswerOnQuestion2Blur] = useState(false)
    const [answerOnQuestion5Blur, setAnswerOnQuestion5Blur] = useState(false)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [filePath, setFilePath] = useState({});

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDate(date)
        hideDatePicker();
    };
    const answerThreeChange = (selectedFruits) => {
        // selectedFruits is array of { label, value }
        setThreeAnswer(selectedFruits)
    }
    const refreshHandler = () => {
        setAnswerOnQuestion1(null)
        setThreeAnswer([])
        setAnswerOnQuestion2(null)
        setAnswerOnQuestion5(null)
        setDate(null)
        setAnswerOnQuestion2Blur(false)
        setAnswerOnQuestion5Blur(false)
        setDatePickerVisibility(false);
        setFilePath({})
    }


    const chooseFile = (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            console.log('base64 -> ', response.base64);
            console.log('uri -> ', response.uri);
            console.log('width -> ', response.width);
            console.log('height -> ', response.height);
            console.log('fileSize -> ', response.fileSize);
            console.log('type -> ', response.type);
            console.log('fileName -> ', response.fileName);
            setFilePath(response);
        });
    };
    let transformationValue = (threeAnswer) => {
        const arr = ['I have']
        threeAnswer.forEach(el => arr.push(el.value))
        return arr.join(' ')
    }

    return (
        <View style={{flex: 1}}>
            <Header refreshHandler={refreshHandler}/>
            <View style={styles.chatBot}>
                <Image
                    source={require("../assets/iconProfile.png")}
                    style={styles.iconProfile}
                />
                <Text style={styles.titleName}>
                    Sasha Green
                </Text>
                <Text style={styles.subtitle}>
                    Your personal assistant
                </Text>
                <View style={styles.hr}/>
                <Text style={styles.textStatus}>
                    Hey mister, I am Sasha Green.
                    I will do everything you want.
                </Text>
                <View style={styles.questionSection}>
                    <Image
                        source={require("../assets/iconProfile.png")}
                        style={styles.questionIcon}
                    />
                    <Text style={styles.questionMessage}>What do you love more than anything?</Text>
                </View>
            </View>
            {!answerOnQuestion1 ? (
                <View style={{marginBottom: "15%"}}>
                    <RadioButtonRN
                        data={data3}
                        selectedBtn={(e) => setAnswerOnQuestion1(e.value)}
                        boxDeactiveBgColor={"#E5E5E5"}
                        boxActiveBgColor={"#C2DEEA"}
                        circleSize={6}
                        deactiveColor={"#EDBDCD"}
                        boxStyle={{borderWidth: 0, borderRadius: 0}}
                    />
                </View>
            ) : (
                <>
                    <View style={styles.blockAnswerOnQuestion1}>
                        <Text style={styles.answerOnQuestion1}>{answerOnQuestion1}</Text>
                    </View>
                    <View style={styles.questionSection2}>
                        <Image
                            source={require("../assets/iconProfile.png")}
                            style={styles.questionIcon}
                        />
                        <Text style={styles.questionMessage}>To start, I`ll need you home address</Text>
                    </View>
                </>
            )}
            {!answerOnQuestion2Blur && answerOnQuestion1 && (<TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: "5%", padding: 5, marginBottom: 10}}
                onChangeText={text => setAnswerOnQuestion2(text)}
                value={answerOnQuestion2}
                onBlur={() => setAnswerOnQuestion2Blur(true)}
                placeholderTextColor={"gray"}
                placeholder={"TEXT"}
                autoFocus={true}
            />)}
            {answerOnQuestion2Blur && (
                <>
                    <View style={styles.blockAnswerOnQuestion1}>
                        <Text style={styles.answerOnQuestion1}>{answerOnQuestion2 || ""}</Text>
                    </View>
                    <View style={styles.questionSection2}>
                        <Image
                            source={require("../assets/iconProfile.png")}
                            style={styles.questionIcon}
                        />
                        <Text style={styles.questionMessage}>Сhoose two cool options</Text>
                    </View>
                </>
            )}
            {answerOnQuestion2Blur && threeAnswer.length < 2 && (
                <View>
                    <SelectMultiple
                        items={answerOneData}
                        selectedItems={threeAnswer}
                        onSelectionsChange={answerThreeChange}

                        selectedRowStyle={{backgroundColor: "#C2DEEA"}}
                        rowStyle={{backgroundColor: "#E5E5E5", paddingLeft: "10%"}}
                        checkboxStyle={{backgroundColor: "#ECDFCF"}}
                        selectedCheckboxStyle={{backgroundColor: "#C2DEEA"}}
                        style={{marginTop: "5%"}}
                    />
                </View>
            )}
            {threeAnswer.length === 2 && (
                <>
                    <View style={styles.blockAnswerOnQuestion1}>
                        <Text style={styles.answerOnQuestion1}>{transformationValue(threeAnswer)}</Text>
                    </View>
                    <View style={styles.questionSection2}>
                        <Image
                            source={require("../assets/iconProfile.png")}
                            style={styles.questionIcon}
                        />
                        <Text style={styles.questionMessage}>When your birthday?</Text>
                    </View>
                </>
            )}
            {threeAnswer.length === 2 && !date && (
                <View style={{marginTop: "5%"}}>
                    <Button title="Show Date Picker" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
            )}
            {date && (<>
                <View style={styles.blockAnswerOnQuestion1}>
                    <Text style={styles.answerOnQuestion1}>{date.toString().slice(4, 16) || ""}</Text>
                </View>
                <View style={styles.questionSection2}>
                    <Image
                        source={require("../assets/iconProfile.png")}
                        style={styles.questionIcon}
                    />
                    <Text style={styles.questionMessage}>Whats is your social security number?</Text>
                </View>
            </>)
            }
            {!answerOnQuestion5Blur && date && (<TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20}}
                onChangeText={text => setAnswerOnQuestion5(text)}
                value={answerOnQuestion5}
                onBlur={() => setAnswerOnQuestion5Blur(true)}
                placeholderTextColor={"gray"}
                placeholder={"Number"}
            />)}
            {answerOnQuestion5Blur && answerOnQuestion5 && (
                <>
                    <View style={styles.blockAnswerOnQuestion1}>
                        <Text style={styles.answerOnQuestion1}>{answerOnQuestion5 || ""}</Text>
                    </View>
                    <View style={styles.questionSection2}>
                        <Image
                            source={require("../assets/iconProfile.png")}
                            style={styles.questionIcon}
                        />
                        <Text style={styles.questionMessage}>Please attach your photo file</Text>
                    </View>
                </>
            )}
            {!filePath.uri && answerOnQuestion5Blur && answerOnQuestion5 && (
                <View>
                    <TouchableOpacity
                        style={{marginTop: 50, justifyContent: "center", alignItems: "center"}}
                        activeOpacity={0.5}
                        onPress={() => chooseFile('photo')}>
                        <IconAntDesign name="upload" size={35} color="#A0A0A0"/>
                    </TouchableOpacity>
                </View>
            )}
            {answerOnQuestion5Blur && answerOnQuestion5 && filePath.uri && (
                <View style={{marginBottom: 20}}>
                    <Image source={{uri: filePath.uri}}
                           style={{
                               width: 86,
                               height: 74,
                               marginLeft: "auto",
                               marginRight: 25,
                               marginTop: 15,
                               marginBottom: 15
                           }}/>
                    <View style={styles.questionSection2}>
                        <Image
                            source={require("../assets/iconProfile.png")}
                            style={styles.questionIcon}
                        />
                        <Text style={styles.questionMessage}>Thank you, mister! Good job!
                        </Text>
                    </View>
                </View>
            )}
        </View>
    )
}
