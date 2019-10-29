import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Card = ({ heading, blurb }) => (
  <div className="bg-primary-dark p-8 text-white h-full relative">
    <span className="text-3xl lg:text-4xl mb-2 font-bold">{heading}</span>
    <p className="lg:text-lg">{blurb}</p>

    <div className="">
    </div>
  </div>
)

Card.propTypes = {
  heading: PropTypes.string,
  blurb: PropTypes.string,
}

Card.defaultProps = {
  heading: ``,
  blurb: ``,
}

export default Card