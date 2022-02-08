import { View, Text, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { Colors, Dimensions } from '../theme';
import { BranchesButtons, BranchesModal, FoodList, Header, ResturantData } from '../components/details';

const Details = ({ route }) => {
    const resturant = route.params.resturant
    const [showModal, setShowModal] = useState(false)


    const handelShowBranches = () => {
        if (resturant.branches) {
            setShowModal(true)
        } else {
            alert('There are no branches ;(')
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <StatusBar barStyle='light-content' />
            <ImageBackground style={styles.image} source={{ uri: resturant.tags[0].image }} />
            <ResturantData {...resturant} />
            <View style={styles.shadow} />
            <FoodList items={resturant.items} />
            <Header />
            <BranchesButtons onPress={handelShowBranches} />
            <BranchesModal visible={showModal} branches={resturant?.branches} onClose={() => setShowModal(false)} />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        width: Dimensions.DEVICE_WIDTH,
        height: Dimensions.DEVICE_HEIGHT * .35,
        marginTop: -15,
        backgroundColor: Colors.semiGray
    },
    shadow: { shadowOpacity: .07, height: 5, width: Dimensions.DEVICE_WIDTH, backgroundColor: Colors.white }
})

export default Details;
