import React from 'react'
import './_Home.css'
import Hero from '../../layouts/Hero/Hero'
import FeatureChat from '../../components/Home/Features/Chat/Chat'
import FeatureMoney from '../../components/Home/Features/Money/Money'
import FeatureSecurity from '../../components/Home/Features/Security/Security'

export default function Home() {
  return (
    <>
    <Hero />
    <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureChat />
        <FeatureMoney />
        <FeatureSecurity />
    </section>
    </>
  )
}
