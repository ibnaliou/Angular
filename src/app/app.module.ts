import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/**import de la class materlial module */
import {MaterialModule} from './material.module';
/**import de hammerjs installer par ng install --save hammerjs */
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { BienService } from './service/bien.service';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { FooterComponent } from './footer/footer.component';
import { SlideComponent } from './slide/slide.component';
import { DetailsComponent } from './details/details.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    CatalogueComponent,
    FormSearchComponent,
    FooterComponent,
    SlideComponent,
    DetailsComponent,
    ConnexionComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [BienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
