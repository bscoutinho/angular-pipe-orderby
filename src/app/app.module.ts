import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';
import { OrderByPipe } from './orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
