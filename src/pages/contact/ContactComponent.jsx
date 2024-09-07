import React from "react";
<<<<<<< Updated upstream
import { motion } from "framer-motion";
=======
>>>>>>> Stashed changes
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TopButton from "../../components/topButton/TopButton.jsx";
import SocialMedia from "../../components/socialMedia/SocialMedia.jsx";
import Button from "../../components/button/Button.jsx";
import BlogsImg from "./BlogsImg.jsx";
import AddressImg from "./AddressImg.jsx";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.jsx";

<<<<<<< Updated upstream
const fadeInAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Contact({ theme, onToggle }) {
=======
const Contact = ({ theme }) => {
  const { contactSection, blogSection, addressSection, phoneSection } = contactPageData;

>>>>>>> Stashed changes
  return (
    <div className="contact-main">
      <Header theme={theme} />
      <div className="basic-contact">
<<<<<<< Updated upstream
        <motion.div
          className="contact-heading-div"
          variants={fadeInAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          <div className="contact-heading-img-div">
            <img
              src={require(`../../assets/images/${contactPageData.contactSection["profile_image_path"]}`)}
              alt=""
            />
          </div>
          <div className="contact-heading-text-div">
            <h1 className="contact-heading-text" style={{ color: theme.text }}>
              {contactPageData.contactSection["title"]}
            </h1>
            <p
              className="contact-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {contactPageData.contactSection["description"]}
            </p>
            <SocialMedia theme={theme} />
            <div className="resume-btn-div">
              <Button
                text="See My Resume"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="blog-heading-div"
          variants={fadeInAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="blog-heading-text-div">
            <h1 className="blog-heading-text" style={{ color: theme.text }}>
              {contactPageData.blogSection["title"]}
            </h1>
            <p
              className="blog-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {contactPageData.blogSection["subtitle"]}
            </p>
            <div className="blogsite-btn-div">
              <Button
                text="Visit My Blogsite"
                newTab={true}
                href={contactPageData.blogSection.link}
                theme={theme}
              />
            </div>
          </div>
          <div className="blog-heading-img-div">
            <BlogsImg theme={theme} />
          </div>
        </motion.div>

        <motion.div
          className="address-heading-div"
          variants={fadeInAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="contact-heading-img-div">
            <AddressImg theme={theme} />
          </div>
          <div className="address-heading-text-div">
            <h1 className="address-heading-text" style={{ color: theme.text }}>
              {contactPageData.addressSection["title"]}
            </h1>
            <p
              className="contact-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {contactPageData.addressSection["subtitle"]}
            </p>
            <h1 className="address-heading-text" style={{ color: theme.text }}>
              {contactPageData.phoneSection["title"]}
            </h1>
            <p
              className="contact-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {contactPageData.phoneSection["subtitle"]}
            </p>
            <div className="address-btn-div">
              <Button
                text="Visit on Google Maps"
                newTab={true}
                href={contactPageData.addressSection.location_map_link}
                theme={theme}
              />
            </div>
          </div>
        </motion.div>
      </div>
      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}
=======
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                src={require(`../../assets/images/${contactSection.profile_image_path}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {contactSection.title}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {contactSection.description}
              </p>
              <SocialMedia theme={theme} />
              <div className="resume-btn-div">
                <Button
                  text="See My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={1000} distance="40px">
          <div className="address-heading-div">
            <div className="contact-heading-img-div">
              <AddressImg theme={theme} />
            </div>
            <div className="address-heading-text-div">
              <h1
                className="address-heading-text"
                style={{ color: theme.text }}
              >
                {addressSection.title}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {addressSection.subtitle}
              </p>
              <h1
                className="address-heading-text"
                style={{ color: theme.text }}
              >
                {phoneSection.title}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {phoneSection.subtitle}
              </p>
              <div className="address-btn-div">
                <Button
                  text="Visit on Google Maps"
                  newTab={true}
                  href={addressSection.location_map_link}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};
>>>>>>> Stashed changes

export default Contact;
