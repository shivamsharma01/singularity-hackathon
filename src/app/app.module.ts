import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MessageService } from 'primeng/api';

import { AppComponent } from './app.component';
import { IntroComponent } from './component/intro/intro.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SliderModule } from 'primeng/slider';
import { CarouselModule as Carousel } from 'primeng/carousel';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModelPageComponent } from './model-page/model-page.component';
import { ModelSelectorComponent } from './model-page/model-selector/model-selector.component';
import { ModelDescriptionComponent } from './model-page/model-description/model-description.component';
import { TabsSectionComponent } from './model-page/tabs-section/tabs-section.component';
import { SeparatorComponent } from './separator/separator.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ModelPageComponent,
    ModelDescriptionComponent,
    ModelSelectorComponent,
    TabsSectionComponent,
    SeparatorComponent,
    ProfileComponent,
  ],
  imports: [
    TabViewModule,
    ToastModule,
    DialogModule,
    ProgressSpinnerModule,
    SliderModule,
    Carousel,
    AccordionModule,
    ButtonModule,
    PaginatorModule,
    NgbModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    CarouselModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
