/**
 * Created by godcheese on 2017/6/12.
 */

'use strict';
import React, {Component} from 'react';
import {
    Text,
    View,
    ListView,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native';

import HTMLView from 'react-native-htmlview';

import ArticleDetail from './ArticleDetail';
import {styles} from '../../assets/styles';
import Helper from '../class/Helper';

export default class LatestArticle extends Component {

    constructor(props){
        super(props);

        this.state={
            data:new ListView.DataSource({
                rowHasChanged:(row1,row2)=>row1!==row2,
            }),
            articleFeaturedMediaUri:'/',
            loaded:false,
        };
        this._fetchData();
    }

    _fetchData(){
        let uri='http://www.gioov.com/wp-json/wp/v2/posts';


        let helper=new Helper;
        helper.fetchData(uri,(responseData)=>{
            this.setState({
                data:this.state.data.cloneWithRows(responseData),
                loaded:true,
            });
        });

    }

    _itemOnPress(item){
        this.props.navigator.push({
            title:item.title.rendered,
            component:ArticleDetail,
            passProps:{item},
        });

    }


    _renderItem(item){
        let helper=new Helper;

        let title='<p>'+item.title.rendered+'</p>';
        let postDate=helper.formatDate(item.date_gmt);
        return (

            <View style={styles.latestArticleItem}>
                <TouchableHighlight onPress={this._itemOnPress.bind(this,item)} underlayColor="rgba(220,220,220,0.3)">
                    <View style={styles.latestArticleHeader}>
                        <HTMLView stylesheet={{p:styles.latestArticleTitle}}  value={title}/>
                        <Text style={styles.latestArticlePostDate}>{postDate}</Text>
                    </View>
                </TouchableHighlight>
            </View>

        );
    }


    render() {
        if(!this.state.loaded){
            return (
                <View style={styles.container}>
                    <View style={styles.loading}>
                        <ActivityIndicator color="#086DFF" size="large"/>
                    </View>
                </View>
            );
        }
        return (
            <View style={[styles.container,{marginTop:65,marginBottom:55}]}>
                <ListView dataSource={this.state.data} renderRow={this._renderItem.bind(this)} />
            </View>
        );
    }
}