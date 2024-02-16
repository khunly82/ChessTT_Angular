import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ChipModule } from 'primeng/chip';
import { ToDatePipe } from './pipes/to-date.pipe';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { TooltipModule } from 'primeng/tooltip';
import { StepsModule } from 'primeng/steps';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { CollapsePanelComponent } from './components/collapse-panel/collapse-panel.component';



@NgModule({
  declarations: [
    FormErrorComponent,
    LoaderComponent,
    ToDatePipe,
    InProgressComponent,
    EnumToArrayPipe,
    CollapsePanelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    InputSwitchModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    ChipModule,
    PaginatorModule,
    DropdownModule,
    MultiSelectModule,
    CalendarModule,
    SliderModule,
    TooltipModule,
    StepsModule,
  ],
  exports: [
    // modules
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    InputSwitchModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    ChipModule,
    PaginatorModule,
    DropdownModule,
    MultiSelectModule,
    CalendarModule,
    SliderModule,
    TooltipModule,
    StepsModule,
    // components
    FormErrorComponent,
    LoaderComponent,
    InProgressComponent,
    CollapsePanelComponent,
    // directives
    
    // pipes
    ToDatePipe,
    EnumToArrayPipe,
  ]
})
export class SharedModule { }
