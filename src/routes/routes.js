import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

import docente_inicio from "@/pages/docentes/docente_inicio.vue";
import estudiante_inicio from "@/pages/estudiantes/estudiante_inicio.vue";
import oferta_inicio from "@/pages/OfertaAcademica/oferta_inicio.vue";
import pensum_index from "@/pages/pensum/pensum_index.vue";
import pensum from "@/pages/pensum/visualizacion.vue";


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Panel",
        component: Dashboard,
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
      },
      {
        path: "table",
        name: "Table List",
        component: TableList,
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography,
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true,
        },
        component: Maps,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO,
      },
      {
        path: "docente",
        name: "Docente",
        component: docente_inicio,
      },
      {
        path: "estudiante",
        name: "Estudiantes",
        component: estudiante_inicio,
      },
      {
        path: "ofertacademica",
        name: "Oferta Academica",
        component: oferta_inicio,
      },
      {
        path: "pensum",
        name: "Plan de Estudio",
        component: pensum_index,
      },
      {
        path: "pensum/mostrar",
        name: "Plan de Estudio",
        component: pensum,
      },
    ],
  },
];

export default routes;
