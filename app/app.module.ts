import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {A11yModule} from '@angular/cdk/a11y';
import {PortalModule} from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule, MAT_DIALOG_DATA, matDialogAnimations} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule, MatIcon} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { LoginComponent, MyLoginDialog } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { KbarticlesComponent } from './kbarticles/kbarticles.component';
import { KnowledgebaseService } from './knowledgebase.service';
import { UserService } from './user.service';
import { WhatsthatComponent } from './whatsthat/whatsthat.component';
import { ElearningComponent } from './elearning/elearning.component';
import { UserdocComponent } from './userdoc/userdoc.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { LoginstateService } from './loginstate.service';
import { ManualComponent } from './manual/manual.component';
import { TocComponent } from './manual/toc/toc.component';
import { TestingComponent } from './testing/testing.component';
import { FigureComponent } from './manual/features/figure/figure.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HtmldocComponent } from './manual/htmldoc/htmldoc.component';
import { ArticleComponent } from './elearning/article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    LoginComponent,
    LandingComponent,
    MainNavComponent,
    KbarticlesComponent,
    WhatsthatComponent,
    ElearningComponent,
    UserdocComponent,
    IncidentsComponent,
    MyLoginDialog,
    ManualComponent,
    TocComponent,
    TestingComponent,
    FigureComponent,
    TopnavComponent,
    HtmldocComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatDialogModule,
    MatTooltipModule,
    MatTableModule, 
    MatCardModule,
    MatListModule,
    MatTreeModule, 
    MatSidenavModule,
    FlexLayoutModule
  ],
  entryComponents: [
    MyLoginDialog,
  ],
  /*
  exports: [
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
  ],*/
  providers: [KnowledgebaseService,
              UserService,
              LoginstateService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
