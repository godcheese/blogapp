/**
 * Created by godcheese on 2017/6/13.
 */


'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Linking,
    ActivityIndicator, ScrollView,AlertIOS
} from 'react-native';
import {styles} from '../../assets/styles';

import {stylesheet} from '../../assets/articleStyleSheet';
import HTMLView from 'react-native-htmlview';
import Helper from '../class/Helper';

export default class ArticleDetail extends Component {

    constructor(props){
        super(props);

        this.state={
            loaded:false,
            articleDetail:'',
            featuredMediaUri:'',
        };
        this._renderDetail();
    }

    _renderDetail(){

        let articleUri=`http://www.gioov.com/wp-json/wp/v2/posts/${this.props.item.id}`;
        const helper = new Helper;
        helper.fetchData(articleUri,(responseData)=>{

            let article=responseData;
            this.setState({
                article:responseData,
                loaded:true,
            })

        });
    }

    _renderNode(node, index, siblings, parent, defaultRenderer){

        if(node.name==='img'){
            let a=node.attribs;
            return (
                <View key={a.src+1} style={{flex:1,width:360,height:200,padding:5}}>
                    <Image
                        resizeMode="center"
                        key={a.src}
                        source={{uri:a.src}}
                        style={{flex:1,width:344,height:200,padding:10}}
                    />
                </View>
            );
        }

    }

    render() {
        if(!this.state.loaded){
            return (
                <View style={styles.container}>
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" color="#086DFF"/>
                    </View>
                </View>
            )
        }

        const helper = new Helper;

        let title ='<p>'+this.state.article.title.rendered+'</p>';
        let postDate= helper.formatDate(this.state.article.date_gmt);
        let content = '<body>' + this.state.article.content.rendered + '</body>';

        return (
            <View style={[styles.container, {marginTop: 65}]}>
                <ScrollView>
                    <View style={styles.articleDetailHeader}>
                        <HTMLView
                            style={styles.articleDetailHeaderTitleItem}
                            stylesheet={{p:styles.articleDetailHeaderTitle}}
                            value={title}
                        />
                        <Text style={{fontSize:14,fontWeight:"100"}}>{postDate}</Text>
                    </View>
                    <HTMLView
                        renderNode={this._renderNode}
                        style={styles.articleDetail}
                        stylesheet={stylesheet}
                        value={content}
                        onLinkPress={(href) => {
                            if(href){
                                AlertIOS.alert(
                                    '温馨提示','是否启用浏览器打开外部链接（可能存在风险）？',
                                    [
                                        {
                                            text:'取消',
                                            onPress:()=>{

                                            },
                                            style:'cancel',
                                        },
                                        {
                                            text:'确定',
                                            onPress:()=>{
                                                Linking.openURL(href);
                                            },
                                            style:'ok',
                                        },

                                    ]
                                )
                            }


                        }}
                    />
                </ScrollView>
            </View>
        );


    }
}