import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TudoComponent } from './tudo/tudo.component';
import { Tudo2Component } from './tudo2/tudo2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StudentComponent } from './student/student.component';
import { MatIconModule } from '@angular/material/icon';
import { PostsComponent } from './posts/posts.component';
import { PostCardComponent } from './post-card/post-card.component';
import { MobileDashComponent } from './mobile-dash/mobile-dash.component';
import { MobileCardComponent } from './mobile-card/mobile-card.component';
import { MovieDashComponent } from './movie-dash/movie-dash.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TudoComponent,
    Tudo2Component,
    StudentComponent,
    PostsComponent,
    PostCardComponent,
    MobileDashComponent,
    MobileCardComponent,
    MovieDashComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
