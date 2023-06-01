import React from 'react';
import PropTypes from 'prop-types';
import projectsList from './ProjectsList';
import ProjectCard from './ProjectCard';
import TextReveal from '../DecryptText/TextReveal';

function Projects({ search }) {
  const searchArray = search.split(',').map((el) => el.trim().toLowerCase());
  return (
    <section className="projects">
      {
        searchArray.length > 0 && searchArray[0] !== ''
        && <TextReveal strings={ ['\\/ PROJETOS \\/'] } fontSize="4vw" />
      }
      {projectsList
        .filter((project) => {
          return project.skillsUsed
            .filter((skill) => skill.toLowerCase().includes(...searchArray));
        })
        .map((pjct, index) => {
          const { nome, link, repo, post, dialogMsg,
            videoDesktop, videoMobile, skillsUsed } = pjct;
          return (<ProjectCard
            key={ index }
            nome={ nome }
            link={ link }
            repo={ repo }
            post={ post }
            dialogMsg={ dialogMsg }
            videoDesktop={ videoDesktop }
            videoMobile={ videoMobile }
            skills={ skillsUsed }
          />);
        })}
    </section>
  );
}

Projects.propTypes = ({
  search: PropTypes.string,
}).isRequired;

export default Projects;
