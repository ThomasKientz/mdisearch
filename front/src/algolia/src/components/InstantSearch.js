import{renderCompat as e,getDefaultSlot as t}from"../util/vue-compat/index-vue2.js";import{warn as i}from"../util/warn.js";import a from"instantsearch.js/es/index.js";import{createInstantSearchComponent as n}from"../util/createInstantSearchComponent.js";var r="Vue InstantSearch: You used the prop api-key or app-id.\nThese have been replaced by search-client.\n\nSee more info here: https://www.algolia.com/doc/api-reference/widgets/instantsearch/vue/#widget-param-search-client";export default n({name:"AisInstantSearch",props:{searchClient:{type:Object,required:!0},insightsClient:{type:Function,default:void 0},indexName:{type:String,required:!0},routing:{default:void 0,validator:function(e){return!("boolean"==typeof e||!e.router&&!e.stateMapping)||(i("The `routing` option expects an object with `router` and/or `stateMapping`.\n\nSee https://www.algolia.com/doc/api-reference/widgets/instantsearch/vue/#widget-param-routing"),!1)}},stalledSearchDelay:{type:Number,default:void 0},searchFunction:{type:Function,default:void 0},initialUiState:{type:Object,default:void 0},apiKey:{type:String,default:void 0,validator:function(e){return e&&i(r),!1}},appId:{type:String,default:void 0,validator:function(e){return e&&i(r),!1}},middlewares:{type:Array,default:null}},data:function(){return{instantSearchInstance:a({searchClient:this.searchClient,insightsClient:this.insightsClient,indexName:this.indexName,routing:this.routing,stalledSearchDelay:this.stalledSearchDelay,searchFunction:this.searchFunction,initialUiState:this.initialUiState})}},render:e(function(e){var i;return e("div",{class:(i={},i[this.suit()]=!0,i[this.suit("","ssr")]=!1,i)},t(this))})});
//# sourceMappingURL=InstantSearch.js.map
