import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { DetailsComponent } from './details/details.component';
import { ClickStopPropogationDirective } from './click-stop-propogation.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DetailsComponent,
    ClickStopPropogationDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
