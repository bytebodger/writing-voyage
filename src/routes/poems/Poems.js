import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import openMic from '../../common/images/open-mic.jpg';
import { Container, Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import { css3 } from '@toolz/css3/src/css3';
import { materialUiBreakpoints } from '../../common/arrays/material.ui.breakpoints';
import { Row, Column } from '@toolz/material-ui/dist/index';
import { the } from '../../common/objects/the';
import { useViewport } from '@toolz/use-viewport';
import { useState } from 'react';
import { bodyColumnStyle } from '../../common/css/body.column.style';

export const Poems = () => {
   const [expanded, setExpanded] = useState(false);
   const viewport = useViewport(materialUiBreakpoints);
   const isMobile = ['xs', 'sm', 'md'].includes(viewport.size);

   const expandAndCollapseAccordions = (panel = '') => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
   };

   const poetryDivStyle = {
      color: the.color.grey,
      fontSize: isMobile ? 12 : 16,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
   };
   const poetryIndentedDivStyle = {
      color: the.color.grey,
      fontSize: isMobile ? 12 : 16,
      marginLeft: isMobile ? 20 : 50,
   };

   return <>
      <div style={{backgroundColor: the.color.black}}>
         <Container style={{
            backgroundAttachment: css3.backgroundAttachment.scroll,
            backgroundImage: `url(${openMic})`,
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
                        fontSize: isMobile ? 16 : 24,
                        fontWeight: css3.fontWeight._500,
                        marginBottom: 50,
                        padding: 20,
                        textAlign: css3.textAlign.right,
                        width: isMobile ? '95%' : '60%',
                     }}>
                        On some level, Adam's been writing poetry for more than 30 years. But it wasn't until the last decade that he became far more active in writing new
                        pieces, performing at local poetry shows and slams, and hosting several of his own open mics. He has a collection on Amazon titled:
                        <br/><br/>
                        <a
                           href={'https://www.amazon.com/Cognitive-Dissonance-Poems-That-Dont/dp/0692525025'}
                           rel={'noreferrer'}
                           style={{
                              color: the.color.white,
                              textDecoration: css3.textDecoration.none,
                           }}
                           target={'_blank'}
                        >
                           <i>Cognitive Dissonance: Poems That Don't Suck</i>
                        </a>
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
               The Ever-Growing Collection of Poems
            </Column>
            <Row>
               <Column style={{
                  ...bodyColumnStyle,
                  color: the.color.grey,
                  fontSize: 16,
                  marginTop: 10,
               }}>
                  Adam tends to write new poetry in spurts, but if you're on the mailing list, you'll know any time new pieces are posted. If you only have time to browse
                  through a few, be sure to check out <i>Her Disease</i> or <i>Somewhere in Las Vegas</i>. Those are two of his "standards" that are often performed at live
                  events.
                  <br/><br/>
                  <iframe
                     allow={'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'}
                     allowFullScreen={true}
                     frameBorder={0}
                     height={315}
                     src={'https://www.youtube.com/embed/XWSJKAX-ugE'}
                     title={'Performing Preacher Man'}
                     width={isMobile ? 350 : 560}
                  ></iframe>
               </Column>
            </Row>
         </Row>
         <Row>
            <Column xs={12}>
               <Accordion
                  expanded={expanded === '7Bitches'}
                  onChange={expandAndCollapseAccordions('7Bitches')}
               >
                  <AccordionSummary
                     aria-controls={'7Bitches-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'7Bitches-header'}
                  >
                     <Typography>7 Bitches</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        I met this woman in Grand Rapids, and she worshipped me like a Greek god. She was a pixie with no life and no past and she would happily do anything
                        I asked. Our relationship was worry-free because she adored me and she’d do anything just to be in my company. But she camped in our house like a
                        fungus. She paid us no rent but she was constantly among us. When I left in the morning and came home at night she was sitting there like some
                        creepy puppy that just couldn’t wait to reunite.
                     </div>
                     <div style={poetryDivStyle}>
                        Bitch had to go.
                     </div>
                     <div style={poetryDivStyle}>
                        I met this woman in New Orleans, and she used to whisper that sexy “ay papi” shit in my ear. Her breasts made me believe in the power of prayer and
                        there was nothing more divine than that silky black hair draped across my chest, making me feel like a millionaire. But she invited me over to her
                        house one day and I thought I was about to have me some Latina buffet. But I didn’t realize that I’d been volunteered to sit and watch football and
                        throw down some beers with... her husband.
                     </div>
                     <div style={poetryDivStyle}>
                        Bitch had to go.
                     </div>
                     <div style={poetryDivStyle}>
                        I met this woman in Munich, and she lit up every room she was in. She smiled so breezily and laughed so easily and I found myself thinking of her
                        constantly, ceaselessly. She had an innocence that was completely disarming and an intellect that at times could be jarring and any time we found
                        ourselves parting I was immediately planning my return. But she griped every time I had a beer and if I had a cigar she would soon disappear. She
                        laughed at the frivolity of the sports I follow and she dismissed my interests as displays of bravado.
                     </div>
                     <div style={poetryDivStyle}>
                        Bitch had to go.
                     </div>
                     <div style={poetryDivStyle}>
                        I met this woman in Oxford, and she was one of the finest women that I’ve ever laid eyes upon. She looked like an angel and she danced like a slut
                        and every guy in the club was trying to get a cut. She would cling to my arm and it was a huge boost to my ego and all the fellas would buzz around us
                        like hungry mosquitos. But she drank like a fish and she couldn’t hold her liquor. And while she was lovely to gaze upon, she fucked like a corpse and
                        had a mouth like a wood chipper.
                     </div>
                     <div style={poetryDivStyle}>
                        Bitch had to go.
                     </div>
                     <div style={poetryDivStyle}>
                        I met this woman in London, and she fit me like a glove. When we met on the dance floor it was instant love. We sang loudly in public spaces and got
                        freaky in inappropriate places just to see the look on others peoples’ faces. We danced carefree and awkwardly, like only white people can, and none of
                        our time ever required a plan. But she never met a drug she didn’t like and I knew if I stayed, I knew that I might just join her on that hike because
                        ultimately we were far too much alike.
                     </div>
                     <div style={poetryDivStyle}>
                        Bitch had to go.
                     </div>
                     <div style={poetryDivStyle}>
                        I met this stripper in Vegas, and she exploited every one of my burgeoning insecurities. I didn’t just screw her, I made her my wife. And I actually
                        thought we were starting a life. She gave me two beautiful kids and a family that was rife with drama. But it ended the only way it can when you marry
                        a stripper. We came undone like two sides of a zipper. I came to see how she controlled me and suppressed my soul with frightening consistency.
                     </div>
                     <div style={poetryDivStyle}>
                        Bitch had to go.
                     </div>
                     <div style={poetryDivStyle}>
                        I met this woman in Jacksonville, and she was the love of my life. She was the kind of woman all my friends could adore. In public she was effervescent
                        but in the bedroom she was a whore. We were companions and lovers and so much more. But she abandoned me in my greatest hour of need and she steadily
                        withdrew because I would not give her a baby. But I never thought that she would be the one to dismantle our love at the point of a gun and send me a
                        text message saying, “We’re done.”
                     </div>
                     <div style={poetryDivStyle}>
                        Bitch left.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'Afterthought'}
                  onChange={expandAndCollapseAccordions('Afterthought')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'Afterthought-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'Afterthought-header'}
                  >
                     <Typography>Afterthought</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        I used to be your first thought, but now I’m just an afterthought. The love that we once begot has faded from view, like a distant cosmonaut. Our
                        growing distance has had me distraught but any protest from me goes for naught. There was a time when we were unstoppable. We were a juggernaut. But
                        now the moments between us are continually fraught with the landmines sown amongst us every time we’ve fought. I remember when you afforded your
                        attention to me, the attention I sought, but since that time, nothing between us has thawed.
                     </div>
                     <div style={poetryDivStyle}>
                        I used to be your number one, but now I’m just a someone. You made me believe I was the chosen one, but now I just feel like anyone. Your inattention
                        to me has made me anonymous, it’s made me numb, and I don’t think that this damage can be undone. You used to make me feel special, but now I’ve become
                        jaded, defensive toward everyone. My self-esteem has ultimately succumbed to your relentless assault. I’ve been overcome. And the goals for us to
                        which I have clung have left me trapped under your thumb.
                     </div>
                     <div style={poetryDivStyle}>
                        I used to be your everything, but now I’m just a plaything. And while you be fronting I’m here in the background, just waiting for nothing. As I’m
                        trying to build upon that ring, you’re treating me like just another fling. Every mistake I make is a bullet in your sling and you seem content to try
                        to wring every ounce of drama from the tragedy that we’ve both been authoring. I’m trying to be the better man, I’m trying to be your king, but there’s
                        nothing I can seem to do that puts us on an upswing.
                     </div>
                     <div style={poetryDivStyle}>
                        I used to be your only man, but now I’m just a middleman. I’m a bridge, a transitional span, that brings you from where we once began to your new life
                        without me, a life free of my plan. I had dreams for us that you outran – you driving our minivan and me playing the businessman. But the life I was
                        building was your anagram – something to be scrambled like eggs in a pan – and I now know your promises were a sad kind of scam, an illusory creation –
                        a hologram.
                     </div>
                     <div style={poetryDivStyle}>
                        I used to be your anytime, but now I’m just a pastime. A man who amuses you with rhyme, like this is a game – some kind of pantomime. For me there is
                        no greater crime than the way you’ve dismissed me and the way you’ve tried to undermine all that I have built through hard work, through overtime. If
                        you even cared I could try to redesign my shortcomings that you’ve so carefully outlined. But the more I reach out the more you decline to meet me half
                        way, to help me refine this relationship for which I’ve laid everything on the line.
                     </div>
                     <div style={poetryDivStyle}>
                        I used to be your first thought, but now I’m just an afterthought. There’s nothing left between us that we had wrought so maybe I should, maybe I ought,
                        just be content to live as your afterthought.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'Anxiety'}
                  onChange={expandAndCollapseAccordions('Anxiety')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'Anxiety-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'Anxiety-header'}
                  >
                     <Typography>Anxiety</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        I'm here again.<br/>
                        I'm standing here with my throwaway friends and once again she's near again.<br/>
                        I swear she's looking my way but I'll ignore her and order a beer again.<br/>
                        And before I muster the courage to speak I'm certain that she'll disappear again.
                     </div>
                     <div style={poetryDivStyle}>
                        Why can't I just talk to her?<br/>
                        Why do I feel like every passing smile I give is stalking her?<br/>
                        Why do I feel like every casual glance is the equivalent of gawking at her?<br/>
                        Why can't I do what any regular guy can do?<br/>
                        Why can't I just talk to her?
                     </div>
                     <div style={poetryDivStyle}>
                        And why am I standing in this same spot again?<br/>
                        Why do I stand here, frozen, every night like a thief who's been caught again?<br/>
                        How do I know that I'll be nothing more than an afterthought again?<br/>
                        My stomach is twisting into the most exquisite knot again.
                     </div>
                     <div style={poetryDivStyle}>
                        And why can't I just bring myself to say hello?<br/>
                        Why have I already played out the process of meeting and letting go?<br/>
                        Shouldn't I trust in some cosmic force to throw us together on the patio?<br/>
                        Isn't there some hidden trick that would turn me into her Romeo?
                     </div>
                     <div style={poetryDivStyle}>
                        But no matter how I psyche myself up, my ass is still glued to this seat.<br/>
                        There's no line I can craft in my mind that's properly discrete.<br/>
                        Every icebreaker trying to escape my mouth hits my tongue and turns to concrete.<br/>
                        Every rejection from past situations plays over in my mind on constant repeat.
                     </div>
                     <div style={poetryDivStyle}>
                        And I don't know when my own "game" became so obsolete.<br/>
                        I'm not shy. I'm not awkward. I'm not a social offbeat.<br/>
                        I can walk in a straight line .I can talk in sentences that are complete.<br/>
                        It's only when there's a hint of romance that my palms sweat and I begin to overheat.
                     </div>
                     <div style={poetryDivStyle}>
                        And even as I scold myself, she's still standing there.<br/>
                        Her mere presence serves as a constant dare.<br/>
                        I'm looking for the perfect moment but I'm paranoid that I'm starting to stare.<br/>
                        My buddies are reminding me that there's no way in hell that I'll leave this chair.<br/>
                        Every minute that passes is a minute bringing me closer to despair.<br/>
                        This night, this fleeting chance, is fast expiring as I mentally prepare.<br/>
                        Every song that passes by increases my chances of playing solitaire.<br/>
                        Every nervous drink I down decreases my likelihood of being debonair.<br/>
                        But I can't fathom approaching her until I silence this internal questionnaire.<br/>
                        I can't bring myself to step forward while my mind is in such a state of disrepair.
                     </div>
                     <div style={poetryDivStyle}>
                        And now she's gone.<br/>
                        And I'll spend the rest of the night thinking about what I did wrong.<br/>
                        I'll convince myself that I was totally gonna talk to her if she'd just hung around for one more song.<br/>
                        I'll rehearse all the words I was gonna say if I'd only felt a little more strong.<br/>
                        I'll quietly ask myself if I'll see her again.<br/>
                        But I know the answer to that.<br/>
                     </div>
                     <div style={poetryDivStyle}>
                        She's gone.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'BangBang'}
                  onChange={expandAndCollapseAccordions('BangBang')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'BangBang-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'BangBang-header'}
                  >
                     <Typography>Bang Bang</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        Bang bang, I shot you down.<br/>
                        Bang bang, you hit the ground.<br/>
                        Bang bang, that awful sound.<br/>
                        Bang bang, that’s how I shot you down.
                     </div>
                     <div style={poetryDivStyle}>
                        Bang! Bang!
                     </div>
                     <div style={poetryDivStyle}>
                        No sound is more American
                        <div style={poetryIndentedDivStyle}>
                           than the sound of a mother’s pain.
                        </div>
                        And no image is more American
                        <div style={poetryIndentedDivStyle}>
                           than the gun from which it sprang.
                        </div>
                        Now your elected leaders will try to fool you.<br/>
                        They paint gun control as some liberal voodoo.<br/>
                        While they claim
                        <div style={poetryIndentedDivStyle}>
                           that NRA headquarters is where freedom rang.
                        </div>
                        While they brace themselves against the boogeymen
                        <div style={poetryIndentedDivStyle}>
                           of brown immigrants and black gangs.
                        </div>
                        While they swear that tree’s “strange fruit”
                        <div style={poetryIndentedDivStyle}>
                           is just a picnic and some overhang.
                        </div>
                        Because they know ultimately,
                        <div style={poetryIndentedDivStyle}>
                           they can subdue you.
                        </div>
                        They melted your chains into shiny pistols,
                        <div style={poetryIndentedDivStyle}>
                           with which they overthrew you.
                        </div>
                        And now there’s nothing left to hear
                        <div style={poetryIndentedDivStyle}>
                           and nothing left to be sang<br/>
                           but:
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        Bang! Bang!
                     </div>
                     <div style={poetryDivStyle}>
                        You can organize your boycotts and your grassroots resistance.
                        <div style={poetryIndentedDivStyle}>
                           Go ahead…<br/>
                           I’ll wait…
                        </div>
                        But that goose-stepping march you hear approaching
                        <div style={poetryIndentedDivStyle}>
                           somewhere off in the distance
                        </div>
                        Is the sound of two hundred million white Americans
                        <div style={poetryIndentedDivStyle}>
                           who are looking to pick a fight.
                        </div>
                        Cuz there’s nothing worse
                        <div style={poetryIndentedDivStyle}>
                           in this universe<br/>
                           than a white man bitching about his rights.
                        </div>
                        So I’ll hold your hand
                        <div style={poetryIndentedDivStyle}>
                           as together we pray,
                        </div>
                        And I’ll swear that Jesus
                        <div style={poetryIndentedDivStyle}>
                           is the one I obey,
                        </div>
                        But I’ll burn a cross on your lawn tonight.<br/>
                        And I’ll wave my
                        <div style={poetryIndentedDivStyle}>
                           Blue Lives Matter,<br/>
                           pistol grip,<br/>
                           first edition,<br/>
                           signed-and-numbered<br/>
                           action figure<br/>
                           in the eerie glow of the firelight.
                        </div>
                        And when the corpses pile up, I’ll blame it on you
                        <div style={poetryIndentedDivStyle}>
                           cuz you stubbornly refuse to underwrite
                        </div>
                        The statues dedicated to my
                        <div style={poetryIndentedDivStyle}>
                           racist,<br/>
                           hateful,<br/>
                           Confederate,<br/>
                           ancestral<br/>
                           parasites.
                        </div>
                        And while that cross goes up in flames,
                        <div style={poetryIndentedDivStyle}>
                           you’ll only hear one refrain:
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        Bang! Bang!
                     </div>
                     <div style={poetryDivStyle}>
                        There’s no legislation that can possibly contain,<br/>
                        The xenophobia,<br/>
                        Of those who fear a black dystopia,<br/>
                        Of those who will do anything in their power to restrain<br/>
                        The unbridled,<br/>
                        <div style={poetryIndentedDivStyle}>
                           the unchecked,<br/>
                           the unconscionable,<br/>
                           flower of black youth.
                        </div>
                        My bullets are the ultimate remedy
                        <div style={poetryIndentedDivStyle}>
                           to the power of democratic truth.
                        </div>
                        And you can arrest me now,
                        <div style={poetryIndentedDivStyle}>
                           if you think that helps,<br/>
                           but assault rifles are easy to obtain.
                        </div>
                        And while I exterminate your children
                        <div style={poetryIndentedDivStyle}>
                           the Second Amendment shields me<br/>
                           like polyurethane<br/>
                           in the driving rain.
                        </div>
                        And as I stockpile ammo
                        <div style={poetryIndentedDivStyle}>
                           like a Rambo commando,<br/>
                           your kids will still be slain…<br/><br/>
                           <div style={poetryIndentedDivStyle}>
                              for jaywalking,<br/>
                              for surrendering,<br/>
                              for eating skittles,<br/>
                              for wearing a hoodie,<br/>
                              for playing in the park with a train,<br/>
                              for selling cigarettes outside a bodega,<br/>
                              for possessing trace amounts of cocaine.<br/><br/>
                           </div>
                        </div>
                        But there’s no particular political campaign<br/>
                        That will protect you from the chaotic
                        <div style={poetryIndentedDivStyle}>
                           the violent,<br/>
                           the inhumane<br/>
                           sound of:
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        Bang! Bang!
                     </div>
                     <div style={poetryDivStyle}>
                        Bang bang, I shot you down.<br/>
                        Bang bang, you hit the ground.<br/>
                        Bang bang, that awful sound.<br/>
                        Bang bang, that’s how I shot you down.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'CoitHouse'}
                  onChange={expandAndCollapseAccordions('CoitHouse')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'CoitHouse-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'CoitHouse-header'}
                  >
                     <Typography>Coit House</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        You’ve all heard tales of youthful exuberance, but you’ve never read a book like this. We were young. We were stupid. We naively believed we had women
                        hanging on our hook like this. Despite what our children may think, we didn’t always look like this. That’s why it’s so baffling now that our glory days
                        were took like this.
                     </div>
                     <div style={poetryDivStyle}>
                        Our waistlines were thin and our wallets were thinner. Mac and cheese was not just a side dish. It was breakfast, lunch, and dinner. Milwaukee’s Beast
                        was the champion of beers. Twelve ounces made you feel like a winner. And so help me if you touched my Faygo, I’d have you burned at the stake like a
                        goddamn sinner.
                     </div>
                     <div style={poetryDivStyle}>
                        This was the age of a venue that we all came to know as the Coit House. For certain young ladies it was also known as the Innocence Destroyed House.
                        Usually, for us residents, it was the Chronically Unemployed House. But if you were dumb enough to let your wife party there, you’d soon be a deeply
                        annoyed spouse.
                     </div>
                     <div style={poetryDivStyle}>
                        The Coit House was a peculiar place where getting fucked didn’t mean that your clothes were off. You’d be ambushed by the Make-Her-Cum Soldiers if you
                        couldn’t efficiently get her off. We fought daily, like rats in a shrinking cage. But we were all cut from the same cloth. Except for Scott. That lazy
                        motherfucker was nothing but a worthless sloth.
                     </div>
                     <div style={poetryDivStyle}>
                        Our muses were marked with a Vulcan’s pointy ears and a captain’s shiny head. We didn’t care who shot JR, but we knew that Rosencrantz and Guildenstern
                        Are Dead. Our music wasn’t sung by the King. It was delivered by a Prince instead. And those breezy novels your momma read? They were replaced by darker
                        visions from Harlan Ellison’s head.
                     </div>
                     <div style={poetryDivStyle}>
                        The Coit House is now but a memory that will never be repeated again. But those times were imprinted upon my brain as just what it means to be someone’s
                        friend. Women have left us. Employers reject us. Our children disrespect us. Neighbors misdirect us. But the people in this room will be here till the
                        end. It’s a bond that others scarcely comprehend. The Coit House was not just a point in space or time. It was a springboard for relationships that
                        became lifelong trends.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'Douchebag'}
                  onChange={expandAndCollapseAccordions('Douchebag')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'Douchebag-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'Douchebag-header'}
                  >
                     <Typography>Douchebag</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        How do you know I'm a douchebag?
                     </div>
                     <div style={poetryDivStyle}>
                        Cuz you read some of my poetry and knew that was all that you had to see. There couldn't be anything deeper about me than the knee-jerk impression you
                        built so carelessly. One poem is obviously the mirror to my soul and two poems tells you more than you ever needed to know. No point in seeing where
                        the rabbit hole goes. No point in asking what inspired those prose. You've read some of my poetry so you've obviously uncovered all my complexity.
                     </div>
                     <div style={poetryDivStyle}>
                        How do you know I'm a douchebag?
                     </div>
                     <div style={poetryDivStyle}>
                        Cuz you browsed through some snapshots on Facebook and knew there was no need for a second look. If a picture's worth a thousand words then two must
                        be a goddamn storybook. There's no need to confront me bout the updates you spy when you're creeping on social media content in your alibi. Before we
                        could talk you've already said goodbye. No need to discuss cuz selfies don't lie. You saw some of the pictures I took and that's all you needed to
                        give me the hook.
                     </div>
                     <div style={poetryDivStyle}>
                        How do you know I'm a douchebag?
                     </div>
                     <div style={poetryDivStyle}>
                        Cuz you saw the car I drive and there's no way you'd be caught in that thing alive. If someone owns a crappy car, it's obvious they'll never thrive.
                        If I don't escort you in a fancy chariot, then what else of you would I deprive? You have no clue where my money goes. Don't know what I earn or how
                        it flows. You've never tried to juxtapose what I own with the life I chose. You don't wanna hear that jive cuz you can't see past the car I drive.
                     </div>
                     <div style={poetryDivStyle}>
                        How do you know I'm a douchebag?
                     </div>
                     <div style={poetryDivStyle}>
                        Cuz you heard that I got drunk last night and knew this must be a sign of blight. I didn't cause trouble, didn't start any fight. But I was a little
                        loud. Was a little impolite. So this must mean that I have an addiction. My mark on this world is one of affliction. One night of drinking feeds
                        your conviction that a future with me only leads to friction. You learned that I drink and it brings me delight so this is enough to dismiss me outright.
                     </div>
                     <div style={poetryDivStyle}>
                        How do I know that you're a little bitch?
                     </div>
                     <div style={poetryDivStyle}>
                        I don't. We've never met. And I don't pretend to know, what makes you tick, what makes you go, just because I've seen bits of your social media
                        show. I don't give sway to chatter and scandal. Personal discussion is not too much to handle. Rumors about you don't hold a candle to the insight
                        I could gain if conversation flows.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'FrozenSolidInAPressureCooker'}
                  onChange={expandAndCollapseAccordions('FrozenSolidInAPressureCooker')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'FrozenSolidInAPressureCooker-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'FrozenSolidInAPressureCooker-header'}
                  >
                     <Typography>Frozen Solid In A Pressure Cooker</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        Heat looms over the city like a life sentence and roams his way through the busy streets and back alleys, searching for his next victim. He dances
                        and skips, prances and flips from sidewalk to storefront, boardwalk to beachfront, bearing down upon the restless souls of the Delta.
                     </div>
                     <div style={poetryDivStyle}>
                        Joey lifts his head from the glass of lemonade over which he’s been hovering and he asks in a desperate tone whether or not it's four o'clock yet.
                        "No," I tell him. "It's one." And the sigh which follows reflects his hollow depression as he meekly tries to swallow another gulp of lemonade.
                     </div>
                     <div style={poetryDivStyle}>
                        Across the street Heat jauntily harasses Old Woman of seventy, maybe eighty - even she's lost count with any certainty. Old Woman fights back – but
                        to no avail - fanning her forehead with all the grace of a beached whale, pawing and posturing over her leathery skin, Heat cares not for her desperate
                        travails. For a moment she catches my eye and looks to me as though I can free her from Heat’s relentless spree. But I only shrug, vainly searching
                        the horizon for clouds.
                     </div>
                     <div style={poetryDivStyle}>
                        Joey finishes off his fourth lemonade of the hour and begins to search through his pockets for another ninety-nine cents. There is only forty. He
                        turns his head to me and squints into the sun, asking in a painful tone whether or not it's four o'clock yet. "No," I tell him. "It's one. Thirty."
                        And the look arising on his shiny face reflects his disbelief.
                     </div>
                     <div style={poetryDivStyle}>
                        Heat pounces upon Fly and feeds his massive hunger for annoyance. Buoyed by the misery of the day, Fly spins and buzzes, flitting first to one ear,
                        then to the other. For a moment, just for an instant, I truly believe that Fly has reached my brain, causing a more exquisite kind of pain, a pain that
                        borders on inhumane. And with the most unforgiving of disdain, Fly begins to train his attention on all that remains of my sweat-soaked sanity. The
                        misery stains the very core of my patience as Fly tears and slices, rips and shreds until my mind can take no more. And Fly is gone; borne upon wings
                        of humidity and oppression.
                     </div>
                     <div style={poetryDivStyle}>
                        Joey wipes the sweat from his brow with a handkerchief that has seen better days and throws his fan to the ground, realizing that his futile attempts
                        at relief have done nothing more than assist Heat in his ongoing battle. He watches several new drops roll down the bridge of his nose and fall to
                        the sidewalk below. Lifting his head to the sound of a distant ice cream truck he wonders aloud whether or not it's four o'clock. "No," I tell him.
                        "It's two." The resulting moan says more than words ever could.
                     </div>
                     <div style={poetryDivStyle}>
                        Heat grabs Tourist and laughs at his ignorance, twisting and straining out of him whatever comfort might have remained in his corpulent body. Tourist
                        is mounted like a five-dollar whore and Heat starts to laugh, cackling for more. Tourist doesn’t realize the stakes in this war. Cameras and handbags
                        transform to millstones in the shimmering glare of afternoon and Tourist wishes that he had them no more. Broken air-conditioning and dingy cafes offer
                        a landscape that Tourist has come to abhor. And Heat comes to terms with another victory.
                     </div>
                     <div style={poetryDivStyle}>
                        Joey stands and rubs his clammy skin, only to surrender once again to the stoop that has become his prison, his pen. His head returns my way, trying
                        to assess my condition and how much longer I will hold out before Heat becomes my master again. The words are checked in his throat but it's not long
                        before he has to give in to the temptation. Trying a smile but failing miserably he asks whether or not it's four o'clock yet. "No," I tell him.
                        "It's two."
                     </div>
                     <div style={poetryDivStyle}>
                        And I realize that the hands of my watch are stuck. But for a moment, for one fleeting instant, I wonder if they really are. We both wonder if they
                        really are.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'Ghosts'}
                  onChange={expandAndCollapseAccordions('Ghosts')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'Ghosts-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'Ghosts-header'}
                  >
                     <Typography>Ghosts</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        I never used to believe in ghosts.
                     </div>
                     <div style={poetryDivStyle}>
                        The specter of people long gone,
                        <div style={poetryIndentedDivStyle}>
                           and things never meant to be,<br/>
                           was not a burden that was laid upon me.
                        </div>
                        Twilight was never terribly dour
                        <div style={poetryIndentedDivStyle}>
                           and midnight was not a witching hour.
                        </div>
                        But the older I get
                        <div style={poetryIndentedDivStyle}>
                           the more I cower<br/>
                           at the growing and ever-present power<br/>
                           of memories pushed too far beneath the surface.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        As I travel through life,
                        <div style={poetryIndentedDivStyle}>
                           the ghosts,<br/>
                           they surround me.
                        </div>
                        They highlight the relationships that I could not see.<br/>
                        They dance and they sing.<br/>
                        They bite and they sting.<br/>
                        They dredge up the memories that I’ve been ignoring.<br/>
                        And they mock me,
                        <div style={poetryIndentedDivStyle}>
                           as the memories grow misty.
                        </div>
                        All poignant reminders of love become history.<br/>
                        And those ghosts,
                        <div style={poetryIndentedDivStyle}>
                           they multiply far too quickly.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        The ghosts always attack when I least expect it.<br/>
                        Everyday objects are now all infected
                        <div style={poetryIndentedDivStyle}>
                           with hopes and dreams<br/>
                           that are too long neglected.
                        </div>
                        The chair where she sat.<br/>
                        The piano he played.<br/>
                        The games we enjoyed.<br/>
                        The card that he made…<br/>
                        <div style={poetryIndentedDivStyle}>
                           for me.
                        </div>
                        When that spirit comes round
                        <div style={poetryIndentedDivStyle}>
                           I beat it back.<br/>
                           I check it.
                        </div>
                        But the ghosts have a presence that must be respected.<br/>
                        Their constant surveillance leaves me dejected,
                        <div style={poetryIndentedDivStyle}>
                           forcing me to ponder just how I’m affected.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        They hide in the shadows and wait for the moment
                        <div style={poetryIndentedDivStyle}>
                           when my head is too cloudy<br/>
                           and my thoughts are not cogent.
                        </div>
                        Their timing is brutal,
                        <div style={poetryIndentedDivStyle}>
                           my defenses are futile,<br/>
                           and once they attack there is no useful<br/>
                           way to manage that pain.
                        </div>
                        Confronting the tormentors triggers bouts of depression
                        <div style={poetryIndentedDivStyle}>
                           but ignoring them creates an endless succession<br/>
                           of self-destructive escapades aimed at the suppression<br/>
                           of all that haunts me.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        I’m assured by others that the haunting inevitably fades.<br/>
                        But rather than waning,
                        <div style={poetryIndentedDivStyle}>
                           their power is gaining<br/>
                           and it seems that no level of distraction or training<br/>
                           lessens the grip that they hold on my mind.
                        </div>
                        And while I’m maintaining
                        <div style={poetryIndentedDivStyle}>
                           this façade of normality<br/>
                           others can see my defenses are straining.
                        </div>
                        They can’t see the ghosts,
                        <div style={poetryIndentedDivStyle}>
                           but they see that I’m straying<br/>
                           ever farther from the goals I once was attaining.
                        </div>
                        And the longer I try to sustain this grind
                        <div style={poetryIndentedDivStyle}>
                           the more I become hopelessly resigned<br/>
                           that the prison to which I’m confined<br/>
                           cannot be escaped -<br/>
                           because it can’t be defined.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        And as I run from the ghosts,
                        <div style={poetryIndentedDivStyle}>
                           I work to spawn more.
                        </div>
                        Because the wounds I inflict on others
                        <div style={poetryIndentedDivStyle}>
                           ensure that I will always have new ghosts in store.
                        </div>
                        Every friend that I ignore,
                        <div style={poetryIndentedDivStyle}>
                           every colleague with whom I start a war,<br/>
                           every lover that I show the door,<br/>
                           every heart that I leave shredded on the floor -<br/>
                           guarantees that I will have my ghosts for evermore.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        And while the ghosts, they won’t abandon me –
                        <div style={poetryIndentedDivStyle}>
                           at times, they’re all that comforts me,<br/>
                           silent partners keeping me company.
                        </div>
                        I never used to believe in ghosts
                        <div style={poetryIndentedDivStyle}>
                           but now I know that they are part of me.
                        </div>
                        They have become,
                        <div style={poetryIndentedDivStyle}>
                           and will continue to be,<br/>
                           the darker side of my reality.
                        </div>
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'Gone'}
                  onChange={expandAndCollapseAccordions('Gone')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'Gone-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'Gone-header'}
                  >
                     <Typography>Gone</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        So much more to say,<br/>
                        But nothing more can be said.<br/>
                        Waiting for tomorrow,<br/>
                        But now one of us is dead.<br/>
                        Unspoken apologies<br/>
                        Runnin round my head.<br/>
                        No time to hang out.<br/>
                        No more time to break bread.
                     </div>
                     <div style={poetryDivStyle}>
                        There’s part of you inside me<br/>
                        That I know will never die.<br/>
                        You made a rebel out of me,<br/>
                        One that will never comply.<br/>
                        Our memories have ended,<br/>
                        But I feel them multiply.<br/>
                        There’s too much inside me<br/>
                        To wanna say goodbye.
                     </div>
                     <div style={poetryDivStyle}>
                        I wanna listen again<br/>
                        To your countless stories.<br/>
                        I wanna see your smile<br/>
                        As you relive those glories.<br/>
                        They bored me then,<br/>
                        But they were your territory.<br/>
                        Without you here<br/>
                        I’m stuck in purgatory.
                     </div>
                     <div style={poetryDivStyle}>
                        Sometimes I wonder<br/>
                        If I still know your voice.<br/>
                        Is it still in my brain?<br/>
                        Or is it part of the noise?<br/>
                        Time spent apart<br/>
                        Is always a choice.<br/>
                        But to see you again<br/>
                        Would make me rejoice.
                     </div>
                     <div style={poetryDivStyle}>
                        I never appreciated<br/>
                        That one day you’d be gone.<br/>
                        I always believed<br/>
                        That you’d be part of this song.<br/>
                        But now I’m here alone<br/>
                        And I have to carry on,<br/>
                        While seasons drag by<br/>
                        And the years are so long.
                     </div>
                     <div style={poetryDivStyle}>
                        Yeah, we had our time,<br/>
                        And to me it was everything.<br/>
                        I know things get better.<br/>
                        I’m due for an upswing.<br/>
                        But it’s hard to let go<br/>
                        When I still wanna cling<br/>
                        To a time that is past,<br/>
                        A time that’s expiring.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'Hazy'}
                  onChange={expandAndCollapseAccordions('Hazy')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'Hazy-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'Hazy-header'}
                  >
                     <Typography>Hazy</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        She yells at me in the color of stout.<br/>
                        In her calmer moments, she’s amber,<br/>
                        But it’s rare that she doesn’t shout.<br/>
                        And in her rising anger, the ceiling slides into deeper shades of porter.<br/>
                        She does nothing more than lay about but she’s the one who gives orders.<br/>
                        But when the vitriol is truly flowing, the entire world is filtered through the chocolate hues of stout.<br/>
                        The brightest day turns nocturnal and darkness strains its borders<br/>
                        And clouds gather in the clearest sky when my eyes are stained with maudlin tones of toasted malt.
                     </div>
                     <div style={poetryDivStyle}>
                        Our forecast is driven by the hazy glow of juniper berries and pine.<br/>
                        The tickle of cane syrup may lead to softer landings,<br/>
                        But olives and vermouth make a toxic brine.<br/>
                        The flashing stench of sour mash is a desperate plea to batten down the hatches.
                     </div>
                     <div style={poetryDivStyle}>
                        Our environment transforms into fun house mirrors when reflected through the warping of one-point-seven-five-liter glass.
                     </div>
                     <div style={poetryDivStyle}>
                        She still simmers over last night’s argument,<br/>
                        The details of which neither one of us remembers.<br/>
                        And the straw man she’s been whipping since noon is always on the verge of being dismembered,<br/>
                        But nothing can keep it in tact better than a thick, sticky shot of Crown.<br/>
                        And every drop of bitters is a life preserver on which we both will drown.
                     </div>
                     <div style={poetryDivStyle}>
                        She’s buying.<br/>
                        I’m still lying.<br/>
                        Cuz nothing I say now can be held against me in a court of rye.<br/>
                        Nothing sticks to me cuz everything sticks to the floor,<br/>
                        But there’s nothing slipperier than amber spirts that haunt my throat.<br/>
                        And there’s nothing scarier than the wrath she’ll bring to bear when the golden curtain is drawn.<br/>
                        But for now, I’m still concentrating – squinting, straining, everything but focusing – on the haze of malted sugars that have colonized my soul.
                     </div>
                     <div style={poetryDivStyle}>
                        She stacks the screaming bottles like layers of bowling pins.<br/>
                        They’re balanced on the nervous tinkling of glass that’s been stretched too thin.<br/>
                        I can smell the tension of etched crystal as it nervously eyes the rubbish bin,<br/>
                        And any correction on my part is just an invitation for conflict.<br/>
                        The bottles scold me.<br/>
                        They say that I should just be diving in.<br/>
                        But there’s nothing but emptiness within.<br/>
                        There’s nothing left from which we can begin.
                     </div>
                     <div style={poetryDivStyle}>
                        She yells something delicious as I inspect the bottom of my glass.<br/>
                        There’s something in her rant that’s nutritious.<br/>
                        Her seething hatred blossoms on agave plants.<br/>
                        And there’s something savory in her pain that can’t be surpassed.<br/>
                        The corn planted in the backyard is already rotten and brown.<br/>
                        And the potatoes are riddled with black spots even as we try to choke them down.<br/>
                        But we’re living on insults and barley,<br/>
                        And hops are the sweetest fruit we can harvest while her missiles attempt to scar me.
                     </div>
                     <div style={poetryDivStyle}>
                        She’s painting on a dulcet canvas of malt.<br/>
                        Every surface under my fingers fades to umber.<br/>
                        Our memories swirl in a maelstrom of lime and salt.<br/>
                        And there is no volume of the brown water that can satisfy this hunger.<br/>
                        So we’ll eat, and we’ll drink, and we’ll launch projectiles until we’ve lost all memory of times when we were younger.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'HerDisease'}
                  onChange={expandAndCollapseAccordions('HerDisease')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'HerDisease-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'HerDisease-header'}
                  >
                     <Typography>Her Disease</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        As she sits across from me
                        <div style={poetryIndentedDivStyle}>
                           I watch her fidgeting restlessly,<br/>
                           shuffling coasters between her fingers,<br/>
                           as compulsion strips away her dignity.
                        </div>
                        Her body is rigid but her shoulders are limp,
                        <div style={poetryIndentedDivStyle}>
                           as the weight of her burden erodes our relationship.
                        </div>
                        I observe as she squints,
                        <div style={poetryIndentedDivStyle}>
                           as the thoughts rise up to the surface,
                           <div style={poetryIndentedDivStyle}>
                              a flinch,
                           </div>
                           as she struggles to control her expression,
                           <div style={poetryIndentedDivStyle}>
                              a wince,
                           </div>
                           and feeling defeated,
                           <div style={poetryIndentedDivStyle}>
                              she retreats to her core again.
                           </div>
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        The silence is only broken by the tinkling of ice in my whiskey,
                        <div style={poetryIndentedDivStyle}>
                           and by the wispy<br/>
                           shredding of napkins that happens efficiently<br/>
                           and quickly.
                        </div>
                        She tears them into identical strips
                        <div style={poetryIndentedDivStyle}>
                           and stacks them,<br/>
                           fiercely,<br/>
                           with a careful attention to detail that she has never afforded to me.
                        </div>
                        The silverware is severely aligned,
                        <div style={poetryIndentedDivStyle}>
                           and each of her movements is eerily designed,<br/>
                           to preserve the only corner of her world she controls with absolute certainty.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        She begins to speak, but only manages to mumble.<br/>
                        I try to engage, but her world starts to crumble
                        <div style={poetryIndentedDivStyle}>
                           with every word that tumbles<br/>
                           from my mouth.
                        </div>
                        Her hand acquires a tremor,
                        <div style={poetryIndentedDivStyle}>
                           and she visibly recoils at my tenor.
                        </div>
                        I press her for answers but it makes me the aggressor
                        <div style={poetryIndentedDivStyle}>
                           and my questions are nothing to her but stressors,<br/>
                           pushing her closer to panic -<br/>
                           a panic that simmers in her like an ember.
                        </div>
                        Feeling helpless before her like a beggar,
                        <div style={poetryIndentedDivStyle}>
                           I give up the fight and retreat altogether.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        She offers her hand - not in tenderness,
                        <div style={poetryIndentedDivStyle}>
                           but as a trap, set and sprung by the treacherous.<br/>
                        </div>
                        I grab it and it feels cadaverous,
                        <div style={poetryIndentedDivStyle}>
                           a touch that affords me no deference.
                        </div>
                        I don’t know where she wants to be,
                        <div style={poetryIndentedDivStyle}>
                           but I know I’m not her preference.
                        </div>
                        I portray a sense of warmth, of gentleness.<br/>
                        But as I do, her shallow breath loses its resonance
                        <div style={poetryIndentedDivStyle}>
                           and her palm acquires a clamminess<br/>
                           that I have never felt before.
                        </div>
                        Every pore of her skin screams, "Escape!"
                        <div style={poetryIndentedDivStyle}>
                           as though the touch of my hand is akin to <i>rape</i>.
                        </div>
                        Facing her repulsion, I start to deflate
                        <div style={poetryIndentedDivStyle}>
                           and rather than fight I evacuate<br/>
                           back into my corner of the booth.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        She taps the table repeatedly,
                        <div style={poetryIndentedDivStyle}>
                           with a cadence that belies her meekness,<br/>
                           as though she's trying to complete a sequence,<br/>
                           heatedly.
                        </div>
                        Each of my gestures interrupts her focus,
                        <div style={poetryIndentedDivStyle}>
                           causing her to respond freakishly,<br/>
                           and forcing her to reboot the process,<br/>
                           fatiguingly,<br/>
                           with a frustrated sigh.
                        </div>
                        Waiting for the ritual’s end is futile,
                        <div style={poetryIndentedDivStyle}>
                           but halting it only fuels her disapproval.
                        </div>
                        I confront her compulsions, but I’m met with refusals -
                        <div style={poetryIndentedDivStyle}>
                           and tensions between us spawn the accrual<br/>
                           of bitterness that underlies her condition.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        The meal that I eat <b>offends</b> her.<br/>
                        The mere sound of my voice <b>upends</b> her.<br/>
                        The color of my jacket <b>apprehends</b> her.<br/>
                        The tone of my words <b>condescends</b> her.<br/>
                        The touch of my hand <b>discontents</b> her.<br/>
                        The topic I discuss only <b>extends</b> her anxiety
                        <div style={poetryIndentedDivStyle}>
                           and the man I’ve become now always <b>prevents</b> her<br/>
                           from reaching her hopes and dreams.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        Every empty gaze I receive from her
                        <div style={poetryIndentedDivStyle}>
                           makes me wonder why I haven’t taken leave of her,<br/>
                           and it baffles me to think that I was once interweaved with her.
                        </div>
                        There was a time when I thought that all could be achieved with her
                        <div style={poetryIndentedDivStyle}>
                           but now all I know are dinners that are grieved with her.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        As we head to the car I try to walk by her side,
                        <div style={poetryIndentedDivStyle}>
                           as though we’re a couple -<br/>
                           a loving husband and bride.
                        </div>
                        But she takes great pains to ensure the divide
                        <div style={poetryIndentedDivStyle}>
                           between us is only multiplied.
                        </div>
                        As I absorb another hit to my pride
                        <div style={poetryIndentedDivStyle}>
                           it is clear that she cannot abide<br/>
                           the thought that I might reside<br/>
                           anywhere within her presence.
                        </div>
                        And as we settle into the car I can see that she’s mortified,
                        <div style={poetryIndentedDivStyle}>
                           that she’d rather be crucified<br/>
                           than spend another minute alongside...<br/>
                           me.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        The ride home is a study in distraction.<br/>
                        I listen to the banal contraption
                        <div style={poetryIndentedDivStyle}>
                           of talk radio while she feeds her attraction
                           <div style={poetryIndentedDivStyle}>
                              to Facebook,<br/>
                              and Twitter,<br/>
                              and Pinterest,<br/>
                              and Instagram -
                           </div>
                           and any other proxy for real interaction.
                        </div>
                        Each of us is a singular faction
                        <div style={poetryIndentedDivStyle}>
                           searching in vain for our own lonely satisfaction.
                        </div>
                        There was a time,
                        <div style={poetryIndentedDivStyle}>
                           so long ago,<br/>
                           when we both had compassion,<br/>
                           when conversation between us was more than a transaction.
                        </div>
                        But every word we speak now only leads to retraction,
                        <div style={poetryIndentedDivStyle}>
                           so it’s easier to stay silent than to risk a reaction.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        I used to believe that she had an affliction -
                        <div style={poetryIndentedDivStyle}>
                           that the friction between us could be cured by prescription.
                        </div>
                        But years of silent contrition
                        <div style={poetryIndentedDivStyle}>
                           have taught me the folly of that position.
                        </div>
                        There is only one way to secure her remission
                        <div style={poetryIndentedDivStyle}>
                           and it requires the removal of my implicit opposition.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        Because there are no others who make her freeze,
                        <div style={poetryIndentedDivStyle}>
                           and when she’s alone she feels totally at ease.
                        </div>
                        It’s only in my presence that she starts to wheeze.<br/>
                        And though there are no guarantees
                        <div style={poetryIndentedDivStyle}>
                           it doesn’t take much expertise
                           to see that:
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        I’m her <i>catalyst</i>.<br/>
                        I’m her <i>agitant</i>.
                     </div>
                     <div style={poetryDivStyle}>
                        I am...<br/>
                        her disease.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'IChooseYou'}
                  onChange={expandAndCollapseAccordions('IChooseYou')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'IChooseYou-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'IChooseYou-header'}
                  >
                     <Typography>I Choose You</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        I choose you.
                     </div>
                     <div style={poetryDivStyle}>
                        It’s not a choice in the absence of options.<br/>
                        I’ve seen enough of the dating flotsam.<br/>
                        Everyone else is long since forgotten,<br/>
                        And the fruit of those fields is now dead and rotten.<br/>
                        But the light I see in you erases the pain of my past.<br/>
                        And though our future holds untold challenges,<br/>
                        I know those are trials that won’t last.<br/>
                        Because our die has already been cast.<br/>
                        And the joy we feel now will only be surpassed.<br/>
                        So to anyone foolish enough to question our path<br/>
                        I can only offer one reply:
                     </div>
                     <div style={poetryDivStyle}>
                        I choose you.
                     </div>
                     <div style={poetryDivStyle}>
                        I choose your morning breath.<br/>
                        I choose this shared journey that will continue till death.<br/>
                        I choose your late-night rants,<br/>
                        And the awkward grace with which you dance.<br/>
                        I choose everything in you that my friends warned me about.<br/>
                        I choose the crazy ideas that you sometimes spout.<br/>
                        I choose your bad days
                        <div style={poetryIndentedDivStyle}>
                           And your tired days<br/>
                           And your cranky days<br/>
                           And the days when you’re filled with doubt.
                        </div>
                        I choose your insecurities and all your abundant impurities.<br/>
                        I lovingly choose all of your idiosyncrasies<br/>
                        Because they comprise the package that is you.<br/>
                        And that’s a package I don’t want to live without.
                     </div>
                     <div style={poetryDivStyle}>
                        I’ve grown past saying that I <i>want</i> you.<br/>
                        I’ve long ceased claiming that I <i>need</i> you.<br/>
                        You know that I’m staying,<br/>
                        because I <i>choose</i> you.
                     </div>
                     <div style={poetryDivStyle}>
                        Like the seedling chooses rain.<br/>
                        Like the baker chooses grain.<br/>
                        Like Caesar chooses romaine.<br/>
                        Like old folks choose the mundane.<br/>
                        Like the lighter chooses butane.<br/>
                        Like a crusader chooses to campaign.<br/>
                        Like the racecar chooses to hydroplane.<br/>
                        Like the leftover chooses cellophane.
                     </div>
                     <div style={poetryDivStyle}>
                        In this crazy world of conflicting choices,<br/>
                        When all objections equate to noises,<br/>
                        Amidst the din of dueling voices,<br/>
                        There is only one choice for which my heart rejoices.
                     </div>
                     <div style={poetryDivStyle}>
                        I. Choose. You.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'IDontKnow'}
                  onChange={expandAndCollapseAccordions('IDontKnow')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'IDontKnow-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'IDontKnow-header'}
                  >
                     <Typography>I Don't Know</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        I don't know.
                     </div>
                     <div style={poetryDivStyle}>
                        I don't know anymore what to say to my friends.<br/>
                        I don't know how to explain that justice depends<br/>
                        On the color of your skin and the money you can spend.
                     </div>
                     <div style={poetryDivStyle}>
                        I don't know.
                     </div>
                     <div style={poetryDivStyle}>
                        I don't know how it all went to shit.<br/>
                        I don't know why we argue about whose life is legit.<br/>
                        I don't know why no one listens when I spit.<br/>
                        There are no breadcrumbs leading homeward.<br/>
                        No official record of the first time this occurred.<br/>
                        I don’t know any white folk who don't want the last word.<br/>
                        I don’t know any black folk who don't feel slurred.<br/>
                        I don't know how we find peace when justice is deferred.
                     </div>
                     <div style={poetryDivStyle}>
                        I don't know.
                     </div>
                     <div style={poetryDivStyle}>
                        I don't know how I lived so long in the dark,<br/>
                        How I blindly ignored every racist remark.<br/>
                        How I brushed aside bigotry as harmless snark.<br/>
                        All this crap around me seemed so hidden and subdued,<br/>
                        But now I’m swimming in kerosene under a shower of sparks.
                     </div>
                     <div style={poetryDivStyle}>
                        And all I want is to make it right,<br/>
                        But I got no confidence,<br/>
                        <div style={poetryIndentedDivStyle}>
                           cuz I know my people.
                        </div>
                        We'd rather vote for Trump cuz my brothers are sheeple.<br/>
                        They don't fight for YOUR rights.<br/>
                        They lean on their privilege while they hide in their steeples.<br/>
                        And they'll risk absolutely NOTHING as they watch through their peep holes.<br/>
                        But how do we bridge this gap??
                     </div>
                     <div style={poetryDivStyle}>
                        I don't know.
                     </div>
                     <div style={poetryDivStyle}>
                        I don't know how to solve problems I never knew existed.<br/>
                        I don't know how to help people that all my ancestors resisted.<br/>
                        I can’t find common ground when all of <i>my</i> logic’s twisted.<br/>
                        I can’t be that voice of wisdom when <i>my</i> blood assisted
                        <div style={poetryIndentedDivStyle}>
                           in <i>your</i> demise.
                        </div>
                        So where lies the path to compromise??
                     </div>
                     <div style={poetryDivStyle}>
                        I don't know.
                     </div>
                     <div style={poetryDivStyle}>
                        But what I do know is this:<br/>
                        We cannot continue on <i>this</i> path.<br/>
                        We can’t build a society based on hatred and wrath.<br/>
                        We can't blame our ancestors for this aftermath.<br/>
                        We can't treat our brothers like psychopaths.
                     </div>
                     <div style={poetryDivStyle}>
                        We gotta own this shit.
                     </div>
                     <div style={poetryDivStyle}>
                        We gotta learn to put ourselves in another man's shoes.<br/>
                        We gotta realize that our kids learn from us how to choose<br/>
                        Between brotherhood and stereotypes that are always untrue.<br/>
                        And we can't tell them that we didn't know what to do.<br/>
                        We can't tell them our message was misconstrued.<br/>
                        We can't wash it away with equality shampoo.<br/>
                        We can't expect them to cleanse our societal residue.<br/>
                        We can't be shocked when they drink from the malice we’ve brewed.<br/>
                        We can't magically grant them a respect for others –<br/>
                        When it’s a respect that we ourselves never knew.
                     </div>
                     <div style={poetryDivStyle}>
                        All we can do is stop the cycle.<br/>
                        Right here.<br/>
                        Right now.<br/>
                        With no excuses.<br/>
                        But how do we do that?
                     </div>
                     <div style={poetryDivStyle}>
                        I don't know.
                     </div>
                     <div style={poetryDivStyle}>
                        I just don't know.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'NotThatGuy'}
                  onChange={expandAndCollapseAccordions('NotThatGuy')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'NotThatGuy-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'NotThatGuy-header'}
                  >
                     <Typography>Not That Guy</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        I know your other man had a taste for girls on the side, and his legendary escapades have been long-since verified. As he selfishly gratified every
                        sexual impulse his brain could provide another piece of your soul became petrified – terrified at the thought that you would never again be able to
                        safely confide in any member of the opposite sex.
                     </div>
                     <div style={poetryDivStyle}>
                        But baby I’m not that guy - and I don’t know what makes a lucky man want more. I don’t know why men ignore ladies for whores. And while I know you
                        still feel a need to even the score, there’s nothing you can do to me that will make him sore. So since I can’t erase your past, all I can do is
                        implore you to recognize me as nothing more than collateral damage in your ongoing war.
                     </div>
                     <div style={poetryDivStyle}>
                        I know your other man was still hung up on his ex. And I know he thought of her every time the two of you had sex. While you were working two jobs
                        to pay off his debts, he sat at home on the phone with her and sent her freaky texts. The scents on his clothes were not your scents. And as his
                        stories became more immense you went to ever increasing lengths to discover the truth behind his dalliance.
                     </div>
                     <div style={poetryDivStyle}>
                        But baby I’m not that guy – and I don’t know why a fool would chase the bitch who left him. When a woman lifts him up, why would he pine for the one
                        who depressed him? I know that for all those years you were the only one who blessed him, but he didn’t want the one who’d love him. He only wanted
                        the one who’d molest him. And while you tried to comfort him, he returned to the one who stressed him.
                     </div>
                     <div style={poetryDivStyle}>
                        I know your other man couldn’t distinguish between truth and lies. Every evasive word from his mouth was only meant to deceive, to disguise. He
                        didn’t care if your trust was jeopardized, as long as he had the key to your thighs. And as you waited patiently for his replies he fabricated words
                        that fostered your demise.
                     </div>
                     <div style={poetryDivStyle}>
                        But baby I’m not that guy – and my word has never been of question. If you’re ever unsure of my intention just ask me upfront for my direction and I
                        will lay it out for you without exception. I’ve been guilty of many things – but never guilty of deception. I don’t see you as my possession, but
                        instead I hope I’m worthy of your attention and I will expose all of me if it will help to ensure that I am your selection.
                     </div>
                     <div style={poetryDivStyle}>
                        I know your other man spoke to you in disrespectful tones– and the words that came from his mouth were words that make me groan. There was nothing
                        about his verbiage that I could ever condone because his offhand remarks cut you to the bone. And the verbal seeds he had sown proved that he could
                        never atone for the pain he spread through his thoughtless oral cyclone.
                     </div>
                     <div style={poetryDivStyle}>
                        But baby I’m not that guy – and I don’t know why a knight would disrespect his queen. If you denigrate the one you love, then how can anything be
                        serene? If you respect the woman in front of you, then is she someone you would demean? To me, this is something that should be routine. To her, you
                        should never say anything obscene, because she’s the one who keeps your happiness evergreen.
                     </div>
                     <div style={poetryDivStyle}>
                        I know your other man spent your money like it was water. Your bank account was just another victim of his senseless financial slaughter. While he
                        lived like a king you lived in squalor. While you slaved away at the office he camped out in your house like a squatter. He couldn’t find time for a
                        job but he always had time for the gambling parlor. But when it came time to pick up the tab he could never conjure a dollar. While you did everything
                        you could to support his habits, he just hung on you like a collar.
                     </div>
                     <div style={poetryDivStyle}>
                        But baby I’m not that guy – and I don’t know why a man wouldn’t pay his own way. I don’t need your money. I’ve got salary for days and I don’t need
                        to put anything on layaway. We don’t need to split the check. You don’t need to meet me halfway. And the extent of my support is not a shade of grey.
                        I don’t know why some guys think it’s okay to show that they have no vertebrae when the bill is delivered and they conveniently look away.
                     </div>
                     <div style={poetryDivStyle}>
                        I know your other men put a priority on everything but you. And they really had no time for you unless they thought you were gonna screw. They treated
                        your conversation as though it was taboo. They never recognized you as someone they should pursue. They never once respected your unique and intelligent
                        points of view. They never acted like you had a clue. And the more they hung you out to dry, the more I have to deal with their residue.
                     </div>
                     <div style={poetryDivStyle}>
                        Cuz baby I’m none of those guys – and I don’t know why men can’t realize the value they see when they look in your eyes. As long as you’re by my side
                        I’ll never want to womanize. But I cannot apologize for all the assholes who came before me who were just too stupid to recognize the beauty and the
                        intelligence that occupies the depths of your soul – a soul I have come to idolize. So while I know their stupidity constantly defies common sense, I
                        can only ask you to memorize the fact that baby, I’m none of those guys.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'NothingLeftToSay'}
                  onChange={expandAndCollapseAccordions('NothingLeftToSay')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'NothingLeftToSay-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'NothingLeftToSay-header'}
                  >
                     <Typography>Nothing Left To Say</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        I always thought you'd be there for me -<br/>
                        That even with all of our differences<br/>
                        You'd never cease to care for me.<br/>
                        I know it sounds so silly to say<br/>
                        But I thought that you were the final one -<br/>
                        That as all the couples around us imploded<br/>
                        Ours was the interwoven one.<br/>
                        And now I'm here alone<br/>
                        And you're nowhere to be found.<br/>
                        I'm trying to carry on but it cuts me to the bone<br/>
                        That I'm searching for you and you're not around.
                     </div>
                     <div style={{
                        ...poetryDivStyle,
                        textAlign: css3.textAlign.right,
                     }}>
                        I waited up every night for you<br/>
                        But you were too busy playing poker.<br/>
                        You never had the time to meet me for dinner<br/>
                        But you made time for every useless joker.<br/>
                        Every random stranger who begged your attention<br/>
                        Meant more to you than your lover.<br/>
                        I was never your "final one"<br/>
                        I was simply someone other.<br/>
                        And now I know that there's a world beyond you,<br/>
                        And you wonder why no one's there to calm you?<br/>
                        Maybe you should look in the mirror<br/>
                        To see what blame lays upon you.
                     </div>
                     <div style={{
                        ...poetryDivStyle,
                        textAlign: css3.textAlign.center,
                     }}>
                        We've been through all of this before.<br/>
                        We both came here today to say so much more.<br/>
                        But it's clear now that we have no more rapport.<br/>
                        Every verbal engagement only leads to war.<br/>
                        There’s no use in rehashing the promises we swore.<br/>
                        Every potential solution is a pathway already explored.<br/>
                        And the longer we stare and bore holes through each other,<br/>
                        The clearer it is that there's simply nothing left to say.
                     </div>
                     <div style={poetryDivStyle}>
                        I thought about all the things I would share with you.<br/>
                        I wanted a life that no one could compare with you.<br/>
                        There was no one who I trusted more.<br/>
                        For no one did I ever lust more.<br/>
                        But everything was a hope and a prayer with you.<br/>
                        Every obstacle in our path<br/>
                        Became a verbal snare for you.<br/>
                        My idiosyncrasies only fostered despair in you.<br/>
                        I thought we were a team.<br/>
                        I wanted to be there for you.<br/>
                        We’d talk all night.<br/>
                        We’d argue til dawn.<br/>
                        But nothing was ever square with you.
                     </div>
                     <div style={{
                        ...poetryDivStyle,
                        textAlign: css3.textAlign.right,
                     }}>
                        You were always there for me<br/>
                        Like the Nazis were there for the Jews.<br/>
                        The marks you left on me<br/>
                        Amount to nothing but concentration camp tattoos.<br/>
                        Your attention was always with others,<br/>
                        Cuz you saw me as someone you couldn’t lose.<br/>
                        I was home every night waiting patiently for you.<br/>
                        I did all the chores that you wouldn't do,<br/>
                        or refused to do, or simply assumed that I would do<br/>
                        I was putting on a brave face<br/>
                        cuz I still believed we could work this through.<br/>
                        But in return I received nothing from you<br/>
                        But absence, and silence, and blues.<br/>
                        We never talked all night<br/>
                        unless you're counting when I had to talk <i>at</i> you.<br/>
                        Through you. Around you.<br/>
                        We were a team of one and now you’re just<br/>
                        The childish mascot that I outgrew.
                     </div>
                     <div style={{
                        ...poetryDivStyle,
                        textAlign: css3.textAlign.center,
                     }}>
                        There's nothing new under the sun.<br/>
                        And there's no mystery now to what should have been done.<br/>
                        To save this. To repave this.<br/>
                        To avert a disaster before it's begun.<br/>
                        All I needed was the faintest sign that I meant <i>anything</i> to you.<br/>
                        That I registered to you as someone<br/>
                        But it's clear that the pain's too raw to overcome.<br/>
                        And as we avoid conversation in awkward silence<br/>
                        it's obvious that there's nothing left to say.
                     </div>
                     <div style={poetryDivStyle}>
                        I thought we were here for mutual support?<br/>
                        In the darkest of storms you were always my port.<br/>
                        I needed one safe place to report -<br/>
                        A comforting voice that wouldn’t resort<br/>
                        To witty rebuttals and snarky retorts.<br/>
                        Instead I was left with a stranger.<br/>
                        What should have been our haven<br/>
                        Became a constant source of danger.<br/>
                        The partner that I saw in you<br/>
                        Became little more than a stranger -<br/>
                        A hostile cell mate who addressed me<br/>
                        With bitterness and anger.
                     </div>
                     <div style={{
                        ...poetryDivStyle,
                        textAlign: css3.textAlign.right,
                     }}>
                        Cellmates only live<br/>
                        In the prison that you create.<br/>
                        Bitterness naturally accrues from the stories<br/>
                        That you decided to fabricate.<br/>
                        My charity only reached its limit<br/>
                        When you refused to reciprocate.<br/>
                        Our partnership ceased to exist<br/>
                        When you’re only move was to isolate.<br/>
                        I understood that I was “one”<br/>
                        When I could no longer be bothered to investigate.<br/>
                        I knew that I was done<br/>
                        When I no longer cared enough to retaliate.
                     </div>
                     <div style={{
                        ...poetryDivStyle,
                        textAlign: css3.textAlign.center,
                     }}>
                        We could stare at each other all night.<br/>
                        We could watch the clock tick till dark becomes light.<br/>
                        But there’s nothing left in my mind that might<br/>
                        Lead to reconciliation.<br/>
                        There’s nothing I can offer that would alleviate your frustration.<br/>
                        In this final hour, it’s clear<br/>
                        We’ve both passed the point of mediation.<br/>
                        So as this silent conversation<br/>
                        Devolves into nothing more than verbal stagnation<br/>
                        We both realize that<br/>
                        There’s nothing left to say.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'PalePastyPoetry'}
                  onChange={expandAndCollapseAccordions('PalePastyPoetry')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'PalePastyPoetry-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'PalePastyPoetry-header'}
                  >
                     <Typography>Pale Pasty Poetry</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        Where are all the white guys spittin? And why is poetry a gig that only black folks are hittin? We all speak English and to my mind it’s fittin that
                        we should all project truth, we should all be transmittin. Every week on the mic I’m constantly submittin the pain that I feel, the pain I’m admittin.
                        But most white folks I know, they’re silent – they’re quittin. They could expand your mind but instead they’re ommittin the thoughts that make them
                        human, cuz to them it’s forbidden. They’re more concerned about their societal position so their power of expression is forgotten, it’s slippin.
                     </div>
                     <div style={poetryDivStyle}>
                        White folks have done poetry for thousands of years - from Homer to Shakespeare, from the Iliad to King Lear. But bring a mic and some beats and we
                        all disappear. Oh, we talk a good game. We swear we’ll be at your premier. We wanna be seen reading at the coffee house, looking wise and sincere.
                        But when it’s time to spit true knowledge, there’s none of us here. If Robert Frost were alive today he’d be an engineer. And if Kerouac could see
                        us now, he’d say that we’re all queer.
                     </div>
                     <div style={poetryDivStyle}>
                        I’m the only one here with a sunburn. And I could teach you some things, but if you’re not here you can’t learn. So it’s usually only the brothers
                        who discern what I’m doing up here, and the stereotypes I overturn. I don’t know when white folks decided to spurn our own poetic history, a history
                        we earned. But somehow, we decided to disaffirm the power of the spoken word, a power that is not so easily returned.
                     </div>
                     <div style={poetryDivStyle}>
                        Now don’t get me wrong, I’m not tryin to be black y’all. Cuz I definitely can’t dance and I sure as hell can’t ball. But when I’m on this mic it’s
                        my time to stand tall and these aren’t white words or black words, they’re just words that I scrawl on old bits of paper when I’m alone in the hall.
                        I don’t know why white folks don’t have the gall. We have the emotion, but we don’t feel the call. I’m always amazed, I’m always enthralled, by the
                        brothers who get up here and give it their all. But I guess my folks are just too appalled. We’re content to stand there with our backs on the wall.
                     </div>
                     <div style={poetryDivStyle}>
                        So where are all the white guys spittin? I don’t know, but I’m gettin tired of predictin. Maybe we just don’t appreciate diction, or maybe our words
                        are a source of friction. But that’s ok, cuz you can’t do this shit without conviction – a desire to reach others that borders on addiction. And
                        luckily, I’m just fine in a room full of pigment. And if my white friends won’t join me, then fuck’em. I’m indignant. Cuz the words I spit here
                        spread like cancer – it’s malignant. And if white folks aren’t feelin me they’re just straight up ig'nant.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'PreacherMan'}
                  onChange={expandAndCollapseAccordions('PreacherMan')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'PreacherMan-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'PreacherMan-header'}
                  >
                     <Typography>Preacher Man</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        Preacher Man stands on the street corner and yells obscene bits of scripture.
                     </div>
                     <div style={poetryDivStyle}>
                        <div style={poetryIndentedDivStyle}>
                           At everybody.<br/>
                           At anybody.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        He tells me his god is stricter.<br/>
                        He tells me that I'm going to hell,
                        <div style={poetryIndentedDivStyle}>
                           as if he is the predictor.
                        </div>
                        Then he yells at me to get the fuck off his sidewalk.<br/>
                        And just when I’m beginning to grasp his message
                        <div style={poetryIndentedDivStyle}>
                           he engages in some odd type of side talk.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        <div style={poetryIndentedDivStyle}>
                           With somebody.<br/>
                           With nobody.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        His hands gesture wildly but his feet are anchors,
                        <div style={poetryIndentedDivStyle}>
                           counterbalanced against his feverish rancor,<br/>
                           holding him to this particular slab of concrete,<br/>
                           like a sandbar holds a supertanker.
                        </div>
                        And as Moses parted the Red Sea,
                        <div style={poetryIndentedDivStyle}>
                           he divides the stream of pedestrians effortlessly.
                        </div>
                        Secretaries and bankers squeeze by awkwardly,
                        <div style={poetryIndentedDivStyle}>
                           trying to avoid the creepy power of his empty glare.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        But as I stand there it occurs to me that he's...
                        <div style={poetryIndentedDivStyle}>
                           somebody's son.
                        </div>
                        In some young mother’s eyes, he was once her chosen one.<br/>
                        And there had to be others who saw so much promise in him –
                        <div style={poetryIndentedDivStyle}>
                           friends and family who could not foresee the dramas in him.
                        </div>
                        There were those out there who’d have written sagas for him.<br/>
                        Somebody out there was his playmate.<br/>
                        And somebody out there was his first date -
                        <div style={poetryIndentedDivStyle}>
                           somebody who adored his every trait.
                        </div>
                        He wasn’t always someone you had to tolerate.<br/>
                        There was a time when his spirit was still straight,
                        <div style={poetryIndentedDivStyle}>
                           when he had thoughtful words and insights to donate.
                        </div>
                        But now he rails against the shapeless demons of his mind.
                     </div>
                     <div style={poetryDivStyle}>
                        Globules of acrid spit
                        <div style={poetryIndentedDivStyle}>
                           fly from his lips<br/>
                           as angry damnation fluidly transmits<br/>
                           from one passerby to another.
                        </div>
                        While others try to ignore him, I am utterly transfixed
                        <div style={poetryIndentedDivStyle}>
                           by the psychotic nature of his spasms and ticks.
                        </div>
                        His words are not his own.<br/>
                        His motions are overblown.<br/>
                        The world he inhabits is utterly unknown –
                        <div style={poetryIndentedDivStyle}>
                           a world in which he’s utterly alone.
                        </div>
                        Maybe his god comforts him.<br/>
                        But that god that was long ago disowned
                        <div style={poetryIndentedDivStyle}>
                           by the lawyers and executives who call this skyline their home –<br/>
                           yuppies who absorb his baritone words like water is absorbed by a stone.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        And as I stand there it occurs to me that he was probably...
                        <div style={poetryIndentedDivStyle}>
                           someone's husband.
                        </div>
                        He must have loved, and lost, and loved again.<br/>
                        Somebody saw him as a better man.<br/>
                        So much more than just a beggar man.<br/>
                        Somewhere there are scrapbooks
                        <div style={poetryIndentedDivStyle}>
                           filled with his old snapshots,<br/>
                           kept by a woman who never forgot,<br/>
                           a woman who saw him as more than an afterthought.
                        </div>
                        He may not have been an astronaut
                        <div style={poetryIndentedDivStyle}>
                           and he may never have bought a yacht,<br/>
                           but he was part of someone else’s plot<br/>
                           before his sanity fled and his mind was shot.
                        </div>
                        And that woman still cherishes his pictures
                        <div style={poetryIndentedDivStyle}>
                           and she remembers him when he wasn't screaming scripture,<br/>
                           long before he became a homeless fixture<br/>
                           in this barren urban landscape.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        The oppressive summer heat bakes his leathery skin -
                        <div style={poetryIndentedDivStyle}>
                           or at least the small portion that can be seen from within<br/>
                           his flannel shirt,<br/>
                           and his wool sweater,<br/>
                           and his raggedy winter coat –<br/>
                           clothes hanging so loose as to highlight that he is painfully thin.
                        </div>
                        Much to the pedestrians’ chagrin,
                        <div style={poetryIndentedDivStyle}>
                           every wave of his bundled arm emits the aroma<br/>
                           of sweat and urine and gin,<br/>
                           wafting through the thick August air<br/>
                           like the smell of a prostitute covered in sin.
                        </div>
                        Wal-Mart bags,
                        <div style={poetryIndentedDivStyle}>
                           tied strategically his arms and legs,<br/>
                           apparently hold his holiness within.
                        </div>
                        And every mark on his weathered face
                        <div style={poetryIndentedDivStyle}>
                           is a road map of where he’s been.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        But as I stand there it occurs to me that he's probably...
                        <div style={poetryIndentedDivStyle}>
                           someone’s father.
                        </div>
                        And if this was my dad, would I try to engage?<br/>
                        Would I even bother
                        <div style={poetryIndentedDivStyle}>
                           to remember a time when he gave me love and affection?
                        </div>
                        Or would I try to forget him now as an embarrassing imperfection?<br/>
                        Somewhere there are people who think of this man
                        <div style={poetryIndentedDivStyle}>
                           during moments of quiet introspection.
                        </div>
                        When they look back at their childhood now
                        <div style={poetryIndentedDivStyle}>
                           there is an odd intersection<br/>
                           between the Preacher Man we see today<br/>
                           and the man they once looked to for direction.
                        </div>
                        Do they admit what he’s become,
                        <div style={poetryIndentedDivStyle}>
                           or do they simply claim that their father’s dead?
                        </div>
                        It’s far too easy to leave family secrets unsaid,
                        <div style={poetryIndentedDivStyle}>
                           and it must be painful to see him as your figurehead.
                        </div>
                        So do they even know if he has a bed?<br/>
                        Do they wonder,
                        <div style={poetryIndentedDivStyle}>
                           late at night,<br/>
                           where he lays his head?
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        As I walk away his voice trails off in the relentless summer heat,
                        <div style={poetryIndentedDivStyle}>
                           and I know that as I sleep safe in my bed<br/>
                           he’ll be sleeping on the street.
                        </div>
                        His is an arduous life stuck on endless repeat.<br/>
                        Every day he battles that which he cannot defeat -
                        <div style={poetryIndentedDivStyle}>
                           the neuroses in his mind<br/>
                           refusing to take a backseat.
                        </div>
                        Because our demons are not his demons,
                        <div style={poetryIndentedDivStyle}>
                           and he does not easily find peace.
                        </div>
                        You might think that you can help him,
                        <div style={poetryIndentedDivStyle}>
                           but his anxiety will only increase.
                        </div>
                        So rather than fix him,
                        <div style={poetryIndentedDivStyle}>
                           I’ve come to accept his repetitive masterpiece.
                        </div>
                        Because the Preacher Man has a purpose and a mission that,
                        <div style={poetryIndentedDivStyle}>
                           while flawed,<br/>
                           will never cease.
                        </div>
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'Residue'}
                  onChange={expandAndCollapseAccordions('Residue')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'Residue-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'Residue-header'}
                  >
                     <Typography>Residue</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        I can still taste her on my lips. Her acrid spice infects my meals and poisons every breath that invades my lungs. She is the salt on my ice cream.
                        She is the mayonnaise in my cocktail. She is the chili powder on my Danish. Her residue will not be erased and her path of destruction is still easily
                        traced. And no amount of mouthwash will ever replace the bitterness that I still savor.
                     </div>
                     <div style={poetryDivStyle}>
                        I can still smell her on my clothes. Her putrid odor permeates every garment in my closet and every square inch of upholstery on my furniture. She is
                        the shit in my flowerbox. She is the decaying rat between my walls. She is the February milk in my June refrigerator. Her stench cannot be perfumed
                        because her memories are constantly exhumed, and regardless of how much others presume I’m over her, she still haunts me.
                     </div>
                     <div style={poetryDivStyle}>
                        I can still see her in my mirror. Her ominous visage paints my sight, clouding my mind with dulcet tones of black, and grey, and crimson. She is the
                        crow’s foot on my rested eye. She is the rash on my tanned skin. She is the sadness in my casual smile. Try though I may, there is no mask that can
                        disguise her in my recent past. And no matter how often, alone, I’ve asked, for forgiveness, there is no reprieve.
                     </div>
                     <div style={poetryDivStyle}>
                        I gave her me, and she chose to flee, but every artifact holds a memory. While I’ve learned to ignore when she walked out that door, my senses are
                        still sharp and they constantly implore me to rehash the relationship I’ve come to abhor – a love that’s long dead but lives on evermore.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'SheSaid'}
                  onChange={expandAndCollapseAccordions('SheSaid')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'SheSaid-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'SheSaid-header'}
                  >
                     <Typography>She Said</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        She said… She said that I was distant.
                     </div>
                     <div style={poetryDivStyle}>
                        But she never understood that the thoughts plaguing my mind
                        <div style={poetryIndentedDivStyle}>
                           were not the kind<br/>
                           to be shared amongst friends.
                        </div>
                        Or lovers.<br/>
                        Or enemies.<br/>
                        And the more she tried to reach me,
                        <div style={poetryIndentedDivStyle}>
                           the more she tried to teach me,<br/>
                           the more she tried to impeach me<br/>
                           for my dalliances,
                        </div>
                        the more I tried to shield her from the ugliness of my obsessions.
                     </div>
                     <div style={poetryDivStyle}>
                        She said… She said that I was immature.
                     </div>
                     <div style={poetryDivStyle}>
                        But she never even noticed that I saved her from her job,
                        <div style={poetryIndentedDivStyle}>
                           from her friends who were leeches and slobs,
                           from her family mob,
                           and most of all, from herself.
                        </div>
                        And the more she tried to age me,
                        <div style={poetryIndentedDivStyle}>
                           the more she tried to change me,<br/>
                           the more she tried to engage me -
                        </div>
                        the more I had to withdraw to maintain her delusion of self-sufficiency.
                     </div>
                     <div style={poetryDivStyle}>
                        She said… She said that I was moody.
                     </div>
                     <div style={poetryDivStyle}>
                        She had no fucking idea.<br/>
                        She was oblivious to the radical notions floating through my mind
                        <div style={poetryIndentedDivStyle}>
                           as she continued to find<br/>
                           ingenious ways to grind,<br/>
                           and bind,<br/>
                           and confine<br/>
                           every dream within my soul.
                        </div>
                        And the more she tried to invoke my wrath, the more I found that silence was my only source of control.
                     </div>
                     <div style={poetryDivStyle}>
                        She said… She said that I was cruel.
                     </div>
                     <div style={poetryDivStyle}>
                        But she would not admit,
                        <div style={poetryIndentedDivStyle}>
                           that the worst crime I could possibly commit<br/>
                           would be to allow us to continue in the zombified state that we both inhabited,<br/>
                           too mindless to split.
                        </div>
                        And as the circular ritual of our lives became ever more ingrained in our soulless bodies,<br/>
                        I had no choice but to use whatever means necessary to break that cycle.
                     </div>
                     <div style={poetryDivStyle}>
                        She said… She said that I was apathetic.
                     </div>
                     <div style={poetryDivStyle}>
                        Now I’m not big on ten dollar words y'all,<br/>
                        but if “apathetic” means
                        <div style={poetryIndentedDivStyle}>
                           that I wasn't sympathetic<br/>
                           to the notion that our relationship was copacetic,<br/>
                           then yeah,<br/>
                           I guess I was apathetic.
                        </div>
                        And as she punched and prodded, kicked and screamed –<br/>
                        <div style={poetryIndentedDivStyle}>
                           anything to get a reaction,<br/>
                           she found that my responses never offered her traction.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        She said… She said that I was arrogant.
                     </div>
                     <div style={poetryDivStyle}>
                        Hell yeah, I was arrogant.<br/>
                        But my arrogance only protected me from the most vulnerable,
                        <div style={poetryIndentedDivStyle}>
                           the most palpable,<br/>
                           the most corruptible
                           <div style={poetryIndentedDivStyle}>
                              of my weaknesses -
                           </div>
                           and the most combustible
                           <div style={poetryIndentedDivStyle}>
                              of her backlashes.
                           </div>
                        </div>
                        And the more she tried to humble me,<br/>
                        the more she became an affront to me,<br/>
                        and a symbol of everything that I used to be.<br/>
                        And I knew,
                        <div style={poetryIndentedDivStyle}>
                           then and there,<br/>
                           that we were history.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        She said… She said that I was not the man she fell in love with.
                     </div>
                     <div style={poetryDivStyle}>
                        But she knew that man was a fiction -
                        <div style={poetryIndentedDivStyle}>
                           replaced by a man with too many addictions,<br/>
                           suffering from peculiar afflictions,<br/>
                           and too committed to his own convictions.
                        </div>
                        And when she left me in the ring
                        <div style={poetryIndentedDivStyle}>
                           against the Superman of her dreams<br/>
                           she found that the victor was someone who made her squeam-
                           <div style={poetryIndentedDivStyle}>
                              ish.
                           </div>
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        She said… I can’t remember everything that she said.
                     </div>
                     <div style={poetryDivStyle}>
                        I don’t really want to remember anything that she said.
                     </div>
                     <div style={poetryDivStyle}>
                        All I know is that... she said.
                     </div>
                     <div style={poetryDivStyle}>
                        And she was right.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'SomewhereInLasVegas'}
                  onChange={expandAndCollapseAccordions('SomewhereInLasVegas')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'SomewhereInLasVegas-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'SomewhereInLasVegas-header'}
                  >
                     <Typography>Somewhere In Las Vegas</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        It’s 11 p.m. I’m drunk. I’m high. And I’m in Las Vegas.
                     </div>
                     <div style={poetryDivStyle}>
                        I’m sitting at a blackjack table, restlessly, and the 60-year-old transvestite sitting next to me, can’t keep his purse or his hands off my knee. I’d
                        get up and leave, but I’m on a crazy winning streak, and I can’t help but think, that somehow my luck is tied to this freak. As the count decreases I
                        double down, and I begin to drown, in a sea of chips as the pit bosses frown. I order the table another round, and these losers find themselves
                        hopelessly bound, to this game they despise – a game that confounds. And as their kids’ college funds are whittled away, every chip that they lose
                        seems to ricochet my way. The more that I drink, the more recklessly I play. But my luck doesn’t turn - it only multiplies, and throws the casino into
                        disarray. After an incredible run, of 21s, the floor manager taps me on the shoulder and says, “Son, your time in our casino is definitely done.” But
                        I just laugh indignantly, as I get up and walk out triumphantly, with five thousand dollars of crisp new money - and the tranny gazes after me wistfully.
                     </div>
                     <div style={poetryDivStyle}>
                        It’s 1 a.m. I’m drunk. I’m high. And I’m in Las Vegas.
                     </div>
                     <div style={poetryDivStyle}>
                        I’m standing in a nightclub. And I’m not sure if it’s a strip club, or a gay club, but I know it’s not the right club. All I can confirm is that it’s
                        a grimy hub, full of strangers searching for any excuse to pump and grind and rub. I’m motionless, at the center of the dance floor, as the sea of
                        bodies throbs in time and implores the DJ for more, and more, and more. They are oblivious to my presence, beating down on me as the ocean beats upon
                        the shore. But amazingly, a cocktail waitress cuts and slices her way to me, through the undulating crowd, paying no attention to elbows that bruise
                        her grievously. Having reached my island of rigidity, she stares through me, vacuously, and asks if I’d like anything to drink. I order a shot of
                        Patron, a white Russian, a whiskey sour, a vodka martini, and three whole mangos. Without hesitation she heads back to the bar. I gaze at the light
                        show, as an astronomer gazes at the stars, savoring hallucinations, grotesque and bizarre, that are spawned by the sting of cheap cigars, and the lasers
                        that cause corneal scars.
                     </div>
                     <div style={poetryDivStyle}>
                        It’s 2 a.m. I’m drunk. I’m high. And I’m in Las Vegas.
                     </div>
                     <div style={poetryDivStyle}>
                        After 20 minutes of staring at the dashboard, I finally pass the test. I remember how to start my car and I begin the quest for breakfast. Casino
                        lights streak across my windshield leaving me hypnotized, possessed. And while the speedometer races my head nods, and I know that I need rest, but I
                        still believe that I can somehow find a cold beer and welcoming breasts. Maybe one night this will end in arrest, but for now it seems I’m constantly
                        blessed. So rather than curling up in my bed, I’ll find somewhere else to be an awkward guest. The asshole sitting next to me at the stop light, stares
                        into my car like he’s never seen the sight, of a white guy blasting N.W.A. from his Volkswagen Rabbit in the dead of the night. I’m about to flip him
                        off when he throws on his flashers, and pulls over the idiot who just ran the light in front of us like a party crasher, and as I cruise down the street
                        my casual escape only makes me bolder. It makes me brasher.
                     </div>
                     <div style={poetryDivStyle}>
                        It’s 3 a.m. I’m drunk. I’m high. And I’m in Las Vegas.
                     </div>
                     <div style={poetryDivStyle}>
                        There’s an amazing crew at Sam Woo’s Barbecue, so I decide that this is where I’m gonna chew. As I walk in, 50 silent Asians stare at me like I haven’t
                        got a clue. The hostess yells some gibberish at me and I don’t know what to do, but when she realizes I’m not going away, she gives in and escorts me
                        through, giving me the premium table right next to the kitchen doors and the shitter. When my food arrives I have to wonder if those Chinese chefs are
                        spitters. They give me rice, pork on the bone, and chopsticks – cuz apparently forks and knives are only for round-eyed quitters. I’ve never used
                        chopsticks in my life, but I won’t let them know I’m bitter. I spend the next two agonizing hours struggling mightily with those sticks. Every bite that
                        falls back to the bowl, makes me more like a raving lunatic. I fruitlessly stab and stir and toss, searching for the magic trick, the key that somehow
                        gets barbecue into my belly before I get sick. Finally, I realize that I’m too hungry to be slick, and I’ll sell my soul – hell, I’ll sell my mom - if I
                        can just find a way to eat this quick. So I hold the bowl to my mouth and scoop the food in like a beggar. And I devour Sam Woo’s Barbecue like a crazy,
                        wild-eyed, wrecker. And when I leave that place with sauce plastered on my face, the Asians gawk at me like a leper.
                     </div>
                     <div style={poetryDivStyle}>
                        It’s 5 a.m. I’m drunk. I’m high. And I’m in Las Vegas.
                     </div>
                     <div style={poetryDivStyle}>
                        I’ll be reporting for duty in two hours, but there’s no time left for alarm clocks and showers. Later I’ll be scolded by military powers, but for now
                        I’m still searching for candy to devour. The couch I sit on is not my own. The home I’m in looks like a war zone. The people in this house are all
                        unknown, and they all commit acts that cannot be condoned. There are three gay guys fucking in the back bedroom. There are two lesbians making out in
                        the front room – with two other guys hovering so close, they can identify the girls’ perfumes. The stereo spits, a spastic mix, of gangsta rap, country
                        music, and show tunes. The girl nestled next to me gives me no legroom, and she stares at me with an awkward mixture of lust and impending doom. I can’t
                        tell from her expression whether she wants to fuck, or if there is something horrible stuck, to my face, something she wishes she could pluck. Her touch
                        is warm and inviting but I’m disturbed, I’m thunderstruck, by the fact that I can’t judge her beauty. My mind has run amok. My brain can process all the
                        details of her face. I can identify her hair color, her smile, her weight, her race. But somehow the categories of ugly and gorgeous have both become
                        interlaced. She strokes the bulge in my pants and tries to come in for a kiss, but my fleeting attention has already become completely and utterly
                        focused, on the center of the living room and a 50-year-old cocktail waitress. She dances awkwardly and alone, but doesn’t realize anything’s amiss. She
                        waves her arms around like a little girl who needs to take a piss. And when she closes her eyes, I can visualize, as she starts to reminisce, about a
                        time when she wasn’t an embarrassment, when she wasn’t a meth addict. No one else seems to notice her, and I wonder if she even exists. She motions to
                        me to join her and I shake my head, but she insists. And at this point in the morning I’m not really sure exactly what I can resist. For that matter,
                        I’m not sure if the tongue in my ear belongs to the girl on my side, and I would escape this place if I could only remember just how to get outside.
                        But the confusion that I’m dealing with now is the confusion that I supplied. So I close my eyes and wait patiently for the daylight to be my guide.
                     </div>
                     <div style={poetryDivStyle}>
                        It’s 7 a.m. I’m <i>still</i> drunk. I’m <i>still</i> high. And I’m <i>somewhere</i> in Las Vegas.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'Still'}
                  onChange={expandAndCollapseAccordions('Still')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'Still-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'Still-header'}
                  >
                     <Typography>Still</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        What does it take to make a good man be <i>still</i>?<br/>
                        You could calculate the exact force that’s needed to shatter a spine,<br/>
                        But is there an equation,
                        <div style={poetryIndentedDivStyle}>
                           to determine the pressure,<br/>
                           required to subdue his will?
                        </div>
                        And is there any way to measure,
                        <div style={poetryIndentedDivStyle}>
                           the depth of his mind,<br/>
                           or the breadth of his skill?
                        </div>
                        If you embezzle all of his treasure,
                        <div style={poetryIndentedDivStyle}>
                           will it affect the meat-cage in which he’s confined?
                        </div>
                        Or will he still endeavor,
                        <div style={poetryIndentedDivStyle}>
                           to bring others pleasure,<br/>
                           with a resolve that no tyrant can kill?
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        So what does it take to make a good man be <i>still</i>?<br/>
                        Can you simply beat him into <b>compliance</b>,<br/>
                        Or will his scars only serve to protect him?<br/>
                        Can you punish his every act of <b>defiance</b>,<br/>
                        Or will your discipline fail to affect him?<br/>
                        Can you gaslight him til he questions the <b>science</b>,<br/>
                        Or will he discard the lies to which you subject him?<br/>
                        Can you undermine those within his <b>alliance</b>,<br/>
                        Or will his friends and family refuse to reject him?<br/>
                        Can you convince him that you deserve his <b>reliance</b>,<br/>
                        Or will he recognize you as the one shipwrecked him?<br/>
                        Can you drag him to the curb like a broken down <b>appliance</b>,<br/>
                        Or will the breath of his own spirit inevitably resurrect him?
                     </div>
                     <div style={poetryDivStyle}>
                        Our enemies want nothing more from us than to simply be <i>subdued</i>,<br/>
                        Cuz there’s no need to fight,
                        <div style={poetryIndentedDivStyle}>
                           a broken down knight,<br/>
                           who’s sulking in a defeated mood.
                        </div>
                        So the simplest path to <b>oppression</b>,
                        <div style={poetryIndentedDivStyle}>
                           is to silence the vital act of <b>expression</b>,<br/>
                           with which we’ve all been imbued.
                        </div>
                        Our <b>depression</b>,
                        <div style={poetryIndentedDivStyle}>
                           is the first step in our <b>dispossession</b>,<br/>
                           if we allow our grievances to become our food.
                        </div>
                        They got no need for <b>aggression</b>,
                        <div style={poetryIndentedDivStyle}>
                           once we commit the internal <b>transgression</b>,<br/>
                           of convincing ourselves that we’re already screwed.
                        </div>
                        That’s why there’s no greater act,
                        <div style={poetryIndentedDivStyle}>
                           of cruel and violent <b>insurrection</b>,<br/>
                           than to sabotage a good man’s attitude.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        So what does it take to make a good man be <i>still</i>?
                     </div>
                     <div style={poetryDivStyle}>
                        The simple truth is that a good man is <i>always</i> still.<br/>
                        Because this good man is still... <i>here</i>.
                     </div>
                     <div style={poetryDivStyle}>
                        My legs can be paralyzed by fate,<br/>
                        But I will not be paralyzed by fear.<br/>
                        I know all my triumphs would be incomplete,
                        <div style={poetryIndentedDivStyle}>
                           if I were to simply disappear.
                        </div>
                        So I <i>still</i> keep others upbeat,
                        <div style={poetryIndentedDivStyle}>
                           while I’m facing a new frontier.
                        </div>
                        And I <i>still</i> refuse to accept defeat,
                        <div style={poetryIndentedDivStyle}>
                           while God’s voice is <i>still</i> in my ear.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        I’m <i>still</i> grindin.<br/>
                        I’m <i>still</i> peace-of-mindin.<br/>
                        I <i>still</i> got no intention of compromisin.
                     </div>
                     <div style={poetryDivStyle}>
                        And yeah, I’ve got trials.<br/>
                        Like we all got trials.
                     </div>
                     <div style={poetryDivStyle}>
                        I’ve got people around me who are in denial.<br/>
                        But I refuse to be filled with anger and bile.
                     </div>
                     <div style={poetryDivStyle}>
                        I <i>still</i> launch each day with an eager smile.<br/>
                        I <i>still</i> grace the paparazzi with my own personal style.<br/>
                        I <i>still</i> know that my life is vital and worthwhile<br/>
                        Because… more than anything
                     </div>
                     <div style={poetryDivStyle}>
                        I’m. <i>Still.</i> Here.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'Surrender'}
                  onChange={expandAndCollapseAccordions('Surrender')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'Surrender-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'Surrender-header'}
                  >
                     <Typography>Surrender</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        If I tell you I love you will you just go away? We’ve been here all night and I have nothing to say. The light of day hastens night’s decay and the
                        longer we talk, the longer we stray from the original pain that led us astray. This should not be a contest to see who holds sway, to decide who has
                        lost and who must obey. I tried to give in - tried to meet you halfway. But your stubbornness will not be allayed. So if I tell you I love you will you
                        just go away?
                     </div>
                     <div style={poetryDivStyle}>
                        If I tell you I need you will you leave me alone? With every hour that goes by you blow up my phone. The sins for which I’ve tried to atone are held
                        against me in a penalty zone. Every minor infraction is now overblown and you preach down to me from your almighty throne. Neither of us will ever
                        condone ours sins against each other – some forgotten, some unknown. The stench of this situation is immune to cologne. So if I tell you I need you
                        will you leave me alone?
                     </div>
                     <div style={poetryDivStyle}>
                        If I tell you I want you will you give me some peace? Your millstone of nagging is unlikely to cease and every bit of evidence is just another chess
                        piece for you to maneuver until I’m deceased. Words don’t dissipate – they only increase – and every point of contention extends the lease of misery
                        in our lives, growing smug and obese. There are no courts, no higher power, no treaties, no police. So if I tell you I want you will you give me some
                        peace?
                     </div>
                     <div style={poetryDivStyle}>
                        If I tell you you’re right can we call it a night? It’s far too late for me to rewrite the history of “us” in a way that’s polite. The more you sit
                        tight, the more rage it incites, and the more I see there’s no logical choice between wrong or right, between fight or flight. The drama of our lives
                        has become a ritual, a rite, and the longer we stay here the more likely we might do something we both regret under glare of daylight. So if I tell you
                        you’re right can we call it a night?
                     </div>
                     <div style={poetryDivStyle}>
                        If I tell you I’m sorry will you shut the fuck up? The friction of anger has worn a deep rut and each of your retorts is a kick in my nuts. I’m tired
                        of sentences that start with “actually” and “but” and the more I try to see your side the more I’m undercut by your endless stream of witty rebuttals.
                        If you want me to grovel, if you’re dying to strut, I’ll pour self-righteousness into your cup. So if I tell you I’m sorry <i>will you shut the fuck
                        up</i>?
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'Thankful'}
                  onChange={expandAndCollapseAccordions('Thankful')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'Thankful-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'Thankful-header'}
                  >
                     <Typography>Thankful</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        I’m thankful for new beginnings.<br/>
                        I’m thankful no matter how often I repent,
                        <div style={poetryIndentedDivStyle}>
                           there are always new chances for sinnings.
                        </div>
                        I’m thankful for wanton debauchery.<br/>
                        I’m thankful that there is more to life
                        <div style={poetryIndentedDivStyle}>
                           than what my Sunday school teachers taught to me.
                        </div>
                        I’m thankful for every friend I’ve let down.<br/>
                        For every transient lover I’ve found.<br/>
                        Even those who were constantly surrounded
                        <div style={poetryIndentedDivStyle}>
                           with drama and insecurity.
                        </div>
                     </div>
                     <div style={{
                        ...poetryDivStyle,
                        marginBottom: 100,
                     }}>
                        I’m thankful for awkward silences…
                     </div>
                     <div style={poetryDivStyle}>
                        For fierce conversations and righteous defiances.<br/>
                        I’m thankful for flimsy religions
                        <div style={poetryIndentedDivStyle}>
                           that melt down in the heat of the sciences.
                        </div>
                        I’m thankful that my time here has a limit.<br/>
                        And that my mark on this world is nothing more than a divot.<br/>
                        I’m thankful for those who maintain that perspective.<br/>
                        For those who struggle to rise above the invective.<br/>
                        For those who realize that their worldview’s subjective.
                     </div>
                     <div style={poetryDivStyle}>
                        I’m thankful for those I’ve laid low.<br/>
                        For those who silently absorbed my blows.<br/>
                        For those whose sacrifices I’ll never know.<br/>
                        And for those who have the balls to go
                        <div style={poetryIndentedDivStyle}>
                           where I cannot go,<br/>
                           or will not go,<br/>
                           or dare not go.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        I’m thankful for the people who listen to my shit.<br/>
                        For those who support me
                        <div style={poetryIndentedDivStyle}>
                           though I rarely deserve it.
                        </div>
                        For friends who boost my self-esteem
                        <div style={poetryIndentedDivStyle}>
                           when I’ve done nothing to preserve it.
                        </div>
                        For strangers who endure my attacks.<br/>
                        I assault the peace,
                        <div style={poetryIndentedDivStyle}>
                           but they conserve it.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        But ultimately what I’m thankful for<br/>
                        Is the fact that there will undoubtedly be <i>more</i>.
                        <div style={poetryIndentedDivStyle}>
                           More relationships to regret<br/>
                           More truces to upset<br/>
                           More birthdays to forget<br/>
                           More pain, more tears, more sweat<br/>
                           More companions to share my silhouette<br/>
                           More angels to whom I owe more debts.
                        </div>
                        Because gratitude isn’t confined to the items locked in our past.<br/>
                        The promise of new adventures is a gift that can’t be surpassed.<br/>
                        No matter the dark memories I’ve amassed<br/>
                        I can’t allow my future to grow cloudy and overcast.
                     </div>
                     <div style={poetryDivStyle}>
                        I'm thankful.
                     </div>
                     <div style={poetryDivStyle}>
                        Thankful for tomorrow.
                        How many tomorrows?
                        <div style={poetryIndentedDivStyle}>
                           I haven’t asked.
                        </div>
                        But there’s still tomorrow.<br/>
                        And that tomorrow is better than anything I’ve already unmasked.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'TheIndictment'}
                  onChange={expandAndCollapseAccordions('TheIndictment')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'TheIndictment-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'TheIndictment-header'}
                  >
                     <Typography>The Indictment</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        I’m here to put you all on notice,<br/>
                        So you have no right to act surprised.<br/>
                        While you were under electoral hypnosis,<br/>
                        The enemy goose-stepped to a White House prize.<br/>
                        And now that “alternative facts” pass for news,<br/>
                        The revolution will not be televised.<br/>
                        Cuz the rebels were replaced by sit-com crews<br/>
                        And the media have all been anesthetized.
                     </div>
                     <div style={poetryDivStyle}>
                        You see, I’m here to hand out indictments.<br/>
                        And maybe you think you’re on the right side<br/>
                        So now you’re full of excitement.<br/>
                        But when it mattered most you were nullified.<br/>
                        Cuz on Election Day you were silent.<br/>
                        And simply by doing nothing at all<br/>
                        You paved the way for a tyrant.
                     </div>
                     <div style={poetryDivStyle}>
                        White women, I’m looking at you.<br/>
                        Would you vote for a man who grabs you in the pussy<br/>
                        If that man was a Mexican, or a black, or a Jew?<br/>
                        You can cling to the quaint views of your fathers,<br/>
                        And you can clutch your Bible against all that bothers,<br/>
                        But you voted for the very same evil that your forefathers overthrew.
                     </div>
                     <div style={poetryDivStyle}>
                        Black folks, I’m looking at you.<br/>
                        You came out in droves for Obama,<br/>
                        But you couldn’t be bothered to stop this coup.<br/>
                        And when he’s tired of badgering Muslims and gays,<br/>
                        When he’s got you all in the Sunken Place,<br/>
                        It’s only then that you’ll come to realize just how thoroughly you’re screwed.
                     </div>
                     <div style={poetryDivStyle}>
                        Middle class, I’m looking at all of you.<br/>
                        You trusted your future to a billionaire,<br/>
                        But he’s cashing campaign checks on accounts you overdrew.<br/>
                        And does he represent the Jesus to which you give prayer?<br/>
                        Or are you happy just being part of his reality show crew?
                     </div>
                     <div style={poetryDivStyle}>
                        White men – you knew I was coming for you.<br/>
                        With your dad bods and your Fox News hairdos.<br/>
                        You wouldn’t trust that man alone with your daughter<br/>
                        But you’ll vote for any white guy who’s rich.<br/>
                        And while you lined up at the polls like sheep to the slaughter<br/>
                        The Russians treated you like their own little bitch.
                     </div>
                     <div style={poetryDivStyle}>
                        That sound that you hear is a steady tick-tockin -<br/>
                        A timer counting down till it's your life they’re shockin.<br/>
                        You may think that you're immune,<br/>
                        But soon they’ll come knockin on your door.<br/>
                        Cuz a fascist’s only skill is to grow hate.<br/>
                        He sows dissention between you and your brothers,<br/>
                        And then he builds walls to separate.<br/>
                        And you may be content to sit by idly and wait,<br/>
                        But I’m handing out these indictments.<br/>
                        I’m holding all of us accountable<br/>
                        For each of the dictator’s incitements.<br/>
                        You can’t raise your hands in the air<br/>
                        And claim that you didn’t know what this fight meant.<br/>
                        And now that he’s seized the throne<br/>
                        Don’t come asking me where your rights went.<br/>
                        Cuz when he’s destroyed everything you hold dear<br/>
                        And he’s drained your account of its last cent,<br/>
                        You’ll remember this day when you look around<br/>
                        And realize that there’s nothing left, but this indictment.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'TheLoop'}
                  onChange={expandAndCollapseAccordions('TheLoop')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'TheLoop-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'TheLoop-header'}
                  >
                     <Typography>The Loop</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        You see, I got a problem,
                        <div style={poetryIndentedDivStyle}>
                           cuz someone on the internet is wrong.
                        </div>
                        And I know that I could set'em straight
                        <div style={poetryIndentedDivStyle}>
                           but first I gotta set down this bong.
                        </div>
                        It was around here somewhere.<br/>
                        Oh wait.
                        <div style={poetryIndentedDivStyle}>
                           That's right.<br/>
                           It's in my hand.
                        </div>
                        I should probably sit here for a minute before I try to stand.<br/>
                        But that song.<br/>
                        It's spinning round my head on a loop -
                        <div style={poetryIndentedDivStyle}>
                           a loop that's not too long.
                        </div>
                        But it's a loop that won't go away till it's gone.<br/>
                        You know the loop.<br/>
                        It goes:
                        <div style={poetryIndentedDivStyle}>
                           Shoop,<br/>
                           Shoop-be-doop,<br/>
                           Shoop-be-doop,<br/>
                           Shoop-be-doopie-doopie-doop.
                        </div>
                        I know I'm gettin a little loopy
                        <div style={poetryIndentedDivStyle}>
                           and I should probably just lay down
                        </div>
                        but I'm still thinking about that groupie<br/>
                        Cuz she's just one of the prettiest things I've found.<br/>
                        Tonight.<br/>
                        In the back of this shitty bar.<br/>
                        With the 2-4-1 specials on Crown.<br/>
                        And the cheap plastic toilet seats
                        <div style={poetryIndentedDivStyle}>
                           that are cracked and brown.
                        </div>
                        She's short a few teeth
                        <div style={poetryIndentedDivStyle}>
                           but you can only tell when she frowns.
                        </div>
                        And there goes that loop again.<br/>
                        But not really.<br/>
                        It's... not the same shoop again.<br/>
                        It's more like a "whoop-whoop" again.<br/>
                        And that's the sound of the police.<br/>
                        Wait.
                        <div style={poetryIndentedDivStyle}>
                           No.<br/>
                           That's not right.
                        </div>
                        That's the sound of Charice.<br/>
                        That's her name.
                        <div style={poetryIndentedDivStyle}>
                           Right?
                        </div>
                        I coulda swore it was Charice.
                        <div style={poetryIndentedDivStyle}>
                           Or was it Latrice?<br/>
                           Jesus. It could be fucking Maurice for all I know.
                        </div>
                        And since when did this place start playing hip-hop?<br/>
                        Or is this not the place I thought?<br/>
                        I hope so.
                        <div style={poetryIndentedDivStyle}>
                           They got my card on file.
                        </div>
                        Well, to be more exact,<br/>
                        They got someone’s card
                        <div style={poetryIndentedDivStyle}>
                           that they could reconcile.
                        </div>
                        Or is that at the place
                        <div style={poetryIndentedDivStyle}>
                           down the road about a mile?
                        </div>
                        I’m sure I’ve been here before<br/>
                        But it’s kinda peculiar for a joint
                        <div style={poetryIndentedDivStyle}>
                           that I supposedly hit up a lot.
                        </div>
                        And how did that internet asshole find me at this spot?<br/>
                        I should stop using this phone.<br/>
                        It's hot.<br/>
                        Was it stupid of me to "check in" here?<br/>
                        And was I on GPS the whole while?<br/>
                        The last thing I need
                        <div style={poetryIndentedDivStyle}>
                           is another agent following me.
                        </div>
                        Of course, Maurice can follow me,<br/>
                        But he's gotta bring his own weed.
                        <div style={poetryIndentedDivStyle}>
                           Or speed.<br/>
                           Or whatever it is they sell in the streets these days<br/>
                           to feed Republican greed.
                        </div>
                        I should probably leave
                        <div style={poetryIndentedDivStyle}>
                           but the bartender’s bitching about my tab
                        </div>
                        And I believe<br/>
                        that I could probably weave
                        <div style={poetryIndentedDivStyle}>
                           my way out the back door.
                        </div>
                        But there’s a crack whore
                        <div style={poetryIndentedDivStyle}>
                           blocking my way to the cab.
                        </div>
                        What the hell did she give me that smack for?<br/>
                        All I did was ask about that scab.<br/>
                        I could ask her to explain,
                        <div style={poetryIndentedDivStyle}>
                           but that’d just make her attack more.
                        </div>
                        And maybe it’s best
                        <div style={poetryIndentedDivStyle}>
                           if I just sidestep this ho<br/>
                           like a fiddler crab.
                        </div>
                        But sidestepping only makes my back sore.<br/>
                        And I may not be stepping anywhere
                        <div style={poetryIndentedDivStyle}>
                           if I don’t find some munchies to grab.
                        </div>
                        But I don’t think I can find my way to the snack store.<br/>
                        Maybe that guy will point me in the right direction.<br/>
                        But the closer I get,
                        <div style={poetryIndentedDivStyle}>
                           the more he looks like an agent.
                        </div>
                        Another nameless clone in a white coat
                        <div style={poetryIndentedDivStyle}>
                           trying to give me another injection<br/>
                           while I’m laying face-down on the pavement.
                        </div>
                        But as the shadows change their inflection,<br/>
                        I don't know –
                        <div style={poetryIndentedDivStyle}>
                           maybe he’s just another vagrant?
                        </div>
                        Should I just walk past him?<br/>
                        He doesn’t really seem to be paying attention,
                        <div style={poetryIndentedDivStyle}>
                           and the chase appears to have gassed him.
                        </div>
                        But it does nothing to relieve my apprehension.<br/>
                        I’m sure he’s calling for backup,<br/>
                        But my therapist swears it’s just part of my inner tension.<br/>
                        It’s the karmic debt that I’ve racked up,<br/>
                        A sea of conflicts that are all of my own invention.<br/>
                        But the store clerk doesn’t <i>seem</i> to be in my mind.<br/>
                        He’s yelling something in Hindi
                        <div style={poetryIndentedDivStyle}>
                           that's beyond my comprehension.
                        </div>
                        And he can stand here and scream til the sun rises<br/>
                        But it’s not my fault that my card was declined.<br/>
                        Our financial masters are always full of surprises.<br/>
                        And there’s no way to do what my shrink advises<br/>
                        When my meds are so hard to find.<br/>
                        Maybe he ain’t speaking in Hindi?<br/>
                        Is it possible he’s speaking <i>English</i>?<br/>
                        Why can’t I process what he verbalizes?<br/>
                        I should leave before the agents arrive-zez.<br/>
                        But this cardboard display would look great in my kitchen.<br/>
                        I asked him how much it costs,<br/>
                        But I don’t think he likes what I’m pitchin.<br/>
                        I can hear the lights.
                        <div style={poetryIndentedDivStyle}>
                           The relentless <i>buzzzzzzz</i> is on overdrive.
                        </div>
                        And the agents are on their way to deprive
                        <div style={poetryIndentedDivStyle}>
                           me of this beef stick for which I’ve been itchin.
                        </div>
                        And that loop -
                        <div style={poetryIndentedDivStyle}>
                           It’s callin me home.
                        </div>
                        The loop plays in my head
                        <div style={poetryIndentedDivStyle}>
                           like a drone<br/>
                           with drum kits and saxophones.
                        </div>
                        It’s a loop that’s heard by me alone.<br/>
                        And it’s tellin me to leave before the situation gets overblown<br/>
                        Cuz that internet asshole’s still wrong<br/>
                        And I’ll set him straight,
                        <div style={poetryIndentedDivStyle}>
                           as soon as I find my phone.
                        </div>
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'TheMoment'}
                  onChange={expandAndCollapseAccordions('TheMoment')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'TheMoment-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'TheMoment-header'}
                  >
                     <Typography>The Moment</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        There is a moment when you realize that every day before this day has been prelude. That you've been wandering through your days like an aimless drunk
                        filled with cheap liquor and Quaaludes. The pleasures that so satisfied you yesterday now leave you in a somber mood. And the so-called friends who
                        monopolize your time are revealed to you now as shallow and rude.
                     </div>
                     <div style={poetryDivStyle}>
                        This feels so familiar because you remember all the previous moments you ignored. Those times when you deferred to others – those were times that you
                        could have soared. There were so many adventures you could have explored. There were so many relationships you could have restored. So many chances for
                        reward – each one carelessly tossed overboard.
                     </div>
                     <div style={poetryDivStyle}>
                        But this moment is not a moment when you're condemned to regret your past. No! This is a moment when you embrace the wreckage as a sign of trials that
                        won't last. Every obstacle strewn behind you is proof of standards that you've surpassed. Every jerk you've been made to suffer is just an actor in an
                        epic cast.
                     </div>
                     <div style={poetryDivStyle}>
                        Every adversary who bested you. Every douchebag who tested you. Every filthy cop who arrested you. Every former lover who detested you. Every family
                        creep who incested you. Every shallow pig who undresseded you. Have uniquely prepared you for the challenges now for which your life has selected you.
                     </div>
                     <div style={poetryDivStyle}>
                        When you realize that the world's an arena and your whole life has been spent in training. To the apprentice who wrestled life's mysteries there is no
                        more need for explaining. Every trial through which you've suffered is tangible proof that your power is gaining. And your muscles bulge with every
                        burden against which you've been straining.
                     </div>
                     <div style={poetryDivStyle}>
                        But this moment must serve as a catalyst, because the moment itself cannot stay. Every minute that you hesitate drives the moment closer to yesterday.
                        The moment is a fleeting mistress and that mistress is slipping away. There is nothing you can say that will make it obey. No ransom that you pay that
                        will cease the decay. The test for you is not how long you can hold the moment at bay. The test for you is how many moments you create for others who
                        have strayed.
                     </div>
                     <div style={poetryDivStyle}>
                        The moment is a beautiful virus that can only infect if you give it away. You must look at the strangers around you as a sculptor gazes upon clay. Sure,
                        some will scoff and dismiss your vision with derision and dismay. You may wonder at times if the power in your bones is a delusion born of naiveté. But
                        there is only one absolute certainty – that this moment is passing away. This moment that loomed so clearly before you – is now blurry and faraway.
                        There is no excuse to delay. Do everything you can to multiply this moment before it falls into disarray.
                     </div>
                     <div style={poetryDivStyle}>
                        This moment is quickly going away…
                     </div>
                     <div style={poetryDivStyle}>
                        This moment is gone. It’s gone away.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'TheWord'}
                  onChange={expandAndCollapseAccordions('TheWord')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'TheWord-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'TheWord-header'}
                  >
                     <Typography>The Word</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        In the beginning, there was the word. And it was good. It was not a twitch or a sigh. It was not to sell or to buy. It was not deciphered by the whims
                        of an audience or of passersby. It was the word, pure and simple. And it was good.
                     </div>
                     <div style={poetryDivStyle}>
                        The word has taken many forms. We sing it in joy. We play it like a toy. We use it to build up, and then to annoy. We could inspire others, but instead
                        we destroy. Every plan, every ploy that we seek to enjoy – begins with the word.
                     </div>
                     <div style={poetryDivStyle}>
                        The word cannot be avoided or ignored. We defend but it cuts like a sword. Every time that we're quiet, every time that we're bored, the word dances
                        through the cluttered halls of our minds. It screams to us from public radio. It streams to us from podcast shows. Even when no one possibly knows a
                        goddamn thing that they're talking about, the word keeps spewing forth.
                     </div>
                     <div style={poetryDivStyle}>
                        The word can tell you which cereal to eat. It will tell you why her beat is better than his beat. It will give you the whitest of teeth and the tastiest
                        of treats. It will amaze you with worthless feats, broadcast to your brain on YouTube.
                     </div>
                     <div style={poetryDivStyle}>
                        The word cannot be owned or contained. The words you hated last year are the words you'll love today. They come to you in the usual way - muttered by
                        beautiful people when you can't hear what they say. They're plastered on billboards, when you're just trying to make your way. They scream to you every
                        night and day. And though they litter every visual space, you will not give them sway. But they will not be ignored.
                     </div>
                     <div style={poetryDivStyle}>
                        Contrary to popular belief, the revolution was televised. It was streamed across Netflix, and Hulu, and Google, and Yahoo so the pundits could start to
                        homogenize and generalize every original thought that it once contained. It was drilled into your brain until you were paralyzed. The flood of media
                        around you means that your every thought is minimized. The word rains down on us all, until you can no longer sympathize with the plight of your fellow
                        man.
                     </div>
                     <div style={poetryDivStyle}>
                        The word is still among us, but you've grown numb. Your words could affect change but you twiddle your thumbs. You try to speak out but your tongue has
                        grown numb. There was a time when you knew the power of words, a time before you succumbed. But no matter where you go, no matter what you become, in
                        the end there will still be the word.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'Therapy'}
                  onChange={expandAndCollapseAccordions('Therapy')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'Therapy-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'Therapy-header'}
                  >
                     <Typography>Therapy</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        My girl says that <i>this</i> is my therapy.<br/>
                        And you know? I think that she’s right.<br/>
                        Cuz I’m adrift in a world of disparity<br/>
                        And these words are all I have to ignite<br/>
                        A dream that I can somehow find clarity,<br/>
                        Without resorting to social media fights.
                     </div>
                     <div style={poetryDivStyle}>
                        I could pay a shrink a hundred an hour,<br/>
                        But that’s a hefty cost to explain that black lives never really mattered.<br/>
                        And a doctor’s office is just another kind of ivory tower<br/>
                        When the lives of people I know are shattered.<br/>
                        So I’m sorry if I’m taking the shine off that flower.<br/>
                        And I’m sorry if my words don’t make you feel flattered.<br/>
                        But I’m gonna cough up all the bile I’ve devoured<br/>
                        And when I’m done you can return to your
                        <div style={poetryIndentedDivStyle}>
                           prime-time,<br/>
                           politically-correct,<br/>
                           trigger-free,<br/>
                           happy-go-lucky banter.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        Cuz I don’t know of any better therapy<br/>
                        When guns are more plentiful than birth control.<br/>
                        And I got no recourse but to stand here and get free<br/>
                        When they’re building pipelines from here to the North Pole.<br/>
                        So if you care more about assault rifles than clean drinking water<br/>
                        Then maybe, just possibly, you should reassess your goals.
                     </div>
                     <div style={poetryDivStyle}>
                        What happened to the days when we exported wheat?<br/>
                        Now we only send troops to Iraq.<br/>
                        We prop up warlords while the president tweets,<br/>
                        Cuz nothing’s holier than the price of Blackwater stock.<br/>
                        And as it rises and fills those pockets on Wall Street,<br/>
                        We’ll be holding the bag in the next housing shock.
                     </div>
                     <div style={poetryDivStyle}>
                        So I’m gonna grab this mic and spit it<br/>
                        Cuz the next time a brother screams, “I can’t breathe”<br/>
                        I’ll have to look my friends in the eye and admit it.<br/>
                        And white folk will fashion new excuses to weave,<br/>
                        As they turn their heads and permit it.<br/>
                        And as families of victims gather to grieve<br/>
                        The courts will always acquit it.<br/>
                        And the Administration continues to lie and deceive<br/>
                        As long as they have mindless stooges like
                        <div style={poetryIndentedDivStyle}>
                           <div style={poetryIndentedDivStyle}>
                              Christie,<br/>
                              or Conway,<br/>
                              or Giuliani
                           </div>
                           to smile and transmit it.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        Maybe this is self-indulgent,
                        <div style={poetryIndentedDivStyle}>
                           but I gotta get some things off my chest.
                        </div>
                        How do you lose by three million votes<br/>
                        Then claim that your people are the ones who are oppressed?<br/>
                        It was your grandparents,
                        <div style={poetryIndentedDivStyle}>
                           and your wives,<br/>
                           that came over on those boats.
                        </div>
                        But you think that immigration is the problem to address?<br/>
                        And when the wall fails, will you start digging a moat?<br/>
                        Or will you just find a new minority to suppress?<br/>
                        What would happen if instead you decided to devote<br/>
                        All those billions to the poor folk that you so obviously detest?
                     </div>
                     <div style={poetryDivStyle}>
                        You see, this mic is the only place I know<br/>
                        Where truth doesn’t cower in the light of day.<br/>
                        And you can read your bible in the Lord’s loving glow<br/>
                        But Jesus never told you to send refugees away.<br/>
                        And there’s nothing in that book that will help you overthrow<br/>
                        The established scientific fact that global warming’s here to stay.<br/>
                        So excuse me while I get some of this therapy,<br/>
                        Cuz I ain't got a hundred an hour to pay.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'TwistedSavior'}
                  onChange={expandAndCollapseAccordions('TwistedSavior')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'TwistedSavior-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'TwistedSavior-header'}
                  >
                     <Typography>Twisted Savior</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        Why have you stolen my anger? Continual rage was a close friend, and my bitterness meant I didn’t have to pretend. But now I see myself as a stranger.
                        Somehow you replaced my love of danger. What have you done with my pain? How can only thoughts of you remain? Are you my savior or are you my strangler?
                     </div>
                     <div style={poetryDivStyle}>
                        There was a familiar time before you, when the ghost of my ex haunted me, when her various misdeeds taunted me, but those memories were a convenient
                        rendezvous. Now when I try to hate that shrew, I can only envision your face. I can only feel your warm embrace, but it’s part of me that you overthrew.
                     </div>
                     <div style={poetryDivStyle}>
                        My mind is clouded by your touch. The bitch who left me starts to recede. Slowly I forget her betrayal, her greed. The shit she pulled doesn’t amount
                        to much. The insults she flung aren’t remembered as such. I know you represent better days, but my mind still clings to a furious haze. I still find
                        myself using that crutch.
                     </div>
                     <div style={poetryDivStyle}>
                        Sometimes I wonder why you’re here. If you were my daughter I’d tell you to run. The battles I’m fighting cannot be won. When I warn you, you show no
                        fear. And when I break down, you persevere. I don’t know if you’re my lifeline, or someone who’s sent to undermine, my natural proclivity for anarchy
                        and fear.
                     </div>
                     <div style={poetryDivStyle}>
                        As you step forward I step back. The venom in my mind is a powerful drug. I replay my past because I can’t unplug. The empathy you show is an emotion
                        I lack. I wish I was an amnesiac. I wonder how you replaced my wrath. You placed love in the mind of a sociopath. But I crave my vengeance like a junkie
                        craves crack.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'WhiteAndWoke'}
                  onChange={expandAndCollapseAccordions('WhiteAndWoke')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'WhiteAndWoke-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'WhiteAndWoke-header'}
                  >
                     <Typography>White and Woke</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        So I’m glad to hear that you’re “white and woke”.<br/>
                        And you probably believe you’re one of those “better folk”.<br/>
                        And I don’t know,<br/>
                        Maybe you really do get it.<br/>
                        Maybe you’ve learned to own up to our past<br/>
                        And now you’ve come to regret it.<br/>
                        But justice ain’t designed to help you clear your conscience.<br/>
                        And the more you confess,<br/>
                        The more you praise the oppressed,<br/>
                        The more I see that your slogans only serve to augment<br/>
                        Your own insecurities because you still provoke.<br/>
                        You still live a life based on mirrors and smoke.<br/>
                        And no matter how much you protest,<br/>
                        I still wonder if you have any clue<br/>
                        About what it truly means to be woke.
                     </div>
                     <div style={poetryDivStyle}>
                        You see, wisdom doesn’t come on a t-shirt.<br/>
                        And your memes won’t erase all the centuries of hurt,<br/>
                        Because activism doesn’t happen on Facebook<br/>
                        And liking my post won’t return what we took.<br/>
                        You can offer up your “thoughts and prayers”<br/>
                        But those words just sound like gobbledygook.<br/>
                        And you can make your case til you’re blue in the face,<br/>
                        And you can tell me all day you’re alert.<br/>
                        But I don’t really care about what’s on your t-shirt.
                     </div>
                     <div style={poetryDivStyle}>
                        So maybe you really are woke?<br/>
                        But I got suspicions that your moral compass is broke.<br/>
                        And the more you have to tell me you’re down,<br/>
                        The more you brag about friends who are brown,<br/>
                        The more that I suspect you’re on the closet racist squad.<br/>
                        And as you prance around in your equality crown,<br/>
                        I see clearly through your crumbling façade.<br/>
                        If your daughter brought home a brother,
                        <div style={poetryIndentedDivStyle}>
                           would you have a stroke?
                        </div>
                        Or is <i>that</i> discrimination
                        <div style={poetryIndentedDivStyle}>
                           the kind that’s sanctioned by god?
                        </div>
                        Can you relax in a room
                        <div style={poetryIndentedDivStyle}>
                           where you're the only white bloke?
                        </div>
                        Or would <i>that</i> situation make you feel odd?<br/>
                        Maybe you think you're under attack,<br/>
                        But this is just a poke.<br/>
                        Only you can say if you're full of smoke.<br/>
                        And only you know what's in your heart<br/>
                        And what you meant when you told that joke.<br/>
                        Maybe it came across all wrong.<br/>
                        Maybe you just misspoke.<br/>
                        So I'm not trying to tell you how to act,<br/>
                        But if I was in your shoes,<br/>
                        I wouldn't be spouting off to everyone about how I'm so woke.
                     </div>
                     <div style={poetryDivStyle}>
                        You see, justice ain't sold on Amazon Prime.<br/>
                        And you ain't walked a mile in their shoes
                        <div style={poetryIndentedDivStyle}>
                           just cuz you listened to some rhyme.
                        </div>
                        Your YouTube channel may be sounding the alert,<br/>
                        But silent white activists make up a very long line.<br/>
                        And maybe your racism isn't so overt,<br/>
                        But your bias is still easy to define.<br/>
                        So while I'm happy that truth is what you're working to assert,<br/>
                        You’re trying to skip dinner to go straight to dessert.<br/>
                        You can holler bout how much others’ lives are worth,<br/>
                        And you can brag about your own spiritual rebirth<br/>
                        But your heart’s not exposed in your Instagram memes.<br/>
                        It can only be proven through your deeds and your works.<br/>
                        So I don't really care about what's on your fucking t-shirt.
                     </div>
                  </AccordionDetails>
               </Accordion>
               <Accordion
                  expanded={expanded === 'YourRelationship'}
                  onChange={expandAndCollapseAccordions('YourRelationship')}
                  style={{marginTop: 10}}
               >
                  <AccordionSummary
                     aria-controls={'YourRelationship-content'}
                     expandIcon={
                        <ExpandMoreIcon/>}
                     id={'YourRelationship-header'}
                  >
                     <Typography>Your Relationship</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div style={poetryDivStyle}>
                        You couldn’t talk to me for a year,
                        <div style={poetryIndentedDivStyle}>
                           but suddenly you remember how to text.
                        </div>
                        And now you think I want to know
                        <div style={poetryIndentedDivStyle}>
                           about the man in your life who’s next?
                        </div>
                        I’m not sure why you think the person you labeled second best
                        <div style={poetryIndentedDivStyle}>
                           is now the perfect confidant to tell how much your life is blessed.
                        </div>
                        And I’m not hatin’ on the dude you're with now,
                        <div style={poetryIndentedDivStyle}>
                           but if there’s one thing to which I attest,<br/>
                           it’s that I don’t need any updates from you about your latest romantic quest.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        You hit me up with questions,
                        <div style={poetryIndentedDivStyle}>
                           like I’m your own personal Google.
                        </div>
                        But when we were together you treated me
                        <div style={poetryIndentedDivStyle}>
                           like your own personal poodle.
                        </div>
                        And now you come asking for my advice,
                        <div style={poetryIndentedDivStyle}>
                           like I’m the teacher and you’re my pupil?
                        </div>
                        But the words I’d like to share with you now aren’t helpful,
                        <div style={poetryIndentedDivStyle}>
                           they’re fucking brutal.
                        </div>
                        Maybe there will be a day when I can offer thoughts that are useful,
                        <div style={poetryIndentedDivStyle}>
                           but the scars are deep,<br/>
                           and the wounds are fresh,<br/>
                           and I can’t treat you in a way that’s neutral.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        I don’t need to know about your relationship.<br/>
                        And if you’re happy now that’s great,
                        <div style={poetryIndentedDivStyle}>
                           but I don’t want to hear that shit.
                        </div>
                        You may think it’s cute to constantly send me your trite little thoughts and quips.<br/>
                        But when you showed me the door I didn’t laugh and skip,
                        <div style={poetryIndentedDivStyle}>
                           and through sleepless nights it gave me fits.
                        </div>
                        It took me a while,
                        <div style={poetryIndentedDivStyle}>
                           but I finally got a grip.
                        </div>
                        And now that I did,
                        <div style={poetryIndentedDivStyle}>
                           I don’t need to know about your relationship.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        I’m glad you think we can still be friends,
                        <div style={poetryIndentedDivStyle}>
                           but even friends have borders.
                        </div>
                        And every time you talk about him,
                        <div style={poetryIndentedDivStyle}>
                           it leaves my life in disorder.
                        </div>
                        You’re naïve enough to believe this is healthy,
                        <div style={poetryIndentedDivStyle}>
                           but to me, it’s simply torture.
                        </div>
                        I used to long for your communication,
                        <div style={poetryIndentedDivStyle}>
                           but your messages just paint me in a corner.
                        </div>
                        And if you want to explain how he’s better than me,
                        <div style={poetryIndentedDivStyle}>
                           there’s no way I can be your supporter.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        You want to talk to me,
                        <div style={poetryIndentedDivStyle}>
                           about your hobbies that he doesn’t share.
                        </div>
                        But I’m not here to fill the gaps
                        <div style={poetryIndentedDivStyle}>
                           of which he’s not aware.
                        </div>
                        I was never equipped to play second fiddle,
                        <div style={poetryIndentedDivStyle}>
                           to be your verbal affair.
                        </div>
                        And if you need to discuss things out of his depth,
                        <div style={poetryIndentedDivStyle}>
                           then you’ll have to look elsewhere.
                        </div>
                        Cuz I’m not your therapist,
                        <div style={poetryIndentedDivStyle}>
                           and I’m not the bridge that gets you from here to there.
                        </div>
                        So the next time you reach out to me you really need to prepare,
                        <div style={poetryIndentedDivStyle}>
                           that I may not be available to answer your questionnaire.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        I don’t need to know about your relationship.<br/>
                        And if you’re happy now that’s great,
                        <div style={poetryIndentedDivStyle}>
                           but I don’t want to hear that shit.
                        </div>
                        You may think it’s cute to constantly send me your trite little thoughts and quips.<br/>
                        But when you showed me the door I didn’t laugh and skip,
                        <div style={poetryIndentedDivStyle}>
                           and through sleepless nights it gave me fits.
                        </div>
                        It took me a while,
                        <div style={poetryIndentedDivStyle}>
                           but I finally got a grip.
                        </div>
                        And now that I did,
                        <div style={poetryIndentedDivStyle}>
                           I don’t need to know about your relationship.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        When things get tough for you,
                        <div style={poetryIndentedDivStyle}>
                           it seems I’m still your lifeline.
                        </div>
                        And to this day I'm left to wonder,
                        <div style={poetryIndentedDivStyle}>
                           if that was your original design.
                        </div>
                        I’m not good enough to be your man,
                        <div style={poetryIndentedDivStyle}>
                           but I’m good enough to be on your mind.
                        </div>
                        And I think that’s my fault -
                        <div style={poetryIndentedDivStyle}>
                           cuz I never wanted to undermine,<br/>
                           your thoughts and your hopes and your dreams –<br/>
                           dreams that only I could define.
                        </div>
                        But I know there will soon come a time,
                        <div style={poetryIndentedDivStyle}>
                           when <i>your</i> call<br/>
                           is the <i>only</i> call<br/>
                           that I choose to decline.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        And when this man inevitably falls short,
                        <div style={poetryIndentedDivStyle}>
                           my shoulder you’ll want to cry on.
                        </div>
                        But for the first time in your life,
                        <div style={poetryIndentedDivStyle}>
                           I won’t be the one to rely on.
                        </div>
                        I won’t be your protector in the jungle.<br/>
                        I will not be your lion.<br/>
                        I don't monitor your escapades,
                        <div style={poetryIndentedDivStyle}>
                           and you won’t be the one that I spy on.
                        </div>
                        I don't offer words of solace
                        <div style={poetryIndentedDivStyle}>
                           cuz nothing's left in us to get high on.
                        </div>
                        And the altar of our love
                        <div style={poetryIndentedDivStyle}>
                           was one that I ultimately died upon.
                        </div>
                     </div>
                     <div style={poetryDivStyle}>
                        I don’t need to know about your relationship.<br/>
                        And if you’re happy now that’s great,
                        <div style={poetryIndentedDivStyle}>
                           but I don’t want to hear that shit.
                        </div>
                        You may think it’s cute to constantly send me your trite little thoughts and quips.<br/>
                        But when you showed me the door I didn’t laugh and skip,
                        <div style={poetryIndentedDivStyle}>
                           and through sleepless nights it gave me fits.
                        </div>
                        It took me a while,
                        <div style={poetryIndentedDivStyle}>
                           but I finally got a grip.
                        </div>
                        And now that I did,
                        <div style={poetryIndentedDivStyle}>
                           I don’t need to know about your fucking relationship.
                        </div>
                     </div>
                  </AccordionDetails>
               </Accordion>
            </Column>
         </Row>
      </Container>
   </>;
};
