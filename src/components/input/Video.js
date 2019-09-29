import React from 'react';

const Video = props => {
  const { cover, title, director, content } = props.source;
  return (
    <div className="video-container">
      <div className="youtube-container">
        <iframe
          width="560"
          height="349"
          src="https://www.youtube.com/embed/tE67Ye91Ii0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="title-container">
        <div className="title">{title}</div>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Video;
