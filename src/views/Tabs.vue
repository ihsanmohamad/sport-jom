<template>
  <ion-page>
    <ion-tabs>
      
      <ion-tab-bar slot="bottom" >
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="homeOutline" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="calendarClear" />
          <ion-label>Book</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="search" />
          <ion-label>Explore</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :icon="ellipsisHorizontal" />
          <ion-label>More</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script >
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { calendarClear, search, homeOutline, ellipsisHorizontal } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      calendarClear, 
      search, 
      homeOutline,
      ellipsisHorizontal
    }
  }
}
</script>

<style scoped>
ion-tab-bar {
  --color:#ffffff;
  --color-selected:  #FB4E4E;
  --background: #000000;
}
</style>