// ==UserScript==
// @name         CSDN简化工具
// @namespace    https://tampermonkey.net/
// @homepage     https://github.com/BitComing
// @version      1.0
// @description  自由复制CSDN的代码，不用登录用户
// @author       Alpha
// @match        https://blog.csdn.net/*/article/details/*
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @grant        GM_addStyle
// ==/UserScript==
//@note 1.2：简化了清除组件的实现方式
//@note 1.1：去除登陆弹窗（未完成）
//@note 1.0：删除各类无关页面内容

(function() {
    // 代码可编辑
    let codes = document.querySelectorAll("code");
    codes.forEach(c => {
        c.contentEditable = "true";
    });

    // 删除节点
    let clean_obj = [
        '#blogColumnPayAdvert > div',
        '.csdn-side-toolbar',
        '#csdn-toolbar',
        '#mainBox > aside',
        '#mainBox > main > div.blog-footer-bottom',
        '#mainBox > main > div.recommend-box.insert-baidu-box.recommend-box-style',
        '#recommendNps',
        '#mainBox > main > div.template-box',
        '#mainBox > main > div.hide-article-box.hide-article-pos.text-center' // 免除关注展开内容
    ];
    clean_obj.forEach(c => {
        GM_addStyle(`${c} {display: none !important}`);
    });

    // 自定义主内容
    GM_addStyle('#mainBox > main {float: none !important; margin: auto !important;}');
    // 免除关注展开内容
    GM_addStyle('#article_content{height:100% !important}');

    //特殊节点
    let login_pane = document.querySelector('#passportbox > span');
    login_pane.click();

})();