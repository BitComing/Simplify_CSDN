// ==UserScript==
// @name         CSDN简化工具
// @namespace    https://tampermonkey.net/
// @homepage     https://github.com/BitComing
// @version      1.3
// @description  自由复制CSDN的代码，不用登录用户
// @author       Alpha
// @require      tampermonkey://vendor/jquery.js
// @match        https://blog.csdn.net/*/article/details/*
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @grant        GM_addStyle
// ==/UserScript==
//@note 1.4：取消代码栏的登陆按钮；取消悬浮栏
//@note 1.3：局部实现没有“登陆后复制”的按钮
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
        '#mainBox > main > div.hide-article-box.hide-article-pos.text-center', // 免除关注展开内容
        '.signin', //代码栏的登录按钮
        '#articleSearchTip', //csdn的上下文菜单
        '.profile-attend', //关注按钮
        '#toolBarBox', //下方悬浮栏
    ];
    clean_obj.forEach(c => {
        GM_addStyle(`${c} {display: none !important}`);
    });
    for(let i=1; i <=15; i++){
        GM_addStyle(`#content_views > pre:nth-child(${i}) > code > div {display: none !important}`);
    }

    // 自定义主内容
    GM_addStyle('#mainBox > main {float: none !important; margin: auto !important;}');
    // 免除关注展开内容
    GM_addStyle('#article_content{height:100% !important}');

    GM_addStyle('#is-like {cursor:not-allowed; }');

    //特殊节点
    let login_pane = document.querySelector('#passportbox > span');
    login_pane.click();

})();