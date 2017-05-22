import { BookkeeperfiPage } from './app.po';

describe('bookkeeperfi App', () => {
  let page: BookkeeperfiPage;

  beforeEach(() => {
    page = new BookkeeperfiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
