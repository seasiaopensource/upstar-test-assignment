<template>
  <ul class="listOfBoxes">
    <li v-for="(box, index) in boxesss" :key="index" class="box">
      <img :src="'http://localhost:8069/' + box.image" class="boxImg" alt="Box Icon" />
      <h2 class="box-name">
        {{ box.name }}
      </h2>
      <div class="box-price">
        <span v-if="index === 0">$69 (Free Shipping)</span>
        <span v-else-if="index === 1"> $79 (Free Shipping)</span>
        <span v-else-if="index === 2"> $99 (Free Shipping)</span>
      </div>
      <router-link to="/products">
        <btn
          btnColor="btn btn-large btn-sucess"
          @click.native="addCurrentBoxPlan(box)"
        >
          Choose
        </btn>
      </router-link>
    </li>
  </ul>
</template>
<script>
/* eslint-disable */
import { mapActions } from "vuex";
import btn from "./Btn";
import axios from "axios";
export default {
  props: ["boxes"],
  data() {
    return {
      boxesss: {},
    };
  },
  components: {
    btn,
  },
  methods: {
    ...mapActions(["addBox", "currentBox"]),

    addBoxPlan(box) {
      this.addBox(box);
    },
    addCurrentBoxPlan(box) {
      console.log(box);
      this.currentBox(box);
    },
    boxList: function () {
      const response = axios({
        method: "GET",
        url: "http://localhost:8069/api/v1/boxList",
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        this.boxesss = res.data.data;
      });
    },
  },
  beforeMount() {
    this.boxList();
  },
};
</script>

<style scoped>
.listOfBoxes {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}
.boxImg {
  width : 100px;
  height: 100px
}
.box {
  width: 300px;
  background-color: #fff;
  list-style: none;
  box-sizing: border-box;
  padding: 1em;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
}

.box-name {
  font-size: 1.2em;
  font-weight: normal;
}

.box-name:hover {
  cursor: pointer;
  text-decoration: underline;
}

.box-price {
  width: 100%;
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
}
</style>

