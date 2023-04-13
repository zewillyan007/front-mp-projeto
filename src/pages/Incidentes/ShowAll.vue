<template>
  <q-page padding>
    <h3>Incidentes</h3>
    <q-table title="" :rows="rows" :columns="columns" row-key="name" />
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { getAllIncidentes } from 'src/repo/incidentes';
import { GridColum } from 'src/repo/models/incidentes';
import { HumanReadbaleDate } from 'src/utils/data';

const rows = ref<GridColum[]>([]);
const columns: any[] = [
  {
    name: 'sharkSpecies',
    required: true,
    label: 'Espécie',
    align: 'left',
    field: 'sharkSpecies',
    sortable: true,
  },
  {
    name: 'sharkLength',
    align: 'center',
    label: 'Tamanho',
    field: 'sharkLength',
    sortable: true,
  },
  {
    name: 'sharkWeight',
    label: 'Peso',
    field: 'sharkWeight',
    sortable: true,
  },
  {
    name: 'locationName',
    label: 'Local',
    field: 'locationName',
  },
  {
    name: 'incidenceDateTime',
    label: 'Quando',
    field: 'incidenceDateTime',
    sortable: true,
  },
];

onMounted(() => {
  getAllIncidentes().then((resp) => {
    rows.value = (resp?.data.data || []).map((row) => ({
      sharkSpecies: row.Shark.Species,
      sharkLength: row.Shark.Length,
      sharkWeight: row.Shark.Weight,
      locationName: row.Location.Name,
      incidenceDateTime: HumanReadbaleDate(row.IncidenceDateTime),
    }));
  });
});
</script>

<style scoped lang="scss">
// coed
</style>
