import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../pages/lumartex/home-page';

Then(/^it should have a footer$/, () => {
  HomePage.expectFooter().toExists();
});

Then(/^it should have a navigation bar$/, () => {
  HomePage.expectNavigationBar().toExists();
});

Then(/^it should have a product button$/, () => {
  HomePage.expectProductButton().toBeVisible();
});

And("it should contains all the menu items", (dataTable) => {
  HomePage.expectMenus().toHaveSameSizeAs(4);
  HomePage.expectMenus().contains(dataTable.rawTable);
});
