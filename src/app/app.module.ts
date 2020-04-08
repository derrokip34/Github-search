import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GitHttpService } from './git/git-http.service';

import { AppRoutingModule } from './app-routing.module';
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { HighlightRepoDirective } from './highlight-repo.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    HighlightRepoDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [GitHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
