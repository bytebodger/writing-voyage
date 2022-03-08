import adamThePoetJpg from '../../common/images/adam-the-poet.jpg';
import cognitiveDissonance from '../../common/images/cognitive-dissonance.png';
import hilltop from '../../common/images/hilltop.jpg';
import okSierra from '../../common/images/ok-sierra.jpg';
import { Container } from '@mui/material';
import { css3 } from '@toolz/css3/src/css3';
import { Link } from 'react-router-dom';
import { materialUiBreakpoints } from '../../common/arrays/material.ui.breakpoints';
import { Row, Column } from '@toolz/material-ui/dist/index';
import { the } from '../../common/objects/the';
import { useViewport } from '@toolz/use-viewport';

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
   const linkStyle = {
      color: the.color.white,
      textDecoration: css3.textDecoration.none,
   };
   const roundImageStyle = {
      borderBottomLeftRadius: '50%',
      borderBottomRightRadius: '50%',
      borderTopLeftRadius: '50%',
      borderTopRightRadius: '50%',
      height: 150,
      width: 150,
   };

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
                  <div style={divLinkStyle}>
                     <Link
                        style={linkStyle}
                        to={'/novels'}
                     >
                        Novelist
                     </Link>
                  </div>
                  <div style={divLinkStyle}>
                     <Link
                        style={linkStyle}
                        to={'/paintings'}
                     >
                        Painter
                     </Link>
                  </div>
                  <div style={divLinkStyle}>
                     <Link
                        style={linkStyle}
                        to={'/plays'}
                     >
                        Playwright
                     </Link>
                  </div>
                  <div style={divLinkStyle}>
                     <Link
                        style={linkStyle}
                        to={'/poems'}
                     >
                        Poet
                     </Link>
                  </div>
                  <div style={divLinkStyle}>
                     <Link
                        style={linkStyle}
                        to={'/programs'}
                     >
                        Programmer
                     </Link>
                  </div>
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
         <Row>
            <Column style={{
               ...bodyColumnStyle,
               color: the.color.black,
               fontSize: 14,
               marginTop: 10,
            }}>
               A new science fiction novel in his existing world of{` `}
               <a
                  href={'https://www.worldanvil.com/w/excilior'}
                  rel={'noreferrer'}
                  target={'_blank'}
               >
                  Torrenth
               </a>
            </Column>
         </Row>
         <Row>
            <Column style={{
               ...bodyColumnStyle,
               color: the.color.black,
               fontSize: 14,
            }}>
               A web-based serial in an entirely different science-fiction universe
            </Column>
         </Row>
         <Row>
            <Column style={{
               ...bodyColumnStyle,
               color: the.color.black,
               fontSize: 14,
            }}>
               A modern absurdist play that is an ode to <i>Rosencrantz and Guildenstern Are Dead</i>
            </Column>
         </Row>
         <Row>
            <Column style={{
               ...bodyColumnStyle,
               color: the.color.black,
               fontSize: 14,
            }}>
               A revised collection of poetry
            </Column>
         </Row>
         <Row>
            <Column style={{
               ...bodyColumnStyle,
               color: the.color.black,
               fontSize: 14,
            }}>
               A new painting of a lion's head
            </Column>
         </Row>
         <Row>
            <Column
               xs={12} sm={12} md={12} lg={4} xl={4}
               style={{
                  ...bodyColumnStyle,
                  marginTop: isMobile ? 0 : 20,
                  padding: 30,
               }}
            >
               <div>
                  <img
                     alt={'Plays'}
                     src={okSierra}
                     style={roundImageStyle}
                  />
               </div>
               <div>
                  <Link
                     style={bodyHeadingLinkStyle}
                     to={'/plays'}
                  >
                     Plays
                  </Link>
                  <Link
                     style={{
                        color: the.color.grey,
                        textDecoration: css3.textDecoration.none,
                     }}
                     to={'/plays'}
                  >
                     <div style={{
                        ...bodyColumnStyle,
                        color: the.color.grey,
                     }}>
                        Four (and counting) full-length plays drawing heavily from science fiction and absurdism
                     </div>
                  </Link>
               </div>
            </Column>
            <Column
               xs={12} sm={12} md={12} lg={4} xl={4}
               style={{
                  ...bodyColumnStyle,
                  marginTop: isMobile ? 0 : 20,
                  padding: 30,
               }}
            >
               <div>
                  <img
                     alt={'Poems'}
                     src={cognitiveDissonance}
                     style={roundImageStyle}
                  />
               </div>
               <div>
                  <Link
                     style={bodyHeadingLinkStyle}
                     to={'/poems'}
                  >
                     Poems
                  </Link>
                  <Link
                     style={{
                        color: the.color.grey,
                        textDecoration: css3.textDecoration.none,
                     }}
                     to={'/poems'}
                  >
                     <div style={{
                        ...bodyColumnStyle,
                        color: the.color.grey,
                     }}>
                        More than thirty poems (and counting) poems compiled into a single volume
                     </div>
                  </Link>
               </div>
            </Column>
            <Column
               xs={12} sm={12} md={12} lg={4} xl={4}
               style={{
                  ...bodyColumnStyle,
                  marginTop: isMobile ? 0 : 20,
                  padding: 30,
               }}
            >
               <div>
                  <img
                     alt={'Paintings'}
                     src={hilltop}
                     style={roundImageStyle}
                  />
               </div>
               <div>
                  <Link
                     style={bodyHeadingLinkStyle}
                     to={'/paintings'}
                  >
                     Paintings
                  </Link>
                  <Link
                     style={{
                        color: the.color.grey,
                        textDecoration: css3.textDecoration.none,
                     }}
                     to={'/paintings'}
                  >
                     <div style={{
                        ...bodyColumnStyle,
                        color: the.color.grey,
                     }}>
                        Six (and counting) large paintings using heavy-body acrylics to create a unique impasto effect
                     </div>
                  </Link>
               </div>
            </Column>
         </Row>
         <Row>
            <Column
               xs={12} sm={12} md={12} lg={4} xl={4}
               style={{
                  ...bodyColumnStyle,
                  marginTop: isMobile ? 0 : 20,
                  padding: 30,
               }}
            >
               <div>
                  <img
                     alt={'Plays'}
                     src={okSierra}
                     style={roundImageStyle}
                  />
               </div>
               <div>
                  <Link
                     style={bodyHeadingLinkStyle}
                     to={'/plays'}
                  >
                     Plays
                  </Link>
                  <Link
                     style={{
                        color: the.color.grey,
                        textDecoration: css3.textDecoration.none,
                     }}
                     to={'/plays'}
                  >
                     <div style={{
                        ...bodyColumnStyle,
                        color: the.color.grey,
                     }}>
                        Four (and counting) full-length plays drawing heavily from science fiction and absurdism
                     </div>
                  </Link>
               </div>
            </Column>
         </Row>
      </Container>
   </>;
};
