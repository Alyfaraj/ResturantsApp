import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors, Dimensions } from '../../theme';

const ResturantData = (resturant) => {
    return (
        <View style={styles.card} >
            <Image source={{ uri: resturant?.logo }} style={styles.logo} />
            <View  >
                <Text style={styles.name} >{resturant.name}</Text>
                <View style={{ flexDirection: 'row' }} >
                    {resturant.tags.map(tag => <Text key={tag.name} >{tag.name}, </Text>)}
                </View>
            </View>
        </View>
    );
};

export default ResturantData;

const styles = StyleSheet.create({
    card: {
        width: Dimensions.DEVICE_WIDTH * .95,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        marginBottom: 16,
        alignSelf: 'center',
        alignItems:'center'

    },
    logo: {
        width: Dimensions.DEVICE_WIDTH * .23,
        height: Dimensions.DEVICE_WIDTH * .23,
        marginHorizontal: Dimensions.DEVICE_WIDTH * .03,
        resizeMode: 'contain',

    },
    name: {
        fontWeight: '700',
        fontSize: 17,
        marginBottom: 6
    }

});
