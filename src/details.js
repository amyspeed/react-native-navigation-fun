import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Details = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Details</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Bottom Tabs')}>
                <Text>View Bottom Tabs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Top Tabs')}>
                <Text>View Top Tabs</Text>
            </TouchableOpacity>
        </View>
    )
}
  


export default Details;