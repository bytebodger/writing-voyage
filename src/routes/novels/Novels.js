import aDuskForeverWaning from '../../common/images/a-dusk-forever-waning2.png';
import circlePage from '../../common/images/circle-page.jpg';
import { bodyColumnStyle } from '../../common/css/body.column.style';
import { Container, Dialog, DialogTitle } from '@mui/material';
import { css3 } from '@toolz/css3/src/css3';
import { materialUiBreakpoints } from '../../common/arrays/material.ui.breakpoints';
import { Row, Column } from '@toolz/material-ui/dist/index';
import { the } from '../../common/objects/the';
import { useViewport } from '@toolz/use-viewport';
import { useState } from 'react';
//foo

export const Novels = () => {
   const [modal1IsOpen, setModal1IsOpen] = useState(false);
   const viewport = useViewport(materialUiBreakpoints);
   const isMobile = ['xs', 'sm', 'md'].includes(viewport.size);

   const dialogTextStyle = {
      fontSize: isMobile ? 12 : 14,
      textAlign: css3.textAlign.justify,
      textIndent: isMobile ? 20 : 40,
   };
   const dialogTitleStyle = {
      fontSize: isMobile ? 14 : 16,
      fontWeight: css3.fontWeight._700,
      marginBottom: 12,
   };
   const roundImageStyle = {
      borderBottomLeftRadius: '50%',
      borderBottomRightRadius: '50%',
      borderTopLeftRadius: '50%',
      borderTopRightRadius: '50%',
      cursor: css3.cursor.pointer,
      height: isMobile ? 80 : 120,
      width: isMobile ? 80 : 120,
   };

   return <>
      <Dialog
         fullWidth={true}
         maxWidth={'lg'}
         onBackdropClick={() => setModal1IsOpen(false)}
         onClick={() => setModal1IsOpen(false)}
         open={modal1IsOpen}
         style={{width: '100%'}}
      >
         <DialogTitle>A Dusk Forever Waning</DialogTitle>
         <div style={{
            marginBottom: 24,
            marginLeft: 24,
            marginRight: 24,
         }}>
            <div style={dialogTitleStyle}>
               Chapter 1 - A Brutal Proposition
            </div>
            <div style={dialogTextStyle}>
               The alert rang through his mind. He reached into his pocket and produced a
               small, yellow, diamond shaped pill. The corporate logo of LiveLong rose from its
               surface. Popping it onto his tongue, he waited a few seconds for it to completely
               dissolve. He found it difficult to define the taste. Nothing else on Torrenth tasted
               quite like it. But he savored this time every day when he took his Telomore. In fact,
               he had enjoyed this moment every day during each of the 1,878 years of his life.
            </div>
            <div style={dialogTextStyle}>
               As the last grainy pieces evaporated in his mouth he felt a surge of
               confidence. It was a silly emotion. Telomore produced no high. In fact, it produced
               no conscious, measurable indications of its use. Its effects were far subtler yet far
               more important. This pill added, quite literally, another day to the relentless stream
               of days that comprised his life.
            </div>
            <div style={dialogTextStyle}>
               The scaler moved along suspended rails. Pontius stared through murky glass to the
               endless skyscrapers beyond. The compartment accommodated 30
               people but there were more than 60 onboard. The ever present patter of rain
               created a backdrop that never failed to soothe him. Most of the passengers gazed at
               the inner projections from their Universal Neural Implants. They traversed their own
               private worlds. Pontius preferred the kabuki theater of the real.
            </div>
            <div style={dialogTextStyle}>
               Despite the crammed preponderance of bodies in the cabin, three dogs
               found room for themselves. He wasn 't sure if they had come in recently, in the last
               stop or two, or if they were of more of a permanent presence. One perched on high,
               curled into the luggage bin. How it managed to get there was anybody's guess.
               Another crouched behind the row of seats oppo site him. The third was sitting at his
               feet. All three were staring at him. He told himself that this was some kind of optical
               illusion, like the eyes in a painting that follow you no matter where you go in the
               room. But as he scanned the other passengers he realized that none of them had
               the dogs' attention.
            </div>
            <div style={dialogTextStyle}>
               He made a brief attempt to win a staring contest with luggage bin dog.
               Before he could engage the beast in earnest, the automated transit voice
               announced that they had reached the Argus 50 platform. M ost of the stoic
               passengers still stared at their own internal projections. The dogs watched him with
               renewed attention, as if to ask if this was his stop. He rose and shook some of the
               rain off his coat. As he made his way to the exit, he wondered if t he dogs would
               follow. But they stayed riveted to their positions, watching him as he left.
            </div>
            <div style={dialogTextStyle}>
               The wind on the platform was forceful. It was always forceful 150 meters
               from the surface. Although the air at this height was cooler than ground level, it
               was st ill warm and heavy. A depressing layer of humidity blanketed the island and
               thwarted any attempts at relief. Pontius stood on the platform for several minutes
               and watched the lightning raging in the distance. Random bolts illuminated the
               smooth surfa ces of buildings as it sought out one target after another. He knew the
               dampness would irritate him later, but the rain dancing down his face felt good for
               the time being. He was loathe to abandon the sensation.
            </div>
            <div style={dialogTextStyle}>
               He sighed to himself and turned around to resume his journey. Covered
               corridors led in both directions around the outside of the building. His destination
               was deep in the bowels of the Argus complex. He spotted the grand hallway leading
               straight into the structure and began wading through the people.
            </div>
            <div style={dialogTextStyle}>
               The Argus complex was a group of seven structures, with the smaller six
               emanating from the main like spokes on a wheel. Argus Prime was 350 stories tall
               and represented some of the finest architecture on the whole planet of Torrenth.
               Walls and doo rways throughout the building featured intricate patterns inlaid in
               chrome and alabaster. The floors were solid but had an odd springiness that forgave
               his tired soles.
            </div>
            <div style={dialogTextStyle}>
               Dynamic murals danced across the ceiling. They offered a dramatic and
               ever changing display of sea monsters, gods, and ancient dramas. Pontius felt he
               was walking through a brooding, melodramatic atmosphere in an alien theater.
            </div>
            <div style={dialogTextStyle}>
               Walking through the bustling hallway, he scanned the faces of those who
               passed him. Although he believed h is target to be in the central marketplace, he
               knew he wasn’t far from his goal. He could never tell when someone might slip
               right under his nose. Some of his most critical stops had happened outside or near
               the target’s presumed location.
            </div>
            <div style={dialogTextStyle}>
               Her name was Felencia and she worked for a sauce shop. This particular
               shop sold a myriad of products dredged up from the depths of Oceanus. Given this
               simple fact, he assumed that she must smell bad and look worse. He couldn’t
               imagine anyone even halfway attractive wanting to work for an eel monger.
            </div>
            <div style={dialogTextStyle}>
               She was young not even 200 years old and bi racial, having a clear mix
               of Felosian in her. She was single or at least, there were no state records of a
               cohabitant. She had worked at this particular sauce shop fo r more than 75 years.
               Pontius presumed only dimwitted people could work in a sauce shop for 75 years.
               Crucial to his investigation was the fact that she had just given birth.
            </div>
            <div style={dialogTextStyle}>
               She had no formal maternity records, but the intelligence reports were
               unmista kable. Surveillance caught her on many occasions ferrying a suspicious
               bundle. She recently missed a lot of time at work. Acquaintances observed her as
               exhausted and irritable. She experienced rapid weight gain, followed by drastic loss.
               Worst of all, neighbors had sold her out. She was the confirmed mother of an
               unlicensed baby.
            </div>
            <div style={dialogTextStyle}>
               He worked under the Department of Population Control. He was a tactical
               agent for a specialized task force the Newborn Corrections Unit. He couldn’t
               remember any of his e arly days in NCU, but they had just thrown a 1,500 year
               anniversary party for him. He was the most decorated agent in the entire unit,
               although there were plenty who had been there much longer than him. It was not
               an exaggeration to say that he had achie ved almost mythical status in PC. He never
               turned down an assignment. He completed the most challenging of assignments.
               He was as reliable as rain.
            </div>
            <div style={dialogTextStyle}>
               Far ahead in the grand hallway, he saw light and could hear the
               unmistakable sounds of the atrium. His h eart quickened and his pace increased. Yet
               he pulled back the reigns and ducked off into a side hallway to collect his bearings
               and check his notes.
            </div>
            <div style={dialogTextStyle}>
               He closed his eyes and began sifting through his UNI. He could access it
               with his eyes open. But he fo und it disorienting to have the virtual displays of
               internal computing overlaid onto reality. It worried him to think that if he projected
               UNI imagery onto his reality he could lose the basis of what is real and what is
               overlaid. There were many people w ho had tried, or would continue to try to kill
               him. He couldn’t afford to have any distrust in his natural senses.
            </div>
            <div style={dialogTextStyle}>
               He pulled up Felencia’s records and began reconfirming her data. He
               checked agency records to ensure the she hadn’t somehow, in the last minute,
               acquired a Vitapass for her baby. No one ever acquired a Vitapass in the last
               moments before he arrived, but it was protocol to check nonetheless. He retrieved
               all messages from the office to ensure that directives remained changed. Directives
               a lways remained unchanged, but it was protocol to check nonetheless. He
               downloaded the termination license into virtual memory for easy access. Desperate
               parents always demanded to see a copy of the termination license. The Grand
               Court ruled, years ago, that termination licenses were unnecessary. But it was
               policy to generate them anyway. It avoided any hint of impropriety.
            </div>
            <div style={dialogTextStyle}>
               Reaching under his shirt, he could feel the necklace that carried a totem for
               each member of his Priori. One by one, through all six of these Priori, he held the
               totem, ruminated on the task before him, and prayed. He felt that some of the
               Priori were better for different qualities, so he prayed to his first Priorus for initiative
               and agility. He prayed to his last Priorus for wis dom and fairness.
            </div>
            <div style={dialogTextStyle}>
               With his meditation complete, before he stepped back into the grand
               hallway, a haggard beggar stumbled by. He asked if Pontius wanted to feel good.
               Pontius paused for a moment, perplexed. Pointing to the atrium down the hallway,
               he looked at the old man and explained, “I can get all the drugs I want right there.
               Clean. Powerful. Legal.”
            </div>
            <div style={dialogTextStyle}>
               The old man kept his gaze downward, shaking his head. Then he lifted his
               head to reveal a gaping maw of toothless gums encased in a broad, wild s mile. “I no
               have, ‘Drug’. I have, ‘Feel gooooooood’.”
            </div>
            <div style={dialogTextStyle}>
               He swiped the cretin’s grasping paw away. He reentered the bustling fray
               of pedestrians in the grand hallway. Although it was mere minutes since he was last
               in the hallway, he believed that the traf fic had doubled. Men darted to and fro in
               front of him. Sometimes women would bunch behind him, leveraging his ability to
               part crowds. He was not a large man, but he was tall, and his tanned, sinewy
               features gave him a presence that tended to make lesse r men get out of his way.
            </div>
            <div style={dialogTextStyle}>
               Ahead he could see the warm glow and hear the chaotic sounds of the
               marketplace. Walking about a hundred meters further, he spilled into the edifice
               with a gaggle of people bunched around him. The market was a broad circular
               at rium more than 500 meters in diameter. All around the circumference there were
               other major hallways that emptied into the atrium. A brief observation gave the
               impression that all traffic flowed into the atrium and nothing flowed out.
            </div>
            <div style={dialogTextStyle}>
               The most breathtaking aspect of the atrium was the ceiling. It comprised a
               grand dome displaying an endless series of rich, moving images. The images
               themselves were indistinct and ever changing, like impressions gleaned from cloud
               gazing. But staring at them long enough m ade it clear that definite artistic images
               were arising. The brightness, color, and tone of the images would shift every 5-10
               minutes. It happened in a gradual manner, such that one might wonder how the ceiling
               had changed if he weren’t paying close attention.
            </div>
         </div>
      </Dialog>
      <div style={{backgroundColor: the.color.black}}>
         <Container style={{
            backgroundAttachment: css3.backgroundAttachment.scroll,
            backgroundImage: `url(${aDuskForeverWaning})`,
            backgroundPositionX: css3.backgroundPosition.right,
            backgroundRepeat: css3.backgroundRepeat.noRepeat,
            backgroundSize: css3.backgroundSize.cover,
            minWidth: 350,
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
                     onClick={() => setModal1IsOpen(!modal1IsOpen)}
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
                  Torrenth is home to a lost population of humans, so far removed (in both space and time) from their ancestors that Earth is little more than a fever dream.
                  Pontius has the onerous task of enforcing the planet's population controls. For hundreds of years, he's been far too jaded and numb to question the motives
                  behind his world's policies. But an assignment gone horribly wrong will force him to reevaluate every aspect of his bitter life as he fights to find a home
                  for an unlicensed newborn.
               </div>
            </Column>
         </Row>
      </Container>
   </>;
};
