import { OldVodPage } from './app.po';

describe('old-vod App', () => {
  let page: OldVodPage;

  beforeEach(() => {
    page = new OldVodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
