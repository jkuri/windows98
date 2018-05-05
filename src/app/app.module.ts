import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { StartBarComponent } from './components/start-bar/start-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    StartBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
