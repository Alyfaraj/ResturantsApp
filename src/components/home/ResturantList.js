import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TagItem from './TagItem';
import ResturantItem from './ResturantItem';

const ResturantList = ({ resturants }) => {
    return (
        <View>
            <FlatList
            ListEmptyComponent={()=>(
                <Text style={styles.listEmptyText} >There are no Resturants :( </Text>
            )}
                showsHorizontalScrollIndicator={false}
                data={resturants}
                renderItem={({ item }) => <ResturantItem {...item} />}
                key={(item, index) => index}
            />
        </View>
    );
};

export default ResturantList;

const styles = StyleSheet.create({
    listEmptyText:{
        alignSelf:'center',
        marginTop:30,
        fontSize:20,
    }
});
