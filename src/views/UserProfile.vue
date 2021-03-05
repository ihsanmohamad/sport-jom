<template>
<ion-page>
  <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
              <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
        <ion-title>Edit Profile</ion-title>
      </ion-toolbar>
      
      <ion-content :fullscreen="true">

        <div class="main">
          <ion-list lines="full" class="ion-no-margin">
        
        
    <form id="form" @submit.prevent="update">
      <ion-item>
          <ion-label position="stacked">Name</ion-label>
          <ion-input placeholder="eg. John" v-model="user.name"></ion-input>
        </ion-item>
      <ion-item>
          <ion-label position="stacked">Age</ion-label>
          <ion-input placeholder="eg. 24" v-model="user.profile_url"></ion-input>
        </ion-item>
      <ion-item>
          <ion-label position="stacked">Gender</ion-label>
           <ion-select value="male">
            <ion-select-option value="female">Female</ion-select-option>
            <ion-select-option value="male">Male</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-button expand="block" shape="round" type="submit">Update</ion-button>
  </form>

        
        
      </ion-list>
      </div>
      </ion-content>
    </ion-header>
</ion-page>
</template>

<script>
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
IonList, IonLabel, IonInput, IonItem, alertController
} from '@ionic/vue';
import { useStore } from 'vuex';
import { reactive, computed } from 'vue'; 
import axios from 'axios';
import {useRouter} from 'vue-router';
export default {
components: { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
IonList, IonLabel, IonInput, IonItem
},
setup() {

    const user = reactive({
        name : "",
        profile_url : "",
        gender : ""
    });
    const store = useStore();

    const router = useRouter();

    const userToken = computed(() => store.getters['userToken']);


    const presentAlertSuccess = async () => {
          const alert = await alertController
            .create({
              
              header: 'Edit Profile',
              message: 'Edit Profile Success.',
              buttons: ['OK'],
            });
          return alert.present();
        };
        const presentAlertFail = async () => {
          const alert = await alertController
            .create({
              
              header: 'Error',
              message: 'Something happened, please try again later!',
              buttons: ['OK'],
            });
          return alert.present();
        };
      

    async function update() {
          try {
            await axios({
            method: 'patch',
            url: `http://192.168.1.8:8000/public`,
            headers: {
                    'Authorization': `Bearer ${userToken.value}`
                },
            data: {
              name: user.name,
              profile_url: user.profile_url,
              gender: user.gender
              }
           })
           
           presentAlertSuccess();
           router.push('/tabs/tab4');
           } catch (err) {
             presentAlertFail();
           }
        }

    return {user, update}
}
}
</script>

<style scoped lang="scss">
ion-item{
    --color-activated:  #FB4E4E;
    --highlight-color-focused:  #FB4E4E;
}

ion-label {
    --color: #FB4E4E;
}

.main {
    margin-top: 3vh;
}
#form {
    margin-top: 15%;
    padding-left: 30px;
    padding-right: 30px;


    ion-button {
      --background: #FB4E4E;
      color: #ffffff;
      margin-top: 35px;
      height: 48px;
      font-size: 18px;
      text-transform: initial;
      border-radius: 50px;
      box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);
      --box-shadow: none;
    }
  }

</style>