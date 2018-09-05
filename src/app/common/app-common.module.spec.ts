import { AppCommonModule } from './app-common.module';

describe('AppMaterialModule', () => {
  let appMaterialModule: AppCommonModule;

  beforeEach(() => {
    appMaterialModule = new AppCommonModule();
  });

  it('should create an instance', () => {
    expect(appMaterialModule).toBeTruthy();
  });
});
