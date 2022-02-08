import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    Modal,
    StyleSheet,
    TouchableOpacity,
    Text,
} from "react-native";
import { Dimensions, Colors } from "../../theme";



const BranchesModal = ({ visible, branches, onClose }) => {
    return (
        <Modal transparent visible={visible} animationType="fade">
            <TouchableOpacity
                onPress={onClose}
                activeOpacity={1}
                style={{
                    flex: 1,
                    alignItems: "center",
                    backgroundColor: "rgba(20,20,20,.93)",
                    justifyContent: "center"
                }}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={null}
                    style={styles.contianer}
                >
                    {branches?.map(item => <Text style={styles.text} key={item.name} >{item.name}</Text>)}
                </TouchableOpacity>

            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    contianer: {
        width: Dimensions.DEVICE_WIDTH * 0.87,
        minHeight: Dimensions.DEVICE_HEIGHT * 0.1,
        alignItems: "center",
        paddingVertical: Dimensions.DEVICE_HEIGHT * 0.025,
        backgroundColor: Colors.white,
        borderRadius: Dimensions.DEVICE_WIDTH * 0.05,
        justifyContent: "space-around",
        paddingHorizontal: Dimensions.DEVICE_WIDTH * 0.04,
    },
    text: {
        fontWeight: '500',
        marginVertical: 10,
        fontSize: 16,
    }


});

export default BranchesModal;
