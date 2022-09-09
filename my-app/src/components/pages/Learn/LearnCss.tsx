import React from 'react';
import styles from './Learn.module.css';
import * as data from './css.json';
const cssDataString = JSON.stringify(data);
const cssData = JSON.parse(cssDataString);

interface CssContentProps {
  content: {
    videos: { id: number; title: string }[];
    docs: { id: number; title: string }[];
  };
}

const CssContent = (props: CssContentProps) => {
  const { videos, docs } = props.content;

  return (
    <div>
      <div>
        <h1>CSS Videos 📹</h1>
        {videos.map((video) => (
          <div key={video.id}>{video.title}</div>
        ))}
      </div>

      <div>
        <h1>CSS Documentation 📄</h1>
        {docs.map((doc) => (
          <div key={doc.id}>{doc.title}</div>
        ))}
      </div>

      <div>
        <h1>CSS Practice 👩‍💻</h1>
        {docs.map((doc) => (
          <div key={doc.id}>{doc.title}</div>
        ))}
      </div>
    </div>
  );
};

const LearnCss = () => {
  return (
    <div>
      <CssContent content={cssData} />
    </div>
  );
};

export default LearnCss;
