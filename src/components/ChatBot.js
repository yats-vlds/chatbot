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
import Icon from "react-native-vector-icons/FontAwesome";
import RadioButtonRN from "radio-buttons-react-native";

const styles = StyleSheet.create({
    chatBot: {
        flex: 1,
        alignItems: "center"
    },
    iconProfile: {
        marginTop: 200,
        marginBottom: 16,
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
        fontSize: 15,
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

const options = {
    title: 'my pic app',
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library',
}
const answerOneDatas = ['Apples', 'Oranges', 'Pears']

export const ChatBot = () => {
    const [oneAnswer, setOneAnswer] = useState([])
    const [threeAnswer, setThreeAnswer] = useState([])
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
    const answerOneChange = (selectedFruits) => {
        // selectedFruits is array of { label, value }
        setOneAnswer(selectedFruits)
    }

    const answerThreeChange = (selectedFruits) => {
        // selectedFruits is array of { label, value }
        setThreeAnswer(selectedFruits)
    }

    const [answerOnQuestion1, setAnswerOnQuestion1] = useState(null)
    const [answerOnQuestion2, setAnswerOnQuestion2] = useState(null)
    const [answerOnQuestion3, setAnswerOnQuestion3] = useState('')
    const [answerOnQuestion5, setAnswerOnQuestion5] = useState(null)
    const [date, setDate] = useState(null)
    const [answerOnQuestion2Blur, setAnswerOnQuestion2Blur] = useState(false)
    const [answerOnQuestion5Blur, setAnswerOnQuestion5Blur] = useState(false)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [avatarSource, setAvatarSource] = useState(null)
    const [pic, setPic] = useState(null)

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


    const myfun = () => {
        //alert('clicked');

        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image Picker Error: ', response.error);
            } else {
                let source = {uri: response.uri};

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                setAvatarSource(source)
                setPic(response.data)
            }
        });
    }
    const [filePath, setFilePath] = useState({});

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


    return (
        <>
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
                <View style={{marginTop: "3%"}}>
                    <RadioButtonRN
                        data={data3}
                        selectedBtn={(e) => setAnswerOnQuestion1(e.value)}
                        boxDeactiveBgColor={"#E5E5E5"}
                        boxActiveBgColor={"#C2DEEA"}
                        circleSize={6}
                        deactiveColor={"#EDBDCD"}
                        duration={100}
                        boxStyle={{ marginBottom: -10.5, borderWidth: 0, borderRadius: 0}}
                    />
                {/*</View>*/}
                {/*    <SelectMultiple*/}
                {/*        items={answerOneData}*/}
                {/*        selectedItems={oneAnswer}*/}
                {/*        onSelectionsChange={answerOneChange}*/}
                {/*        selectedRowStyle={{backgroundColor: "#C2DEEA"}}*/}
                {/*        rowStyle={{backgroundColor: "#E5E5E5", paddingLeft: "10%"}}*/}
                {/*        checkboxStyle={{backgroundColor: "#ECDFCF"}}*/}
                {/*        selectedCheckboxStyle={{backgroundColor: "#C2DEEA"}}*/}
                {/*    />*/}
                {/*</View>*/}
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
                style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20, padding: 5, marginBottom: 10}}
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
                        <Text style={styles.answerOnQuestion1}>answerTwo</Text>
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
            {answerOnQuestion2 && threeAnswer.length < 2 && (
                <View>
                    <SelectMultiple
                        items={answerOneData}
                        selectedItems={threeAnswer}
                        onSelectionsChange={answerThreeChange}

                        selectedRowStyle={{backgroundColor: "#C2DEEA"}}
                        rowStyle={{backgroundColor: "#E5E5E5", paddingLeft: "10%"}}
                        checkboxStyle={{backgroundColor: "#ECDFCF"}}
                        selectedCheckboxStyle={{backgroundColor: "#C2DEEA"}}
                    />
                </View>
            )}
            {threeAnswer.length === 2 && (
                <>
                    <View style={styles.blockAnswerOnQuestion1}>
                        <Text style={styles.answerOnQuestion1}>{answerOnQuestion3 || ""}</Text>
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
                <View style={{marginTop: 50}}>
                    <DateTimePickerModal
                        isVisible={true}
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
                placeholder={"Text"}
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
            {!avatarSource && answerOnQuestion5Blur && answerOnQuestion5 && (
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
        </>
    )
}
