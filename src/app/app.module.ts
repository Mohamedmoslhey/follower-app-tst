import { RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseService } from './course.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavouriteComponent } from './favourite/favourite.component';
import { Excno1Component } from './excno1/excno1.component';
import { ContactformComponent } from './contactform/contactform.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';

import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { GitHubProfileComponent } from './git-hub-profile/git-hub-profile.component';
import { GitFollowersComponent } from './git-followers/git-followers.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FavouriteComponent,
    Excno1Component,
    ContactformComponent,
    SignupFormComponent,
    PostComponent,
    HomeComponent,
    GitHubProfileComponent,
    NotFoundComponent,
    NavBarComponent,
    GitFollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [{
        path: '',
        component: HomeComponent
      },
      {
        path: 'follwers',
        component: GitFollowersComponent
      },
      {
        path: 'profile/:username',
        component: GitHubProfileComponent
      },
      {
        path: 'posts',
        component: PostComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
      ]
    )
  ],
  providers: [CourseService,
    PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
