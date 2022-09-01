<template>
  <v-dialog :value="value" width="500" @input="$emit('input', false)">
    <v-card>
      <v-card-title> About </v-card-title>
      <v-card-text>
        <p class="mt-0">
          MDI Search is a blazing fast search engine for the
          <a href="https://materialdesignicons.com/">Material Design Icon</a>
          library.
        </p>

        <p>
          MDI Search is operated by Thomas Kientz, an individual. You can reach
          me at
          <a href="mailto:contact@mdisearch.com">contact@mdisearch.com</a> if
          you have any issues or feature requests.
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('input', false)">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style></style>
