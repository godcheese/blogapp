/**
 * Created by godcheese on 2017/6/12.
 */

'use strict';
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import {styles} from '../../assets/styles';

export default class AboutList extends Component {

    constructor(props){
        super(props);

    }

    render() {
        return (
            <View style={[styles.container,{marginTop:65}]}>
                    <View style={styles.aboutItems}>
                            <Text style={styles.aboutItem}>API URI:http://www.gioov.com</Text>
                            <Text style={styles.aboutItem}>网站名:GIOOV</Text>
                        <Text style={styles.aboutItem}>开发者:天堂芝士</Text>
                    </View>
            </View>
        );
    }
}