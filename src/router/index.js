import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '../views/AboutView.vue'
import ProductosView from '../views/ProductosView.vue'
import ContactoView from '../views/ContactoView.vue'
import InventarioView from '../views/InventarioView.vue'

import Camisetas from '../components/Carga Productos/Camisetas.vue'
import Jeans from '../components/Carga Productos/Jeans.vue'
import Gorras from '../components/Carga Productos/Gorras.vue'
import Sacos from '../components/Carga Productos/Sacos.vue'
import Zapatillas from '../components/Carga Productos/Zapatillas.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'nosotros',
      component:AboutView
    },
    {
      path:'/Productos',
      component:ProductosView,
      children:[
        {
          path:'/Camisetas',
          component:Camisetas
        },
        {
          path:'/Gorras',
          component:Gorras
        },
        {
          path:'/Jeans',
          component:Jeans
        },
        {
          path:'/Sacos',
          component:Sacos
        },
        {
          path:'/Zapatillas',
          component:Zapatillas
        },
      ]
    },
    {
      path:'/Contacto',
      component:ContactoView
    },
    {
      path:'/Inventario',
      component:InventarioView
    }
  ]
})

export default router
