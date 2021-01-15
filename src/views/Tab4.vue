<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>More</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
         <ion-item>
          <ion-avatar slot="start">
            <img src="https://cdn2.thecatapi.com/images/MTY1OTg4MQ.jpg">
          </ion-avatar>
          <ion-label>Ihsan Mohamad
              <p>Free User</p>
          </ion-label>
        </ion-item>

        <ion-list class="options">
          <ion-item @click="() => router.replace('/')">
          <ion-label>
            <h2>Test</h2>
          </ion-label>
          </ion-item>
          <ion-item @click="() => router.replace('/')">
          <ion-label>
            <h2>Test 2</h2>
          </ion-label>
          </ion-item>
          <ion-item @click="() => router.replace('/')">
          <ion-label>
            <h2>Test 3</h2>
          </ion-label>
          </ion-item>
          <ion-item @click="() => router.push('/temperature')">
          <ion-label>
            <h2>Temperature record</h2>
          </ion-label>
          </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent   } from '@ionic/vue';

import {useRouter} from "vue-router";

export default {
name: 'Tab4',
  components: { IonHeader, IonToolbar, IonTitle, IonContent , IonPage },
  setup() {

      

      const router = useRouter();

      

      return {router};
  }
}
</script>

<style>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}
.options {
    margin-top: 4vh;
}
</style>