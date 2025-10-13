import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/foto mentah_edited.jpg"
            alt="Foto diri"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Theodore Marvin Hendrawan</strong>. I'm a Computer Science student from BINUS University Bandung.
            I have a strong desire for self improvement. I am also eager to learn new tools and technologies.
            I have many experience in working together with my peers to complete projects of various topics.
            Working in such projects have helped me sharpen my communication and collaborative skills. I look forward to continue exploring new projects with new people in the future.
            </ScrollAnimation>

            {/* <br /><br /> */}
            
            {/* <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Computer Systems Technology program. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program.
            Throughout my studies at BCIT, I had the opportunity to engage in fascinating projects. Notably, I contributed to the development of the RENR Safety App and MyMind, projects that garnered recognition from my colleagues, instructors, and clients alike.
            </ScrollAnimation> */}

            {/* <br /><br /> */}

            {/* <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
              <div className="tagline2">
                I am familiar with the following technologies:
              </div>
            </ScrollAnimation> */}

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                I have experience with the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
