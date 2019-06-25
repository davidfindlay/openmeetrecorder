import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OpenmeetrecorderSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [OpenmeetrecorderSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [OpenmeetrecorderSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OpenmeetrecorderSharedModule {
  static forRoot() {
    return {
      ngModule: OpenmeetrecorderSharedModule
    };
  }
}
