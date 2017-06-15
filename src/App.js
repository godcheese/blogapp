/**
 * Created by godcheese on 2017/6/12.
 */

'use strict';
import React, {Component} from 'react';
import {
    View,
    TabBarIOS,
} from 'react-native';

import {styles,icons} from './assets/styles';

import Article from './components/article/Article';
import About from './components/about/About';


export default class App extends Component {

    constructor(props){
        super(props);
        this.state={
            selectedTab:'about',
        }
    }

    render() {
        return (
            <View style={styles.app}>

                <TabBarIOS tintColor="#086DFF">
                    <TabBarIOS.Item
                        title="最新文章"
                        icon={{uri:icons.latestArticle,scale:4.5}}
                        selectedIcon={{uri:icons.latestArticleSelected,scale:4.5}}
                        selected={this.state.selectedTab === 'article'}
                        onPress={()=>{
                            this.setState({
                                selectedTab:'article'
                            })
                        }}
                    >
                        <Article/>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="关于"
                        icon={{uri:icons.about,scale:4.5}}
                        selectedIcon={{uri:icons.aboutSelected,scale:4.5}}
                        selected={this.state.selectedTab === 'about'}
                        onPress={()=>{
                            this.setState({
                                selectedTab:'about'
                            })
                        }}
                       >
                        <About/>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        );
    }
}