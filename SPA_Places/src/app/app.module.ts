import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ObjetosComponent } from './components/objetos/objetos.component';
import { ObjetoComponent } from './components/objeto/objeto.component';
import { AboutComponent } from './components/about/about.component';
import { ObjetoCardComponent } from './components/objeto-card/objeto-card.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ObjetosComponent,
    ObjetoComponent,
    AboutComponent,
    ObjetoCardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
