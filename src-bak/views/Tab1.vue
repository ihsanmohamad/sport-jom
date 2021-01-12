<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Sports facilities</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="medium">Sports facilities</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="test">
      <ion-label >Most popular</ion-label>
      </div>

    <ion-list>
    <ion-item v-for="item in items" :key="item.src" >
      <ion-thumbnail slot="start">
        <ion-img :src="item.src"></ion-img>
      </ion-thumbnail>
      <ion-label>{{item.text}}</ion-label>
      <ion-icon :icon="ellipsisVertical" @click="presentActionSheet"/>
    </ion-item>
  </ion-list>
    
    </ion-content>
  </ion-page>
</template>

<script >
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, actionSheetController, IonImg, IonThumbnail, IonList } from '@ionic/vue';

import { close, heart, trash, share, informationCircle, addCircleOutline, ellipsisVertical } from 'ionicons/icons';

import { defineComponent } from 'vue';


export default defineComponent  ({
  name: 'Tab1',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonImg, IonThumbnail, IonList },
  
  setup() {
    const items = [{
      'text': 'Manjung Badminton Arena',
      'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
    }, {
      'text': 'MP3 Manjung',
      'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
    }, {
      'text': 'Stadium Manjung',
      'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
    }];

    return { items, ellipsisVertical }
  },

  methods: {
    async presentActionSheet() {
      const actionSheet = await actionSheetController
        .create({
          header: 'Booking',
          cssClass: 'my-custom-class',
          buttons: [
            {
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: () => {
                console.log('Delete clicked')
              },
            },
            {
              text: 'Book',
              icon: addCircleOutline,
              handler: () => {
                console.log('Share clicked')
              },
            },
            {
              text: 'Share',
              icon: share,
              handler: () => {
                console.log('Share clicked')
              },
            },
            {
              text: 'Info',
              icon: informationCircle,
              handler: () => {
                console.log('Play clicked')
              },
            },
            {
              text: 'Favorite',
              icon: heart,
              handler: () => {
                console.log('Favorite clicked')
              },
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked')
              },
            },
          ],
        });
      return actionSheet.present();
    },
  }
});
</script>

<style scoped>

.test {
  margin : 2vh 0;
  padding-left: 2vh;
}
</style>