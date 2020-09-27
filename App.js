/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import ChoseDate from './src/components/Register/ChoseDate';

import {
  View,
  ScrollView,
} from 'react-native';
 export default class App extends Component{
   render(){
   return(
    <ScrollView>
      <View>
        <ChoseDate/>
      </View>
    </ScrollView>
    );
   }
 }

