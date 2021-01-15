<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>SportJom</ion-title>
        <ion-buttons slot="end">
      <ion-button @click="logout">Log out</ion-button>
      </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content v-if="state.loading">
      <div class="loading-center">
        <ion-spinner color="primary"></ion-spinner>
      </div>
    </ion-content>
    <ion-content :fullscreen="true" v-else> 
      <!-- <ion-refresher slot="fixed" @ionRefresh="doRefresh" ></ion-refresher> -->
      <div class="test">

<div class="ion-padding wrapper">
    <ion-grid class="ion-no-padding">
    <ion-row class="ion-align-items-baseline">
      <ion-col size="6">
        <h4 class="title">
          Popular Venues
        </h4>
      </ion-col>
      <ion-col size="6">
        <h4 class="more ion-text-end">
          View more
        </h4>
      </ion-col>
    </ion-row>
  </ion-grid>
</div>
 <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col size="12">
        <ion-slides :options="slideOpts">
          <ion-slide v-for="data in state.facility" :key="data" >
            <facility-card :facility="data"></facility-card>
          </ion-slide>

        </ion-slides>
      </ion-col>
    </ion-row>
  </ion-grid>

<div class="ion-padding-horizontal wrapper">
  
    <ion-grid class="ion-no-padding">
      <ion-row class="ion-align-items-baseline">
        <ion-col size="6">
          <h4 class="title">
            Explore Categories
          </h4>
        </ion-col>
        <ion-col size="6">
          <h4 class="more ion-text-end">
            Show more
          </h4>
        </ion-col>
      </ion-row>
    </ion-grid>
  
    </div>
  
    <ion-grid class="ion-no-padding">
      <ion-row>
        <ion-col size="12">
          <ion-slides :options="categoryOpts">
  
            <ion-slide>
              <ion-card class="category" button="true" @click="() => router.push('/facility-by-category/badminton')">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/icon/badminton.svg"></ion-icon>
                  <ion-card-title>Badminton</ion-card-title>
                  <ion-card-subtitle>Indoor/Outdoor</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            <ion-slide>
              <ion-card class="category" button="true" @click="() => router.push('/facility-by-category/futsal')">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/icon/futsal.svg"></ion-icon>
                  <ion-card-title>Futsal</ion-card-title>
                  <ion-card-subtitle>Indoor</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            <ion-slide>
              <ion-card class="category" button="true" @click="() => router.push('/facility-by-category/bowling')">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/icon/bowling.svg"></ion-icon>
                  <ion-card-title>Bowling</ion-card-title>
                  <ion-card-subtitle>Indoor</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            <ion-slide>
              <ion-card class="category" button="true" @click="() => router.push('/facility-by-category/basketball')">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/icon/basketball.svg"></ion-icon>
                  <ion-card-title>Basketball</ion-card-title>
                  <ion-card-subtitle>Indoor/Outdoor</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            <ion-slide>
              <ion-card class="category" button="true" @click="() => router.push('/facility-by-category/tennis')">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/icon/tennis.svg"></ion-icon>
                  <ion-card-title>Tennis</ion-card-title>
                  <ion-card-subtitle>Indoor/Outdoor</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            <ion-slide>
              <ion-card class="category" button="true" @click="() => router.push('/facility-by-category/gym')">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/icon/gym.svg"></ion-icon>
                  <ion-card-title>Gym</ion-card-title>
                  <ion-card-subtitle>Indoor</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>
          </ion-slides>
        </ion-col>
      </ion-row>
    </ion-grid>
</div>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, 
  IonContent, IonSpinner, IonButton, IonButtons, IonCol, IonRow,
  IonGrid, IonSlides, IonIcon, IonCardTitle, IonCardSubtitle, 
  IonCardHeader, IonCard, IonSlide} from '@ionic/vue';
import {reactive} from 'vue';
import { useStore } from 'vuex'; 
import axios from 'axios';
import FacilityCard from "@/components/FacilityCard.vue";
import { useRouter } from 'vue-router'

export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSpinner, IonButton, IonButtons, 
  IonCol, IonRow, IonGrid, IonSlides, IonIcon, IonCardTitle, IonCardSubtitle, 
  IonCardHeader, IonCard, IonSlide, FacilityCard },
  setup() {
    const state = reactive({
      facility: {},
      loading: false
    });

    const router = useRouter();

    const slideOpts = {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: -60,
        grabCursor: true
    };
    const categoryOpts = {
        slidesPerView: 2.0,
    };

    const store = useStore();

    // const userToken = computed(() => store.getters['userToken']);

    function logout() {
        store.dispatch('logout');
      }

    const fetchFacility = async(dispLoaderPage) => {
      if(dispLoaderPage) {
        state.loading = true;
      }

      const res = await axios.get(`http://192.168.1.5:8000/facility`);

      if(res.data) {
        state.facility = res?.data;
      }

      state.loading = false;
    }
    const doRefresh = (event) => {
      fetchFacility(false);

      
      event.target?.complete();
    }
    
    fetchFacility(true);

    return {
      state,
      fetchFacility,
      doRefresh,
      logout,
      slideOpts,
      categoryOpts,
      router
    }
  }
}
</script>

<style scoped lang="scss">
.loading-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

ion-spinner {
  transform: scale(2.5);
}

ion-item {
  --background: rgba(248, 248, 250, .96);

  h2 {
    font-weight: bold;
    font-size: 18px;
    padding-top: 8px;
  }

}


ion-searchbar {
  --box-shadow: none;
  --border-radius: 12px;
}

.more {
  font-size: 12px;
  color: #FB4E4E;
}

.title {
  font-size: 16px;
}

.card {
  margin: 0;
  margin-right: 50px;
  width: 80%;
  box-shadow: none;
  border-radius: 14px;
}


.category {
  width: 100%;
  box-shadow: none;
  border-radius: 14px;
 
}


ion-card-content {
  .img-wrapper {
    border-radius: 14px;
    height: 200px;
    overflow: hidden;
    margin-bottom: 8px;

  }

  ion-icon {
    color: #f2994a;
    padding-right: 4px;
  }

  ion-card-subtitle:last-of-type {
    padding-top:6px;
  }

}

ion-card-header {
  ion-icon {
    font-size: 60px;
  }

  ion-card-title {
    font-size: 22px;
    font-weight: bolder;
  }
}

.wrapper {
  padding-bottom: 0;
}

.test {
    margin-bottom: 10vh;
}

ion-badge {
  padding: 10px;
  font-size: 14px;
}
</style>