import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors, Dimensions } from '../../theme';

const TagItem = ({ image, name, selected, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={.9}
            onPress={onPress}
            style={[styles.container, { borderBottomWidth: selected == name ? 3 : 0 }]}
        >
            <Image style={styles.image} source={{ uri: image }} />
            <Text style={styles.name} >{name}</Text>
        </TouchableOpacity>
    );
};

export default TagItem;

const styles = StyleSheet.create({
    container: {
        marginStart: Dimensions.DEVICE_WIDTH * .02,
        marginTop: 16,
        alignItems: 'center',
        borderBottomWidth: 3,
        paddingBottom: 5,
        borderBottomColor: Colors.primary
    },
    image: {
        resizeMode: 'cover',
        borderRadius: 10,
        width: Dimensions.DEVICE_WIDTH * .3,
        height: 60,
        backgroundColor: Colors.grayLight,
    },
    name: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 5
    }
});
