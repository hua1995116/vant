(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{149:function(t,s,e){"use strict";var n=e(75);e.n(n).a},150:function(t,s,e){(t.exports=e(10)(!1)).push([t.i,"\n.demo-steps .steps-success,\n  .demo-steps .van-icon-location {\n    color: #06bf04;\n}\n.demo-steps .van-button {\n    margin: 15px 0 0 15px;\n}\n.demo-steps .van-steps__message + p {\n    margin-bottom: 10px;\n}\n.demo-steps p,\n  .demo-steps h3 {\n    margin: 0;\n    font-size: inherit;\n    font-weight: normal;\n}\n",""])},182:function(t,s,e){"use strict";e.r(s);var n={i18n:{"zh-CN":{nextStep:"下一步",step1:"买家下单",step2:"商家接单",step3:"买家提货",step4:"交易完成",title2:"描述信息",title3:"竖向步骤条",status1:"【城市】物流状态1",status2:"【城市】物流状态",status3:"快件已发货"},"en-US":{nextStep:"Next Step",step1:"Step1",step2:"Step2",step3:"Step3",step4:"Step4",title2:"Description",title3:"Vertical Steps",status1:"【City】Status1",status2:"【City】Status2",status3:"【City】Status3"}},data:function(){return{active:1}},methods:{nextStep:function(){this.active=++this.active%4}}},a=(e(149),e(0)),i=Object(a.a)(n,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("demo-section",[e("demo-block",{attrs:{title:t.$t("basicUsage")}},[e("van-steps",{attrs:{active:t.active}},[e("van-step",[t._v(t._s(t.$t("step1")))]),e("van-step",[t._v(t._s(t.$t("step2")))]),e("van-step",[t._v(t._s(t.$t("step3")))]),e("van-step",[t._v(t._s(t.$t("step4")))])],1),e("van-button",{on:{click:t.nextStep}},[t._v(t._s(t.$t("nextStep")))])],1),e("demo-block",{attrs:{title:t.$t("title2")}},[e("van-steps",{attrs:{active:t.active,icon:"logistics","icon-class":"steps-success",title:t.$t("title"),description:t.$t("desc")}},[e("van-step",[t._v(t._s(t.$t("step1")))]),e("van-step",[t._v(t._s(t.$t("step2")))]),e("van-step",[t._v(t._s(t.$t("step3")))]),e("van-step",[t._v(t._s(t.$t("step4")))])],1)],1),e("demo-block",{attrs:{title:t.$t("title3")}},[e("van-steps",{attrs:{direction:"vertical",active:0,"active-color":"#f60"}},[e("van-step",[e("h3",[t._v(t._s(t.$t("status1")))]),e("p",[t._v("2016-07-12 12:40")])]),e("van-step",[e("h3",[t._v(t._s(t.$t("status2")))]),e("p",[t._v("2016-07-11 10:00")])]),e("van-step",[e("h3",[t._v(t._s(t.$t("status3")))]),e("p",[t._v("2016-07-10 09:30")])])],1)],1)],1)},[],!1,null,null,null);i.options.__file="index.vue";s.default=i.exports},75:function(t,s,e){var n=e(150);"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(11)(n,a);n.locals&&(t.exports=n.locals)}}]);