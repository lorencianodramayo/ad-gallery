<template>
  <q-page>
    <q-card class="Ad__header">
      <q-parallax
        src="https://ad-lib.io/wp-content/uploads/2020/09/AdThink-Vector-Background-1.svg"
        :height="250"
        class="Ad__header-parallax"
      >
        <p class="text-h4 text-uppercase text-white text-weight-bold">
          Showcase
        </p>
      </q-parallax>
    </q-card>

    <div
      class="Ad__filter row no-wrap items-center q-px-md q-py-sm bg-grey-3 rounded-borders"
    >
      <q-btn
        size="12px"
        dense
        flat
        color="primary"
        icon="filter_alt"
        label="Filter"
      />
      <q-space />
      <div>
        <q-btn
          dense
          flat
          icon="view_list"
          color="primary"
          v-if="isList"
          @click="viewOption"
        />
        <q-btn
          dense
          flat
          icon="grid_view"
          color="primary"
          v-else
          @click="viewOption"
        />
      </div>
    </div>
    <div class="Ad__list-grid q-pa-lg bg-grey-2" v-if="isList">
      <div class="card-wrapper" v-for="(list, index) of dataset" :key="index">
        <q-card>
          <q-img :src="list.url">
            <div class="absolute-bottom text-subtitle2 text-center text-grey-9">
              {{ list.partner }}
            </div>
          </q-img>
        </q-card>
      </div>
    </div>
    <div class="Ad__list-list q-pa-lg bg-grey-2" v-else>
      <q-card
        class="q-mb-sm"
        flat
        bordered
        square
        v-for="(list, index) of dataset"
        :key="index"
      >
        <q-card-section horizontal>
          <q-img class="col-xs-3 col-sm-3 col-md-2 col-lg-1" :src="list.url" />
          <q-card-section>
            {{ list.partner }}
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      isList: true,
      dataset: [
        {
          partner: "Ad Demo",
          url:
            "https://upload.wikimedia.org/wikipedia/commons/2/24/Ad-MediumRectangle-300x250.jpg",
          isVanilla: false,
          size: "300x250",
          format: "Display"
        },
        {
          partner: "Ad Demo",
          url:
            "https://upload.wikimedia.org/wikipedia/commons/2/24/Ad-MediumRectangle-300x250.jpg",
          isVanilla: false,
          size: "300x250",
          format: "Display"
        },
        {
          partner: "Ad Demo",
          url:
            "https://upload.wikimedia.org/wikipedia/commons/2/24/Ad-MediumRectangle-300x250.jpg",
          isVanilla: false,
          size: "300x250",
          format: "Display"
        },
        {
          partner: "Ad Demo",
          url:
            "https://upload.wikimedia.org/wikipedia/commons/2/24/Ad-MediumRectangle-300x250.jpg",
          isVanilla: false,
          size: "300x250",
          format: "Display"
        },
        {
          partner: "Ad Demo",
          url:
            "https://upload.wikimedia.org/wikipedia/commons/2/24/Ad-MediumRectangle-300x250.jpg",
          isVanilla: false,
          size: "300x250",
          format: "Display"
        },
        {
          partner: "Ad Demo",
          url:
            "https://upload.wikimedia.org/wikipedia/commons/2/24/Ad-MediumRectangle-300x250.jpg",
          isVanilla: false,
          size: "300x250",
          format: "Display"
        }
      ]
    };
  },
  methods: {
    viewOption() {
      this.isList = !this.isList;
    }
  }
};
</script>

<style lang="scss" scoped>
.Ad__header {
  border-radius: 0;
  .Ad__header-parallax {
    background-size: cover;
    background-color: #140633;
  }
}

.Ad__list-grid {
  -moz-column-width: 14remq;
  -webkit-column-width: 14rem;
  column-width: 14rem;
  -moz-column-gap: 0.5rem;
  -webkit-column-gap: 0.5rem;
  column-gap: 0.5rem;

  .card-wrapper {
    display: inline;
    width: 100%;
    .q-card {
      margin-bottom: 0.5em;
      .q-img {
        div {
          background: rgb(193 193 193 / 47%);
        }
      }
    }
  }
}
</style>
