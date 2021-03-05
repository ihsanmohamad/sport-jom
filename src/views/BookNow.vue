<template>
  <ion-page>

      <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
              <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
        <ion-title>{{ category }}</ion-title>
      </ion-toolbar>
      
    </ion-header>

    <ion-content v-if="state.loading">
      <div class="loading-center">
        <ion-spinner color="primary"></ion-spinner>
      </div>
    </ion-content>
    <ion-content :fullscreen="true" v-else>
    
        
        <!-- <ion-list v-for="team in state.searchResults" :key="team">
             <ion-item>
                <ion-label>
                    <h2>{{ team.name }}</h2>
                </ion-label>
            </ion-item> -->
     
      <ion-card class="card" button="true">
        <ion-card-content class="ion-text-left">

          <div class="img-wrapper">
            <ion-img :src="facility.profile_pic"></ion-img>
            <!-- <ion-img src="https://scontent.fpen1-1.fna.fbcdn.net/v/t31.0-8/13497570_674072116077491_5888554000269933018_o.jpg?_nc_cat=100&ccb=2&_nc_sid=dd9801&_nc_ohc=RrBP1Aw7sfgAX_l2ZUK&_nc_ht=scontent.fpen1-1.fna&oh=d281183cb0685335878cd0fdcf8807cb&oe=60245D06"></ion-img> -->
          </div>
          
          <ion-card-title class="title">{{state.team_data.name}}</ion-card-title>
          <ion-list v-for="member in state.team_data.members" :key="member">
              <ion-item>
                  <ion-label>{{ member }}</ion-label>
              </ion-item>
          </ion-list>
          
        </ion-card-content>
      </ion-card>

    </ion-content>
      
  </ion-page>
</template>

<script>
import { IonPage, IonList, IonItem, IonLabel } from "@ionic/vue";
import {reactive, onBeforeMount} from "vue";
import {useRouter, useRoute} from "vue-router";
import axios from 'axios';
export default {
    components: {
        IonPage, IonList, IonItem, IonLabel
    },
    setup() {
        const router = useRouter();
        const route = useRoute();

        const team = reactive({
            id : route.params.id
        });

         const state = reactive({
      
      team_data: {},
      loading: false,
      lastSearch: "" 
    })

    

    const fetchResults = async () => {
      state.loading = true;
      
        const res = await axios.get(`http://192.168.1.8:8000/team/${team.id}`);

        if (res.data) {
          state.team_data = res?.data
        }
      
      state.loading = false;
    }

    onBeforeMount(() =>{
      fetchResults();
    })
    fetchResults();
        return {team, router, state};
    }
}
</script>

<style>

</style>