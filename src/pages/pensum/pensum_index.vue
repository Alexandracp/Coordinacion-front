<template>
    <div class="content">
      <div class="md-layout">
        <div class="md-layout-item md-size-55 mx-auto">
          <md-card>
            <md-card-header data-background-color="orange">
              <h2 class="title">Plan de Estudio</h2>
              <p class="category">
                Elige la carrera y la vigencia del plan de estudio que quieres visualizar
              </p>
            </md-card-header>
  
            <md-card-content>
              <div class="table-responsive table-upgrade">
                
                <table class="table" cellspacing="0">
                  <tbody>
                    <tr>
                      <td>Carrera</td>
                      <td><select class="form-control" >
                          <option> Elige una opcion</option></select>
                      </td>
                    </tr>
                    <tr>
                        <td>Año de Vigencia</td>
                        <td><select class="form-control" >
                            <option> Elige una opcion</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td >
                        <md-button
                          to="/pensum/mostrar"
                          class="md-warning md-round"
                          >Buscar</md-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </md-card-content>
          </md-card>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" scoped>
  .mx-auto {
    margin-left: auto !important;
    margin-right: auto !important;
  }
  
  .md-card {
    margin-top: 50px;
  }
  
  .table-responsive {
    overflow: auto;
  }
  
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
  
    thead tr th {
      font-size: 14px;
      border-top-width: 0;
      font-weight: 300;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    }
  
    & > tbody > tr > td,
    & > tbody > tr > th,
    & > tfoot > tr > td,
    & > tfoot > tr > th,
    & > thead > tr > td,
    & > thead > tr > th {
      padding: 20px 30px;
      vertical-align: middle;
    }
  
    & > tbody > tr {
      position: relative;
    }
  
    td,
    th {
      font-size: 20px;
      padding: 0.75rem;
      vertical-align: top;
      border-top: 1px solid rgba(0, 0, 0, 0.06);
    }
  }
  </style>
  