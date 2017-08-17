import {by, element} from 'protractor';
import {CommonPO} from './common.po';

export class HeroesPage implements CommonPO {
  navigateTo() {
    return element(by.linkText('Heroes')).click();
  }

  getComponent() {
    return element(by.tagName('my-heroes'));
  }

  getTitle() {
    return this.getComponent().element(by.tagName('h2')).getText();
  }
}

export const heroesPage: HeroesPage = new HeroesPage();
