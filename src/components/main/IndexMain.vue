<template>
    <div class="main-container">
        <div class="content-area">
            <div class="pc-layout">
                <pc-main></pc-main>
            </div>
            <div class="mobile-layout">
                <mobile-main></mobile-main>
            </div>
        </div>
    </div>
</template>

<script>
import PcMain from './PcMain.vue';
import MobileMain from './MobileMain.vue';
import { jsonStringfy } from "@/assets/js/common.js";

export default {
  components: { PcMain,MobileMain },

  computed: {
        actionGetError() {
            return (this.$store.state.errorData) ? jsonStringfy(this.$store.state.errorData) : ""; 
        },
        actionProductList() {
            return this.$store.state.productList;
        }
    },
    async created() {
        await this.$store.dispatch('FETCH_PRODUCT_LIST',this.productPageInfo);
    },
    data() {
        return {
            productPageInfo: {
                sort: 'new',
                offset: 0,
                limit: 20,
            }
        }
    },
    
    methods: {

    },
}
</script>

<style scoped>

</style>