import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cellphone from '../../images/frames/cellphone_frame.webp';
import notebook from '../../images/frames/notebook_frame.webp';
import 'animate.css';
import './ProjectCard.css';

const timer = 1000;

function ProjectCard({ link, videoDesktop, videoMobile, nome }) {
  const videoRef = useRef(null);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const timeoutId = setTimeout(() => {
            setPlayVideo(true);
            clearTimeout(timeoutId);
          }, timer);
        } else if (videoElement.currentTime > 0) {
          videoElement.pause();
          videoElement.currentTime = 0;
          setPlayVideo(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (playVideo) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }, [playVideo]);

  return (
    <div className="card">
      <h2 className="animate__animated animate__fadeInDown">
        <a href={ link } target="_blank" rel="noreferrer">{`Projeto ${nome}`}</a>
      </h2>
      <div className="notebook">
        <img src={ notebook } alt="notebook frame" className="notebook-frame" />
        <div className="screen-container">
          <video
            ref={ videoRef }
            className="screen"
            src={ videoDesktop }
            autoPlay={ false }
            muted
            loop
            controls
          >
            <source src={ videoDesktop } type="video/mp4" />
            Desculpe, seu navegador não suporta a reprodução de vídeos.
          </video>
          { link && (
            <iframe
              src={ link }
              width="1039"
              height="600"
              title="website"
              className="screen"
            />
          )}
        </div>
      </div>
      <div className="cellphone">
        <div className="gambi" />
        <video
          ref={ videoRef }
          className="screen"
          src={ videoMobile }
          autoPlay={ false }
          muted
          loop
          controls
        >
          <source src={ videoMobile } type="video/mp4" />
          Desculpe, seu navegador não suporta a reprodução de vídeos.
        </video>
        <img src={ cellphone } alt="cellphone frame" className="cellphone-frame" />
        <iframe
          src={ link }
          width="313"
          height="680"
          title="website"
          className="screen"
        />
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  link: PropTypes.string,
  video: PropTypes.string,
  nome: PropTypes.string,
}.isRequired;

export default ProjectCard;
