import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaxonomyComponent} from './taxonomy/taxonomy.component';
import {LoComponent} from './LObj/lo.component';
import {LevelComponent} from './level/level.component';
import {VerbComponent} from './verb/verb.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {UrlPermission} from "./urlPermission/url.permission";
import {UrlRolePermission,UrlAdminPermission} from "./urlPermission/urlrole.permission";
import { DomainComponent } from './domain/domain.component';
import { FieldComponent } from './field/field.component';
import { SubjectComponent } from './subject/subject.component';
import { TopicComponent } from './topic/topic.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'learningobjecitve', component: LoComponent,canActivate:[UrlPermission] },
  { path: 'taxonomy', component: TaxonomyComponent ,canActivate:[UrlPermission,UrlRolePermission]},
  { path: 'level', component: LevelComponent,canActivate:[UrlPermission,UrlRolePermission]  },
  { path: 'verb', component: VerbComponent,canActivate:[UrlPermission,UrlRolePermission]  },
  { path: 'register', component: RegisterComponent  },
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent,canActivate:[UrlPermission]},
  { path: 'domain', component: DomainComponent,canActivate:[UrlPermission,UrlRolePermission]},
  { path: 'field', component: FieldComponent,canActivate:[UrlPermission,UrlRolePermission]},
  { path: 'subject', component: SubjectComponent,canActivate:[UrlPermission,UrlRolePermission]},
  { path: 'topic', component: TopicComponent,canActivate:[UrlPermission,UrlRolePermission]},
  { path: 'unauthorised', component: UnauthorisedComponent },
  { path: 'users', component: UserComponent,canActivate:[UrlPermission,UrlAdminPermission]},
  { path: 'userdetails/:id', component: UserdetailsComponent,canActivate:[UrlPermission,UrlAdminPermission] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
