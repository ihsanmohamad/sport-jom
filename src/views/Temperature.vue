<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
              <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
        <ion-title>Temperature</ion-title>
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
      <ion-row v-for="data in temp.reading" :key="data" >
        <ion-col>
          <ion-card class="menu ion-text-center" button="true">
                <ion-card-header>Temperature</ion-card-header>
                <ion-card-title>{{data}}</ion-card-title>
                <ion-card-header> </ion-card-header>
          </ion-card>
        </ion-col>
      </ion-row>
     </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script >
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton} from '@ionic/vue';
import {useRouter} from 'vue-router';
import axios from 'axios';
import { reactive, onBeforeMount } from 'vue';

export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton},
  setup() {

    const temp = reactive({
        reading: {},
        latest: ""
    })

    const router = useRouter();

    const getTemp = async () => {
        const res = await axios.get(`https://sportjom-6d5d7.firebaseio.com/MLX90614/Temperature.json`);
        console.log(res.data);
    if(res.data) {

            temp.reading = res.data;
            temp.last = res.data.slice(-1);
        }
    }
    onBeforeMount(() => {
        getTemp();
    })

    return {
      temp, router
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
    display: flex;
  align-items: center;
  justify-content: center;
}
ion-card-title {
  padding: auto;
}

</style>