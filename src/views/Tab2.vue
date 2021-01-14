<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Sport Categories</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-list>
          <ion-item @click="() => router.push(`/signup`)">
          
          <ion-label>
            <h2>Badminton</h2>
          </ion-label>
          </ion-item>
          <ion-item @click="() => router.push(`/login`)">
          
          <ion-label>
            <h2>Futsal</h2>
          </ion-label>
          </ion-item>
          <ion-item @click="() => router.push(`/drinks-by-ingredient/1`)">
          
          <ion-label>
            <h2>Bowling</h2>
          </ion-label>
          </ion-item>
          <ion-item @click="() => router.push(`/drinks-by-ingredient/1`)">
          
          <ion-label>
            <h2>Basketball</h2>
          </ion-label>
          </ion-item>
          <ion-item @click="() => router.push(`/drinks-by-ingredient/1`)">
          
          <ion-label>
            <h2>Tennis</h2>
          </ion-label>
          </ion-item>
          <ion-item @click="() => router.push(`/drinks-by-ingredient/1`)">
          
          <ion-label>
            <h2>Gym</h2>
          </ion-label>
          </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script >
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonList, IonLabel } from '@ionic/vue';
import {reactive} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";



export default  {
  name: 'Tab2',
  components: { 
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, 
    IonItem, IonList, IonLabel },
  setup() {
    const router = useRouter();
    const state = reactive({
      lstIngredients: [],
      loading: false
    })

    const fetchIngredients = async () => {
      state.loading = true;

      const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`);

      if(res.data) {
        state.lstIngredients = res.data?.drinks;

        state.lstIngredients.sort(function(a,b){
          return a.strIngredient1.localeCompare(b.strIngredient1);
        })
      }
      state.loading = false;
    }

    const ingredientImage = (ingredient) => {
      return `https://www.thecocktaildb.com/images/ingredients/${encodeURI(ingredient)}-Small.png`
    }

    fetchIngredients();
    return {
      router,
      state,
      ingredientImage
    }
  }
}
</script>

<style scoped>

</style>