import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TagItem from './TagItem';

const TagsList = ({ tags, selectedTag, onPress }) => {
    return (
        <View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={tags}
                horizontal
                renderItem={({ item }) => <TagItem onPress={() => onPress(item)} selected={selectedTag} {...item} />}
                key={(item, index) => index}
            />
        </View>
    );
};

export default TagsList;

const styles = StyleSheet.create({});
