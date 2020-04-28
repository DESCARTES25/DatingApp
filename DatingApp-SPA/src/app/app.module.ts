import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { NgxGalleryModule } from 'ngx-gallery-9';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/Auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {ErrorInterceptorProvider } from './_services/error.interceptor';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard} from './_guards/auth.guard';
import { UserService} from './_services/user.service';
import { MemberDetailComponent } from './members/member-detail/member-detail/member-detail.component';
import { AlertifyService } from './_services/alertify.service';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';


export function tokenGetter(){
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      MessagesComponent,
      ListsComponent,
      MemberCardComponent,
      MemberDetailComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      TabsModule.forRoot(),
      BsDropdownModule.forRoot(),
      BrowserAnimationsModule,
      NgxGalleryModule,
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot(
         {
            config: {
               tokenGetter,
               whitelistedDomains: ['localhost:5000'],
               blacklistedRoutes: ['localhost:5000/api/auth']
            }
         }
      )
   ],
   providers: [
      AuthService,
      UserService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      MemberDetailResolver,
      MemberListResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
