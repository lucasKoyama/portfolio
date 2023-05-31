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
          const { link, videoDesktop, videoMobile, nome } = pjct;
          return (<ProjectCard
            key={ index }
            link={ link }
            videoDesktop={ videoDesktop }
            videoMobile={ videoMobile }
            nome={ nome }
          />);
        })}
    </section>
  );
}

Projects.propTypes = ({
  search: PropTypes.string,
}).isRequired;

export default Projects;
