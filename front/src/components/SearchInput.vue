<template>
  <v-text-field
    ref="input"
    prepend-inner-icon="mdi-magnify"
    label="Search"
    :value="value"
    :loading="loading"
    autofocus
    clearable
    hint="Icon name or synonym"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    @input="$emit('input', $event)"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    isFocused() {
      return this.$refs.input.isFocused;
    },
  },
};
</script>
