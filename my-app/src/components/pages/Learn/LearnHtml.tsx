import React from 'react';
import styles from './Learn.module.css';
import * as data from './html.json';
const htmlDataString = JSON.stringify(data);
const htmlData = JSON.parse(htmlDataString);

interface HtmlContentProps {
  content: {
    videos: {
      id: number;
      category: string;
      title: string;
      by: string;
      description: string;
      img: string;
      href: string;
    }[];
    docs: { id: number; title: string; description: string; img: string; href: string }[];
    practice: { id: number; title: string; description: string; img: string; href: string }[];
  };
}

const HtmlContent = (props: HtmlContentProps) => {
  const { videos, docs, practice } = props.content;

  return (
    <div>
      <div className={styles['resources-container']}>
        <h1>HTML Videos 📹</h1>
        <div className={styles['resource-details-container']}>
          {videos.map((video) => (
            <div className={styles['resource-details']} key={video.id}>
              <iframe
                className={styles['resource-graphic']}
                title={video.title}
                // width="80%"
                // height="15%"
                src={video.href}
                allowFullScreen
              ></iframe>
              <div className={styles['resource-text']}>
                <h3 className={styles['resource-title']}>{video.title}</h3>
                <h4 className={styles['resource-by']}>{video.by}</h4>
                <p className={styles['resource-description']}>{video.description}</p>
                <p className={styles['resource-categories']}>{video.category}</p>
                {/* <button className={styles['resource-btn']} type="button">
                  <a href={video.href} target="_blank" rel="noreferrer">
                    Watch 👀
                  </a>
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles['resources-container']}>
        <h1>HTML Documentation 📄</h1>
        <div className={styles['resource-details-container']}>
          {docs.map((doc) => (
            <div className={styles['resource-details']} key={doc.id}>
              <img className={styles['resource-graphic']} src={doc.img} alt=""></img>
              <h3 className={styles['resource-title']}>{doc.title}</h3>
              <p className={styles['resource-description']}>{doc.description}</p>
              <button className={styles['resource-btn']} type="button">
                <a href={doc.href} target="_blank" rel="noreferrer">
                  Read 🤓
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles['resources-container']}>
        <h1>HTML Practice 👩‍💻</h1>

        {practice.map((practice) => (
          <div className={styles.resource} key={practice.id}>
            <h3 className={styles['resource-title']}>{practice.title}</h3>
            <p className={styles['resource-description']}>{practice.description}</p>
            <button className={styles['resource-btn']} type="button">
              <a href={practice.href} target="_blank" rel="noreferrer">
                Practice 💪
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const LearnHtml = () => {
  return (
    <div>
      <h1>Learn here!</h1>
      <HtmlContent content={htmlData} />
    </div>
  );
};

// type Video = {
//   id: number;
//   title: string;
//   href: string;
//   description: string;
// };

// const HtmlVideos: React.FC<{ videos: Video[] }> = ({ videos }) => {
//   return (
//     <div className={styles['videos-container']}>
//       {videos.map((video: Video) => {
//         return (
//           <div key={video.id}>
//             <h4 className={styles['video-title']}>{video.title}</h4>
//             <a className={styles.link} href={video.href}>
//               {video.description}
//             </a>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const LearnHtml = () => {
//   return (
//     <section className={styles['learn-html-container']}>
//       <h1>Learn HTML</h1>

//       <div className={styles['learn-html-videos']}>
//         <h2>HTML Videos</h2>
//         <h3>Watch these videos to get you started</h3>
//         <HtmlVideos videos={videos} />
//       </div>

//       <div className={styles['learn-html-doc']}>
//         <h2>HTML Documentation</h2>
//         <h3>Read this documentation to get you started</h3>
//       </div>

//       <div className={styles['learn-html-practice']}>
//         <h2>HTML Practice</h2>
//         <h3>Practice these exercise. Without practice, there's no real learning!</h3>
//       </div>
//     </section>
//   );
// };

export default LearnHtml;
