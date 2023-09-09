import React from "react";
import PropTypes from 'prop-types';

const Section = ( { title, children } ) => {
  return (
    <section>
      <h1 className="title">{title}</h1>
      <>{children}</>
    </section> 
    )
    
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
}

export default Section;