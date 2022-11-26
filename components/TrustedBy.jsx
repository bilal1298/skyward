import React from 'react'
import classes from '../styles/TrustedBy.module.css'
import clients from '../public/clients.png'
import Image from 'next/image'

const TrustedBy = () => {
  return (
    <section className={classes.trustedContainer}>
        <div className="container">
            <h2 className="title">
                Trusted By
            </h2>
            <Image src={clients} alt="" />
        </div>
    </section>
  )
}

export default TrustedBy