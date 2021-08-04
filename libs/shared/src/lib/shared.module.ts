import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModelsModule } from '@test-nx/shared/models';

@NgModule({
  imports: [
    CommonModule,
    SharedModelsModule
  ],
})
export class SharedModule {}
