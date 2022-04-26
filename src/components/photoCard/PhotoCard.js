import React, { useState } from "react";
import './PhotoCard.scss';
import {ReactComponent as Like} from './icons/like.svg';
import {ReactComponent as Comment} from './icons/comment.svg';

export const PhotoCard = ({user,userPhoto,item,likes,comments}) => {
  const [likeActive, setLikeActive] = useState(false);
  const [countLikes, setCountLikes] = useState(likes)
  const changeLike = ()=> {
    setLikeActive(!likeActive);
    setCountLikes(likeActive ? countLikes-1 : countLikes+1)
  }
  return (
    <>
      <div className="photoCard">
        <div className="photoCard__header">
          <img className="photoCard__header_img" alt={user} src={userPhoto}/>
          <div className="photoCard__header_name">{user}</div>
        </div>
        <img className="photoCard__item" alt="item" src={item}/>
        <div className="photoCard__tools">
          <div className="photoCard__tools_like">
            <Like className={likeActive ? 'fullHearth' : ''} onClick={changeLike}></Like>
            <span>{countLikes ? countLikes : ''}</span>
          </div>
          <div className="photoCard__tools_comment">
            <Comment></Comment>
            <span>{comments ? comments : ''}</span>
          </div>
        </div>
        <div className="photoCard__tags">
          <span>#Love</span>
          <span>#Main</span>
          <span>#November</span>
          <span>#MeToYou</span>
        </div>
      </div>
    </>
  )
}