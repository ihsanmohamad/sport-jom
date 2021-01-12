<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Search Drink</ion-title>
      </ion-toolbar>
        <ion-searchbar  debounce="500" :onIonChange="(e) => fetchSearchResults(e.detail.value)" placeholder="Drink Name" :value="state.lastSearch">
        </ion-searchbar>
        
    </ion-header>
    <ion-content v-if="state.loading"> 
      <div class="loading-center">
        <ion-spinner color="primary"></ion-spinner>
      </div>
    </ion-content>
    <ion-content :fullscreen="true" v-else>
      <div class="center" v-if="state.searchResults && state.searchResults.length === 0">
        <ion-label>No results</ion-label>
      </div>
      <facility-card></facility-card>
    </ion-content>
  </ion-page>
</template>

<script >
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonSpinner, IonLabel } from '@ionic/vue';
import {reactive} from "vue";
import axios from "axios";
import FacilityCard from "@/components/FacilityCard.vue";


export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, FacilityCard, IonSearchbar, IonSpinner, IonLabel },
  setup() {
    const state = reactive({
      searchResults: [],
      loading: false,
      lastSearch: "" 
    });
    
    const fetchSearchResults = async (searchTerm) => {
      state.lastSearch = "";
      state.loading = true;
      if(searchTerm) {
        state.lastSearch = searchTerm;
        state.searchResults = [];
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);

        if (res.data) {
          state.searchResults = res.data?.drinks
        }
      } else {
        state.lastSearch = "";
        state.searchResults = [];
      }
      state.loading = false;
    }

    return {
      state, fetchSearchResults
    }
  }
}
</script>

<style scoped>
.loading-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

ion-spinner {
  transform: scale(2.5);
}
ion-searchbar {
  --background: #ffffff;
  --color: #000000;
}
</style>