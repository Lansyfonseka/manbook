<template>
  <h1 className="welcome" >Welcome to ManBook!</h1>
  <div class="items">
    <PhotoCard 
      v-for="item in items"
      :key="item.user"
      :user="item.user"
      :userPhoto="item.userPhoto"
      :item="item.item"
      :likes="item.likes"
      :comments="item.comments"
    />
  </div>  
  <div class="books">
    <CollectionBook />
    <CollectionBook />
  </div>
</template>

<script>
import './MainPage.scss';
import PhotoCard from '../../components/PhotoCard/PhotoCard.vue';
import CollectionBook from '../../components/CollectionBook/CollectionBook.vue';
const items = [
    {
      user: 'Tay Loo',
      userPhoto: 'https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg',
      item: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      likes: 5,
      comments: 2
    },
    {
      user: 'Gamid Haltal',
      userPhoto: 'https://static.boredpanda.com/blog/wp-content/uploads/2017/04/Virrappan2-58f79980ae6fb__880.jpg',
      item: 'https://images.unsplash.com/photo-1541480601022-2308c0f02487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      likes: 5,
      comments: 2
    },
    {
      user: 'Jastin',
      userPhoto: 'https://pbs.twimg.com/media/BcINeMVCIAABeWd.jpg',
      item: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      likes: 5,
      comments: 2
    },
    {
      user: 'Mayble',
      userPhoto: 'https://cdn.youpic.com/huge/1416143_3ogqbsrvmm1khn4ehg9m5ucmtm_103510.jpg',
      item: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      likes: 5,
      comments: 2
    },
    {
      user: 'Salma Haeck',
      userPhoto: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
      item: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80',
      likes: 5,
      comments: 2
    }
  ];

export default {
  name: "MainPage",
  components: {
    PhotoCard,
    CollectionBook
  },
  data() {
    return {
      items: items
    }
  }
}
</script>