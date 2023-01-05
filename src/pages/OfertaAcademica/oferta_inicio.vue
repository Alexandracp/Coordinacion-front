<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card class="md-card-plain">

          <md-card-header data-background-color="blue">
            <h2 class="title">Oferta Academica</h2>
          </md-card-header>

        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"></div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33">
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>edit_note</md-icon>
          </template>

          <template slot="content">
            <h5 class="category">Carga</h5>
            <h5 class="title">Academica</h5>
          </template>

          <template slot="footer">
            <div class="stats">
              <div class="stats">
                <a href="#pablo">Ir a la opcion</a>
              </div>
            </div>
          </template>

        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33">

        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>insert_invitation</md-icon>
          </template>

          <template slot="content">
            <h5 class="category">Visualizacion</h5>
            <h4 class="title">Horarios</h4>
          </template>

          <template slot="footer">
            <div class="stats">
              <a href="#pablo">Ir a la opcion</a>
            </div>
          </template>
        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33">

        <stats-card data-background-color="purple">
          <template slot="header">
            <md-icon>format_list_bulleted</md-icon>
          </template>

          <template slot="content">
            <h5 class="category">Visualizacion </h5>
            <h4 class="title">Reportes</h4>
          </template>

          <template slot="footer">
            <div class="stats">
              <div class="stats">
                <a href="#pablo">Ir a la opcion</a>
              </div>
            </div>
          </template>
        </stats-card>
      </div>

      <div v-for="pensum in pensums" v-bind:key="pensum.id">
        <h2>{{ pensum.id }}</h2>
        <p>{{ pensum.cod }}</p>
      </div>

    </div>
  </div>
</template>

<script>
import {
  StatsCard,
  //ChartCard,
  //NavTabsCard,
  //NavTabsTable,
  //OrderedTable,
} from "@/components";

import axios from "axios";

export default {
  components: {
    StatsCard,
    // ChartCard,
    //NavTabsCard,
    //NavTabsTable,
    //OrderedTable,
  },
  data() {
    return {
      pensums: [],
    };
  },
  methods: {
    async getPensums() {
      // GET request using fetch with async/await
      const response = await fetch("http://127.0.0.1:8000/api/pensum");
      const data = await response.json();
      console.log(data);

      this.pensums = data;
    },
    async POSTPensums({ data }) {
      // GET request using fetch with async/await
      const response = await fetch("http://127.0.0.1:8000/api/pensum?id=1", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const data = await response.json();
      console.log(data);

      this.pensums = data;
    }

  },

  mounted() {
    this.getPensums();
  }
};
</script>
