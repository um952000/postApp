import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { FormsModule } from '@angular/forms';
import { DetailPostComponent } from './detail-post/detail-post.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent,
    ShowComponent,
    DetailPostComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'create', component: CreateComponent },
        { path: 'show', component: ShowComponent },
        { path: 'detail/:id', component: DetailPostComponent }


      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }