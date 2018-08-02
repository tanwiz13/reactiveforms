import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ShowdataComponent } from './showdata/showdata.component';

const routes: Routes = [
  { path: 'edit', component: ProfileEditorComponent },
  { path: 'show', component: ShowdataComponent},
  { path: '', component: ProfileEditorComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ],
  
  declarations: []
})
export class AppRoutingModule { }
