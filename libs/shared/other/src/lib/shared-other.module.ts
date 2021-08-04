import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModelsModule } from '@test-nx/shared/models';
import {SharedModule} from '@test-nx/shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModelsModule,
    SharedModule
  ],
})
export class SharedOtherModule {}
