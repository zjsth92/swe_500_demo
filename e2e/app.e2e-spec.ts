import { Swe500Page } from './app.po';

describe('swe-500 App', function() {
  let page: Swe500Page;

  beforeEach(() => {
    page = new Swe500Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
