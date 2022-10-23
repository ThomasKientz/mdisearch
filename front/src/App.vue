<template>
  <v-app>
    <v-snackbar v-model="toast" top color="success" :timeout="1600">
      <span>Copied to clipboard!</span>
      <template #action>
        <v-icon style="color: inherit">mdi-clipboard-check</v-icon>
      </template>
    </v-snackbar>

    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>MDI</span>
        <span class="font-weight-light">SEARCH</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu v-model="settingsMenu" :close-on-content-click="false" offset-y>
        <template #activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-cog</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-switch v-model="darkMode" hide-details></v-switch>
              </v-list-item-action>
              <v-list-item-title>Dark mode</v-list-item-title>
            </v-list-item>

            <v-divider></v-divider>

            <v-subheader>Name format</v-subheader>
            <v-list-item>
              <v-radio-group v-model="format" class="mt-0">
                <v-radio label="account-circle" value="basic"></v-radio>
                <v-radio label="accountCircle" value="camelCase"></v-radio>
                <v-radio label="AccountCircle" value="upperCamelCase"></v-radio>
                <v-radio
                  label="mdiAccountCircle"
                  value="camelCasePrefixed"
                ></v-radio>
                <v-radio label="mdi-account-circle" value="prefixed"></v-radio>
                <v-radio
                  label="mdi:account-circle"
                  value="colon:prefixed"
                ></v-radio>
              </v-radio-group>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>

      <v-btn icon @click="aboutDialog = true">
        <v-icon>mdi-help-circle</v-icon>
      </v-btn>

      <v-btn href="https://github.com/ThomasKientz/mdisearch" icon>
        <v-icon>$github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <ais-instant-search
          :index-name="indexName"
          :search-client="searchClient"
        >
          <ais-configure :hits-per-page.camel="100" />
          <ais-search-box>
            <template
              #default="{
                currentRefinement,
                isSearchStalled,
                refine,
                setIsFocus,
              }"
            >
              <SearchInput
                ref="searchInput"
                :value="currentRefinement"
                :loading="isSearchStalled"
                @focus="setIsFocus(true)"
                @blur="setIsFocus(false)"
                @input="refine($event)"
              />
              <ais-powered-by class="ml-2" />
            </template>
          </ais-search-box>
          <ais-hits>
            <v-row slot-scope="{ items }" justify="space-between" wrap>
              <v-col v-for="item in items" :key="item.objectID">
                <v-tooltip bottom>
                  <template #activator="{ on }">
                    <v-btn
                      class="ma-4"
                      large
                      icon
                      text
                      v-on="on"
                      @click="onIcon(item.name)"
                    >
                      <v-icon large>mdi-{{ item.name }}</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ item.name }}</span>
                </v-tooltip>
              </v-col>
              <v-col v-for="n in 10" :key="'placeholder-' + n">
                <v-btn disabled class="ma-4" large icon text>
                  <v-icon class="ma-4" large></v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </ais-hits>
          <ais-pagination>
            <v-pagination
              slot-scope="{ currentRefinement, nbPages, refine }"
              :value="currentRefinement + 1"
              :length="nbPages"
              @input="refine($event - 1)"
            />
          </ais-pagination>
          <ais-stats>
            <p
              slot-scope="{ nbHits, processingTimeMS }"
              class="body-2 text-center mt-3"
            >
              {{ nbHits }} icons retrieved in {{ processingTimeMS }}ms. Limited
              to 1000 results.
            </p>
          </ais-stats>
        </ais-instant-search>

        <about-dialog v-model="aboutDialog" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {
  AisInstantSearch,
  AisSearchBox,
  AisPagination,
  AisStats,
  AisPoweredBy,
} from "./algolia/index.js";
import SearchInput from "@/components/SearchInput.vue";
import algoliasearch from "algoliasearch/lite";

export default {
  name: "VueApp",

  components: {
    SearchInput,
    AisInstantSearch,
    AisSearchBox,
    AisPagination,
    AisStats,
    AisPoweredBy,
    AboutDialog: () => import("@/components/AboutDialog.vue"),
  },

  data: () => ({
    settingsMenu: false,
    aboutDialog: false,
    searchClient: algoliasearch(
      process.env.VUE_APP_ALGOLIA_APP_ID,
      process.env.VUE_APP_ALGOLIA_API_KEY
    ),
    indexName: "MDI",
    toast: false,
    format: localStorage.getItem("format") || "basic",
  }),

  computed: {
    darkMode: {
      get() {
        return localStorage.getItem("darkMode") !== "false";
      },
      set(v) {
        localStorage.setItem("darkMode", v);
        this.$vuetify.theme.dark = v;
      },
    },
    showAccountAlert() {
      if (!this.user) return false;

      const { status } = this.user;

      if (["past_due", "paused"].includes(status)) return true;

      return false;
    },
  },

  watch: {
    format(v) {
      localStorage.setItem("format", v);
    },
  },

  methods: {
    onIcon(name) {
      this.copy(name);
    },
    copy(name) {
      const formated =
        this.format == "prefixed"
          ? "mdi-" + name
          : this.format == "camelCase"
          ? toCamelCase(name)
          : this.format == "upperCamelCase"
          ? toCamelCase(name, true)
          : this.format == "camelCasePrefixed"
          ? toCamelCase("mdi-" + name)
          : this.format == "colon:prefixed"
          ? "mdi:" + name
          : name;

      this.$copyText(formated).then(() => {
        this.toast = true;
      });
    },
  },
};

const toCamelCase = (str, isUpperCamelCase) => {
  return str.split("-").reduce((res, string, index) => {
    const text =
      index > 0 || isUpperCamelCase
        ? string.charAt(0).toUpperCase() + string.slice(1)
        : string;
    return res + text;
  }, "");
};
</script>
