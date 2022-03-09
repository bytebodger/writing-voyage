import { the } from '../objects/the';
import { Container } from '@mui/material';
import { Row, Column } from '@toolz/material-ui/dist/index';
import { css3 } from '@toolz/css3/src/css3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev as devTo, faFacebookF as facebook, faTwitter as twitter, faInstagram as instagram, faYoutube as youtube } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { useViewport } from '@toolz/use-viewport';
import { materialUiBreakpoints } from '../arrays/material.ui.breakpoints';

export const Footer = () => {
   const viewport = useViewport(materialUiBreakpoints);
   const isMobile = ['xs', 'sm', 'md'].includes(viewport.size);

   const mainStyle = {
      color: the.color.white,
      fontSize: isMobile ? css3.fontSize.small : css3.fontSize.inherit,
      height: isMobile ? 16 : 25,
      marginLeft: 8,
      width: isMobile ? 16 : 25,
   };

   return <>
      <div style={{
         backgroundColor: the.color.black,
         paddingBottom: 40,
         paddingTop: isMobile ? 20 : 40,
      }}>
         <Container style={{minWidth: 350}}>
            <Row>
               <Column xs={12}>
                  <div style={{
                     color: the.color.grey,
                     float: css3.float.right,
                  }}>
                     <a
                        href={'https://dev.to/bytebodger'}
                        rel={'noreferrer'}
                        target={'_blank'}
                        title={'Dev.to'}
                     >
                        <FontAwesomeIcon
                           icon={devTo}
                           style={mainStyle}
                        />
                     </a>
                     <a
                        href={'https://www.facebook.com/jaxcreator'}
                        rel={'noreferrer'}
                        target={'_blank'}
                        title={'Facebook'}
                     >
                        <FontAwesomeIcon
                           icon={facebook}
                           style={mainStyle}
                        />
                     </a>
                     <a
                        href={'https://twitter.com/WritingVoyage'}
                        rel={'noreferrer'}
                        target={'_blank'}
                        title={'Twitter'}
                     >
                        <FontAwesomeIcon
                           icon={twitter}
                           style={mainStyle}
                        />
                     </a>
                     <a
                        href={'https://www.instagram.com/bytebodger/'}
                        rel={'noreferrer'}
                        target={'_blank'}
                        title={'Instagram'}
                     >
                        <FontAwesomeIcon
                           icon={instagram}
                           style={mainStyle}
                        />
                     </a>
                     <a
                        href={'https://www.youtube.com/channel/UCHNDtVFC4WQTcp_awD9c1Ag'}
                        rel={'noreferrer'}
                        target={'_blank'}
                        title={'YouTube'}
                     >
                        <FontAwesomeIcon
                           icon={youtube}
                           style={mainStyle}
                        />
                     </a>
                  </div>
                  <div style={{
                     color: the.color.grey,
                     float: css3.float.left,
                  }}>
                     <div style={{
                        fontSize: 16,
                        fontWeight: css3.fontWeight._700,
                     }}>
                        Inquiries:*
                     </div>
                     <div style={{fontSize: 14}}>
                        adam@writing{'\u2024'}voyage
                     </div>
                     <div style={{fontSize: 14}}>
                        904.434.9210
                     </div>
                     <div style={{fontSize: 14}}>
                        2512 Dellwood Avenue
                     </div>
                     <div style={{fontSize: 14}}>
                        Jacksonville, Florida 32204
                     </div>
                     <div style={{fontSize: 14}}>
                        USA
                     </div>
                  </div>
                  <div style={{
                     clear: css3.clear.both,
                     color: the.color.grey,
                     fontSize: 10,
                     paddingBottom: 20,
                     paddingTop: 20,
                  }}>
                     * All inquiries should be accompanied by a healthy portion of beer. None of that cheap shit. Something dark. I'm fancy.
                  </div>
                  <div style={{
                     color: the.color.grey,
                  }}>
                     Copyright © {new Date().getFullYear()} ADAM NATHANIEL DAVIS All Rights Reserved
                  </div>
               </Column>
            </Row>
         </Container>
      </div>
   </>;
};
