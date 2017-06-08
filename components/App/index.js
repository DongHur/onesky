import React, { Component } from 'react'
import { ScrollView, StyleSheet, View, TextInput, Text, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MapView from 'react-native-maps'

var {height, width} = Dimensions.get('window')

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }        
        }
    }
    render() {
        console.log('here');
        return (
          <View>
            <MapView
            style={[styles.map]}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            />
          </View>          
        );
    }
}

const styles = StyleSheet.create({
    map: {
        height: height,
        width: width,
    }
})
