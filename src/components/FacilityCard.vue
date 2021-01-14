<template>
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

          <ion-slide>
            <ion-card class="card" button="true">
              <ion-card-content class="ion-text-left">

                <div class="img-wrapper">
                  <ion-img src="https://scontent.fpen1-1.fna.fbcdn.net/v/t31.0-8/13497570_674072116077491_5888554000269933018_o.jpg?_nc_cat=100&ccb=2&_nc_sid=dd9801&_nc_ohc=RrBP1Aw7sfgAX_l2ZUK&_nc_ht=scontent.fpen1-1.fna&oh=d281183cb0685335878cd0fdcf8807cb&oe=60245D06"></ion-img>
                </div>
                
                <ion-card-title class="title">Manjung Badminton Arena</ion-card-title>
                <ion-card-subtitle>Located at Sitiawan, Manjung. 6 Open Court to be book!</ion-card-subtitle>
               
              </ion-card-content>
            </ion-card>
          </ion-slide>

          <ion-slide>
            <ion-card class="card" button="true">
              <ion-card-content class="ion-text-left">

                <div class="img-wrapper">
                  <ion-img src="https://scontent.fpen1-1.fna.fbcdn.net/v/t31.0-8/13497570_674072116077491_5888554000269933018_o.jpg?_nc_cat=100&ccb=2&_nc_sid=dd9801&_nc_ohc=RrBP1Aw7sfgAX_l2ZUK&_nc_ht=scontent.fpen1-1.fna&oh=d281183cb0685335878cd0fdcf8807cb&oe=60245D06"></ion-img>
                </div>
                
                <ion-card-title class="title">Manjung Badminton Arena</ion-card-title>
                <ion-card-subtitle>Located at Sitiawan, Manjung. 6 Open Court to be book!</ion-card-subtitle>
               
              </ion-card-content>
            </ion-card>
          </ion-slide>

          <ion-slide>
            <ion-card class="card" button="true">
              <ion-card-content class="ion-text-left">

                <div class="img-wrapper">
                  <ion-img src="https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></ion-img>
                </div>
                
                <ion-card-title class="title">Some Awesome Dish Title</ion-card-title>
                <ion-card-subtitle>Some description here</ion-card-subtitle>
               
              </ion-card-content>
            </ion-card>
          </ion-slide>

          <ion-slide>
            <ion-card class="card" button="true">
              <ion-card-content class="ion-text-left">

                <div class="img-wrapper">
                  <ion-img src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></ion-img>
                </div>
                
                <ion-card-title class="title">Some Awesome Dish Title</ion-card-title>
                <ion-card-subtitle>Some description here</ion-card-subtitle>
              
              </ion-card-content>
            </ion-card>
          </ion-slide>

          <ion-slide>
            <ion-card class="card" button="true">
              <ion-card-content class="ion-text-left">

                <div class="img-wrapper">
                  <ion-img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></ion-img>
                </div>
                
                <ion-card-title class="title">Some Awesome Dish Title</ion-card-title>
                <ion-card-subtitle>Some description here</ion-card-subtitle>
               
              </ion-card-content>
            </ion-card>
          </ion-slide>


          

          <ion-slide>
            <ion-card class="card" button="true">
              <ion-card-content class="ion-text-left">

                <div class="img-wrapper">
                  <ion-img src="https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></ion-img>
                </div>
                
                <ion-card-title class="title">Some Awesome Dish Title</ion-card-title>
                <ion-card-subtitle>Some description here</ion-card-subtitle>
               
              </ion-card-content>
            </ion-card>
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
              <ion-card class="category" button="true">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/icon/badminton.svg"></ion-icon>
                  <ion-card-title>Badminton</ion-card-title>
                  <ion-card-subtitle>Indoor/Outdoor</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            <ion-slide>
              <ion-card class="category" button="true">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/icon/futsal.svg"></ion-icon>
                  <ion-card-title>Futsal</ion-card-title>
                  <ion-card-subtitle>Indoor</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            <ion-slide>
              <ion-card class="category" button="true">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/icon/bowling.svg"></ion-icon>
                  <ion-card-title>Bowling</ion-card-title>
                  <ion-card-subtitle>Indoor</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            <ion-slide>
              <ion-card class="category" button="true">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/icon/basketball.svg"></ion-icon>
                  <ion-card-title>Basketball</ion-card-title>
                  <ion-card-subtitle>Indoor/Outdoor</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            <ion-slide>
              <ion-card class="category" button="true">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/icon/tennis.svg"></ion-icon>
                  <ion-card-title>Tennis</ion-card-title>
                  <ion-card-subtitle>Indoor/Outdoor</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            <ion-slide>
              <ion-card class="category" button="true">
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
</template>

<script>
import { star, starOutline } from 'ionicons/icons';

export default {
    name: "FacilityCard",
    components: {
        },
    props: {
        
    },
    setup() {
    const slideOpts = {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: -60,
        grabCursor: true
    };
    const categoryOpts = {
        slidesPerView: 2.0,
    };
    return {slideOpts, categoryOpts, star, starOutline};
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