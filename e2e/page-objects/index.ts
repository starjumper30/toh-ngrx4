import {appPage} from './app.po';
import {dashboardPage} from './dashboard.po';
import {heroesPage} from './heroes.po';
import {CommonPO} from './common.po';

export * from './app.po';
export * from './common.po';
export * from './dashboard.po';
export * from './heroes.po';

export const pageObjects = {
  current: undefined,

  App: appPage,
  Dashboard: dashboardPage,
  Heroes: heroesPage,

  getPO(poName: string): CommonPO {
    this.current = this[poName];
    return this.current;
  }
};
