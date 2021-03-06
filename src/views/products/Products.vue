<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="banner-normal text-center" style="height: 700px">
      <h2 class="text-80 text-white text-lighter">{{ category }}</h2>
      <div
        class="banner-img bg-cover"
        v-if="category === 'EARRINGS'"
        style="
          background-image: url(https://upload.cc/i1/2020/09/20/sgr9KE.jpg);
        "
      ></div>
      <div
        class="banner-img bg-cover"
        v-else-if="category === 'NECKLACES'"
        style="
          background-image: url(https://upload.cc/i1/2020/09/20/GEmIny.jpg);
        "
      ></div>
      <div
        class="banner-img bg-cover"
        v-else
        style="
          background-image: url(https://upload.cc/i1/2020/09/20/bpaJSF.jpg);
        "
      ></div>
    </div>
    <div class="mx-lg-20 mb-5 mt-15 mt-lg-20 mx-15">
      <h3 class="products-category text-gray05 text-lighter">{{ category }}</h3>
      <div class="row">
        <div
          class="col-md-4 col-i6-6 mb-lg-20 mb-md-15 mb-10 px-lg-10 px-md-7 px-5"
          v-for="item in products"
          :key="item.id"
        >
          <div class="text-center bg-gray02 p-lg-35 p-i6p-20 p-i6-10 p-20">
            <div class="text-right">
              <a
                class="products-heart far fa-heart text-gray05"
                href="#"
                @click.prevent="saveItem(item)"
              ></a>
            </div>
            <router-link :to="`/product/${item.id}`">
              <img
                v-if="
                  item.title &&
                  item.title.indexOf('LARGE VINTAGE EARRING') !== -1
                "
                :src="item.imageUrl"
                width="83%"
                :alt="item.title"
                class="my-lg-95 my-md-40 my-30"
              />
              <img
                v-else-if="
                  item.title &&
                  item.title.indexOf('SMALL VINTAGE EARRING') !== -1
                "
                :src="item.imageUrl"
                width="66%"
                :alt="item.title"
                class="my-lg-110 my-md-48 my-35"
              />
              <img
                v-else-if="item.title && item.title.indexOf('NECKLACE') !== -1"
                :src="item.imageUrl"
                :alt="item.title"
                class="products-img-necklace mb-lg-40 mb-20"
              />
              <img
                v-else
                :src="item.imageUrl"
                :alt="item.title"
                class="products-img-bracelet mb-lg-40 mb-20"
              />
              <h4 class="products-category-title text-black text-lighter">
                {{ item.title }}
              </h4>
              <span class="products-category-price text-black">{{
                item.price | currency
              }}</span>
              <div
                class="color-options d-flex justify-content-center pt-10 pb-20 mb-10 border-bottom border-gray04"
              >
                <div
                  class="products-color bg-black mr-lg-10 mr-5 rounded-circle"
                ></div>
                <div class="products-color bg-white rounded-circle"></div>
              </div>
            </router-link>
            <div class="add-btn">
              <div class="available-to-add" v-if="item.is_enabled === 1">
                <button
                  type="button"
                  @click="addToCart(item.id)"
                  class="btn-add-bag btn btn-gray02 btn-block font-weight-bold text-gray05 py-10"
                >
                  <span class="d-md-inline-block d-i6-none"
                    >ADD TO SHOPPING BAG</span
                  >
                  <span class="d-md-none d-i6-inline-block d-none"
                    >ADD TO BAG</span
                  >
                </button>
              </div>
              <div class="unavailable-to-add" v-else>
                <button
                  disabled
                  type="button"
                  class="btn-add-bag btn btn-gray02 btn-block font-weight-bold text-gray05 py-10"
                >
                  <span class="d-md-inline-block d-i6-none">SOLD OUT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      category: '',
      products: [],
      isLoading: false,
      browserHeight: `${window.innerHeight}px`,
      saved: JSON.parse(localStorage.getItem('savedItems')) || []
    }
  },
  methods: {
    getProducts () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      vm.isLoading = true
      vm.products = []
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          let tempProducts = []
          tempProducts = response.data.products
          tempProducts.forEach(function (item) {
            if (item.category === vm.category) {
              vm.products.push(item)
            }
          })
          vm.products.reverse()
        }
        vm.isLoading = false
      })
    },
    addToCart (id, qty = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.isLoading = true
      const cart = {
        product_id: id,
        qty
      }
      vm.$http.post(api, { data: cart }).then((response) => {
        vm.$bus.$emit('AddItem:getCart')
        vm.isLoading = false
      })
    },
    saveItem (product) {
      const vm = this
      const tempSaved =
        vm.saved.find(function (item) {
          return item.id === product.id
        }) || {}
      if (tempSaved.id === product.id) {
        return
      }
      vm.products.forEach(function (value) {
        if (value.id === product.id) {
          vm.saved.push(value)
        }
      })
      localStorage.setItem('savedItems', JSON.stringify(vm.saved))
      window.dispatchEvent(
        new CustomEvent('savedItems-localstorage-changed', {
          detail: {
            storage: localStorage.getItem('savedItems')
          }
        })
      )
    }
  },
  created () {
    this.category = this.$route.params.category
    this.getProducts()
  },
  watch: {
    $route: function () {
      this.category = this.$route.params.category
      this.getProducts()
    }
  }
}
</script>
