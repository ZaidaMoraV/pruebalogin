import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';

@NgModule({
  declarations: [ 
    AppComponent,
     LoginComponentComponent, 
     RegisterComponentComponent],
  imports: [ 
    BrowserModule,
    routing, 
    FormsModule,
    HttpClientModule],
  providers: [],
  bootstrap: [
    AppComponent]
})
export class AppModule {}
