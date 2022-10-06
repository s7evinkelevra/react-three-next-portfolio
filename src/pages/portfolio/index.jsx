import React from 'react';
import dynamic from 'next/dynamic'
import Menu from '@/components/dom/Menu';

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Portfolio from '@/components/dom/Portfolio';
import { useRouter } from 'next/router';


// dom components goes here
const Page = ({ projects }) => {
  const { query } = useRouter();
  const currentProjectSlug = query?.project || null

  console.log({ projects })
  console.log(currentProjectSlug)

  return (
    <>
      <Portfolio projects={projects} currentProjectSlug={currentProjectSlug} />
      <Menu width={"600px"} />
    </>
  )
}
// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props) => {

  return (
    <>
    </>
  )
}

export default Page

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('projects'));

  const projects = [];

  for (let filename of files) {
    const markdownWithMeta = fs.readFileSync(path.join('projects', filename), 'utf-8');
    const { data: frontMatter, content } = matter(markdownWithMeta);

    const mdxSource = await serialize(content);

    projects.push({
      ...frontMatter,
      slug: filename.split('.')[0],
      mdxSource
    })
  }


  /*   const projects = files.map(async (filename) => {
      const markdownWithMeta = fs.readFileSync(path.join('projects', filename), 'utf-8');
      const { data: frontMatter, content } = matter(markdownWithMeta);
  
      const mdxSource = await serialize(content);
  
      return {
        ...frontMatter,
        slug: filename.split('.')[0],
        mdxSource
      }
    }) */

  return {
    props: {
      title: 'Portfolio',
      projects
    },
  }
}
