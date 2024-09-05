import React from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TopButton from "../../components/topButton/TopButton.jsx";
import SocialMedia from "../../components/socialMedia/SocialMedia.jsx";
import Button from "../../components/button/Button.jsx";
import BlogsImg from "./BlogsImg.jsx";
import AddressImg from "./AddressImg.jsx";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.jsx";

function Contact({ theme, onToggle }) {
  return (
    <div className="contact-main">
      <Header theme={theme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
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
          </div>
        </Fade>

        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
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
          </div>
        </Fade>

        <Fade bottom duration={1000} distance="40px">
          <div className="address-heading-div">
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
          </div>
        </Fade>
      </div>
      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Contact;
