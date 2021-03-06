import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { styles } from './styles/styles';

const Details = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Details</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Bottom Tabs')}>
                <Text style={styles.buttonText}>View Bottom Tabs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Top Tabs')}>
                <Text style={styles.buttonText}>View Top Tabs</Text>
            </TouchableOpacity>
        </View>
    )
}
  


export default Details;