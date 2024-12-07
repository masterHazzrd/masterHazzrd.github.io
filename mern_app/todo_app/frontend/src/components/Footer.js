import React from 'react';
import './Footer.css'; // Footer styles

function Footer() {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <footer>
      <p>
        Developed by: <strong>John M. Gallagher Jr</strong> (aka <em>masterHazzrd</em>)
      </p>
      <p>Last Updated: {lastUpdated}</p>
    </footer>
  );
}

export default Footer;
