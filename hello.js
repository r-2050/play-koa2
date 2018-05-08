'use strict'

var s = 'Hello';

function greet(name) {
    console.log(s + ',' + name + '!');
};

var myDate = new Date();

function playNode(name2) {
    console.log('begin play ' + name2 + ', on ' + myDate)
};

// 导出模块 
module.exports = {
    greet: greet,
    playNode: playNode
};