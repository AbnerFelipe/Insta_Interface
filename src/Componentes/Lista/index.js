import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            feed: this.props.data
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    }
})
