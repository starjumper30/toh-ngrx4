import {KeywordLibrary} from 'robotremote';
import {pageObjects} from '../page-objects';
import {keyword, runProtractorRobotServer} from 'protractor-robot-remote';
import {appPage, dashboardPage, heroesPage} from '../page-objects';

export const commonLib: KeywordLibrary = {
  navigateToPage: keyword((poName: string) => pageObjects.getPO(poName).navigateTo(),
    'Sets current page object and does any necessary browser navigation to get there.')
};

export const appPageKeywordLibrary: KeywordLibrary = {
  appPageGetParagraphText: keyword(() => appPage.getParagraphText(), 'Get the first paragraph of text')
};

export const dashboardPageKeywordLibrary: KeywordLibrary = {
  dashboardPageGetTitle: keyword(() => dashboardPage.getTitle(), `Get the view's title`),
  dashboardPageGetHeroList: keyword(() => dashboardPage.getHeroList(), `Get the list of Hero names displayed in dashboard`)
};

export const heroesPageKeywordLibrary: KeywordLibrary = {
  heroesPageGetTitle: keyword(() => heroesPage.getTitle(), `Get the view's title`)
};

// Run this keyword library if the library itself is called explicitly.
if (!module.parent) {
  runProtractorRobotServer([commonLib, appPageKeywordLibrary, dashboardPageKeywordLibrary, heroesPageKeywordLibrary]);
}
