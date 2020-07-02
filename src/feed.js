import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Feed = () => {

    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            // onPress={() => navigation.navigate('Details', { screenName: 'Detail Screen'})}
        >
            <Text>Feed</Text>
        </TouchableOpacity>
    )
}


export default Feed;