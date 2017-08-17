import { browser, by, element } from 'protractor';
import {CommonPO} from './common.po';

export class AppPage implements CommonPO {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.tagName('h1')).getText();
  }
}

export const appPage: AppPage = new AppPage();


