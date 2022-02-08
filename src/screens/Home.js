import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors, Dimensions } from '../theme';
import { useDispatch, useSelector } from 'react-redux';
import { getTags } from '../store/actions/tags';
import { TagsList, SearchBar, ResturantList, AddModal } from '../components/home';
import { getResturants } from '../store/actions/resturants';
const Home = () => {
    const { tags } = useSelector(state => state.tags)
    const { resturants } = useSelector(state => state.resturants)
    const [selectedTag, setSelectedTag] = useState('Sandwich')
    const [searchWord, setSearchWord] = useState('')

    const dispatch = useDispatch()
  

    useEffect(() => {
        dispatch(getTags())
    }, [])

    useEffect(()=>{
        dispatch(getResturants(selectedTag,searchWord))
    },[selectedTag,searchWord])


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}  >
            <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
            <TagsList tags={tags} selectedTag={selectedTag} onPress={tag=>setSelectedTag(tag.name)} />
            <Text style={styles.resturantsText} >Resturants</Text>
            <ResturantList resturants={resturants} />
            <AddModal/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    resturantsText: {
        fontSize: 22,
        fontWeight: '600',
        marginStart: Dimensions.DEVICE_WIDTH * .03,
        marginBottom: 16,
        marginTop:22,
        opacity: .9
    }
})

export default Home;
