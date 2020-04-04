import React from 'react'
import { TwitterIcon, FacebookIcon, LinkedinIcon, RedditIcon, TelegramIcon, EmailIcon, EmailShareButton, FacebookShareButton, LinkedinShareButton, RedditShareButton, TelegramShareButton, TwitterShareButton } from 'react-share'

import { siteMeta } from '../../blog.config'

const Share = ({ link }) => (
  <div className="share">
    <FacebookShareButton url={`${siteMeta.siteUrl}${link}`}>
      <FacebookIcon size={32} round={true} />
    </FacebookShareButton>
    <TwitterShareButton url={`${siteMeta.siteUrl}${link}`}>
      <TwitterIcon size={32} round={true} />
    </TwitterShareButton>
    <LinkedinShareButton url={`${siteMeta.siteUrl}${link}`}>
      <LinkedinIcon size={32} round={true} />
    </LinkedinShareButton>
    <RedditShareButton url={`${siteMeta.siteUrl}${link}`}>
      <RedditIcon size={32} round={true} />
    </RedditShareButton>
    <TelegramShareButton url={`${siteMeta.siteUrl}${link}`}>
      <TelegramIcon size={32} round={true} />
    </TelegramShareButton>
    <EmailShareButton url={`${siteMeta.siteUrl}${link}`}>
      <EmailIcon size={32} round={true} />
    </EmailShareButton>
  </div>
)

export default Share
