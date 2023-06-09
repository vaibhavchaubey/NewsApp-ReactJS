import React from 'react';

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: 0,
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? 'https://th.bing.com/th/id/R.e3767741f149132193f10f67be797b7e?rik=brs09UnSXo0ymw&riu=http%3a%2f%2fwww.sthilarywallasey.org.uk%2fwp-content%2fuploads%2f2017%2f01%2fnews-6.jpg&ehk=6PlZ51kB2L9YxVVS7R0%2b9I3sMhp8fb8YFS4lQCNJhyg%3d&risl=&pid=ImgRaw&r=0'
              : imageUrl
          }
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? 'Unknown' : author} on{' '}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
