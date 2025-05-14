import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import "../index.css";
import glasses1 from "../images/glasses1.jpg";
import glasses2 from "../images/glasses2.jpg";
import glasses3 from "../images/glasses3.jpg";
import glasses4 from "../images/glasses4.jpg";

export class Header extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row my-4'>
          <div className='col-lg-3 col-md-3 col-sm-6'>

            <motion.div whileHover={{ scale: 1.1 }} className='glasses'>
              <Link to="/shop" style={{ textDecoration: 'none' }}>
                <img src={glasses1} alt="glasses1" className='img-fluid' />
                <h5>Eyeglasses</h5>
              </Link>
            </motion.div>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6'>
            <motion.div whileHover={{ scale: 1.1 }} className='glasses'>
              <Link to="/shop" style={{ textDecoration: 'none' }}>
                <img src={glasses2} alt="glasses2" className='img-fluid' />
                <h5>Sunglasses</h5>
              </Link>
            </motion.div>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6'>
            <motion.div whileHover={{ scale: 1.1 }} className='glasses'>
              <Link to="/shop" style={{ textDecoration: 'none' }}>
                <img src={glasses3} alt="glasses3" className='img-fluid' />
                <h5>Screen Glasses</h5>
              </Link>
            </motion.div>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6'>
            <motion.div whileHover={{ scale: 1.1 }} className='glasses'>
              <Link to="/shop" style={{ textDecoration: 'none' }}>
                <img src={glasses4} alt="glasses4" className='img-fluid' />
                <h5>Power Sunglasses</h5>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header