import React from 'react'
import { TwitterIcon, FacebookIcon, LinkedinIcon, RedditIcon, TelegramIcon, EmailIcon, EmailShareButton, FacebookShareButton, LinkedinShareButton, RedditShareButton, TelegramShareButton, TwitterShareButton } from 'react-share'

const Share = ({ link }) => (
  <div className="share">
    <FacebookShareButton url={link}>
      <FacebookIcon size={32} round={true} />
    </FacebookShareButton>
    <TwitterShareButton url={link}>
      <TwitterIcon size={32} round={true} />
    </TwitterShareButton>
    <LinkedinShareButton url={link}>
      <LinkedinIcon size={32} round={true} />
    </LinkedinShareButton>
    <RedditShareButton url={link}>
      <RedditIcon size={32} round={true} />
    </RedditShareButton>
    <TelegramShareButton url={link}>
      <TelegramIcon size={32} round={true} />
    </TelegramShareButton>
    <EmailShareButton url={link}>
      <EmailIcon size={32} round={true} />
    </EmailShareButton>
  </div>
)

export default Share
