import React, { useState } from 'react';
import { Close } from '@mui/icons-material';
import { Container, Hidden, Dialog, Slide, AppBar, Toolbar, IconButton, Typography, List, ListItem } from '@mui/material';
import { css3 } from '@toolz/css3/src/css3';
import { faBars as hamburgerMenu } from '@fortawesome/free-solid-svg-icons';
import { faDev as devTo, faFacebookF as facebook, faTwitter as twitter, faInstagram as instagram, faYoutube as youtube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Row, Column } from '@toolz/material-ui/dist/index';
import { the } from '../objects/the';
import { useViewport } from '@toolz/use-viewport';
import { materialUiBreakpoints } from '../arrays/material.ui.breakpoints';

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide
      direction={'up'}
      ref={ref}
      {...props}
   />;
});

export const TopNav = props => {
   const [linksOpen, setLinksOpen] = useState(false);
   const viewport = useViewport(materialUiBreakpoints);

   const getStyles = makeStyles(() => {
      return {
         appBar: {
            backgroundColor: the.color.black,
            position: css3.position.relative,
         },
         title: {
            flex: 1,
            position: css3.position.relative,
            right: 18,
            textAlign: css3.textAlign.center,
         },
      };
   });

   const isMobile = ['xs', 'sm', 'md'].includes(viewport.size);

   const linkStyle = {
      color: the.color.white,
      fontSize: isMobile ? css3.fontSize.small : css3.fontSize.inherit,
      marginRight: 16,
      textDecoration: css3.textDecoration.none,
   };
   const mainStyle = {
      color: the.color.white,
      fontSize: isMobile ? css3.fontSize.small : css3.fontSize.inherit,
      height: isMobile ? 16 : 25,
      marginLeft: 8,
      width: isMobile ? 16 : 25,
   };
   const mobileLinkStyle = {
      color: the.color.black,
      textAlign: css3.textAlign.center,
      textDecoration: css3.textDecoration.none,
      width: '100%',
   };
   const mobileListItemStyle = {
      fontSize: css3.fontSize.xLarge,
      width: '100%',
   };

   return <>
      <Dialog
         fullScreen={true}
         onClick={() => setLinksOpen(false)}
         onClose={() => setLinksOpen(false)}
         open={linksOpen}
         TransitionComponent={Transition}
      >
         <AppBar className={getStyles().appBar}>
            <Toolbar>
               <IconButton
                  color={'inherit'}
                  edge={'start'}
                  onClick={() => setLinksOpen(false)}
               >
                  <Close/>
               </IconButton>
               <Typography
                  className={getStyles().title}
                  variant={'h6'}
               >
                  Where To?
               </Typography>
            </Toolbar>
         </AppBar>
         <List>
            <ListItem button={true}>
               <Link
                  style={mobileLinkStyle}
                  to={'/novels'}
               >
                  NOVELS
               </Link>
            </ListItem>
            <ListItem button={true}>
               <Link
                  style={mobileLinkStyle}
                  to={'/paintings'}
               >
                  PAINTINGS
               </Link>
            </ListItem>
            <ListItem button={true}>
               <Link
                  style={mobileLinkStyle}
                  to={'/plays'}
               >
                  PLAYS
               </Link>
            </ListItem>
            <ListItem button={true}>
               <Link
                  style={mobileLinkStyle}
                  to={'/poems'}
               >
                  POEMS
               </Link>
            </ListItem>
            <ListItem button={true}>
               <Link
                  style={mobileLinkStyle}
                  to={'/programs'}
               >
                  PROGRAMS
               </Link>
            </ListItem>
            <ListItem button={true}>
               <Link
                  style={mobileLinkStyle}
                  to={'/contact'}
               >
                  CONTACT
               </Link>
            </ListItem>
            <ListItem button={true}>
               <a
                  href={'https://dev.to/bytebodger'}
                  rel={'noreferrer'}
                  style={mobileListItemStyle}
                  target={'_blank'}
                  title={'Dev.to'}
               >
                  <FontAwesomeIcon
                     icon={devTo}
                     style={mobileLinkStyle}
                  />
               </a>
            </ListItem>
            <ListItem button={true}>
               <a
                  href={'https://www.facebook.com/jaxcreator'}
                  rel={'noreferrer'}
                  style={mobileListItemStyle}
                  target={'_blank'}
                  title={'Facebook'}
               >
                  <FontAwesomeIcon
                     icon={facebook}
                     style={mobileLinkStyle}
                  />
               </a>
            </ListItem>
            <ListItem button={true}>
               <a
                  href={'https://twitter.com/WritingVoyage'}
                  rel={'noreferrer'}
                  style={mobileListItemStyle}
                  target={'_blank'}
                  title={'Twitter'}
               >
                  <FontAwesomeIcon
                     icon={twitter}
                     style={mobileLinkStyle}
                  />
               </a>
            </ListItem>
            <ListItem button={true}>
               <a
                  href={'https://www.instagram.com/bytebodger/'}
                  rel={'noreferrer'}
                  style={mobileListItemStyle}
                  target={'_blank'}
                  title={'Instagram'}
               >
                  <FontAwesomeIcon
                     icon={instagram}
                     style={mobileLinkStyle}
                  />
               </a>
            </ListItem>
            <ListItem button={true}>
               <a
                  href={'https://www.youtube.com/channel/UCHNDtVFC4WQTcp_awD9c1Ag'}
                  rel={'noreferrer'}
                  style={mobileListItemStyle}
                  target={'_blank'}
                  title={'YouTube'}
               >
                  <FontAwesomeIcon
                     icon={youtube}
                     style={mobileLinkStyle}
                  />
               </a>
            </ListItem>
         </List>
      </Dialog>
      <Container style={{minWidth: 350}}>
         <Row style={{
            paddingLeft: 16,
            paddingRight: 16,
         }}>
            <Column xs={12}>
               <div style={{float: css3.float.left}}>
                  <Link
                     style={{
                        color: the.color.white,
                        fontSize: isMobile ? css3.fontSize.small : css3.fontSize.inherit,
                        textDecoration: css3.textDecoration.none,
                     }}
                     to={'/home'}
                  >
                     ADAM NATHANIEL DAVIS:
                  </Link>
               </div>
               <Hidden mdUp={true}>
                  <div style={{float: css3.float.right}}>
                     <FontAwesomeIcon
                        icon={hamburgerMenu}
                        onClick={() => setLinksOpen(true)}
                        style={{
                           color: the.color.white,
                           height: 25,
                           width: 25,
                        }}
                     />
                  </div>
               </Hidden>
               <Hidden mdDown={true}>
                  <div style={{float: css3.float.right}}>
                     <div style={{float: css3.float.right}}>
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
                  </div>
                  <div style={{float: css3.float.right}}>
                     <Link
                        style={linkStyle}
                        to={'/novels'}
                     >
                        NOVELS
                     </Link>
                     <Link
                        style={linkStyle}
                        to={'/paintings'}
                     >
                        PAINTINGS
                     </Link>
                     <Link
                        style={linkStyle}
                        to={'/plays'}
                     >
                        PLAYS
                     </Link>
                     <Link
                        style={linkStyle}
                        to={'/poems'}
                     >
                        POEMS
                     </Link>
                     <Link
                        style={linkStyle}
                        to={'/programs'}
                     >
                        PROGRAMS
                     </Link>
                     <Link
                        style={linkStyle}
                        to={'/contact'}
                     >
                        CONTACT
                     </Link>
                  </div>
               </Hidden>
            </Column>
         </Row>
      </Container>
   </>;
};
