import React from 'react';
import { makeStyles, Toolbar, Paper, ThemeProvider, Divider } from '@material-ui/core';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { createServer, Model } from 'miragejs';
import defaultTheme from './styles/theme/applicationTheme';
import { SectionHero } from './components/SectionHero';
import { SectionDigitalWallet } from './components/SectionDigitalWallet';
import { SectionPrivacy } from './components/SectionPrivacy';
import { SectionWhere } from './components/SectionWhere';
import { SectionBlockchain } from './components/SectionBlockchain';
import { SectionGlobalStandard } from './components/SectionGlobalStandard';
import { SectionTutorial } from './components/SectionTutorial';
import { SectionPlans } from './components/SectionPlans';
import { SectionPrograms } from './components/SectionPrograms';
import { SectionBestPlan } from './components/SectionBestPlan';
import AOS from 'aos';

import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

createServer({
  models: {
    transaction: Model
  },
})

function App() {
  const classes = useStyles();

  AOS.init()

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Paper elevation={0}>
          <Header />
          <Divider />
          <SectionHero />
          <Divider />
          <SectionDigitalWallet />
          <Divider />
          <SectionPrivacy />
          <Divider />
          <SectionWhere />
          <Divider />
          <SectionBlockchain />
          <Divider />
          <SectionGlobalStandard />
          <Divider />
          <SectionTutorial />
          <Divider />
          <SectionPlans />
          <Divider />
          <SectionPrograms />
          <Divider />
          <SectionBestPlan />
        </Paper>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
