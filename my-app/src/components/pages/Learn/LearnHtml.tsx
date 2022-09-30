import styles from './LearnHtml.module.css';
import ReadCounter from './ReadCounter';
import * as data from './html.json';
const htmlDataString = JSON.stringify(data);
const htmlData = JSON.parse(htmlDataString);

interface HtmlContentProps {
  content: {
    videos: {
      id: string;
      category: string;
      title: string;
      by: string;
      description: string;
      img: string;
      href: string;
    }[];
    docs: {
      id: string;
      category: string;
      title: string;
      by: string;
      description: string;
      img: string;
      href: string;
    }[];
    practice: {
      id: string;
      category: string;
      title: string;
      by: string;
      description: string;
      img: string;
      href: string;
    }[];
  };
}

const HtmlContent = (props: HtmlContentProps) => {
  const { videos, docs, practice } = props.content;

  return (
    <section className={styles['resources-section']}>
      <div className={styles['resources-container']}>
        <h1>Html Video Learning Resources</h1>
        {videos.map((video) => (
          <div className={styles['resource-card']} key={video.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-title']}>{video.title}</h3>
              <p className={styles['resource-by']}>{video.by}</p>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-description']}>{video.description}</p>
            </div>
            <div className={styles['img-container']}>
              <iframe
                className={styles['resource-video']}
                title={video.title}
                src={video.href}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      <div className={styles['resources-container']}>
        <h1>Html Documentation</h1>
        {docs.map((doc) => (
          <div className={styles['resource-card']} key={doc.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-title']}>{doc.title}</h3>
              <p className={styles['resource-by']}>{doc.by}</p>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-description']}>{doc.description}</p>
            </div>
            <div className={styles['img-container']}>
              <a href={doc.href} target="_blank" rel="noreferrer">
                <img className={styles['doc-img']} src={doc.img} alt=""></img>
              </a>
            </div>
            <div>
              <ReadCounter />
            </div>
          </div>
        ))}
      </div>

      <div className={styles['resources-container']}>
        <h1>Html Practice Exercises</h1>
        {practice.map((practice) => (
          <div className={styles['resource-card']} key={practice.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-title']}>{practice.title}</h3>
              <p className={styles['resource-by']}>{practice.by}</p>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-description']}>{practice.description}</p>
            </div>
            <div className={styles['img-container']}>
              <a href={practice.href} target="_blank" rel="noreferrer">
                <img className={styles['practice-img']} src={practice.img} alt=""></img>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const LearnHtml = () => {
  return (
    <div>
      <HtmlContent content={htmlData} />
    </div>
  );
};

export default LearnHtml;

// import React from 'react';
// import ReadCounter from './ReadCounter';
// import styles from './Learn.module.css';
// import * as data from './html.json';
// const htmlDataString = JSON.stringify(data);
// const htmlData = JSON.parse(htmlDataString);

// interface HtmlContentProps {
//   content: {
//     videos: {
//       id: number;
//       category: string;
//       title: string;
//       by: string;
//       description: string;
//       img: string;
//       href: string;
//     }[];
//     docs: {
//       id: number;
//       category: string;
//       title: string;
//       description: string;
//       img: string;
//       href: string;
//     }[];
//     practice: {
//       id: number;
//       category: string;
//       title: string;
//       description: string;
//       img: string;
//       href: string;
//     }[];
//   };
// }

// const HtmlContent = (props: HtmlContentProps) => {
//   const { videos, docs, practice } = props.content;

//   return (
//     <section className={styles['learn-topic-section']}>
//       <h1>HTML</h1>
//       <div className={styles['resources-container']}>
//         <h2>HTML Videos 📹</h2>
//         <div className={styles['resource-details-container']}>
//           {videos.map((video) => (
//             <div className={styles['resource-details']} key={video.id}>
//               <iframe
//                 className={styles['resource-video']}
//                 title={video.title}
//                 // width="80%"
//                 // height="15%"
//                 src={video.href}
//                 allowFullScreen
//               ></iframe>
//               <div className={styles['resource-text']}>
//                 <h3 className={styles['resource-title']}>{video.title}</h3>
//                 <h4 className={styles['resource-by']}>{video.by}</h4>
//                 <p className={styles['resource-description']}>{video.description}</p>
//                 <p className={styles['resource-categories']}>{video.category}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className={styles['resources-container']}>
//         <h2>HTML Documentation 📄</h2>
//         <div className={styles['resource-details-container']}>
//           {docs.map((doc) => (
//             <div className={styles['resource-details']} key={doc.id}>
//               <img className={styles['resource-img']} src={doc.img} alt=""></img>
//               <div className={styles['resource-text']}>
//                 <h3 className={styles['resource-title']}>{doc.title}</h3>
//                 <p className={styles['resource-description']}>{doc.description}</p>
//                 <button className={styles['resource-btn']} type="button">
//                   <a href={doc.href} target="_blank" rel="noreferrer">
//                     Read
//                   </a>
//                 </button>
//                 <ReadCounter />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className={styles['resources-container']}>
//         <h2>HTML Practice 👩‍💻</h2>
//         <div className={styles['resource-details-container']}>
//           {practice.map((practice) => (
//             <div className={styles['resource-details']} key={practice.id}>
//               <img className={styles['resource-img']} src={practice.img} alt=""></img>
//               <div className={styles['resource-text']}>
//                 <h3 className={styles['resource-title']}>{practice.title}</h3>
//                 <p className={styles['resource-description']}>{practice.description}</p>
//                 <button className={styles['resource-btn']} type="button">
//                   <a href={practice.href} target="_blank" rel="noreferrer">
//                     Practice 💪
//                   </a>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const LearnHtml = () => {
//   return (
//     <div>
//       <HtmlContent content={htmlData} />
//     </div>
//   );
// };

// export default LearnHtml;
