<template>
  <div className="photoCard">
        <div className="photoCard__header">
          <img className="photoCard__header_img" :alt="user" :src="userPhoto"/>
          <div className="photoCard__header_name">{{user}}</div>
        </div>
        <img className="photoCard__item" :alt="item" :src="item"/>
        <div className="photoCard__tools">
          <div className="photoCard__tools_like">
            <CustomLike :class="{fullHeart: likeActive}" @click="likeActive = !likeActive"/>
            <span>{{likes ? likes : ''}}</span>
          </div>
          <div className="photoCard__tools_comment">
            <CustomComment/>
            <span>{{comments ? comments : ''}}</span>
          </div>
        </div>
        <div className="photoCard__tags">
          <span>#Love</span>
          <span>#Main</span>
          <span>#November</span>
          <span>#MeToYou</span>
        </div>
      </div>
</template>

<script>
import './PhotoCard.scss'
import CustomLike from './icons/CustomLike.vue'
import CustomComment from './icons/CustomComment.vue'

export default {
  name: "PhotoCard",
  props: {
    user: String,
    userPhoto: String,
    item: String,
    likes: Number,
    comments: Number
  },
  data() {
    return {
      likeActive: false
    }
  },
  components: {
    CustomLike,
    CustomComment
  }
}

</script>