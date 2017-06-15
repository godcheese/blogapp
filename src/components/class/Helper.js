/**
 * Created by godcheese on 2017/6/14.
 */

'use strict';

export default class Helper{

    fetchData(uri,callbackFunction){
        fetch(uri)
            .then((response)=>response.json())
            .then((responseData)=>callbackFunction(responseData))
            .catch((error)=>{console.log(error);});

    }

    formatDate(dateString){

        const dateOptions = {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric',
            hour12: false
        };
        const date=new Date(dateString);
        return date.toLocaleString('zh-CN', dateOptions);
    }

    static website:{
        name:'GIOOV',
        base_uri:'',
        api_uri:'',

    };


}