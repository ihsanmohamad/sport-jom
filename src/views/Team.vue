<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
              <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
        <ion-title>Search Teams</ion-title>
      </ion-toolbar>
      <ion-toolbar>
          <ion-searchbar debounce="500" :onIonChange="(e) => fetchSearchResults(e.detail.value)" placeholder="Team" :value="state.lastSearch">

        </ion-searchbar>
        
        </ion-toolbar>
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
        <ion-list v-for="team in state.searchResults" :key="team">
             <ion-item @click="() => router.push(`/team/${team.id}`)">
                <ion-label>
                    <h2>{{ team.name}}</h2>
                </ion-label>
            </ion-item>
        </ion-list>
          <ion-fab horizontal="end" vertical="bottom" slot="fixed" >
        <ion-fab-button color="danger" @click="() => router.push('/team/create')">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

     
    </ion-content>
  
     

  </ion-page>
</template>

<script>
import { 
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
    IonBackButton, IonSpinner, IonSearchbar, IonLabel, IonIcon, IonFab, IonFabButton} from '@ionic/vue';
import {reactive, onBeforeUpdate} from "vue";
import { add } from "ionicons/icons"
import {useRouter, useRoute} from "vue-router";
import axios from "axios";


export default  {
  name: 'SearchTeam',
  components: { 
      IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons,
       IonBackButton, IonSpinner, IonSearchbar, IonLabel, IonIcon, IonFab, IonFabButton},
  setup() {
    const router = useRouter();
    const route = useRoute();
    const category = route.params.category;

    const state = reactive({
      
      searchResults: {},
      loading: false,
      lastSearch: "" 
    })

    const fetchSearchResults = async (searchTerm) => {
      state.lastSearch = "";
      state.loading = true;
      if(searchTerm) {
        state.lastSearch = searchTerm;
        state.searchResults = [];
        const res = await axios.get(`http://192.168.1.8:8000/facility/filter?name=${searchTerm}`);

        if (res.data) {
          state.searchResults = res?.data
        }
      } 
      state.loading = false;
    }

   const fetchResults = async () => {
      state.loading = true;
      
        const res = await axios.get(`http://192.168.1.8:8000/team`);

        if (res.data) {
          state.searchResults = res?.data
        }
      
      state.loading = false;
    }


    onBeforeUpdate(() =>{
      fetchResults();
    })

    
    return {
      router,
      state,
      category,
      fetchSearchResults,
      add
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

ion-back-button {
  --color: #ffffff;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

</style>