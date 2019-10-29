import React from "react"
import SEO from "../components/seo"
import Card from "../components/card"
import Layout from "../components/layout"
import { motion } from 'framer-motion'

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="bg-primary-dark mb-12 lg:mb-16">
        <div className="container text-white">
          <div className="flex flex-wrap items-end">
            <div className="w-full md:w-2/3 py-10 md:py-16 lg:py-24 md:pr-16">
              <span className="text-xl md:text-2xl block mb-2">Training for healthcare professionals</span>
              <h1 className="mb-0">Victim Identification and Trafficking Awareness</h1>
              <span className="block text-5xl leading-none">-</span>
              
              <p className="text-lg md:text-xl">Bespoke, evidence-based training packages designed to equip healthcare professionals to identify, support and refer potential victims of modern-day slavery, whilst acting safely and appropriately during a consultation.</p>
            </div>
            <div className="w-full md:w-1/3 lg:pl-4">
              <nav className="p-8 md:p-10 bg-white">
                <ul>
                  <a className="font-bold text-lg text-black hover:text-primary focus:text-primary transition" href="/"><li><span className="text-2xs text-primary">▶</span> <span className="underline">Statistics</span></li></a>
                  <a className="font-bold text-lg text-black hover:text-primary focus:text-primary transition" href="/"><li><span className="text-2xs text-primary">▶</span> <span className="underline">About our training</span></li></a>
                  <a className="font-bold text-lg text-black hover:text-primary focus:text-primary transition" href="/"><li><span className="text-2xs text-primary">▶</span> <span className="underline">Our team of experts</span></li></a>
                  <a className="font-bold text-lg text-black hover:text-primary focus:text-primary transition" href="/"><li><span className="text-2xs text-primary">▶</span> <span className="underline">Testimonials</span></li></a>
                  <a className="font-bold text-lg text-black hover:text-primary focus:text-primary transition" href="/"><li><span className="text-2xs text-primary">▶</span> <span className="underline">Publications &amp; Presentations</span></li></a>
                  <a className="font-bold text-lg text-black hover:text-primary focus:text-primary transition" href="/"><li><span className="text-2xs text-primary">▶</span> <span className="underline">Resources</span></li></a>
                  <a className="font-bold text-lg text-black hover:text-primary focus:text-primary transition" href="/"><li><span className="text-2xs text-primary">▶</span> <span className="underline">Contact us</span></li></a>
                  <a className="font-bold text-lg text-black hover:text-primary focus:text-primary transition" href="/"><li><span className="text-2xs text-primary">▶</span> <span className="underline">E-learning</span></li></a>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 lg:mb-16">
        <div className="container">
          <div className="flex flex-wrap sm:-mx-3">
            <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-3 mb-6">
              <Card
                heading="10,000's"
                blurb="Tens of thousands of victims of human trafficking are living and working in the UK"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-3 mb-6">
              <Card 
                heading="30%"
                blurb="30% of victims present in healthcare services whilst or shortly after their time in slavery"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-3 mb-6">
              <Card 
                heading="1 in 8"
                blurb="1 in 8 healthcare professionals reported previous contact with a patient they knew or suspected of having been trafficked"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-3 mb-6">
              <Card 
                heading="1 in 8"
                blurb="1 in 8 healthcare professionals reported previous contact with a patient they knew or suspected of having been trafficked"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-3 mb-6">
              <Card 
                heading="1 in 8"
                blurb="1 in 8 healthcare professionals reported previous contact with a patient they knew or suspected of having been trafficked"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-3 mb-6">
              <Card 
                heading="1 in 8"
                blurb="1 in 8 healthcare professionals reported previous contact with a patient they knew or suspected of having been trafficked"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-dark">
        <div className="container content overflow-hidden">
          <div className="bg-white p-8 md:p-12 lg:p-16 my-10 lg:my-20 xl:my-32">
            <div className="mb-12 md:mb-16">
              <div className="w-full md:w-1/2 md:pr-10">
                <h2 className="mb-0">About our training</h2>
                <span className="block text-5xl leading-none text-secondary mb-3 md:mb-5">-</span>

                <p className="text-lg font-bold">Victims of modern slavery are presenting in healthcare settings and are not receiving the safeguarding and care they need.</p>
              </div>

              <div className="content-cols">
                <p>The solution is not just about raising awareness. VITA training aims to improve identification, support and care for victims by equipping healthcare professionals to know what to do. It delivers practical, user-friendly, evidence-based guidance.</p>

                <p>This training has been created and refined by doctors, who regularly apply the techniques and skills they teach during their own clinical practice.</p>

                <p><strong>More than 1000 healthcare professionals</strong> have attended VITA training. Our training has been shown to improve trainees knowledge and confidence particularly in identification, conducting the consultation and referral.</p>

                <p>Bespoke tailored training is available for NHS Foundation Trusts, General Practices, healthcare professional trainee programmes and other health services.</p>
              </div>
            </div>

            <div className="flex flex-wrap md:-mx-10">
              <div className="w-full md:w-1/2 md:px-10 mb-12 md:mb-0">
                <h3 className="mb-0">Training Packages</h3>
                <span className="block text-5xl leading-none text-secondary mb-3 md:mb-5">-</span>

                <div className="mb-6">
                  <span className="text-xl md:text-2xl font-bold block mb-2">Training presentation</span>
                  <ul className="list-disc list-inside">
                    <li>Unlimited group sizes.</li>
                    <li>1 or 2 hours presentation lengths</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <span className="text-xl md:text-2xl font-bold block mb-2">Simulation training</span>
                  <ul className="list-disc list-inside">
                  <li>The above presentation with simulated consultations</li>
                  <li>Minimum of 5 trainees required, maximum of 40</li>
                  <li>Approximately 1 facilitator required for every 5 trainees</li>
                  <li>Actors and facilitators provided</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <span className="text-xl md:text-2xl font-bold block mb-2">Training with video scenarios</span>
                  <ul className="list-disc list-inside">
                  <li>The above training presentation with video scenarios</li>
                  <li>Unlimited group sizes</li>
                  <li>Facilitators optional</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <span className="text-xl md:text-2xl font-bold block mb-2">Hand-out document</span>
                  <ul className="list-disc list-inside">
                  <li>For all VITA Trainees</li>
                  </ul>
                </div>

              </div>

              <div className="w-full md:w-1/2 md:px-10">
                <h3 className="mb-0">Request a booking</h3>
                <span className="block text-5xl leading-none text-secondary mb-3 md:mb-5">-</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grey mb-12 lg:mb-16 py-12 md:py-16 lg:py-24">
        <div className="container overflow-hidden">
          <h2 className="mb-0">Our team of experts</h2>
          <span className="block text-5xl leading-none text-secondary mb-3 md:mb-5">-</span>

          <div className="flex flex-wrap lg:-mx-8">
            <div className="w-full lg:w-1/3 lg:px-8 mb-12 lg:mb-0">
              <div className="mb-5">
                <span className="block text-xl font-bold mb-2">Dr Rosie Riley BSc MBChB</span>
                <span className="block text-lg">Founder, CEO and Trainer of VITA Training.</span>
                <span className="block text-lg">NHS England Clinical Entrepreneur.</span>
                <span className="block text-lg">Junior Clinical Fellow in Emergency Medicine</span>
              </div>

              <p className="leading-relaxed mb-5">Rosie works as doctor at a teaching hospital in London. She graduated with a medical degree and a BSc in Global Health from the University of Bristol. During 3rd year, she developed VITA Training and delivered it initially in a GP setting. Her results have been included in a Department of Health-commissioned systematic review and she has advised development of national multi-agency training materials on trafficking for NHS England in 2016. She is now a Clinical Entrepreneur for NHS England.</p>
              
              <a className="font-bold text-lg text-primary hover:text-primary-dark focus:text-primary-dark transition" href="/"><span className="text-2xs text-primary">▶</span> <span className="underline">Connect on LinkedIn</span></a>
            </div>
            <div className="w-full lg:w-1/3 lg:px-8 mb-12 lg:mb-0">
              <div className="mb-5">
                <span className="block text-xl font-bold mb-2">Dr Rosie Riley BSc MBChB</span>
                <span className="block text-lg">Founder, CEO and Trainer of VITA Training.</span>
                <span className="block text-lg">NHS England Clinical Entrepreneur.</span>
                <span className="block text-lg">Junior Clinical Fellow in Emergency Medicine</span>
              </div>

              <p className="leading-relaxed">Rosie works as doctor at a teaching hospital in London. She graduated with a medical degree and a BSc in Global Health from the University of Bristol. During 3rd year, she developed VITA Training and delivered it initially in a GP setting. Her results have been included in a Department of Health-commissioned systematic review and she has advised development of national multi-agency training materials on trafficking for NHS England in 2016. She is now a Clinical Entrepreneur for NHS England.</p>
            </div>
            <div className="w-full lg:w-1/3 lg:px-8 mb-12 lg:mb-0">
              <div className="mb-5">
                <span className="block text-xl font-bold mb-2">Dr Rosie Riley BSc MBChB</span>
                <span className="block text-lg">Founder, CEO and Trainer of VITA Training.</span>
                <span className="block text-lg">NHS England Clinical Entrepreneur.</span>
                <span className="block text-lg">Junior Clinical Fellow in Emergency Medicine</span>
              </div>

              <p className="leading-relaxed">Rosie works as doctor at a teaching hospital in London. She graduated with a medical degree and a BSc in Global Health from the University of Bristol. During 3rd year, she developed VITA Training and delivered it initially in a GP setting. Her results have been included in a Department of Health-commissioned systematic review and she has advised development of national multi-agency training materials on trafficking for NHS England in 2016. She is now a Clinical Entrepreneur for NHS England.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 lg:mb-16">
        <div className="container overflow-hidden">
          <h2 className="mb-0">Testimonials</h2>
          <span className="block text-5xl leading-none text-secondary mb-3 md:mb-5">-</span>

          <div className="flex flex-wrap md:-mx-4 lg:-mx-12">
            <div className="w-full md:w-7/12 mb-12 md:mb-0 md:px-4 lg:px-12">
              <div className="pr-12">
                <blockquote className="border-l-16 border-grey-light pl-5 lg:pl-8">
                  <p className="italic text-lg lg:text-xl mb-6 leading-relaxed">VITA training is evidence-based and prepares candidates for real-life encounters with victims (often by using simulated consultations). Not only will this training improve performance in appropriately managing the complex human trafficking cases who present to our services, it significantly improves communication skills overall and forces providers to reflect on how they are interacting with all of their patients.</p>
                  <cite className="not-italic font-bold text-sm">— Specialty Registrar, Emergency Medicine</cite>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-5/12 md:px-4 lg:px-12">
              <div className="bg-grey-light p-8 lg:p-12">
                <span className="text-xl font-bold block mb-4">Media</span>
                <span className="font-bold block mb-2">Podcasts:</span>
                
                <div className="mb-4">
                  <span>PonderMed #4: Dr. Rosie Riley. Frontline healthcare and human trafficking</span>
                </div>

                <span className="text-xl font-bold block mb-4">Publications</span>
                
                <div className="mb-4">
                  <span className="block mb-1">Red flags acronym cited in article in student <a className="link" href="http://student.bmj.com/student/view-article.html?id=sbmj.i6077#ref22" target="_blank" rel="noopener noreferrer">British Medical Journal</a></span>
                  <span className="italic block text-sm">2nd February 2017</span>
                </div>

                <span className="text-xl font-bold block mb-4">Presentations</span>

                <span className="block mb-2">Poster presentation at South West Obstetrics and Gynaecology regional conference 2015</span>
                <span className="block mb-2">PROTECT Stakeholders Workshop on Human Trafficking, Royal College of Psychiatrists 2015</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className="container"
      >
        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <p className="text-lg md:text-xl pl-3 border-l-2 border-black">An opinionated starter for Gatsby v2 with TailwindCSS, PostCSS and Framer Motion page transitions.</p>
        </motion.div>

        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <hr className="block my-8" />
        </motion.div>

        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <h2>Lorem ipsum dolor sit amet</h2>
          
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </motion.div>
      </motion.section> */}
    </Layout>
  )
}

export default IndexPage