import { createSuitMixin as n } from "../mixins/suit.js";
import { _objectSpread as t } from "./polyfills.js";
import { version as e } from "./vue-compat/index-vue2.js";
import { version as a } from "../../package.json.js";
var i = function (i) {
  var s;
  return t(
    (((s = {
      mixins: [n({ name: "InstantSearch" })],
      provide: function () {
        return { $_ais_instantSearchInstance: this.instantSearchInstance };
      },
      watch: {
        searchClient: function (n) {
          this.instantSearchInstance.helper.setClient(n).search();
        },
        indexName: function (n) {
          this.instantSearchInstance.helper.setIndex(n).search();
        },
        stalledSearchDelay: function (n) {
          this.instantSearchInstance._stalledSearchDelay = n;
        },
        routing: function () {
          throw new Error(
            "routing configuration can not be changed dynamically at this point.\n\nPlease open a new issue: https://github.com/algolia/vue-instantsearch/issues/new?template=feature.md"
          );
        },
        searchFunction: function (n) {
          this.instantSearchInstance._searchFunction = n;
        },
        middlewares: {
          immediate: !0,
          handler: function (n, t) {
            var e = this;
            (t || [])
              .filter(function (t) {
                return -1 === (n || []).indexOf(t);
              })
              .forEach(function (n) {
                e.instantSearchInstance.unuse(n);
              }),
              (n || [])
                .filter(function (n) {
                  return -1 === (t || []).indexOf(n);
                })
                .forEach(function (n) {
                  e.instantSearchInstance.use(n);
                });
          },
        },
      },
      created: function () {
        var n = this.instantSearchInstance.client;
        "function" == typeof n.addAlgoliaAgent &&
          (n.addAlgoliaAgent("Vue (" + e + ")"),
          n.addAlgoliaAgent("Vue InstantSearch (" + a + ")"));
      },
      mounted: function () {
        var n = this;
        this.$nextTick(function () {
          n.instantSearchInstance.started || n.instantSearchInstance.start();
        });
      },
    }).beforeDestroy = function () {
      this.instantSearchInstance.started &&
        this.instantSearchInstance.dispose(),
        (this.instantSearchInstance.__initialSearchResults = void 0);
    }),
    s),
    i
  );
};
export { i as createInstantSearchComponent };
//# sourceMappingURL=createInstantSearchComponent.js.map
