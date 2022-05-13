<template>
  <div :class="{book: true, active: isOpen}" @click="isOpen = !isOpen">
      <div className="front">
        <div className="coverFront">
          <div className="book__name">My collection</div>
          <img className="book_photo" alt="book_photo" src='http://klarify.tech/wp-content/uploads/2021/04/collections.jpg'/>
        </div>
        <div className="coverBack"></div>
      </div>
			<div className="left-side">
        User name Author
      </div>
      <!-- <PhotoCard 
        user='Tay Loo'
        userPhoto='https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg'
        item='https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        likes={5}
        comments={2}
      ></PhotoCard> -->
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
