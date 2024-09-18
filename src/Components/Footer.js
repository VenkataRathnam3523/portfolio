import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Venkatarathnam Kuntru</h4>
      <h4>Copyright &copy; 2024 VK</h4>
      <div className='footerLinks'>
        <a href="https://github.com/VenkataRathnam3523" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/venkata-rathnam-kuntru-0b0783273/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:venkatarathnamkuntru@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/venkatarathnamkuntru/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer