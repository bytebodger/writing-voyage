import aDuskForeverWaning from '../images/a-dusk-forever-waning.png';
import cognitiveDissonance from '../images/cognitive-dissonance.png';
import excilior from '../images/excilior.png';
import hilltop from '../images/hilltop.jpg';
import okSierra from '../images/ok-sierra.jpg';
import programming from '../images/programming.png';

export const links = [
   {
      genericName: 'HOME',
      linkTo: '/home',
   },
   {
      genericName: 'WORLDBUILDING',
      imgSrc: excilior,
      linkTo: '/worldbuilding',
      narrative: 'Nearly half a million words of pure worldbuilding, including detailed maps and full world history',
      personalName: 'Worldbuilder',
   },
   {
      genericName: 'PROGRAMS',
      imgSrc: programming,
      linkTo: '/programs',
      narrative: 'A plethora of web-based business applications spanning a wide variety of technologies - but specializing in Javascript/React',
      personalName: 'Programmer',
   },
   {
      genericName: 'PLAYS',
      imgSrc: okSierra,
      linkTo: '/plays',
      narrative: 'Four (and counting) full-length plays drawing heavily from science fiction and absurdism',
      personalName: 'Playwright',
   },
   {
      genericName: 'NOVELS',
      imgSrc: aDuskForeverWaning,
      linkTo: '/novels',
      narrative: 'One completed novel, another in progress, and a novel-length web-based serial',
      personalName: 'Novelist',
   },
   {
      genericName: 'PAINTINGS',
      imgSrc: hilltop,
      linkTo: '/paintings',
      narrative: 'Six (and counting) large paintings using heavy-body acrylics to create a unique impasto effect',
      personalName: 'Painter',
   },
   {
      genericName: 'POEMS',
      imgSrc: cognitiveDissonance,
      linkTo: '/poems',
      narrative: 'More than thirty poems (and counting) poems compiled into a single volume',
      personalName: 'Poet',
   },
];
