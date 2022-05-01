import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const PageWrapper = ({children}) => {
  return (
    <main>
        <Header/>
        <section>
            {children}
        </section>
        <Footer/>
    </main>
  )
}

export default PageWrapper