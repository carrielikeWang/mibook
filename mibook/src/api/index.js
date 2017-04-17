/**
 * Mocking client-server processing
**/
import * as ajax from '../ajax';

import categories from '../mock/categories.json';
import category0031 from '../mock/category0031.json';
import category0032 from '../mock/category0032.json';
import category0033 from '../mock/category0033.json';
import bookdetail00311 from '../mock/bookdetail00311.json';
import bookdetail00312 from '../mock/bookdetail00312.json';
import bookdetail00313 from '../mock/bookdetail00313.json';





export default {
    getCategories(cb) { //获取分类
        // let url = "/mibook/mock/category.json";
        
        // let url = "http://wxpsmile.com/mibook/mock/categories.json";
        // ajax.get(url, "", (res) => {
        //     console.log(res);
        //     setTimeout(() => cb(res), 100)
        // });

        setTimeout(() => cb(categories), 100)
    },

    getCategory(id, cb) { //获取一个分类
        // let url = "/mibook/mock/category.json";
        
        // let url = "http://wxpsmile.com/mibook/mock/category"+ id +".json";
        // ajax.get(url, "", (res) => {
        //     console.log(res);
        //     setTimeout(() => cb(res), 100)
        // });

        
        if(id == "0031"){
            setTimeout(() => cb(category0031), 100)
        }else if(id == "0032"){
            setTimeout(() => cb(category0032), 100)
        }else if(id == "0033"){
            setTimeout(() => cb(category0033), 100)
        }
        
    },
    getBookdetail(id, cb) { //获取一个分类
        // let url = "/mibook/mock/category.json";
        
        // let url = "http://wxpsmile.com/mibook/mock/book_detail.json";
        // ajax.get(url, "", (res) => {
        //     console.log(res);
        //     setTimeout(() => cb(res), 100)
        // });
        
        if(id == "00311"){
            setTimeout(() => cb(bookdetail00311), 100)
        }else if(id == "00312"){
            setTimeout(() => cb(bookdetail00312), 100)
        }else if(id == "00313"){
            setTimeout(() => cb(bookdetail00313), 100)
        }

    
        
    },

}