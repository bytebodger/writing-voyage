import React, { useState } from 'react';
import { Close } from '@mui/icons-material';
import { Container, Dialog, Slide, AppBar, Toolbar, IconButton, Typography, List, ListItem } from '@mui/material';
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
   const isMobile = ['xs', 'sm'].includes(viewport.size);

   const getHamburgerMenu = () => {
      if (!isMobile)
         return null;
      return <>
         <div style={{float: css3.float.right}}>
            <FontAwesomeIcon
               icon={hamburgerMenu}
               onClick={() => setLinksOpen(true)}
               style={{
                  color: the.color.white,
                  cursor: css3.cursor.pointer,
                  height: 25,
                  width: 25,
               }}
            />
         </div>
      </>;
   };

   const getIconLink = (icon = {}) => {
      allow.anObject(icon);
      return (
         <a
            href={icon.href}
            key={`aTag-${icon.title}`}
            rel={'noreferrer'}
            style={isMobile ? mobileListItemStyle : {}}
            target={'_blank'}
            title={icon.title}
         >
            <FontAwesomeIcon
               icon={icon.icon}
               style={isMobile ? mobileLinkStyle : mainStyle}
            />
         </a>
      );
   };

   const getLink = (link = {}) => {
      allow.anObject(link, is.not.empty);
      if (!isMobile && link.genericName === 'HOME')
         return null;
      return (
         <Link
            key={`link-${link.genericName}`}
            style={isMobile ? mobileLinkStyle : linkStyle}
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
               {getLink(link)}
            </ListItem>,
         );
      });
      listItems.push(
         <ListItem
            button={true}
            key={`link-contact`}
         >
            <a
               href={'#contact'}
               style={isMobile ? mobileLinkStyle : linkStyle}
            >
               CONTACT
            </a>
         </ListItem>,
      );
      icons.forEach(icon => {
         listItems.push(
            <ListItem
               button={true}
               key={`listItem-${icon.title}`}
               //style={{textAlign: css3.textAlign.center}}
            >
               {getIconLink(icon)}
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

   const getTopIcons = () => icons.map(icon => getIconLink(icon));

   const getTopIconsAndLinks = () => {
      if (isMobile)
         return null;
      return <>
         <div style={{float: css3.float.right}}>
            {getTopIcons()}
         </div>
         <div style={{float: css3.float.right}}>
            {getTopLinks()}
         </div>
      </>;
   };

   const getTopLinks = () => {
      let topLinks = links.map(link => getLink(link));
      topLinks.push(
         <a
            href={'#contact'}
            key={`link-contact`}
            style={isMobile ? mobileLinkStyle : linkStyle}
         >
            CONTACT
         </a>,
      );
      return topLinks;
   };

   const linkStyle = {
      color: the.color.white,
      fontSize: isMobile || viewport.size === 'md' ? css3.fontSize.xSmall : css3.fontSize.inherit,
      marginRight: 16,
      textDecoration: css3.textDecoration.none,
   };
   const mainStyle = {
      color: the.color.white,
      fontSize: isMobile ? css3.fontSize.small : css3.fontSize.inherit,
      height: isMobile || viewport.size === 'md' ? 16 : 25,
      marginLeft: 8,
      width: isMobile || viewport.size === 'md' ? 16 : 25,
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
      <Container style={{
         minWidth: 350,
         paddingLeft: 0,
         paddingRight: 0,
      }}>
         <Row>
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
               {getHamburgerMenu()}
               {getTopIconsAndLinks()}
            </Column>
         </Row>
      </Container>
   </>;
};
