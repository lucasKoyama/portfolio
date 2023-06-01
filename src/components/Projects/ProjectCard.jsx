import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import cellphone from '../../images/frames/cellphone_frame.webp';
import notebook from '../../images/frames/notebook_frame.webp';
import 'animate.css';
import './ProjectCard.css';

const timer = 1000;

function ProjectCard(props) {
  const { nome, link, repo, post, dialogMsg, videoDesktop, videoMobile, skills } = props;
  const videoRef = useRef(null);
  const [playVideo, setPlayVideo] = useState(false);
  const [dialogID, setDialogID] = useState('');

  const openDialog = () => {
    const dialog = document.getElementById(dialogID);
    dialog.showModal();
  };

  useEffect(() => {
    const dialogId = nome.split(' ');
    setDialogID(dialogId[dialogId.length - 1]);
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
  }, [nome]);

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
      <h1 className="animate__animated animate__fadeInDown">
        {`Projeto ${nome}`}
      </h1>
      <button className="btn" onClick={ () => openDialog() }>
        Mais sobre o projeto
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15px" width="15px" className="icon">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            stroke="#292D32"
            d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301
             16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
          />
        </svg>
      </button>
      <dialog id={ dialogID }>
        <div className="dialog-container">
          <button onClick={ () => document.getElementById(dialogID).close() }>
            <i className="fa-solid fa-xmark" />
          </button>
          <video
            src={ videoDesktop }
            autoPlay
            muted
            loop
            controls
          >
            <source src={ videoDesktop } type="video/mp4" />
            Desculpe, seu navegador não suporta a reprodução de vídeos.
          </video>
          <aside>
            <h2>{nome}</h2>
            <p>{dialogMsg}</p>
            <h4>Habilidades e ferramentas usadas no projeto:</h4>
            <ul>
              {skills.map((skill) => {
                return (
                  <li key={ skill }>{skill.charAt(0).toUpperCase() + skill.slice(1)}</li>
                );
              })}
            </ul>
          </aside>
          <div className="icons">
            <IconButton
              icon="globe"
              type="solid"
              text="Website"
              bgColor="#0092CB"
              url={ link }
            />
            <IconButton
              icon="linkedin"
              type="brands"
              text="Publicação"
              bgColor="#0073B1"
              url={ post }
            />
            <IconButton
              icon="github"
              type="brands"
              text="Repositório"
              bgColor="#0e3649"
              url={ repo }
            />
          </div>
        </div>
      </dialog>
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
