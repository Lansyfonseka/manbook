<template>
  <h1 className="welcome" >Welcome to ManBook!</h1>
  <div class="items">
    <PhotoCard 
      v-for="item in USERS"
      :key="item.user"
      :user="item.user"
      :userPhoto="item.userPhoto"
      :item="item.item"
      :likes="item.likes"
      :comments="item.comments"
    />
  </div>  
  <div class="books">
    <CollectionBook
      v-for="collection in COLLECTIONS"
      :key="collection.id"
      :author="collection.author"
      :title="collection.title"
      :image="collection.image"
      :description="collection.description"
      :id="collection.id"
    />

  </div>
</template>

<script>
import './MainPage.scss';
import PhotoCard from '@/components/photoCard/PhotoCard.vue';
import CollectionBook from '@/components/collectionBook/CollectionBook.vue';
import { mapGetters } from 'vuex';

export default {
  name: "MainPage",
  components: {
    PhotoCard,
    CollectionBook
  },
  computed: {
    ...mapGetters(['USERS','COLLECTIONS'])
  }
}
</script>