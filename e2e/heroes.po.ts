import {by, element} from 'protractor';
import {KeywordLibrary} from 'robotremote';
import {CommonPO} from './common.po';
import {keyword} from 'protractor-robot-remote';

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

const instance: HeroesPage = new HeroesPage();

export const heroesPageKeywordLibrary: KeywordLibrary = {
  heroesPageGetTitle: keyword(() => instance.getTitle(), `Get the view's title`)
};
