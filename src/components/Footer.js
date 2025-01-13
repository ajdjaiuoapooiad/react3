import React from 'react'
import { pageLinks, socialLinks } from '../data';

const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {pageLinks.map((l) => {
          return (
            <li key={l.id}>
              <a href={l.href} class="footer-link">{l.text}</a>
            </li>
          )
        })}
      
      </ul>
      <ul class="footer-icons">
        {socialLinks.map((s) => {
          return (
            <li key={s.id}>
              <a href={s.href} target="_blank" class="footer-icon"><i class={s.icon}></i></a>
            </li>
          )
        })}
        
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer