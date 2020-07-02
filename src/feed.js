import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { styles } from './styles/styles';

const Feed = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.center}>
            <Text style={styles.title}>Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <Text style={styles.buttonText}>Feed</Text>
            </TouchableOpacity>
        </View>
    )
}


// VERSION WITHOUT NAVIGATION HOOKS:

// import React, { Component } from 'react';
// import { Text, TouchableOpacity } from 'react-native';

// class Feed extends Component {
//     render() {
//         return (
//             <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
//                 <Text>Feed</Text>
//             </TouchableOpacity>
//         )
//     }
// }


export default Feed;