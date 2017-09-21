import { UPhonePage } from './app.po';

describe('u-phone App', () => {
  let page: UPhonePage;

  beforeEach(() => {
    page = new UPhonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
