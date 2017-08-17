import {by, element} from 'protractor';
import {KeywordLibrary} from 'robotremote';
import {CommonPO} from './common.po';
import {keyword} from 'protractor-robot-remote';

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

const instance: DashboardPage = new DashboardPage();

export const dashboardPageKeywordLibrary: KeywordLibrary = {
  dashboardPageGetTitle: keyword(() => instance.getTitle(), `Get the view's title`),
  dashboardPageGetHeroList: keyword(() => instance.getHeroList(), `Get the list of Hero names displayed in dashboard`)
};
