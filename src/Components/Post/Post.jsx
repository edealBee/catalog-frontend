import React from 'react';
import { validateImage } from 'image-validator';
import './Post.css';

const Post = ({ createdAt, title, imageUrl }) => {
  let PostTitle = title;

  let PostImage = imageUrl;

  let PostData = createdAt;

  const truncateTitle = (str) => {
    if (str.length >= 30) {
      return `${str.substring(0, 29)}...`;
    } else if (str.length == 0) {
      return 'Название не было установлено';
    } else {
      return str;
    }
  };

  const imageChanger = (url) => {
    if (url.length != 0) {
      const isValidImage = validateImage(url);
      if (!isValidImage) {
        return 'https://i.ibb.co/SJcDN5X/3.jpg';
      }
      console.log(isValidImage);
      return url;
    } else if (url.length == 0) {
      return 'https://i.ibb.co/SJcDN5X/3.jpg';
    }
  };

  const dataChanger = (data) => {
    const newData = new Date(data).toLocaleString().split(',')[0];
    if (newData.length >= 20) {
      return `${newData.substring(0, 20)}...`;
    } else {
      return newData;
    }
  };

  return (
    <div className="Post">
      <div className="PostImage">
        <img src={imageChanger(PostImage)} />
      </div>
      <div className="PostInfo">
        <div className="PostTitle">
          <h2>{truncateTitle(PostTitle)}</h2>
        </div>
        <div className="PostData">
          <p>{dataChanger(PostData)}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
