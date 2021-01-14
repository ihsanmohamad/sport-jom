<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>SportJom {{ userToken }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content v-if="state.loading">
      <div class="loading-center">
        <ion-spinner color="primary"></ion-spinner>
      </div>
    </ion-content>
    <ion-content :fullscreen="true" v-else> 
      <ion-refresher slot="fixed" @ionRefresh="doRefresh" ></ion-refresher>
      <facility-card></facility-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, 
  IonContent, IonSpinner, IonRefresher} from '@ionic/vue';
import {reactive, computed} from 'vue';
import { useStore } from 'vuex'; 
import axios from 'axios';
import FacilityCard from "@/components/FacilityCard.vue";

export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSpinner, FacilityCard, IonRefresher },
  setup() {
    const state = reactive({
      randomCocktail: {},
      loading: false
    });

    const store = useStore();

    const userToken = computed(() => store.getters['userToken']);

    const fetchRandomCocktail = async(dispLoaderPage) => {
      if(dispLoaderPage) {
        state.loading = true;
      }

      const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);

      if(res.data) {
        state.randomCocktail = res.data?.drinks[0];
      }

      state.loading = false;
    }
    const doRefresh = (event) => {
      fetchRandomCocktail(false);

      
      event.target?.complete();
    }
    
    fetchRandomCocktail(true);

    return {
      state,
      fetchRandomCocktail,
      doRefresh,
      userToken
    }
  }
}
</script>

<style scoped>
.loading-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

ion-spinner {
  transform: scale(2.5);
}
</style>