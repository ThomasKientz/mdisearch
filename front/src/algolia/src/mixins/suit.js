import s from"../util/suit.js";var t=function(t){var a=t.name;return{props:{classNames:{type:Object,default:void 0}},methods:{suit:function(t,e){var r=s(a,t,e),i=this.classNames&&this.classNames[r];return i?[r,i].join(" "):r}}}};export{t as createSuitMixin};
//# sourceMappingURL=suit.js.map
