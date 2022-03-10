import React, { useState } from 'react';
import { Close } from '@mui/icons-material';
import { Container, Hidden, Dialog, Slide, AppBar, Toolbar, IconButton, Typography, List, ListItem } from '@mui/material';
import { css3 } from '@toolz/css3/src/css3';
import { faBars as hamburgerMenu } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Row, Column } from '@toolz/material-ui/dist/index';
import { the } from '../objects/the';
import { useViewport } from '@toolz/use-viewport';
import { materialUiBreakpoints } from '../arrays/material.ui.breakpoints';
import { allow } from '@toolz/allow-react';
import { is } from '../objects/is';
import { icons } from '../arrays/icons';
import { links } from '../arrays/links';

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide
      direction={'up'}
      ref={ref}
      {...props}
   />;
});

export const TopNav = () => {
   const [linksOpen, setLinksOpen] = useState(false);
   const viewport = useViewport(materialUiBreakpoints);
   const isMobile = ['xs', 'sm', 'md'].includes(viewport.size);

   const getIconLink = (thisIsAMobileMenuLink = false, icon = {}) => {
      allow.aBoolean(thisIsAMobileMenuLink).anObject(icon);
      return (
         <a
            href={icon.href}
            key={`aTag-${icon.title}`}
            rel={'noreferrer'}
            style={thisIsAMobileMenuLink ? mobileListItemStyle : {}}
            target={'_blank'}
            title={icon.title}
         >
            <FontAwesomeIcon
               icon={icon.icon}
               style={thisIsAMobileMenuLink ? mobileLinkStyle : mainStyle}
            />
         </a>
      );
   };

   const getLink = (thisIsAMobileMenuLink = false, link = {}) => {
      allow.aBoolean(thisIsAMobileMenuLink).anObject(link, is.not.empty);
      if (!thisIsAMobileMenuLink && link.genericName === 'HOME')
         return null;
      return (
         <Link
            key={`link-${link.genericName}`}
            style={thisIsAMobileMenuLink ? mobileLinkStyle : linkStyle}
            to={link.linkTo}
         >
            {link.genericName}
         </Link>
      );
   };

   const getListItems = () => {
      let listItems = [];
      links.forEach(link => {
         listItems.push(
            <ListItem
               button={true}
               key={`listItem-${link.genericName}`}
            >
               {getLink(isAMobileMenuLink, link)}
            </ListItem>,
         );
      });
      icons.forEach(icon => {
         listItems.push(
            <ListItem
               button={true}
               key={`listItem-${icon.title}`}
            >
               {getIconLink(isAMobileMenuLink, icon)}
            </ListItem>,
         );
      });
      return listItems;
   };

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

   const getTopIcons = () => icons.map(icon => getIconLink(isNotAMobileMenuLink, icon));
   const getTopLinks = () => links.map(link => getLink(isNotAMobileMenuLink, link));

   const isAMobileMenuLink = true;
   const isNotAMobileMenuLink = false;
   const linkStyle = {
      color: the.color.white,
      fontSize: isMobile ? css3.fontSize.xSmall : css3.fontSize.inherit,
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
            {getListItems()}
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
                        {getTopIcons(isNotAMobileMenuLink)}
                     </div>
                  </div>
                  <div style={{float: css3.float.right}}>
                     {getTopLinks()}
                  </div>
               </Hidden>
            </Column>
         </Row>
      </Container>
   </>;
};
