import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors, Dimensions } from '../../theme';

const FoodItem = (item) => {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={.8} >
            <View  >
                <Text style={styles.name} >{item.name}</Text>
                <Text style={styles.description} >{item.description}</Text>
                <Text style={styles.price} >{item.price}</Text>
            </View>
            <Image source={{ uri: item?.logo }} style={styles.logo} />
        </TouchableOpacity>
    );
};

export default FoodItem;

const styles = StyleSheet.create({
    card: {
        width: Dimensions.DEVICE_WIDTH * .97,
        paddingVertical: 14,
        alignItems: 'center',
        backgroundColor: Colors.white,
        shadowOpacity: .1,
        flexDirection: 'row',
        marginBottom: 16,
        shadowOffset: { width: 1, height: 3 },
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 2,
        paddingHorizontal:Dimensions.DEVICE_WIDTH*.03,
        justifyContent:'space-between'
    },
    logo: {
        width: Dimensions.DEVICE_WIDTH * .23,
        height: Dimensions.DEVICE_WIDTH * .23,
        resizeMode: 'contain',
        backgroundColor: Colors.grayColorText,
        borderRadius:10
    },
    name: {
        fontWeight: '700',
        fontSize: 15,
        marginBottom: 6
    },
    description: {
        maxWidth: Dimensions.DEVICE_WIDTH * .66,
        marginBottom:6,
        fontSize:13,
        opacity:.6
    },
    price:{
        fontSize:16,
        color:Colors.green,
        fontWeight:'800'
    }

});
