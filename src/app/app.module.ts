import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { SessionReducer } from './core/states/session.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { LoadingReducer } from './core/states/loading.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';
import { TokenInterceptor } from './core/interceptors/token.interceptor';


export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['sessionState'],
    rehydrate: true,
  })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    LayoutModule,
    CoreModule,
    StoreModule.forRoot({
      sessionState: SessionReducer,
      loadingState: LoadingReducer,
    }, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production,
      autoPause: true,
    }),
    EffectsModule.forRoot([])
  ],
  providers: [
    ConfirmationService,
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

