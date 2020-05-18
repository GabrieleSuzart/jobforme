import React from 'react'

import linkedinIcon from '../../assets/linkedin.svg'
import houseIcon from '../../assets/house.svg'
import emailIcon from '../../assets/email.svg'

import './style.css'

function Card(props) {

    const { name, cargo, linkedin, email, cidade } = props

    return (
        <div className="card">
            <div className="card-header">
                <p>
                    {name}
                </p>
                <p>
                    {cargo}
                </p>
            </div>
            <div className="card-body">
                <p className="contact-info lowercase">
                    <img className="icon" src={linkedinIcon} alt="Linkedin Icon" /><a href={linkedin} target='_blank' rel="noopener noreferrer" >{linkedin}</a>
                </p>
                <p className="contact-info lowercase">
                    <img className="icon" src={emailIcon} alt="Linkedin Icon" /><a href={`mailto:${email}`} >{email}</a>
                </p>
                <p className="contact-info">
                    <img className="icon" src={houseIcon} alt="Linkedin Icon" />{cidade}
                </p>
            </div>
        </div>
    )
}

export default Card
