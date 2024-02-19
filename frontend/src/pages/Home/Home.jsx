import React from 'react'
import './_Home.css'
import Hero from '../../layouts/Hero/Hero'
import Features from '../../components/Home/Features/Features'

export default function Home() {
  return (
    <>
    <Hero />
    <section className="features">
        <h2 className="sr-only">Features</h2>
       <Features />
    </section>
    </>
  )
}
