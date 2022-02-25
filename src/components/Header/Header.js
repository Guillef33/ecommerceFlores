import React from 'react'

import './header.css'

function Header({ title, nameCategory }) {
  return (
    <div className="banner-home">
      <h2>
        {title} {nameCategory}
      </h2>
    </div>
  );
}

export default Header