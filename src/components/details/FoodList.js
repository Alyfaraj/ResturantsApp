import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FoodItem from './FoodItem';

const FoodList = ({ items }) => {
    return (
        <View>
            <FlatList
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText} >There are no Food here :( </Text>
                )}
                showsVerticalScrollIndicator={false}
                data={items}
                renderItem={({ item }) => <FoodItem {...item} />}
                key={(item, index) => index}
            />
        </View>
    );
};

export default FoodList;

const styles = StyleSheet.create({
    listEmptyText: {
        alignSelf: 'center',
        marginTop: 30,
        fontSize: 20,
    }
});
