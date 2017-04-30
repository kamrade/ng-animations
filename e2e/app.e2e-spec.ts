import { NgAnimationsPage } from './app.po';

describe('ng-animations App', function() {
  let page: NgAnimationsPage;

  beforeEach(() => {
    page = new NgAnimationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
