import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideRoutes} from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './modules/auth/auth.component';
import { AuthService } from './services/auth/auth.service';
import { UtilsService } from './services/utils/utils.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
