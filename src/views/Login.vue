<template>
<ion-page>
  <ion-header class="ion-no-border">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button color="primary">
        <ion-icon slot="icon-only" name="arrow-back"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-buttons slot="end">
      <ion-button @click="() => router.push('/signup')">Sign up</ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen="true">
  <div id="header">
    <h1>Login</h1>
    <img src="assets/icon.png" />
  </div>

   <form id="form" @submit.prevent="login">
      <div class="form-control">
      <label for="">Email</label>
    <ion-input type="email" placeholder="eg. test@test.com"  v-model="user.email"/>
    </div>
    <label for="">Password</label>
    <ion-input type="password" placeholder="Password" v-model="user.password"/>
    <ion-button expand="block" shape="round" type="submit">Login</ion-button>
  </form>
</ion-content>
</ion-page>
</template>

<script>
import {IonPage, IonHeader, IonButtons, IonButton, IonToolbar, IonIcon, IonContent, IonInput} from '@ionic/vue';
import {useRouter} from 'vue-router';
import { reactive} from 'vue';
import { useStore} from 'vuex';
export default {
    components: {IonPage, IonHeader, IonButtons, IonButton, IonToolbar, IonIcon, IonContent, IonInput},
    
    setup() {
        const router = useRouter();
        const user = reactive({
            email: "",
            password: ""
        });

        // const email = ref("");
        // const password = ref("");


        const store = useStore();

        function login(){
            store.dispatch('login', user)
        } 

     
        return {login, user, router}
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

ion-button {
    color: #ffffff;
}

ion-input {
    border-radius : 14px;
    color:black;
    --color: black;
    --background: white;
    border-style: solid;
    border-width: 2px;
}


ion-content {
display: flex;
        text-align: center;
  align-items: center;
  justify-content: center;

  #header {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-weight: 700;
      font-size: 26px;
      margin-bottom: 15%;
    }

    img {
      width: 125px;
      height: 125px;
      border-radius: 50%;
      border: 8px solid #ffffff;
    }
  }

  #form {
    margin-top: 15%;
    padding-left: 30px;
    padding-right: 30px;
    ion-input {
      --color: black;
    }
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
}
</style>