import { BbasePage } from './app.po';

describe('bbase App', function() {
  let page: BbasePage;

  beforeEach(() => {
    page = new BbasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
