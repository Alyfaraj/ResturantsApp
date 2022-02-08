import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { Colors, Dimensions } from '../../theme';

const BranchesButtons = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={.9} >
                <Icon size={26} color='red' name='location-pin' type='entypo' />
            <Text style={styles.branchesText} >Branches</Text>
        </TouchableOpacity>
    );
};

export default BranchesButtons;

const styles = StyleSheet.create({
    container: {
      //  width: Dimensions.DEVICE_WIDTH * .3,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: Dimensions.DEVICE_WIDTH * .02,
        top: Dimensions.DEVICE_HEIGHT * .25,
        backgroundColor: Colors.primary,
        flexDirection: 'row'
    },
    branchesText: {
        fontSize: 16,
        fontWeight: '500'
    }
});
