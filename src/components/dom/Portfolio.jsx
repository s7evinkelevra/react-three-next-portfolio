import React from 'react';
import _ from 'lodash';
import { MDXRemote } from 'next-mdx-remote'

import { FaGithub } from 'react-icons/fa'
import { AiOutlineCodepen } from 'react-icons/ai'
import { RiExternalLinkLine } from 'react-icons/ri'

import styles from './Portfolio.module.css'

import Image from 'next/image';
import Link from 'next/link';
import SyntaxHighlighter from 'react-syntax-highlighter';

const Portfolio = ({ projects, currentProjectSlug }) => {

  const enabledProjects = _.filter(projects, project => !(project?.disabled));

  const currentProject = _.find(enabledProjects, project => project.slug === currentProjectSlug) || null;
  console.log({ currentProject })

  const projectsByCategory = _.groupBy(enabledProjects, "category");
  console.log(projectsByCategory)

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.text}>
          <h1>Projects</h1>
          {
            _.map(projectsByCategory, (projects, category) => (
              <div key={category} className={styles.project_category}>
                <h2>{category}</h2>
                <ul>
                  {
                    _.map(projects, (project) => (
                      <li key={project.slug} className={styles.project_item}>
                        {project.linkOnly ?
                          <a className={styles.external_link} target="_blank" href={project.publicLink}>{project.title}<RiExternalLinkLine /></a> :
                          <Link href={`/portfolio?project=${project.slug}`}><a>{project.title}</a></Link>}
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>

      <div className={styles.content}>
        {currentProjectSlug && currentProject && <>
          <div className={styles.content_header}>
            <h1>{currentProject.title}</h1>
            <div className={styles.content_meta}>
              <span>{currentProject.date}</span>
              {/* <span>{currentProject.category}</span> */}
              <span className={styles.meta_tags}>{currentProject?.tags?.length > 0 && currentProject.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}</span>
              {currentProject?.githubLink && <span><a target="_blank" href={currentProject.githubLink}><FaGithub /></a></span>}
              {currentProject?.publicLink && <span><a target="_blank" href={currentProject.publicLink}><AiOutlineCodepen /></a></span>}
            </div>
          </div>
          <div className={styles.mdx_wrapper}>
            <MDXRemote {...currentProject.mdxSource} components={{ Link, Image, SyntaxHighlighter }} />
          </div>
        </>}
      </div>
    </div>

  );
};

export default Portfolio;