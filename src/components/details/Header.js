import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Dimensions } from '../../theme';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const {pop}=useNavigation()
    return (
        <View style={styles.container} >
            <Icon onPress={()=>pop()} name='ios-chevron-back' size={33} type='ionicon' color={Colors.white} />
            <Icon name='share' size={30} type='material-community' color={Colors.white} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Dimensions.DEVICE_WIDTH * .96,
        justifyContent: 'space-between',
        position:'absolute',
        top:40
    }
});
