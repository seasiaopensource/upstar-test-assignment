<template>
 <ListOfBoxes :boxes="getBoxPlan"/>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import ListOfBoxes from './ListOfBoxes';
import axios from "axios";
const BASE_URL = 'http://localhost:8069/api/v1/';

export default {
  components: {
    ListOfBoxes,
  },
  computed: {
    ...mapGetters([
      'getBoxPlan',
    ]),
  },
};
</script>

