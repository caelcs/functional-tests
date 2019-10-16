import { Given } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/lumartex/home-page';

Given(/^I'm at Lumartex$/, () => {
  HomePage.visit();
});
