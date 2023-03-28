/*
 * @Author: 安风 jiadongyao@cai-inc.com
 * @Date: 2023-02-28 17:06:02
 * @LastEditors: 安风 jiadongyao@cai-inc.com
 * @LastEditTime: 2023-03-01 17:25:16
 * @FilePath: /jest对dom节点操作/dom.js
 * @Description: 
 */
import $ from 'jquery';

const addDiv = () => {
  $('body').append('<div/>');
}

export default addDiv;