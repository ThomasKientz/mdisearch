import{createSuitMixin as e}from"../mixins/suit.js";import{createWidgetMixin as t}from"../mixins/widget.js";import{connectToggleRefinement as n}from"instantsearch.js/es/connectors/index.js";import{createPanelConsumerMixin as a}from"../mixins/panel.js";export default{render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.state?n("div",{class:[e.suit(),!e.state.canRefine&&e.suit("","noRefinement")]},[e._t("default",[n("label",{class:e.suit("label")},[n("input",{class:e.suit("checkbox"),attrs:{type:"checkbox",name:e.state.value.name},domProps:{value:e.on,checked:e.state.value.isRefined},on:{change:function(t){return e.state.refine(e.state.value)}}}),e._v(" "),n("span",{class:e.suit("labelText")},[e._v(e._s(e.label))]),e._v(" "),null!==e.state.value.count?n("span",{class:e.suit("count")},[e._v(e._s(e.state.value.count.toLocaleString()))]):e._e()])],{value:e.state.value,canRefine:e.state.canRefine,refine:e.state.refine,createURL:e.state.createURL,sendEvent:e.state.sendEvent})],2):e._e()},staticRenderFns:[],name:"AisToggleRefinement",mixins:[e({name:"ToggleRefinement"}),t({connector:n},{$$widgetType:"ais.toggleRefinement"}),a()],props:{attribute:{type:String,required:!0},label:{type:String,required:!0},on:{type:[String,Number,Boolean,Array],required:!1,default:!0},off:{type:[String,Number,Boolean,Array],required:!1,default:void 0}},computed:{widgetParams:function(){return{attribute:this.attribute,label:this.label,on:this.on,off:this.off}}}};
//# sourceMappingURL=ToggleRefinement.vue.js.map