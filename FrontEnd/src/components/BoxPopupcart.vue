<template>
  <div class="box">
    <span v-if="!hasBox()">No Box Selected</span>
     <span  v-if="this.getCurrentBoxPopupCart" class="item-price">
       <img :src="'http://localhost:8069/'+this.getCurrentBoxPopupCart.image"
       width="50px" height="50px"/> -  {{this.getCurrentBoxPopupCart.name}}
      </span>
    <div
      v-for="(box, index) in this.getCurrentBoxPopupCart.boxBenefits"
      :key="index"
      class="box-item"
    >
   
      <span class="item-price"> 
      <input type="checkbox" id="checkbox" v-model="checked"><label for="checkbox">
        {{ checked }}</label> {{ box.benefit.name }} - $ {{ box.benefit.price }}</span>
      
     
    </div>
    <div class="cart-info" v-if="hasBox()">
      <span>Total: $ {{ totalPrice() }}, 00</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import btn from './Btn';

export default {
  components: {
    btn,
  },
  methods: {
    ...mapActions(['showOrHiddenBoxPopupCart']),
    hasBox() {
      return this.getCurrentBoxPopupCart && this.getCurrentBoxPopupCart.boxBenefits!== undefined && this.getCurrentBoxPopupCart.boxBenefits.length > 0;
    },
    totalPrice() {
      console.log(this.getCurrentBoxPopupCart)
      return this.getCurrentBoxPopupCart.boxBenefits.reduce(
        (current, next) => current + next.benefit.price, 0);
    },
    showPopupCart() {
      this.showOrHiddenBoxPopupCart();
    },
  },
  computed: {
    ...mapGetters(['getCurrentBoxPopupCart']),
  },
};
</script>

<style scoped>
.box {
  width: 50%;
  height: auto;
  background-color: #fafafa;
  box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 1em 0.5em;
  position: absolute;
  z-index: 1;
}

.box:after {
  content: "";
  transform: rotate(45deg);
  background: inherit;
  position: relative;
}

.box-item {
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 0 0.5em;
  margin-top: 0.3em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.item-thumb {
  max-width: 70%;
  grid-column: 1/2;
  grid-row: 1/4;
  align-self: center;
}

.item-name {
  grid-column: 2/4;
  grid-row: 1/2;
  font-weight: normal;
}

.item-amount {
  grid-column: 2/3;
  grid-row: 2/4;
  color: #ddd;
}

.cart-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
