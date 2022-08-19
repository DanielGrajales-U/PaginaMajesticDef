<template>
  <form class='form-camisetas'>
   <div class="selectTipo">
     <h1>Tipo de Producto</h1>
     <select ref='tipoProducto' class="select tipo" >
        <option value="Camiseta" @click="llamado">Camiseta</option>
        <option value="Saco" @click="llamado" >Saco</option>
        <option value="Jean" @click="llamado" >Jean</option>
        <option value="Gorra" @click="llamado" >Gorra</option>
        <option value="Zapatillas" @click="llamado" >Zapatillas</option>
    </select>
   </div>
    <div class="containerInfo animate-bg">
        <div class="camisetas" ref="estadoCamiseta" v-if="estadoCamiseta">
            <camisetasInventarioVue></camisetasInventarioVue>
        </div>
        <div class="gorras" ref="estadoGorra" v-if="estadoGorra">
            <gorrasInventarioVue></gorrasInventarioVue>
        </div>
        <div class="jeans" ref="estadoJean" v-if="estadoJean">
            <jeansInventarioVue></jeansInventarioVue>
        </div>
        <div class="sacos" ref="estadoSaco" v-if="estadoSaco">
            <sacosInventarioVue></sacosInventarioVue>
        </div>
        <div class="zapatillas" ref="estadoZapatilla" v-if="estadoZapatilla">
            <zapatillasInventarioVue></zapatillasInventarioVue>
        </div>
    </div>
  </form>
</template>
<script setup>
import {ref} from 'vue'

import camisetasInventarioVue from "./inventarioComponents/camisetasInventario.vue"
import gorrasInventarioVue from "./inventarioComponents/gorrasInventario.vue"
import jeansInventarioVue from "./inventarioComponents/jeansInventario.vue"
import sacosInventarioVue from "./inventarioComponents/sacosInventario.vue"
import zapatillasInventarioVue from "./inventarioComponents/zapatillasInventario.vue"

const estadoCamiseta = ref(false)
const estadoGorra = ref(false)
const estadoJean = ref(false)
const estadoSaco = ref(false)
const estadoZapatilla = ref(false)


const tipoProducto = ref(null)
const llamado = (()=> {
	const valueTipoProducto = tipoProducto.value
    const res = valueTipoProducto.value
    if(res === 'Camiseta'){
        estadoCamiseta.value = true
        estadoGorra.value = false
        estadoJean.value = false
        estadoSaco.value = false
        estadoZapatilla.value = false
    }
    if(res === 'Gorra'){
        estadoCamiseta.value = false
        estadoGorra.value = true
        estadoJean.value = false
        estadoSaco.value = false
        estadoZapatilla.value = false
    }
    if(res === 'Jean'){
        estadoCamiseta.value = false
        estadoGorra.value = false
        estadoJean.value = true
        estadoSaco.value = false
        estadoZapatilla.value = false
    }
    if(res === 'Saco'){
        estadoCamiseta.value = false
        estadoGorra.value = false
        estadoJean.value = false
        estadoSaco.value = true
        estadoZapatilla.value = false
    }
    if(res === 'Zapatillas'){
        estadoCamiseta.value = false
        estadoGorra.value = false
        estadoJean.value = false
        estadoSaco.value = false
        estadoZapatilla.value = true
    }
})



</script>



<style>

</style> 