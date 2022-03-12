import okSierraDarker from '../../common/images/ok-sierra-darker.jpg';
import { Container } from '@mui/material';
import { css3 } from '@toolz/css3/src/css3';
import { the } from '../../common/objects/the';
import { Row, Column } from '@toolz/material-ui/dist/index';
import { useViewport } from '@toolz/use-viewport';
import { materialUiBreakpoints } from '../../common/arrays/material.ui.breakpoints';
import circlePage from '../../common/images/circle-page.jpg';

export const Plays = () => {
   const viewport = useViewport(materialUiBreakpoints);
   const isMobile = ['xs', 'sm', 'md'].includes(viewport.size);

   const bodyColumnStyle = {
      fontFamily: 'Open Sans',
      textAlign: css3.textAlign.center,
      width: '100%',
   };

   const getPlays = () => {
      return plays.map(play => {
         return (
            <Row
               key={`playRow-${play.title}`}
               style={{marginBottom: 30}}
            >
               <Column
                  xs={3} md={4}
                  style={{textAlign: css3.textAlign.right}}
               >
                  <div>
                     <img
                        alt={play.title}
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
                     {play.title}
                  </div>
                  <div style={{
                     color: the.color.grey,
                     fontFamily: 'Montserrat',
                     fontSize: isMobile ? 12 : 16,
                     paddingLeft: 20,
                  }}>
                     {play.description}
                  </div>
               </Column>
            </Row>
         );
      });
   };

   const plays = [
      {
         description: `
            Sierra is a computer-based aide installed directly inside Davin's brain. He knows that she helps him with nearly every aspect of his daily life. He 
            doesn't know that she is sentient and self-aware. As Davin's life continues to spiral beyond his control, Sierra becomes more assertive in an attempt to keep them
            alive and well. They will both learn that there is not enough space in one body for two fully-actualized souls.
         `,
         title: 'OK, Sierra',
      },
      {
         description: `
            Roman and Gilson are new interns under the White House Chief of Staff. Or are they? They increasingly come to question who they are, and how they ever got here in 
            the first place. They are hopelessly locked out of the main story – overtly made to feel “other”. And yet they find themselves falling into the same mental traps of 
            the Administration. As they wrestle with questions of race, ethics, and Establishment politics, they will either escape, or they will become indistinguishable from 
            those around them.
         `,
         title: 'Into the Swamp',
      },
      {
         description: `
            Jinny lives in an assisted-living facility. She's wise, intelligent, head-strong, cantankerous... and lonely. Her son has stopped visiting her and she hasn't seen 
            her grandchildren in years. The only tie to her past is Lucy, the senior-companionship android that was designed by her son and assigned to keep her company. Jinny's 
            reluctant relationship with Lucy exposes the strains in her own fractured family.
         `,
         title: 'The Marionette',
      },
      {
         description: `
            When a young college couple travels home for the 4th-of-July weekend, they are bracing themselves for the awkwardness of meeting each other's parents for the first 
            time.  But their arrival shocks their folks and it soon becomes apparent that family introductions will will be the least-uncomfortable hurdle of the holiday.
         `,
         title: 'Second Son',
      },
      {
         description: `
            Tom returns to his childhood home in Minnesota and visits his old friend Harold during the Christmas season. Harold is even saltier and crankier than Tom remembers 
            him. When Tom tries to cheer up his friend by decorating the Christmas tree with a box of nostalgic ornaments, he realizes exactly why Harold is so cranky.
         `,
         title: 'Should Old Acquaintance Be Forgot',
      },
   ];
   const roundImageStyle = {
      borderBottomLeftRadius: '50%',
      borderBottomRightRadius: '50%',
      borderTopLeftRadius: '50%',
      borderTopRightRadius: '50%',
      height: isMobile ? 80 : 120,
      width: isMobile ? 80 : 120,
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
         <Row style={{marginBottom: 30}}>
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
         {getPlays()}
      </Container>
   </>;
};
