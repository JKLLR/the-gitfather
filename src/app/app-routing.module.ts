import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import { HomeComponent } from './component/home/home.component';
import { SearchResultComponent } from './component/search-result/search-result.component';
import { RepoResultComponent } from './component/repo-result/repo-result.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'my-profile',component:MyProfileComponent},
  { path: 'search-result/:username', component: SearchResultComponent},
  { path: 'repo-result/:reponame', component: RepoResultComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent, MyProfileComponent, SearchResultComponent,RepoResultComponent]
