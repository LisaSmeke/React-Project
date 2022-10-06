import styles from './LearnHtml.module.css';
import ReadCounter from '../ReadCounter';
import htmlLogo from '../CustomLearn/html-color.svg';
import * as data from './html.json';
const htmlDataString = JSON.stringify(data);
const htmlData = JSON.parse(htmlDataString);

interface HtmlContentProps {
  content: {
    videos: {
      id: string;
      category: string;
      level: string;
      title: string;
      by: string;
      description: string;
      img: string;
      href: string;
    }[];
    docs: {
      id: string;
      category: string;
      level: string;
      title: string;
      by: string;
      description: string;
      img: string;
      href: string;
    }[];
    practice: {
      id: string;
      category: string;
      level: string;
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
    <section className={styles['resources']}>
      <img className={styles['html-logo']} src={htmlLogo} alt=""></img>
      <h1>Html Video Learning Resources</h1>
      <div className={styles['resource-cards-wrapper']}>
        {videos.map((video) => (
          <div className={styles['resource-card']} key={video.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-name']}>{video.title}</h3>
              <p className={styles['resource-by']}>{video.by}</p>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-level']}>{video.level}</p>
            </div>
            <a href={video.href} target="_blank" rel="noreferrer">
              <div className={styles['video-container']}>
                <iframe
                  className={styles['resource-video']}
                  title={video.title}
                  src={video.href}
                  allowFullScreen
                ></iframe>
                <p className={styles['video-resource-description']}>{video.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      <h1>Html Documentation</h1>
      <div className={styles['resource-cards-wrapper']}>
        {docs.map((doc) => (
          <div className={styles['resource-card']} key={doc.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-name']}>{doc.title}</h3>
              <p className={styles['resource-by']}>{doc.by}</p>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-level']}>{doc.level}</p>
            </div>
            <div className={styles['img-container']}>
              <a href={doc.href} target="_blank" rel="noreferrer">
                <img className={styles['resource-img']} src={doc.img} alt=""></img>
                <p className={styles['resource-description']}>{doc.description}</p>
              </a>
              <div>
                <ReadCounter></ReadCounter>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1>Html Practice Exercises</h1>
      <div className={styles['resource-cards-wrapper']}>
        {practice.map((practice) => (
          <div className={styles['resource-card']} key={practice.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-name']}>{practice.title}</h3>
              <p className={styles['resource-by']}>{practice.by}</p>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-level']}>{practice.level}</p>
            </div>
            <div className={styles['img-container']}>
              <a href={practice.href} target="_blank" rel="noreferrer">
                <img className={styles['resource-img']} src={practice.img} alt=""></img>
                <p className={styles['resource-description']}>{practice.description}</p>
              </a>
              <div>
                <ReadCounter></ReadCounter>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

//   return (
//     <section className={styles['resources-section']}>
//       <div className={styles['resources-container']}>
//         <h1>Html Video Learning Resources</h1>
//         {videos.map((video) => (
//           <div className={styles['resource-card']} key={video.id}>
//             <div className={styles['resource-header']}>
//               <h3 className={styles['resource-title']}>{video.title}</h3>
//               <p className={styles['resource-by']}>{video.by}</p>
//             </div>
//             <div className={styles['resource-details']}>
//               <p className={styles['resource-description']}>{video.description}</p>
//             </div>
//             <div className={styles['img-container']}>
//               <iframe
//                 className={styles['resource-video']}
//                 title={video.title}
//                 src={video.href}
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className={styles['resources-container']}>
//         <h1>Html Documentation</h1>
//         {docs.map((doc) => (
//           <div className={styles['resource-card']} key={doc.id}>
//             <div className={styles['resource-header']}>
//               <h3 className={styles['resource-title']}>{doc.title}</h3>
//               <p className={styles['resource-by']}>{doc.by}</p>
//             </div>
//             <div className={styles['resource-details']}>
//               <p className={styles['resource-description']}>{doc.description}</p>
//             </div>
//             <div className={styles['img-container']}>
//               <a href={doc.href} target="_blank" rel="noreferrer">
//                 <img className={styles['doc-img']} src={doc.img} alt=""></img>
//               </a>
//             </div>
//             <div>
//               <ReadCounter />
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className={styles['resources-container']}>
//         <h1>Html Practice Exercises</h1>
//         {practice.map((practice) => (
//           <div className={styles['resource-card']} key={practice.id}>
//             <div className={styles['resource-header']}>
//               <h3 className={styles['resource-title']}>{practice.title}</h3>
//               <p className={styles['resource-by']}>{practice.by}</p>
//             </div>
//             <div className={styles['resource-details']}>
//               <p className={styles['resource-description']}>{practice.description}</p>
//             </div>
//             <div className={styles['img-container']}>
//               <a href={practice.href} target="_blank" rel="noreferrer">
//                 <img className={styles['practice-img']} src={practice.img} alt=""></img>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

const LearnHtml = () => {
  return (
    <div>
      <HtmlContent content={htmlData} />
    </div>
  );
};

export default LearnHtml;
