import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors, Dimensions } from '../../theme';
import { useNavigation } from '@react-navigation/native';

const ResturantItem = (resturant) => {
    const {navigate}=useNavigation()
    return (
        <TouchableOpacity onPress={()=>navigate('Details',{resturant})} style={styles.card} activeOpacity={.8} >
            <Image source={{ uri: resturant?.logo }} style={styles.logo} />
            <View  >
                <Text style={styles.name} >{resturant.name}</Text>
                <View style={{ flexDirection: 'row' }} >
                    {resturant.tags.map(tag => <Text key={tag.name} >{tag.name}, </Text>)}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ResturantItem;

const styles = StyleSheet.create({
    card: {
        width: Dimensions.DEVICE_WIDTH * .93,
        paddingVertical: 14,
        // alignItems: 'center',
        backgroundColor: Colors.white,
        shadowOpacity: .1,
        flexDirection: 'row',
        marginBottom: 16,
        shadowOffset: { width: 1, height: 3 },
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 2
    },
    logo: {
        width: Dimensions.DEVICE_WIDTH * .2,
        height: Dimensions.DEVICE_WIDTH * .2,
        marginHorizontal: Dimensions.DEVICE_WIDTH * .03,
        resizeMode: 'contain',
        
    },
    name: {
        marginTop: 15,
        fontWeight: '700',
        fontSize: 15,
        marginBottom: 6
    }

});
