<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Explore SportJom</ion-title>
      </ion-toolbar>
        <!-- <ion-searchbar  debounce="500" :onIonChange="(e) => fetchSearchResults(e.detail.value)" placeholder="Drink Name" :value="state.lastSearch">
        </ion-searchbar> -->
        
    </ion-header>
    <ion-content :fullscreen="true"> 
      <!-- <div class="loading-center">
        <ion-spinner color="primary"></ion-spinner>
      </div>
    </ion-content>
    <ion-content :fullscreen="true" v-else>
      <div class="center" v-if="state.searchResults && state.searchResults.length === 0">
        <ion-label>No results</ion-label>
      </div> -->
     <ion-grid class="ion-no-padding">
      <ion-row>
        <ion-col>
          <ion-card class="menu" button="true" @click="() => router.push('/search-facility')">
              <ion-card-header>
                <ion-card-title>Facilities</ion-card-title>
              </ion-card-header>
          </ion-card>
        </ion-col>
        <ion-col>
          <ion-card class="menu" button="true" @click="() => router.push('/team')">
              <ion-card-header>
                <ion-card-title>Team</ion-card-title>
              </ion-card-header>
          </ion-card>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-card class="menu" button="true" >
              <ion-card-header>
                <ion-card-title>Event</ion-card-title>
              </ion-card-header>
          </ion-card>
        </ion-col>
        <ion-col>
          <ion-card class="menu" button="true">
              <ion-card-header>
                <ion-card-title>Tournament</ion-card-title>
              </ion-card-header>
          </ion-card>
        </ion-col>
      </ion-row>
     </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script >
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCardTitle, IonCardHeader,
IonCard, IonCol, IonRow, IonGrid} from '@ionic/vue';
import {reactive} from "vue";
import axios from "axios";
import { useRouter } from 'vue-router';


export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCardTitle, IonCardHeader,
IonCard, IonCol, IonRow, IonGrid},
  setup() {
    const state = reactive({
      searchResults: [],
      loading: false,
      lastSearch: "" 
    });

    const router = useRouter();
    
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
      router, state, fetchSearchResults
    }
  }
}
</script>

<style scoped lang="scss">
.loading-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
}


ion-spinner {
  transform: scale(2.5);
}
ion-searchbar {
  --background: #ffffff;
  --color: #000000;
}

.menu {
  height: 150px;
}
ion-card-title {
  padding: auto;
}

</style>