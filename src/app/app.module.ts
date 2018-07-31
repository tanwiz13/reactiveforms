import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { ShowdataComponent } from './showdata/showdata.component'

 

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    ShowdataComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule {
  
}
