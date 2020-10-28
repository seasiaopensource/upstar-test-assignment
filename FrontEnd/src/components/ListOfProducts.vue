<template>
  <div>
        <btn
          btnColor="btn btn-large btn-sucess"
          class="custom-btn"
          @click.native="showPopupCart()"
        >
         Want Custom Box?
        </btn>
  <router-link to="/">
        <btn
        class="back-btn"
        btnColor="btn btn-large btn-sucess"
        >
          Back
        </btn>
  </router-link>
  <transition name="appear">
        <popupcart class="cart" v-if="getBoxPopupCart"/>
  </transition>
  <transition name="leave">
      <router-view></router-view>
    </transition>
    <maskBg v-if="getBoxPopupCart" @click.native="showPopupCart()"/>
  <ul class="listOfProducts">
    <li v-for="(product, index) in products" :key="index" class="product">
      <img :src="product.image" alt="" />
      <router-link to="/product-details">
        <h2 class="product-name" @click="addCurrentProduct(product)">
          {{ product.name }}
        </h2>
      </router-link>
      <div class="product-price">
        <span>R$ {{ product.price }}, 00</span>
        <span>10 x {{ Math.round(product.price / 10) }}, 00 </span>
      </div>

      <btn
        btnColor="btn btn-large btn-sucess"
        :cartIcon="true"
        @click.native="addProductToCart(product)"
      >
        Add to cart
      </btn>
    </li>
  </ul>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions } from 'vuex';
import btn from './Btn';
import axios from "axios";
import maskBg from './Mask';
import popupcart from './BoxPopupcart';

export default {
  props: ['products'],

  components: {
    btn,
     maskBg,
     popupcart
  },
  methods: {
    ...mapActions(['addProduct', 'currentProduct', 'showOrHiddenBoxPopupCart']),

    addProductToCart(product) {
      this.addProduct(product);
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    },
    showPopupCart() {
      this.showOrHiddenBoxPopupCart();
    },
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
      'showBoxPopupCart',
      'getBoxPopupCart'
    ]),
  },
};
</script>

<style scoped>
.listOfProducts {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}
.custom-btn {
  float: left;
  margin: 1rem;
}
.back-btn {
  float: right;
   margin: 1rem;
}
.product {
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

.product-name {
  font-size: 1.2em;
  font-weight: normal;
}

.product-name:hover {
  cursor: pointer;
  text-decoration: underline;
}

.product-price {
  width: 100%;
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
}
</style>

