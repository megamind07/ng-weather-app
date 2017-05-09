import { NgWeatherAppPage } from './app.po';

describe('ng-weather-app App', () => {
  let page: NgWeatherAppPage;

  beforeEach(() => {
    page = new NgWeatherAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
