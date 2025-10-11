import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';

import ScrollAnimation from "react-animate-on-scroll";
function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showWATooltip, setShowWATooltip] = useState(false);
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("theodore.hendrawan@binus.ac.id");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };
  const copyWAToClipboard = () => {
    navigator.clipboard.writeText("+6281556638858");
    setShowWATooltip(true);
    setTimeout(() => {
      setShowWATooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">

      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn" >
          <div className="BigCard">
            <Email>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>theodore.hendrawan@binus.ac.id</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton  onClick={copyEmailToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:theodore.hendrawan@binus.ac.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </Email>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" >
          <div className="BigCard">
            <Email>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>+62 815-5663-8858</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showWATooltip}
                  onClose={() => setShowWATooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton  onClick={copyWAToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="https://wa.me/6281556638858"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send WhatsApp
              </a>
            </Email>
          </div>
        </ScrollAnimation>

      </div>
    </ContactWrapper>
  );
}

export default Contact;
