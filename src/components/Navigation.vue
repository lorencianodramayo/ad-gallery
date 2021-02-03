<template>
  <q-header
    elevated
    class="text-dark"
    style="background: #FFF"
    height-hint="61.59"
  >
    <q-toolbar class="GL__toolbar q-py-sm q-px-md">
      <q-toolbar-title shrink class="row items-center no-wrap">
        <img
          src="https://ad-weave.io/crm/uploads/company/logo.png"
          class="header-logo"
        />
        <span
          class="q-mx-md text-grey-8 text-uppercase text-subtitle1"
          v-if="$q.screen.gt.sm"
        >
          Ad Gallery
        </span>
        <q-btn-toggle
          v-if="$q.screen.gt.sm"
          v-model="model"
          flat
          :ripple="false"
          stretch
          color="grey-8"
          toggle-color="primary"
          :options="[
            { label: 'showcase', value: 'showcase' },
            { label: 'create', value: 'create' },
            { label: 'learn', value: 'learn' },
            { label: 'formats', value: 'formats' }
          ]"
        />
      </q-toolbar-title>

      <q-space />

      <q-select
        ref="search"
        outlined
        dense
        use-input
        hide-selected
        class="GL__toolbar-select"
        color="grey-8"
        :stack-label="false"
        label="Search or jump to..."
        v-model="text"
        :options="filteredOptions"
        @filter="filter"
        style="width: 300px"
      >
        <template v-slot:append>
          <img
            src="https://cdn.quasar.dev/img/layout-gallery/img-github-search-key-slash.svg"
          />
        </template>

        <template v-slot:no-option>
          <q-item>
            <q-item-section>
              <div class="text-center">
                <q-spinner-pie color="grey-5" size="24px" />
              </div>
            </q-item-section>
          </q-item>
        </template>

        <template v-slot:option="scope">
          <q-item
            v-bind="scope.itemProps"
            v-on="scope.itemEvents"
            class="GL__select-GL__menu-link"
          >
            <q-item-section side>
              <q-icon name="collections_bookmark" />
            </q-item-section>
            <q-item-section>
              <q-item-label v-html="scope.opt.label" />
            </q-item-section>
            <q-item-section side :class="{ 'default-type': !scope.opt.type }">
              <q-btn
                outline
                dense
                no-caps
                text-color="blue-grey-5"
                size="12px"
                class="bg-grey-1 q-px-sm"
              >
                {{ scope.opt.type || "Jump to" }}
                <q-icon name="subdirectory_arrow_left" size="14px" />
              </q-btn>
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </q-toolbar>
  </q-header>
</template>

<script>
const stringOptions = [
  "quasarframework/quasar",
  "quasarframework/quasar-awesome"
];

export default {
  name: "Navigation",
  data() {
    return {
      text: "",
      model: "showcase",
      options: null,
      filteredOptions: []
    };
  },
  methods: {
    filter(val, update) {
      if (this.options === null) {
        // load data
        setTimeout(() => {
          this.options = stringOptions;
          this.$refs.search.filter("");
        }, 2000);
        update();
        return;
      }
      if (val === "") {
        update(() => {
          this.filteredOptions = this.options.map(op => ({ label: op }));
        });
        return;
      }
      update(() => {
        this.filteredOptions = [
          {
            label: val,
            type: "In this repository"
          },
          {
            label: val,
            type: "All GitHub"
          },
          ...this.options
            .filter(op => op.toLowerCase().includes(val.toLowerCase()))
            .map(op => ({ label: op }))
        ];
      });
    }
  }
};
</script>

<style lang="sass">
.GL
  &__toolbar
    .q-toolbar__title
      .header-logo
        width: 4em
  &__select-GL__menu-link
    .default-type
      visibility: hidden
      color: dark
    &:hover
      background: #FFF
      color: dark
      .q-item__section--side
        color: dark
      .default-type
        visibility: visible
  &__toolbar-link
    a
      color: dark
      text-decoration: none
      &:hover
        opacity: 0.7
  &__menu-link:hover
    background: #0366d6
    color: white
  &__menu-link-signed-in,
  &__menu-link-status
    &:hover
      & > div
        background: white !important
  &__menu-link-status
    color: $blue-grey-6
    &:hover
      color: $light-blue-9
  &__toolbar-select.q-field--focused
    width: 450px !important
    .q-field__append
      display: none
</style>
