/**
 * Created by godcheese on 2017/6/12.
 */


'use strict';
import React, {Component} from 'react';
import {
    NavigatorIOS, Text, View,
} from 'react-native';
import LatestArticle from './LatestArticle';
import {styles} from '../../assets/styles';

export default class Article extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title:'最新文章',
                    component:LatestArticle,
                }}
                shadowHidden={true}
                translucent={true}
                titleTextColor="#086DFF"
                barTintColor="#F9F9F9"
            />
        );
    }
}