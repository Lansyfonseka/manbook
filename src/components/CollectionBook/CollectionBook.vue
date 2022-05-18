<template>
  <div :class="{book: true, active: isOpen}" @click="isOpen = !isOpen">      
      <div className="book__front">
        <div className="book__front_cover">
          <div className="collection-title">{{title}}</div>
          <img className="collection-photo" alt="book_photo" :src="image"/>
        </div>
        <div className="book__front_back"></div>
      </div>
			<div className="book__left-side">{{author}}</div>      
      <div class="collection-description">
        {{description}}
        <router-link 
          :to="{path: '/collection/'+id}"
          class="collection-description__link"
        >
          See more
        </router-link>
      </div>
		</div>
</template>

<script>
import './CollectionBook.scss'

export default {
  props: {
    author: String,
    title: String,
    description: String,
    image: String,
    id: Number
  },
  data: () => {
    return {
      isOpen: false
    }
  }
}

</script>
