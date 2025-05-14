import React from "react";
import "./About.css";
import pfp from "./images/pfp.avif";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-container container">
      <h1 className="text-center">About Us</h1>
      <div className="about-content-wrapper">
        <motion.section className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Lane Look, our mission is to provide high-quality eyewear that
              blends fashion with function. We believe in empowering individuals
              with the confidence to express themselves through their unique
              style.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Vision</h2>
            <p>
              We envision a world where everyone has access to eyewear that not
              only enhances their vision but also complements their personality.
              Our goal is to be the leading provider of stylish and affordable
              eyewear.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <ul>
              <li>
                Quality: We are committed to offering only the best products.
              </li>
              <li>
                Integrity: We conduct our business with honesty and
                transparency.
              </li>
              <li>
                Customer Focus: Our customers are at the heart of everything we
                do.
              </li>
              <li>
                Innovation: We continuously seek new ways to improve our
                products and services.
              </li>
            </ul>
          </div>
        </motion.section>
        <div className="divider"></div>
        <div className="about-team">
          <h2 className="text-center">Meet Our Team</h2>
          <div className="team-members">
            <motion.div whileHover={{scale:1.1}} className="team-member">
              <img src={pfp} alt="Team Member 1" />
              <h3>Tejas Pilane</h3>
              <p>Founder & CEO</p>
            </motion.div>
            <motion.div whileHover={{scale:1.1}} className="team-member">
              <img src={pfp} alt="Team Member 1" />
              <h3>Tejas Pilane</h3>
              <p>Co-Founder & CTO</p>
            </motion.div>
            <motion.div whileHover={{scale:1.1}} className="team-member">
              <img src={pfp} alt="Team Member 1" />
              <h3>Tejas Pilane</h3>
              <p>Marketing Manager</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
