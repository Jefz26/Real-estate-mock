import React from 'react'
import './Contact.css'
import {MdCall} from 'react/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="c-left">
                <span className="orangeText">Our Contacts</span>
                <span className="primaryText">Stay in touch</span>
                <span className="secondaryText">We are always ready to help by promising to offer
                the best locations.</span>

                <div className="flexStart contactModes">
                    {/* first row */}
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>
                        {/* second mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Chat</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>

                    {/* Second row */}
                    <div className="flexStart row">
                        {/* third mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Video</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Now</div>
                        </div>
                        {/* fourth mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Message</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message Now</div>
                        </div>
                    </div>
                </div>

            </div>
                <div className="flexColStart c-right">
                    <div className="image-container">
                    <img src="./contact.jpg" alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Contact