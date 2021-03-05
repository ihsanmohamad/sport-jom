<template>
      <ion-card class="card" button="true" @click="() => router.push('/book-now')">
        <ion-card-content class="ion-text-left">

          <div class="img-wrapper">
            <ion-img :src="facility.profile_pic"></ion-img>
            <!-- <ion-img src="https://scontent.fpen1-1.fna.fbcdn.net/v/t31.0-8/13497570_674072116077491_5888554000269933018_o.jpg?_nc_cat=100&ccb=2&_nc_sid=dd9801&_nc_ohc=RrBP1Aw7sfgAX_l2ZUK&_nc_ht=scontent.fpen1-1.fna&oh=d281183cb0685335878cd0fdcf8807cb&oe=60245D06"></ion-img> -->
          </div>
          
          <ion-card-title class="title">{{facility.name}}</ion-card-title>
          <ion-card-subtitle>Located at Sitiawan, Manjung. 6 Open Court to be book!</ion-card-subtitle>
          
        </ion-card-content>
      </ion-card>

         
</template>

<script>
import { star, starOutline } from 'ionicons/icons';
import {IonCardContent, IonImg, IonCardTitle, IonCardSubtitle, IonCard} from '@ionic/vue';
export default {
    name: "FacilityCard",
    components: {
       IonCardContent, IonImg, IonCardTitle, IonCardSubtitle, IonCard
        },
    props: {
        facility: {}
    },
    setup() {
    const slideOpts = {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: -60,
        grabCursor: true
    };
    
    return {slideOpts, star, starOutline};
    }
}
</script>

<style scoped lang="scss">
ion-item {
  --background: rgba(248, 248, 250, .96);

  h2 {
    font-weight: bold;
    font-size: 18px;
    padding-top: 8px;
  }

}

ion-content {
  --background: #f8f8fa;
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