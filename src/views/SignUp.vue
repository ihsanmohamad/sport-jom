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
  <h1>Create your<br />Account</h1>

  <form id="form">
      <div class="form-control">
      <label for="">Email</label>
    <ion-input type="email" placeholder="eg. test@test.com" pattern="email" />
    </div>
    <label for="">Password</label>
    <ion-input type="password" placeholder="Password"/>
    <ion-button expand="block" shape="round">Sign Up</ion-button>
  </form>

<h1>{{ userToken }}</h1>
</ion-content>
</ion-page>
</template>

<script>
import {IonPage} from '@ionic/vue';
import { useStore} from 'vuex';
import {useRouter} from 'vue-router';
import {computed} from 'vue';
export default {
    components: {IonPage},
    setup() {
        const router = useRouter();
        const store = useStore();

        const userToken = computed(() => store.getters['userToken']);

        return {userToken, router};
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