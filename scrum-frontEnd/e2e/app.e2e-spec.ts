import { ScrumFrontEndPage } from './app.po';

describe('scrum-front-end App', () => {
  let page: ScrumFrontEndPage;

  beforeEach(() => {
    page = new ScrumFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
