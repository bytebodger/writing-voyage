import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../../routes/home/Home';
import { CssBaseline, AppBar, Toolbar, useScrollTrigger } from '@mui/material';
import React from 'react';
import { the } from '../objects/the';
import { TopNav } from './TopNav';
import { Contact } from '../../routes/contact/Contact';
import { Novels } from '../../routes/novels/Novels';
import { Paintings } from '../../routes/paintings/Paintings';
import { Plays } from '../../routes/plays/Plays';
import { Poems } from '../../routes/poems/Poems';
import { Programs } from '../../routes/programs/Programs';

export const UI = props => {
   const ElevationScroll = props => {
      const {children, window} = props;
      const trigger = useScrollTrigger({
         disableHysteresis: true, threshold: 0, target: window ? window() : undefined,
      });
      return React.cloneElement(children, {elevation: trigger ? 4 : 0});
   };

   return <>
      <CssBaseline/>
      <ElevationScroll {...props}>
         <AppBar style={{backgroundColor: the.color.black}}>
            <Toolbar>
               <TopNav/>
            </Toolbar>
         </AppBar>
      </ElevationScroll>
      <Toolbar/>
      <Routes>
         <Route
            element={
               <Contact/>
            }
            exact={true}
            path={'/contact'}
         />
         <Route
            element={
               <Home/>
            }
            index={true}
            path={'/home'}
         />
         <Route
            element={
               <Novels/>
            }
            exact={true}
            path={'/novels'}
         />
         <Route
            element={
               <Paintings/>
            }
            exact={true}
            path={'/paintings'}
         />
         <Route
            element={
               <Plays/>
            }
            exact={true}
            path={'/plays'}
         />
         <Route
            element={
               <Poems/>
            }
            exact={true}
            path={'/poems'}
         />
         <Route
            element={
               <Programs/>
            }
            exact={true}
            path={'/programs'}
         />
         <Route
            element={
               <Navigate to={'/home'}/>
            }
            path={'*'}
         />
      </Routes>
   </>;
};
