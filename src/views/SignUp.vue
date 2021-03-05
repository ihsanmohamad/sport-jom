<template>
<ion-page>
  <ion-header class="ion-no-border">
  <ion-toolbar>
  
    <ion-buttons slot="end">
      <ion-button @click="() => router.push('/login')">Log in</ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>


<ion-content fullscreen="true">
   <ion-alert
    :is-open="state.is_error"
    header="Alert"
    sub-header="Subtitle"
    message="This is an alert message."
    css-class="my-custom-class"
    buttons="Ok"
    @onDidDismiss="state.is_error=false"
  >
  </ion-alert>
  <h1>Create your<br />Account</h1>

  <form id="form">
      <div class="form-control">
      <label for="">Email</label>
    <ion-input type="email" placeholder="eg. test@test.com" pattern="email" v-model="user.email" />
    </div>
    <div class="form-control">
    <label for="">Password</label>
    <ion-input type="password" placeholder="Password" v-model="user.password"/>
    </div>
    <div class="form-control">
    <label for="">Confirm Password</label>
    <ion-input type="password" placeholder="Confirm Password"/>
    </div>
    <ion-button expand="block" shape="round" @click="register">Sign Up</ion-button>
  </form>

</ion-content>
</ion-page>
</template>

<script>
import {IonPage, IonButton, IonButtons, IonToolbar, IonHeader, IonInput, IonContent, IonAlert, alertController} from '@ionic/vue';
// import { useStore} from 'vuex';
import {useRouter} from 'vue-router';
import {reactive} from 'vue';
import axios from 'axios';

export default {
    components: {IonPage, IonButton, IonButtons, IonToolbar, IonHeader, IonInput, IonContent, IonAlert},
    setup() {
        const router = useRouter();
        // const store = useStore();

        const state = reactive({
          is_success: false,
          is_error: false,

        })

        const user = reactive({
          email : "",
          password: ""
        });

        const presentAlertSuccess = async () => {
          const alert = await alertController
            .create({
              
              header: 'Sign Up',
              message: 'Sign Up Success.',
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
      
       

        async function register() {
          try {
            await axios.post(`http://192.168.1.8:8000/auth/register` ,{
            
              email: user.email,
              password: user.password,
              is_active: true,
              is_superuser: false,
              is_business: true
           })
           
           presentAlertSuccess();
           router.push('/login');
           } catch (err) {
             presentAlertFail();
           }
        }

        return { state , user, router, register};
    }
}
</script>

<style scoped lang="scss">
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

ion-input {
    border-radius : 14px;
    --color: black;
    --background: white;
    border-style: solid;
    border-width: 2px;
}


ion-button {
    color: #ffffff;
}

ion-content {
  display: flex;
        text-align: center;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 26px;
    
    margin-bottom: 15%;
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

  p {
    text-align: center;
    margin-top: 40px;
  }
}
</style>