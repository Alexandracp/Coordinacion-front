<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-35">
        <stats-card data-background-color="blue">

          <template slot="header">
            <md-icon>person</md-icon>
          </template>

          <template slot="content">
            <p class="category">Docentes Activos</p>
            <h3 class="title">50</h3>
          </template>

        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-30">
        <stats-card data-background-color="orange">

          <template slot="header">
            <md-icon>diversity_3</md-icon>
          </template>

          <template slot="content">
            <p class="category"> Estudiantes Activos</p>
            <h3 class="title"> 270 </h3>
          </template>

        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-35">
        <stats-card data-background-color="green">

          <template slot="header">
            <md-icon>menu_book</md-icon>
          </template>

          <template slot="content">
            <p class="category"> Período Academico</p>
            <h3 class="title">2-2017</h3>
          </template>

        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h2 class="title">Informacion de Carrera</h2>
          </md-card-header>
          <md-card-content>
            <div id="typography">
              <div class="row">
                <div class="tim-typo">
                  <h5>
                    <span class="tim-note">Coordinador (a) :</span>Nombre y apellido
                  </h5>
                </div>
                <div class="tim-typo">
                  <h5>
                    <span class="tim-note">Carrera :</span>Ingenieria de Sistemas
                  </h5>
                </div>
                <div class="tim-typo">
                  <h5>
                    <span class="tim-note">Área de Conocimiento :</span>bla bla bla
                  </h5>
                </div>
                <div class="tim-typo">
                  <h5>
                    <span class="tim-note">Regimen :</span>Diurno
                  </h5>
                </div>
              </div>
            </div>
          </md-card-content>
        </md-card>
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
      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]],
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]],
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De",
          ],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          ],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
    };
  },
};
</script>
