import { AppPage } from './page-objects';

describe('load home', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display tour of heroes heading', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Heroes');
  });
});
