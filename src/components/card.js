import React from 'react'
import { Link } from 'gatsby'

import { sliceCat } from '../utils'

import search from '../assets/images/search.svg'

import './card.css'

const Card = ({ id, title, action, topic }) => {
  return (
    <li className={`card ${action ? action : ''}`}>
      <Link to={`/${topic}/${id}`}>
        <h4 dangerouslySetInnerHTML={{ __html: sliceCat(title) }} />
      </Link>
      {action && <img src={search} alt="search" />}
    </li>
  )
}

export default Card
