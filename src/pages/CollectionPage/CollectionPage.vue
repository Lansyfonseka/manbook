<template>
  <div class="book-container">
    <CollectionBook 
      :id="collection.id"
      :title="collection.title"
      :description="collection.description"
      :image="collection.image"
      :author="collection.author"
    />
  </div>
</template>

<script>
import './CollectionPage.scss'
import CollectionBook from '@/components/collectionBook/CollectionBook.vue'
export default {
  name: "CollectionPage",
  components: {
    CollectionBook
  },
  data() {
    return {
      collection: this.$store.getters.COLLECTION(+this.$route.params.id)
    }
  }
}
</script>