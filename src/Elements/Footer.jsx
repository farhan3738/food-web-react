import React from 'react';
import Instagram from '../assets/insta.jpg';
import Facebook from '../assets/fb.png';
import Twitter from '../assets/twitter.png';

const Footer = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      padding: '20px'
    },
    icon: {
      width: '30px',
      height: '30px',
      borderRadius: '12px',
    },
   p:{
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',  
   },
   span:{
     color:'crimson', 
     marginLeft:'5px'     
   }
  };

  return (
    <div>
      <div style={styles.container}>
        <img src={Facebook} style={styles.icon} alt="Facebook" />
        <img src={Instagram} style={styles.icon} alt="Instagram" />
        <img src={Twitter} style={styles.icon} alt="Twitter" />
      </div>
      <p style={styles.p}>All rights reserved by <span style={styles.span}>Muhammad Farhan</span></p>
    </div>
  );
};

export default Footer;