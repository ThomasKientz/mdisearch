import{createSuitMixin as e}from"../mixins/suit.js";import{createWidgetMixin as t}from"../mixins/widget.js";import{connectQueryRules as r}from"instantsearch.js/es/connectors/index.js";export default{name:"AisQueryRuleContext",mixins:[e({name:"QueryRuleContext"}),t({connector:r},{$$widgetType:"ais.queryRuleContext"})],props:{trackedFilters:{type:Object,required:!0},transformRuleContexts:{type:Function,required:!1,default:void 0}},computed:{widgetParams:function(){return{trackedFilters:this.trackedFilters,transformRuleContexts:this.transformRuleContexts}}},render:function(){return null}};
//# sourceMappingURL=QueryRuleContext.js.map
