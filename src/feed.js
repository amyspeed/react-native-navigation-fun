import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Feed = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Text>Feed</Text>
        </TouchableOpacity>
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