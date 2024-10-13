import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import BlogPostCard from '../../components/blogPostCard/BlogPostCard'

function Home() {
  return (
    <div>
      <Layout>
        <HeroSection />
        <BlogPostCard />
      </Layout>
    </div>
  )
}

export default Home
