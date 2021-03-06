import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppService } from "app/app.service";
import { PollComponent } from './poll/poll.component';
import { MemberComponent } from './member/member.component';
import { ManagerComponent } from './manager/manager.component';
import { NewPollFormComponent } from './manager/new-poll-form/new-poll-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatDialogModule, MatSnackBarModule, MatCheckboxModule, MatTableModule, MatToolbarModule, MatAutocompleteModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatTooltipModule, MatProgressSpinnerModule, MatRadioModule } from '@angular/material';
import { RemarkDialogComponent } from './remark-dialog/remark-dialog.component';
import { ProcessPollResultsComponent } from './manager/process-poll-results/process-poll-results.component';
import { SettingsComponent } from './manager/settings/settings.component';
import { ExistingPollsComponent } from './manager/existing-polls/existing-polls.component';

@NgModule({
  declarations: [
    AppComponent,
    PollComponent,
    MemberComponent,
    ManagerComponent,
    NewPollFormComponent,
    RemarkDialogComponent,
    ProcessPollResultsComponent,
    SettingsComponent,
    ExistingPollsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule
  ],
  entryComponents: [RemarkDialogComponent],
  exports: [],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
