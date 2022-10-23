import{createSuitMixin as e}from"../mixins/suit.js";import{isVue2 as t,isVue3 as i}from"../util/vue-compat/index-vue2.js";import{createWidgetMixin as s}from"../mixins/widget.js";import{connectSearchBox as n}from"instantsearch.js/es/connectors/index.js";import o from"./SearchInput.vue.js";export default{render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.state?i("div",{class:e.suit()},[e._t("default",[i("search-input",{ref:"searchInput",attrs:{placeholder:e.placeholder,autofocus:e.autofocus,"show-loading-indicator":e.showLoadingIndicator,"should-show-loading-indicator":e.state.isSearchStalled,"submit-title":e.submitTitle,"reset-title":e.resetTitle,"class-names":e.classNames},on:{focus:function(t){e.$emit("focus",t),e.setIsFocused(!0)},blur:function(t){e.$emit("blur",t),e.setIsFocused(!1)},reset:function(t){return e.$emit("reset")}},scopedSlots:e._u([e.isVue3?{key:"loading-indicator",fn:function(t){return[e._t("loading-indicator")]}}:null,e.isVue3?{key:"submit-icon",fn:function(t){return[e._t("submit-icon")]}}:null,e.isVue3?{key:"reset-icon",fn:function(t){return[e._t("reset-icon")]}}:null],!0),model:{value:e.currentRefinement,callback:function(t){e.currentRefinement=t},expression:"currentRefinement"}},[e._v(" "),e.isVue2?e._t("loading-indicator",null,{slot:"loading-indicator"}):e._e(),e._v(" "),e._v(" "),e.isVue2?e._t("submit-icon",null,{slot:"submit-icon"}):e._e(),e._v(" "),e._v(" "),e.isVue2?e._t("reset-icon",null,{slot:"reset-icon"}):e._e()],2)],{currentRefinement:e.currentRefinement,isSearchStalled:e.state.isSearchStalled,setIsFocus:e.setIsFocused,refine:e.state.refine})],2):e._e()},staticRenderFns:[],name:"AisSearchBox",mixins:[s({connector:n},{$$widgetType:"ais.searchBox"}),e({name:"SearchBox"})],components:{SearchInput:o},props:{placeholder:{type:String,default:"Search here…"},autofocus:{type:Boolean,default:!1},showLoadingIndicator:{type:Boolean,default:!1},submitTitle:{type:String,default:"Search"},resetTitle:{type:String,default:"Clear"},value:{type:String,default:void 0},modelValue:{type:String,default:void 0},queryHook:{type:Function,default:void 0}},data:function(){return{localValue:"",isVue2:t,isVue3:i,isFocused:!1}},computed:{widgetParams:function(){return{queryHook:this.queryHook}},isControlled:function(){return void 0!==this.value||void 0!==this.modelValue},model:function(){return this.value||this.modelValue},currentRefinement:{get:function(){return this.isControlled&&this.model!==this.localValue&&(this.localValue=this.model,this.$emit("input",this.model),this.$emit("update:modelValue",this.model),this.state.refine(this.model)),this.isFocused?this.localValue:this.model||this.state.query||""},set:function(e){this.localValue=e,this.state.refine(e),this.isControlled&&(this.$emit("input",e),this.$emit("update:modelValue",e))}}},methods:{setIsFocused:function(e){this.isFocused=e}}};
//# sourceMappingURL=SearchBox.vue.js.map
