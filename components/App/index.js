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
            },
            pinLoc:{
                latitude: 37.78825,
                longitude: -122.4324,
            },
            image: require('../../assets/mountain.jpg')        
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
            >
              <MapView.Marker draggable
                coordinate={this.state.pinLoc}
                image={this.state.image}
                onDragEnd={(e) => this.setState({pinLoc: e.nativeEvent.coordinate})}
              />
            </MapView>
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
