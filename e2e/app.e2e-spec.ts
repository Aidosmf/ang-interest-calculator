import { AngInterestCalculatorPage } from './app.po';

describe('ang-interest-calculator App', function() {
  let page: AngInterestCalculatorPage;

  beforeEach(() => {
    page = new AngInterestCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
