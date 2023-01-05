<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card class="md-card-plain">
          <md-card-header data-background-color="blue">
            <h2 class="title">Docentes</h2>
          </md-card-header>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"></div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>import_contacts</md-icon>
          </template>

          <template slot="content">
            <h5 class="category">General</h5>
            <h4 class="title">Directorio</h4>
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
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">

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

      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">

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
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">

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
  StatsCard
} from "@/components";

export default {
  components: {
    StatsCard
  },
  data() {
    return {
    };
  },
};
</script>
