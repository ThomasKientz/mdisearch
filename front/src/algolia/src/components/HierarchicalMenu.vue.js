import{createSuitMixin as e}from"../mixins/suit.js";import{createWidgetMixin as t}from"../mixins/widget.js";import{connectHierarchicalMenu as o}from"instantsearch.js/es/connectors/index.js";import{createPanelConsumerMixin as s}from"../mixins/panel.js";import i from"./HierarchicalMenuList.vue.js";export default{render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.state?o("div",{class:[e.suit(),!e.state.canRefine&&e.suit("","noRefinement")]},[e._t("default",[o("hierarchical-menu-list",{attrs:{items:e.state.items,level:0,refine:e.state.refine,createURL:e.state.createURL,suit:e.suit}}),e._v(" "),e.showMore?o("button",{class:[e.suit("showMore"),!e.state.canToggleShowMore&&e.suit("showMore","disabled")],attrs:{disabled:!e.state.canToggleShowMore},on:{click:function(t){return t.preventDefault(),e.state.toggleShowMore(t)}}},[e._t("showMoreLabel",[e._v(e._s(e.state.isShowingMore?"Show less":"Show more"))],{isShowingMore:e.state.isShowingMore})],2):e._e()],{items:e.state.items,canRefine:e.state.canRefine,canToggleShowMore:e.state.canToggleShowMore,isShowingMore:e.state.isShowingMore,refine:e.state.refine,createURL:e.state.createURL,toggleShowMore:e.state.toggleShowMore,sendEvent:e.state.sendEvent})],2):e._e()},staticRenderFns:[],name:"AisHierarchicalMenu",mixins:[e({name:"HierarchicalMenu"}),t({connector:o},{$$widgetType:"ais.hierarchicalMenu"}),s()],components:{HierarchicalMenuList:i},props:{attributes:{type:Array,required:!0},limit:{type:Number,default:void 0},showMoreLimit:{type:Number,default:void 0},showMore:{type:Boolean,default:!1},sortBy:{type:[Array,Function],default:void 0},separator:{type:String,default:void 0},rootPath:{type:String,default:void 0},showParentLevel:{type:Boolean,default:void 0},transformItems:{type:Function,default:void 0}},computed:{widgetParams:function(){return{attributes:this.attributes,limit:this.limit,showMore:this.showMore,showMoreLimit:this.showMoreLimit,separator:this.separator,rootPath:this.rootPath,showParentLevel:this.showParentLevel,sortBy:this.sortBy,transformItems:this.transformItems}}}};
//# sourceMappingURL=HierarchicalMenu.vue.js.map