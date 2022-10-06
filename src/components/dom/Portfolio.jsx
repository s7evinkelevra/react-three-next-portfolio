import React from 'react';
import _ from 'lodash';
import { MDXRemote } from 'next-mdx-remote'

import Link from 'next/link';
import styles from './Portfolio.module.css'
import Image from 'next/image';

const Portfolio = ({ projects, currentProjectSlug }) => {

  const currentProject = _.find(projects, project => project.slug === currentProjectSlug) || null;
  console.log({ currentProject })

  const projectsByCategory = _.groupBy(projects, "category");
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
                        <Link href={`/portfolio?project=${project.slug}`}><a>{project.title}</a></Link>
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
        <div className={styles.mdx_wrapper}>
          {currentProjectSlug && <MDXRemote {...currentProject.mdxSource} components={{ Link, Image }} />}
        </div>
      </div>
    </div>

  );
};

export default Portfolio;