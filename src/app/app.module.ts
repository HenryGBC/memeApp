import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideRoutes} from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './modules/auth/auth.component';
import { AuthService } from './services/auth/auth.service';
import { UtilsService } from './services/utils/utils.service';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './modules/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, UtilsService, AuthGuard, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
