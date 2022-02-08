import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Badge, Icon } from "react-native-elements";
import { Colors, Dimensions, Fonts } from "../../theme";
import RBSheet from "react-native-raw-bottom-sheet";
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AppButton } from ".";
import { useDispatch } from "react-redux";
import { addNewResturant } from "../../store/actions/resturants";

const AddModal = ({ }) => {
    const refRBSheet = useRef();
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [tags, setTags] = useState('')

    const handelAddButton = () => {
        dispatch(addNewResturant(name,tags))
    }


    return (
        <View style={{
            position: "absolute",
            bottom: 20,
            alignSelf: 'center'
        }} >
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.9}
                onPress={() => refRBSheet.current.open()}
            >
                <View style={styles.iconConteiner} >
                    <Icon
                        color={Colors.white}
                        name="shopping-bag"
                        type="font-awesome"
                        size={16}
                        containerStyle={styles.iconConteiner}
                    />
                    <Badge badgeStyle={{ backgroundColor: 'red' }} containerStyle={{ position: 'absolute', top: 0, right: 0 }} />
                </View>
                <Text style={styles.text} >{'  '}ADD NEW RESTAURANT</Text>

            </TouchableOpacity>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={Dimensions.DEVICE_HEIGHT * 0.44}
                customStyles={{
                    container: { borderTopRightRadius: 20, borderTopLeftRadius: 20 },
                    wrapper: { backgroundColor: "rgba(255,255,255,.4)" },
                    draggableIcon: { backgroundColor: "#000" }
                }}
            >
                <TextInput value={name} onChangeText={setName} style={styles.inputContainer} placeholder="Name" />
                <TextInput value={tags} onChangeText={setTags} style={styles.inputContainer} placeholder="Tags" />
                <Text style={styles.tagsTextHint} >Ex : tag1,tag2,ect</Text>
                <AppButton title='Add' onPress={handelAddButton} />
            </RBSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 25
    },
    text: {
        color: Colors.green,
        fontSize: 10,
        fontWeight: '800'
    },
    iconConteiner: {
        backgroundColor: Colors.green,
        borderRadius: 15,
        padding: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: Dimensions.DEVICE_WIDTH * .9,
        borderRadius: 25,
        paddingStart: Dimensions.DEVICE_WIDTH * .06,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primary,
        height: 55,
        alignSelf: 'center',
        marginTop: 16
    },
    tagsTextHint: {
        marginStart: Dimensions.DEVICE_WIDTH * .08,
        marginTop: 10,
        opacity: .4,
        fontWeight: '600'
    }

});

export default AddModal;
