(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{313:function(s,E,C){"use strict";C.r(E);var t={created:function(){this.content=unescape("%3Ch2%3EPasswordInput%20%u5BC6%u7801%u8F93%u5165%u6846%3C/h2%3E%0A%3Cp%3E%u5BC6%u7801%u8F93%u5165%u6846%u7EC4%u4EF6%u901A%u5E38%u4E0E%20%3Ca%20href%3D%22%23/zh-CN/number-keyboard%22%3E%u6570%u5B57%u952E%u76D8%3C/a%3E%20%u7EC4%u4EF6%u914D%u5408%u4F7F%u7528%3C/p%3E%0A%3Ch3%3E%u4F7F%u7528%u6307%u5357%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20PasswordInput%2C%20NumberKeyboard%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28PasswordInput%29.use%28NumberKeyboard%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3E%u4EE3%u7801%u6F14%u793A%3C/h3%3E%0A%3Ch4%3E%u57FA%u7840%u7528%u6CD5%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20%u5BC6%u7801%u8F93%u5165%u6846%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-password-input%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Avalue%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22value%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Einfo%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%u5BC6%u7801%u4E3A%206%20%u4F4D%u6570%u5B57%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Efocus%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showKeyboard%20%3D%20true%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20%u6570%u5B57%u952E%u76D8%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-number-keyboard%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showKeyboard%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Einput%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onInput%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Edelete%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onDelete%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eblur%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showKeyboard%20%3D%20false%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27123%27%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EshowKeyboard%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20onInput%28key%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.value%20%3D%20%28%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.value%20+%20key%29.slice%28%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E6%3C/span%3E%29%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20onDelete%28%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.value%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.value.slice%28%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.value.length%20-%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EAPI%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Evalue%3C/td%3E%0A%3Ctd%3E%u5BC6%u7801%u503C%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%27%27%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elength%3C/td%3E%0A%3Ctd%3E%u5BC6%u7801%u6700%u5927%u957F%u5EA6%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E6%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Einfo%3C/td%3E%0A%3Ctd%3E%u8F93%u5165%u6846%u4E0B%u65B9%u63D0%u793A%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eerror-info%3C/td%3E%0A%3Ctd%3E%u8F93%u5165%u6846%u4E0B%u65B9%u9519%u8BEF%u63D0%u793A%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EEvent%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Efocus%3C/td%3E%0A%3Ctd%3E%u8F93%u5165%u6846%u805A%u7126%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3E%u66F4%u65B0%u65E5%u5FD7%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u7248%u672C%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u5185%u5BB9%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E0.9.3%3C/td%3E%0A%3Ctd%3Efeature%3C/td%3E%0A%3Ctd%3E%u65B0%u589E%u7EC4%u4EF6%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},a=C(0),u=Object(a.a)(t,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);u.options.__file="zh-CN.md";E.default=u.exports}}]);