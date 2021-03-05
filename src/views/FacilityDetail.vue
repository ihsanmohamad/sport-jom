<template>
     <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
            <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Sport Center</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content v-if="state.loading">
      <div class="loading-center">
        <ion-spinner color="primary"></ion-spinner>
      </div>
    </ion-content>
    <ion-content :fullscreen="true" v-else>
      <facility-card></facility-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {reactive} from "vue";
import {useRoute} from "vue-router";
// import axios from "axios";

import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonSpinner} from "@ionic/vue";
import FacilityCard from "@/components/FacilityCard.vue";


export default {
    name: "Drink",
    components: {
        IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonSpinner, FacilityCard
    },
    setup() {
        const route = useRoute();

        const state = reactive({
           
            loading: false
        });
        
      

        return {
            route, state,
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
</style>