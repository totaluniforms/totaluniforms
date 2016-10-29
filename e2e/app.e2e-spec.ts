import { TotaluniformsPage } from './app.po';

describe('totaluniforms App', function() {
  let page: TotaluniformsPage;

  beforeEach(() => {
    page = new TotaluniformsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
