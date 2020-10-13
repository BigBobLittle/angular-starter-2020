import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetsModule } from './_widgets/widgets/widgets.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'; 
import { ToastrModule } from 'ngx-toastr';
import { exportThisInterceptorsToAppModule } from './_interceptors/export-interceptors';


// export interceptors 

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WidgetsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot(), 
  ],
  providers: [exportThisInterceptorsToAppModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
