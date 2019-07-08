import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoComponent } from './LObj/lo.component';
import{ HttpClientModule } from   '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TaxonomyComponent } from './taxonomy/taxonomy.component';
import { LevelComponent } from './level/level.component';
import { VerbComponent } from './verb/verb.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from "./services/auth.service";
import {AccountService} from "./services/account.service";
import {UrlPermission} from "./urlPermission/url.permission";
import {UrlRolePermission,UrlAdminPermission} from "./urlPermission/urlrole.permission";
import { HttpModule } from '@angular/http';
import { ProfileComponent } from './profile/profile.component';
import { DomainComponent } from './domain/domain.component';
import { FieldComponent } from './field/field.component';
import { SubjectComponent } from './subject/subject.component';
import { TopicComponent } from './topic/topic.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoComponent,
    TaxonomyComponent,
    LevelComponent,
    VerbComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DomainComponent,
    FieldComponent,
    SubjectComponent,
    TopicComponent,
    UnauthorisedComponent,
    UserComponent,
    UserdetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    HttpModule
  ],
  providers: [AuthService,AccountService,UrlPermission,UrlRolePermission,UrlAdminPermission],
  bootstrap: [AppComponent]
})
export class AppModule { }
