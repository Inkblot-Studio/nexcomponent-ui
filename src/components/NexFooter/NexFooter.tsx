import React from 'react';
import { NexFooterProps } from './NexFooter.types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faYoutube,
  faPinterest,
  faSnapchatGhost,
  faTiktok,
  faRedditAlien,
  faTumblr,
  faMedium,
  faVimeoV,
  faStackOverflow,
  faBehance,
  faDribbble,
  faFlickr,
  faWhatsapp,
  faTelegramPlane,
  faSlack,
  faDiscord,
  faSpotify,
  faQuora,
  faSoundcloud,
  faApple,
  faGoogle,
  faAmazon,
  faMicrosoft,
  faDropbox,
  faWordpress,
  faBlogger,
  faWeibo,
  faWeixin,
  faXing,
  faQq,
  faVk,
  faPatreon,
  faDeviantart,
  faDrupal,
  faJoomla,
  faMastodon,
  faMix,
  faFoursquare,
  faMeetup,
  faSteam,
  faXbox,
  faPlaystation,
  faSkype,
  faTeamspeak,
  faGoodreads,
  faHouzz,
  faYelp,
  faPeriscope,
  faDiaspora,
} from '@fortawesome/free-brands-svg-icons';
import './NexFooter.scss';

const socialIcons: { [key: string]: any } = {
  facebook: faFacebookF,
  twitter: faTwitter,
  instagram: faInstagram,
  linkedin: faLinkedinIn,
  github: faGithub,
  youtube: faYoutube,
  pinterest: faPinterest,
  snapchat: faSnapchatGhost,
  tiktok: faTiktok,
  reddit: faRedditAlien,
  tumblr: faTumblr,
  medium: faMedium,
  vimeo: faVimeoV,
  stackoverflow: faStackOverflow,
  behance: faBehance,
  dribbble: faDribbble,
  flickr: faFlickr,
  whatsapp: faWhatsapp,
  telegram: faTelegramPlane,
  slack: faSlack,
  discord: faDiscord,
  spotify: faSpotify,
  quora: faQuora,
  soundcloud: faSoundcloud,
  apple: faApple,
  google: faGoogle,
  amazon: faAmazon,
  microsoft: faMicrosoft,
  dropbox: faDropbox,
  wordpress: faWordpress,
  blogger: faBlogger,
  weibo: faWeibo,
  wechat: faWeixin,
  xing: faXing,
  qq: faQq,
  vk: faVk,
  patreon: faPatreon,
  deviantart: faDeviantart,
  drupal: faDrupal,
  joomla: faJoomla,
  mastodon: faMastodon,
  mix: faMix,
  foursquare: faFoursquare,
  meetup: faMeetup,
  steam: faSteam,
  xbox: faXbox,
  playstation: faPlaystation,
  skype: faSkype,
  teamspeak: faTeamspeak,
  goodreads: faGoodreads,
  houzz: faHouzz,
  yelp: faYelp,
  periscope: faPeriscope,
  diaspora: faDiaspora
};

/**
 * NexFooter component
 *
 * A footer component displaying a logo, display name, copyright information, and social media icons.
 *
 * @param {string} logoSrc - The source URL for the logo image.
 * @param {string} displayName - The display name to be shown if the logo is not available.
 * @param {Array<{ type: string, url: string }>} socials - The list of social media icons and URLs to be displayed.
 */
const NexFooter: React.FC<NexFooterProps> = ({ logoSrc, displayName, socials }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='nex-footer-wrapper'>
      <div className='nex-footer-inner-wrapper'>
        <div className="utility-content-wrapper">
          {logoSrc ? (
            <div className='nex-footer-client-logo'>
              <img src={logoSrc} alt={displayName} className='nex-nav-logo' />
            </div>
          ) : (
            <div className='nex-footer-client-name'>
              <div className='client-name'>{displayName}</div>
            </div>
          )}
          <div className="copyright">
            © {displayName}. {currentYear} — All rights reserved.
          </div>

          <div className="socials-wrapper">
            {socials && socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={`social-icon ${social.type}`}>
                <FontAwesomeIcon icon={socialIcons[social.type]} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NexFooter;