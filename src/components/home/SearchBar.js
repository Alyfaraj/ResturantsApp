import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Colors, Dimensions } from '../../theme';
import { Icon } from 'react-native-elements';

const SearchBar = ({ searchWord ,setSearchWord }) => {
    return (
        <View style={styles.container} >
            <Icon name='search' size={30} style={{opacity:.6}} />
            <TextInput value={searchWord} onChangeText={setSearchWord} style={styles.input} placeholder='What would you like to buy?' />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        width: Dimensions.DEVICE_WIDTH * .8,
        paddingVertical: 12,
        backgroundColor:Colors.semiGray,
        marginStart:Dimensions.DEVICE_WIDTH*.04,
        paddingStart:17,
        borderRadius:25,
        flexDirection:'row'
    },
    input: {
        paddingStart:10,
        fontSize:15
    }
});

export default SearchBar;

