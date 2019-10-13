import React from 'react';

const Video = props => {
  const { title, author, ytLink, content } = props.source;
  return (
    <div className="video">
      <div className="video__youtube-video">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${ytLink}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="video__header">
        {title && <div>{title}</div>}
        {author && <div className="video__subtitle">{`— ${author}`}</div>}
      </div>
      <div>
        <p className="video__content">{content}</p>
      </div>
    </div>
  );
};

export default Video;
