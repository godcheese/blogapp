/**
 * Created by godcheese on 2017/6/12.
 */


'use strict';
import React, {Component} from 'react';
import {
    NavigatorIOS,
} from 'react-native';
import AboutList from './AboutList';
import {styles} from '../../assets/styles';
export default class About extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title:'关于',
                    component:AboutList
                }}
                shadowHidden={true}
                translucent={true}
                titleTextColor="#086DFF"
                barTintColor="#F9F9F9"
            />
        );
    }
}