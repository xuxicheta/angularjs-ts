// var req = require.context("./home", true, /^(.*\.(js$))[^.]*$/im);
//
// console.log(req);
// req.keys().forEach(function(key, i){
// 	console.log('-----------', key);
// 	req(key);
// });
import './home/home.module';
import './home/home.controller';
import './home/home.component';

// require('../../../build/build-folder')(require('path').resolve(__dirname, './home'));
