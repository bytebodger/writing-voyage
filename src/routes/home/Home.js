import adamThePoetJpg from '../../common/images/adam-the-poet.jpg';
import elizabethTaylor from '../../common/images/elizabeth-taylor.jpg';
import ghandi from '../../common/images/ghandi.jpg';
import popeBenedict from '../../common/images/pope-benedict.jpg';
import tennesseeWilliams from '../../common/images/tennessee-williams.jpg';
import { Container } from '@mui/material';
import { css3 } from '@toolz/css3/src/css3';
import { Link } from 'react-router-dom';
import { materialUiBreakpoints } from '../../common/arrays/material.ui.breakpoints';
import { Row, Column } from '@toolz/material-ui/dist/index';
import { the } from '../../common/objects/the';
import { useViewport } from '@toolz/use-viewport';
import { links } from '../../common/arrays/links';
import { allow } from '@toolz/allow-react';
import { capitalize } from '@toolz/capitalize';

export const Home = () => {
   const viewport = useViewport(materialUiBreakpoints);
   const isMobile = ['xs', 'sm', 'md'].includes(viewport.size);

   const bodyColumnStyle = {
      fontFamily: 'Open Sans',
      textAlign: css3.textAlign.center,
      width: '100%',
   };
   const bodyHeadingLinkStyle = {
      color: the.color.black,
      fontFamily: 'Open Sans',
      fontSize: 20,
      fontWeight: css3.fontWeight._700,
      textDecoration: css3.textDecoration.none,
   };
   const divLinkStyle = {
      clear: css3.clear.both,
      float: css3.float.right,
      fontFamily: 'Open Sans',
      fontSize: isMobile ? 16 : 20,
      left: isMobile ? 20 : 0,
      position: css3.position.relative,
   };

   const getLinkDivs = () => {
      return links.map(link => {
         if (!link.personalName)
            return null;
         return (
            <div
               key={`linkDiv-${link.personalName}`}
               style={divLinkStyle}
            >
               <Link
                  style={linkStyle}
                  to={link.linkTo}
               >
                  {link.personalName}
               </Link>
            </div>
         );
      });
   };

   const getQuoteRows = () => {
      return quotes.map((quote, index) => {
         return (
            <Row
               key={`quoteRow-${quote.person}`}
               style={{marginBottom: index === quotes.length - 1 ? 100 : 'inherit'}}
            >
               <Column
                  xs={5}
                  style={quoteImageStyle}
               >
                  <div>
                     <img
                        alt={quote.person}
                        src={quote.src}
                        style={roundImageStyle}
                     />
                  </div>
               </Column>
               <Column
                  xs={7}
                  style={{padding: isMobile ? 20 : 30}}
               >
                  <div style={quoteTableStyle}>
                     <div style={quoteCellStyle}>
                        <div style={quoteStyle}>
                           "{quote.text}"
                        </div>
                        <div style={quoteNameStyle}>
                           {quote.person}
                        </div>
                        <div style={quoteSourceStyle}>
                           via {quote.source}
                        </div>
                     </div>
                  </div>
               </Column>
            </Row>
         );
      });
   };

   const getThumbnailColumns = (firstIndex = -1) => {
      allow.anInteger(firstIndex, 0, 5);
      const displayLinks = links.filter(link => !!(link.personalName));
      const columns = [];
      for (let i = firstIndex; i < firstIndex + 3; i++) {
         const link = displayLinks[i];
         const title = capitalize.firstLetter(link.genericName.toLowerCase());
         columns.push(
            <Column
               xs={12} sm={12} md={12} lg={4} xl={4}
               key={`thumbnailColumn-${link.genericName}`}
               style={{
                  ...bodyColumnStyle,
                  marginTop: isMobile ? 0 : 20,
                  padding: 30,
               }}
            >
               <div>
                  <Link to={link.linkTo}>
                     <img
                        alt={title}
                        src={link.imgSrc}
                        style={roundImageStyle}
                     />
                  </Link>
               </div>
               <div>
                  <Link
                     style={bodyHeadingLinkStyle}
                     to={link.linkTo}
                  >
                     {title}
                  </Link>
                  <Link
                     style={{
                        color: the.color.grey,
                        textDecoration: css3.textDecoration.none,
                     }}
                     to={link.linkTo}
                  >
                     <div style={{
                        ...bodyColumnStyle,
                        color: the.color.grey,
                     }}>
                        {link.narrative}
                     </div>
                  </Link>
               </div>
            </Column>,
         );
      }
      return columns;
   };

   const getThumbnailRows = () => {
      const rows = [];
      for (let i = 0; i < 2; i++) {
         rows.push(
            <Row key={`thumbnailRow-${i}`}>
               {getThumbnailColumns(i * 3)}
            </Row>,
         );
      }
      return rows;
   };

   const getWorkingOn = () => {
      return workingOn.map((snippet, index) => {
         return (
            <Row key={`workingOnRow-${index}`}>
               <Column style={{
                  ...bodyColumnStyle,
                  color: the.color.black,
                  fontSize: 14,
                  marginTop: index === 0 ? 10 : 'inherit',
               }}>
                  {snippet}
               </Column>
            </Row>
         );
      });
   };

   const linkStyle = {
      color: the.color.white,
      textDecoration: css3.textDecoration.none,
   };
   const quoteCellStyle = {
      display: css3.dislay.tableCell,
      paddingBottom: 20,
      verticalAlign: css3.verticalAlign.bottom,
   };
   const quoteImageStyle = {
      ...bodyColumnStyle,
      marginTop: isMobile ? 0 : 20,
      padding: isMobile ? 10 : 30,
      textAlign: css3.textAlign.right,
   };
   const quoteNameStyle = {
      color: the.color.black,
      fontFamily: 'Open Sans',
      fontSize: isMobile ? 12 : 20,
      fontWeight: css3.fontWeight._700,
      marginTop: isMobile ? 10 : 20,
   };
   const quotes = [
      {
         person: 'Mahatma Ghandi',
         source: 'Fox News',
         src: ghandi,
         text: `Adam's so talented that it just makes me want to punch someone in their big doughy face.`,
      },
      {
         person: 'Tennessee Williams',
         source: 'Reddit',
         src: tennesseeWilliams,
         text: `I'm not ashamed to admit that most of my best ideas were stolen from Adam.`,
      },
      {
         person: 'Pope Benedict XVI',
         source: 'Snapchat',
         src: popeBenedict,
         text: `I'd sell my soul if I could learn to write even half as well as Adam.`,
      },
      {
         person: 'Elizabeth Taylor',
         source: 'Weekly World News',
         src: elizabethTaylor,
         text: `Adam smells like bacon grease and old milk.`,
      },
   ];
   const quoteSourceStyle = {
      color: the.color.grey,
      fontFamily: 'Open Sans',
      fontSize: isMobile ? 10 : 16,
   };
   const quoteStyle = {
      color: the.color.grey,
      fontFamily: 'Open Sans',
      fontSize: isMobile ? 12 : 20,
      fontStyle: css3.fontStyle.italic,
   };
   const quoteTableStyle = {
      display: css3.dislay.table,
      height: '100%',
   };
   const roundImageStyle = {
      borderBottomLeftRadius: '50%',
      borderBottomRightRadius: '50%',
      borderTopLeftRadius: '50%',
      borderTopRightRadius: '50%',
      height: 150,
      width: 150,
   };
   const workingOn = [
      'A web-based serial in an entirely different science-fiction universe',
      <>An absurdist play ode to <i>Rosencrantz and Guildenstern Are Dead</i></>,
      <>
         A new science fiction novel based in{` `}
         <a
            href={'https://www.worldanvil.com/w/excilior'}
            rel={'noreferrer'}
            target={'_blank'}
         >
            Excilior
         </a>
      </>,
      `A new painting of a lion's head`,
      'A revised collection of poetry',
   ];

   return <>
      <div style={{backgroundColor: the.color.black}}>
         <Container style={{
            backgroundImage: adamThePoetJpg,
            minWidth: 350,
         }}>
            <Row style={{
               backgroundImage: `url(${adamThePoetJpg})`,
               backgroundPositionX: css3.backgroundPosition.left,
               backgroundRepeat: css3.backgroundRepeat.noRepeat,
               maxHeight: 370,
               minHeight: 370,
               minWidth: 350,
               paddingLeft: 16,
               paddingRight: 16,
            }}>
               <Column style={{
                  color: the.color.white,
                  width: '100%',
               }}>
                  <div style={{
                     float: css3.float.right,
                     fontFamily: 'Dancing Script',
                     fontSize: isMobile ? 24 : 36,
                     left: isMobile ? 20 : 0,
                     position: css3.position.relative,
                  }}>
                     Adam Nathaniel Davis
                  </div>
                  {getLinkDivs()}
               </Column>
            </Row>
         </Container>
      </div>
      <Container>
         <Row>
            <Column style={{
               ...bodyColumnStyle,
               fontSize: 36,
               marginTop: 50,
            }}>
               Constantly Creating
            </Column>
         </Row>
         <Row>
            <Column style={{
               ...bodyColumnStyle,
               color: the.color.grey,
               fontSize: 16,
               marginTop: 10,
            }}>
               Adam has an ever-growing resume of creative endeavors including original plays, poetry (featuring written collections and live
               performances), science fiction novels, web-based serials, acrylic paintings, and innovative software solutions. He doesn't just strive
               to write. He is constantly searching for entirely new concepts that stretch the bounds of a given medium. This is witnessed in his
               plays, many of which incorporate science-fiction themes (a genre rarely attempted on a live stage) and his paintings (which utilize
               an original technique using squeeze bottles to extrude paint onto the panel).
            </Column>
         </Row>
         <Row>
            <Column style={{
               ...bodyColumnStyle,
               color: the.color.grey,
               fontSize: 16,
               marginTop: 25,
            }}>
               Adam has been writing short stories since 1978, computer programs since 1984, poetry since 1988, novels since 2012, and plays since
               2014. He has hosted his own poetry nights (while participating in countless others), staged readings of his plays across Florida,
               and published three works on Amazon.
            </Column>
         </Row>
         <Row>
            <Column style={{
               ...bodyColumnStyle,
               color: the.color.grey,
               fontSize: 16,
               marginTop: 25,
            }}>
               He's currently working on:
            </Column>
         </Row>
         {getWorkingOn()}
         {getThumbnailRows()}
         <Row>
            <Column
               xs={12}
               style={{
                  fontFamily: 'Montserrat',
                  fontSize: isMobile ? 20 : 36,
                  fontWeight: css3.fontWeight._700,
                  marginTop: isMobile ? 0 : 50,
                  textAlign: css3.textAlign.center,
               }}
            >
               What Others Are Saying About Adam Nathaniel Davis
            </Column>
         </Row>
         {getQuoteRows()}
      </Container>
   </>;
};
