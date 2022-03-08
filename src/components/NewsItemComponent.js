import React from "react";

const NewsItemComponent = ({
  title,
  description,
  imgUrl,
  newsUrl,
  author,
  date,
  source,
}) => {
  return (
    <div className='my-3'>
      <div className='card'>
        <div className='badgeStyle'>
          <span className='badge rounded-pill bg-danger'>{source}</span>
        </div>
        <img src={imgUrl} className='card-img-top newsCardImg' alt='...' />
        <div className='card-body'>
          <h5 className='card-title titleText'>{title}</h5>
          <p className='card-text descriptionText'>{description}</p>
          <p className='card-text'>
            <small className='text-muted'>
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel='noreferrer'
            href={newsUrl}
            target='_blank'
            className='btn btn-primary btn-sm'
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItemComponent;
