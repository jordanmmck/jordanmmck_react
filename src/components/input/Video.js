import React from 'react';

const Video = props => {
  const { title, author, ytLink, content } = props.source;
  return (
    <div className="video-container">
      <div className="youtube-container">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${ytLink}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="title-container">
        <div className="title">{title}</div>
        <div className="subtitle">{`- ${author}`}</div>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Video;
