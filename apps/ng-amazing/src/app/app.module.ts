import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SharedModule } from '@test-nx/shared';
import { SharedModelsModule } from '@test-nx/shared/models';
import { SharedOtherModule } from '@test-nx/shared/other';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    SharedModelsModule,
    SharedOtherModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
