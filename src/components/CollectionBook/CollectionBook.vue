<template>
  <div :class="{book: true, active: isOpen}" @click="isOpen = !isOpen">      
      <div className="book__front">
        <div className="book__front_cover">
          <div className="collection-title">My collection</div>
          <img className="collection-photo" alt="book_photo" src='https://d14zyouj9r0hpo.cloudfront.net/wp-content/uploads/2020/12/LotsofButtonsCollectionsKids-1.jpg'/>
        </div>
        <div className="book__front_back"></div>
      </div>
			<div className="book__left-side">
        User name Author
      </div>      
      <div class="collection-description">
        Desctription
      </div>
		</div>
</template>

<script>
import './CollectionBook.scss'

export default {
  data: () => {
    return {
      isOpen: false
    }
  }
}

</script>
