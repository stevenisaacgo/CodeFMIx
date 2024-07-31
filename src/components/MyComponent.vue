<template>
    <div>
      <div v-if="loading">Cargando...</div>
      <div v-if="error">Error: {{ error.message }}</div>
      <div v-if="data">
        
        <p>{{ data }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
import { useApiStore } from '../stores/apiStore';

const apiStore = useApiStore();
const categoria = ref('javascript');
const level = ref('facil');

onMounted(() => {
  apiStore.fetchData(categoria.value, level.value);
});

const { data, loading, error } = apiStore;
</script>
  </script>
  
  <style>
  </style>