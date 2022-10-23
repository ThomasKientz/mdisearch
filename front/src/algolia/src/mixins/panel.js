import"../util/vue-compat/index-vue2.js";import t from"mitt";var e="instantSearchPanelEmitter",n="PANEL_CHANGE_EVENT",i=function(){var e;return(e={props:{emitter:{type:Object,required:!1,default:function(){return t()}}},provide:function(){var t;return(t={}).instantSearchPanelEmitter=this.emitter,t},data:function(){return{canRefine:!0}},created:function(){var t=this;this.emitter.on("PANEL_CHANGE_EVENT",function(e){t.updateCanRefine(e)})}}).beforeDestroy=function(){this.emitter.all.clear()},e.methods={updateCanRefine:function(t){this.canRefine=t}},e},r=function(t){void 0===t&&(t={});var e=t.mapStateToCanRefine;return void 0===e&&(e=function(t){return Boolean(t.canRefine)}),{inject:{emitter:{from:"instantSearchPanelEmitter",default:function(){return{emit:function(){}}}}},data:function(){return{state:null,hasAlreadyEmitted:!1}},watch:{state:{immediate:!0,handler:function(t,n){if(t){var i=e(n||{}),r=e(t);this.hasAlreadyEmitted&&i===r||(this.emitter.emit("PANEL_CHANGE_EVENT",r),this.hasAlreadyEmitted=!0)}}}}}};export{n as PANEL_CHANGE_EVENT,e as PANEL_EMITTER_NAMESPACE,r as createPanelConsumerMixin,i as createPanelProviderMixin};
//# sourceMappingURL=panel.js.map
