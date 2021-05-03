import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class SignIn extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'white' }}>
                    Sign Page
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("titanic") }} >
                    <Text>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: 'red',
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
});