<template>
    <div class="content">
      <div class="md-layout">
        <div class="md-layout-item">
          <md-card class="md-card-plain">

            <md-card-header data-background-color="blue">
              <h2 class="title">Estudiantes</h2>
            </md-card-header>

          </md-card>
        </div>
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"></div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33">
  
          <stats-card data-background-color="orange">
            <template slot="header">
              <md-icon>content_copy</md-icon>
            </template>
  
            <template slot="content">
              <h5 class="category">Control de </h5>
              <h4 class="title">Permisos</h4>
            </template>
  
            <template slot="footer">
              <div class="stats">
                <a href="#pablo">Ir a la opcion</a>
              </div>
            </template>
          </stats-card>
  
        </div>
  
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33">
  
          <stats-card data-background-color="red">
            <template slot="header">
              <md-icon>accessible_forward</md-icon>
            </template>
  
            <template slot="content">
              <h5 class="category">Control de </h5>
              <h4 class="title">Reposos</h4>
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
  
          <stats-card data-background-color="purple">
            <template slot="header">
              <md-icon>notification_important</md-icon>
            </template>
  
            <template slot="content">
              <h5 class="category">Control de </h5>
              <h5 class="title">Incidencias</h5>
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
      };
    },
  };
  </script>
  