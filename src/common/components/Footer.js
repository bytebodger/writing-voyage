import { the } from '../objects/the';
import { Container } from '@mui/material';
import { Row, Column } from '@toolz/material-ui/dist/index';
import { css3 } from '@toolz/css3/src/css3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useViewport } from '@toolz/use-viewport';
import { materialUiBreakpoints } from '../arrays/material.ui.breakpoints';
import { icons } from '../arrays/icons';

export const Footer = () => {
   const viewport = useViewport(materialUiBreakpoints);
   const isMobile = ['xs', 'sm', 'md'].includes(viewport.size);

   const contactData = [
      <>adam@writing{'\u2024'}voyage</>,
      '904.434.9210',
      '2512 Dellwood Avenue',
      'Jacksonville, Florida 32204',
      'USA',
   ];

   const getContactData = () => {
      return contactData.map(data => {
         return (
            <div
               key={`contactData-${data}`}
               style={{fontSize: 14}}
            >
               {data}
            </div>
         );
      });
   };

   const getIcons = () => {
      return icons.map(icon => {
         return (
            <a
               href={icon.href}
               key={`bottomIcon-${icon.href}`}
               rel={'noreferrer'}
               target={'_blank'}
               title={icon.title}
            >
               <FontAwesomeIcon
                  icon={icon.icon}
                  style={mainStyle}
               />
            </a>
         );
      });
   };

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
                     {getIcons()}
                  </div>
                  <div style={{
                     color: the.color.grey,
                     float: css3.float.left,
                  }}>
                     <div
                        id={'contact'}
                        style={{
                           fontSize: 16,
                           fontWeight: css3.fontWeight._700,
                        }}
                     >
                        Inquiries:*
                     </div>
                     {getContactData()}
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
                  <div style={{color: the.color.grey}}>
                     Copyright © {new Date().getFullYear()} ADAM NATHANIEL DAVIS All Rights Reserved
                  </div>
               </Column>
            </Row>
         </Container>
      </div>
   </>;
};
