import okSierraDarker from '../../common/images/ok-sierra-darker.jpg';
import { Container } from '@mui/material';
import { css3 } from '@toolz/css3/src/css3';
import { the } from '../../common/objects/the';
import { Row, Column } from '@toolz/material-ui/dist/index';
import { useViewport } from '@toolz/use-viewport';
import { materialUiBreakpoints } from '../../common/arrays/material.ui.breakpoints';

export const Plays = () => {
   const viewport = useViewport(materialUiBreakpoints);
   const isMobile = ['xs', 'sm', 'md'].includes(viewport.size);

   const bodyColumnStyle = {
      fontFamily: 'Open Sans',
      textAlign: css3.textAlign.center,
      width: '100%',
   };

   return <>
      <div style={{backgroundColor: the.color.sierraGrey}}>
         <Container style={{
            minWidth: 350,
            backgroundImage: `url(${okSierraDarker})`,
            backgroundPositionX: css3.backgroundPosition.right,
            backgroundRepeat: css3.backgroundRepeat.noRepeat,
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
                        float: css3.float.right,
                        fontFamily: 'Open Sans',
                        fontSize: isMobile ? 16 : 24,
                        fontWeight: css3.fontWeight._500,
                        marginBottom: 50,
                        padding: 20,
                        textAlign: css3.textAlign.right,
                        width: isMobile ? '95%' : '80%',
                     }}>
                        Adam's playwriting activity has steadily accelerated over the years. This has led to four full-length plays and several experimental shorts. His
                        first play - <i>OK, Sierra</i> - received a staged reading in Jacksonville and was one of four pieces chosen for the 2019 <i>New Year, New Works!</i>{` `}
                        program sponsored by Sandrell Rivers Theater in Miami.
                     </div>
                  </div>
               </div>
            </Row>
         </Container>
      </div>
      <Container>
         <Row>
            <Column style={{
               ...bodyColumnStyle,
               fontSize: 36,
               marginTop: isMobile ? 20 : 50,
            }}>
               Completed Works
            </Column>
            <Row>
               <Column style={{
                  ...bodyColumnStyle,
                  color: the.color.grey,
                  fontSize: 16,
                  marginTop: 10,
               }}>
                  Adam's completed pieces can all be downloaded on the{` `}
                  <a
                     href={'https://newplayexchange.org/users/7276/adam-nathaniel-davis'}
                     rel={'noreferrer'}
                     target={'_blank'}
                  >
                     New Play Exchange
                  </a>.
                  His primary objective is to bring genres and storylines to the stage that are currently underrepresented in theatres from the community level all the
                  way up to Broadway. This has led him to explore themes in science fiction and absurdism. But he is not confined to these arenas.
               </Column>
            </Row>
         </Row>
      </Container>
   </>;
};
