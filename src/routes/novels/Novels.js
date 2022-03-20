import aDuskForeverWaning from '../../common/images/a-dusk-forever-waning2.png';
import circlePage from '../../common/images/circle-page.jpg';
import { bodyColumnStyle } from '../../common/css/body.column.style';
import { Container } from '@mui/material';
import { css3 } from '@toolz/css3/src/css3';
import { materialUiBreakpoints } from '../../common/arrays/material.ui.breakpoints';
import { Row, Column } from '@toolz/material-ui/dist/index';
import { the } from '../../common/objects/the';
import { useViewport } from '@toolz/use-viewport';

export const Novels = () => {
   const viewport = useViewport(materialUiBreakpoints);
   const isMobile = ['xs', 'sm', 'md'].includes(viewport.size);

   const roundImageStyle = {
      borderBottomLeftRadius: '50%',
      borderBottomRightRadius: '50%',
      borderTopLeftRadius: '50%',
      borderTopRightRadius: '50%',
      height: isMobile ? 80 : 120,
      width: isMobile ? 80 : 120,
   };

   return <>
      <div style={{backgroundColor: the.color.black}}>
         <Container style={{
            minWidth: 350,
            backgroundAttachment: css3.backgroundAttachment.scroll,
            backgroundImage: `url(${aDuskForeverWaning})`,
            backgroundPositionX: css3.backgroundPosition.right,
            backgroundRepeat: css3.backgroundRepeat.noRepeat,
            backgroundSize: css3.backgroundSize.cover,
         }}>
            <Row style={{
               maxHeight: 370,
               minHeight: 370,
               minWidth: 350,
            }}>
               <div style={{
                  display: css3.dislay.table,
                  textAlign: css3.textAlign.right,
               }}>
                  <div style={{
                     display: css3.dislay.tableCell,
                     textAlign: css3.textAlign.right,
                     verticalAlign: css3.verticalAlign.bottom,
                     width: '100%',
                  }}>
                     <div style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.65)',
                        borderRadius: 50,
                        color: the.color.white,
                        float: css3.float.left,
                        fontFamily: 'Open Sans',
                        fontSize: isMobile ? 14 : 24,
                        fontWeight: css3.fontWeight._500,
                        marginBottom: 50,
                        marginTop: 10,
                        padding: 20,
                        textAlign: css3.textAlign.right,
                        width: isMobile ? '100%' : '90%',
                     }}>
                        Adam's first science fiction novel, <i>A Dusk Forever Waning</i>, explores the dark and watery far-future world of Torrenth, where crushing population
                        and technological immortality forces extreme measures to ensure survival in a distant solar system. Since that time, he has turned his attention to
                        <i>Slipstream</i>, a soon-to-be-launched web-based serial. Slipstream features an entirely new universe with a decidedly absurdist bent.
                     </div>
                  </div>
               </div>
            </Row>
         </Container>
      </div>
      <Container>
         <Row style={{marginBottom: 30}}>
            <Column style={{
               ...bodyColumnStyle,
               fontSize: 36,
               marginTop: isMobile ? 20 : 50,
            }}>
               Full-Length Science Fiction
            </Column>
            <Row>
               <Column style={{
                  ...bodyColumnStyle,
                  color: the.color.grey,
                  fontSize: 16,
                  marginTop: 10,
               }}>

               </Column>
            </Row>
         </Row>
         <Row style={{marginBottom: 30}}>
            <Column
               xs={3} md={4}
               style={{textAlign: css3.textAlign.right}}
            >
               <div>
                  <img
                     alt={'A Dusk Forever Waning'}
                     src={circlePage}
                     style={roundImageStyle}
                  />
               </div>
            </Column>
            <Column xs={9} md={6}>
               <div style={{
                  color: the.color.black,
                  fontFamily: 'Montserrat',
                  fontSize: isMobile ? 20 : 24,
                  fontWeight: css3.fontWeight._700,
                  paddingLeft: 20,
               }}>
                  A Dusk Forever Waning
               </div>
               <div style={{
                  color: the.color.grey,
                  fontFamily: 'Montserrat',
                  fontSize: isMobile ? 12 : 16,
                  paddingLeft: 20,
               }}>
                  Foo
               </div>
            </Column>
         </Row>
      </Container>
   </>;
};
