import {by, element} from 'protractor';
import {CommonPO} from './common.po';

export class DashboardPage implements CommonPO {
  navigateTo() {
    return element(by.linkText('Dashboard')).click();
  }

  getComponent() {
    return element(by.tagName('my-dashboard'));
  }

  getTitle() {
    return this.getComponent().element(by.tagName('h3')).getText();
  }

  getHeroList() {
    return this.getComponent().all(by.tagName('h4'))
      .reduce((acc, elem) => elem.getText().then((text) => acc + text + ' '), '');
  }
}

export const dashboardPage: DashboardPage = new DashboardPage();
