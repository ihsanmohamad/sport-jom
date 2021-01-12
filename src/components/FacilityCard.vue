<template>
<div class="ion-padding wrapper">
    <ion-grid class="ion-no-padding">
    <ion-row class="ion-align-items-baseline">
      <ion-col size="6">
        <h4 class="title">
          Popular Dishes
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
            <ion-card class="card">
              <ion-card-content class="ion-text-left">

                <div class="img-wrapper">
                  <ion-img src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></ion-img>
                </div>
                
                <ion-card-title class="title">Some Awesome Dish Title</ion-card-title>
                <ion-card-subtitle>Some description here</ion-card-subtitle>
                <ion-card-subtitle>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star-outline"></ion-icon>
                </ion-card-subtitle>
              </ion-card-content>
            </ion-card>
          </ion-slide>

          <ion-slide>
            <ion-card class="card">
              <ion-card-content class="ion-text-left">

                <div class="img-wrapper">
                  <ion-img src="https://images.pexels.com/photos/793759/pexels-photo-793759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></ion-img>
                </div>
                
                <ion-card-title class="title">Some Awesome Dish Title</ion-card-title>
                <ion-card-subtitle>Some description here</ion-card-subtitle>
                <ion-card-subtitle>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon name="star-half"></ion-icon>
                </ion-card-subtitle>
              </ion-card-content>
            </ion-card>
          </ion-slide>

          <ion-slide>
            <ion-card class="card">
              <ion-card-content class="ion-text-left">

                <div class="img-wrapper">
                  <ion-img src="https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></ion-img>
                </div>
                
                <ion-card-title class="title">Some Awesome Dish Title</ion-card-title>
                <ion-card-subtitle>Some description here</ion-card-subtitle>
                <ion-card-subtitle>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star"></ion-icon>
                </ion-card-subtitle>
              </ion-card-content>
            </ion-card>
          </ion-slide>

          <ion-slide>
            <ion-card class="card">
              <ion-card-content class="ion-text-left">

                <div class="img-wrapper">
                  <ion-img src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></ion-img>
                </div>
                
                <ion-card-title class="title">Some Awesome Dish Title</ion-card-title>
                <ion-card-subtitle>Some description here</ion-card-subtitle>
                <ion-card-subtitle>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star-outline"></ion-icon>
                  <ion-icon :icon="star-outline"></ion-icon>
                </ion-card-subtitle>
              </ion-card-content>
            </ion-card>
          </ion-slide>

          <ion-slide>
            <ion-card class="card">
              <ion-card-content class="ion-text-left">

                <div class="img-wrapper">
                  <ion-img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></ion-img>
                </div>
                
                <ion-card-title class="title">Some Awesome Dish Title</ion-card-title>
                <ion-card-subtitle>Some description here</ion-card-subtitle>
                <ion-card-subtitle>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star-outline"></ion-icon>
                  <ion-icon :icon="star-outline"></ion-icon>
                  <ion-icon :icon="star-outline"></ion-icon>
                </ion-card-subtitle>
              </ion-card-content>
            </ion-card>
          </ion-slide>


          

          <ion-slide>
            <ion-card class="card">
              <ion-card-content class="ion-text-left">

                <div class="img-wrapper">
                  <ion-img src="https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></ion-img>
                </div>
                
                <ion-card-title class="title">Some Awesome Dish Title</ion-card-title>
                <ion-card-subtitle>Some description here</ion-card-subtitle>
                <ion-card-subtitle>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star"></ion-icon>
                  <ion-icon :icon="star-outline"></ion-icon>
                  <ion-icon :icon="star-outline"></ion-icon>
                </ion-card-subtitle>
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
              <ion-card class="category">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/dish.svg"></ion-icon>
                  <ion-card-title>Food</ion-card-title>
                  <ion-card-subtitle>Something here</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            <ion-slide>
              <ion-card class="category">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/cocktail.svg"></ion-icon>
                  <ion-card-title>Drink</ion-card-title>
                  <ion-card-subtitle>Something here</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            <ion-slide>
              <ion-card class="category">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/burger.svg"></ion-icon>
                  <ion-card-title>Burger</ion-card-title>
                  <ion-card-subtitle>Something here</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            <ion-slide>
              <ion-card class="category">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/pizza.svg"></ion-icon>
                  <ion-card-title>Pizza</ion-card-title>
                  <ion-card-subtitle>Something here</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            <ion-slide>
              <ion-card class="category">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/taco.svg"></ion-icon>
                  <ion-card-title>Mexican</ion-card-title>
                  <ion-card-subtitle>Something here</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            <ion-slide>
              <ion-card class="category">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/cookies.svg"></ion-icon>
                  <ion-card-title>Dessert</ion-card-title>
                  <ion-card-subtitle>Something here</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            <ion-slide>
              <ion-card class="category">
                <ion-card-header class="ion-text-center">
                  <ion-icon src="assets/noodle.svg"></ion-icon>
                  <ion-card-title>Noodle</ion-card-title>
                  <ion-card-subtitle>Something here</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>

            

            
  
          </ion-slides>
        </ion-col>
      </ion-row>
    </ion-grid>

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
    };
    const categoryOpts = {
        slidesPerView: 2.5,
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

ion-badge {
  padding: 10px;
  font-size: 14px;
}
</style>