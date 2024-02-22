import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayDirective } from './display.directive';
import { AttrDirective } from './attr.directive';
import { TestPipe } from './test.pipe';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { TestsService } from './tests.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { UsercardComponent } from './usercard/usercard.component';
import { UsersComponent } from './users/users.component';
import { Homechild1Component } from './homechild1/homechild1.component';
import { Homechild2Component } from './homechild2/homechild2.component';
import { AuthService } from './auth.service';
// import { PageNotFoundComponent} from './page-not-found/page-not-found';
import {HttpClientModule} from'@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { MycontactComponent } from './mycontact/mycontact.component';
import { PopupComponent } from './popup/popup.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const routes: Routes = [
 
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      {
        path: 'contact/mycontact', component: MycontactComponent,
      },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'home/homechild1',
        component: Homechild1Component,
      },
      {
        path: 'home/homechild2',
        component: Homechild2Component,
      },
    ],
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: '**',//wild card route
  //   component: PageNotFoundComponent
  // },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthService],
  },
  {
     path: 'popup',
    component: PopupComponent
   },
  { path: 'usercard/:id', component: UsercardComponent },
  { path: '**', redirectTo: '' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  
];




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayDirective,
    AttrDirective,
    TestPipe,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    UsercardComponent,
    UsersComponent,
    Homechild1Component,
    Homechild2Component,
    ProductsComponent,
    MycontactComponent,
    PopupComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule,RouterModule, RouterModule.forRoot(routes),HttpClientModule],
  providers: [TestsService, UsersComponent,AuthService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {}
