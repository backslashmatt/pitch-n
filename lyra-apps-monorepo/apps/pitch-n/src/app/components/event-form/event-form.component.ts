import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiIcon, TuiTextfieldComponent, TuiTextfieldDirective, TuiTextfieldOptionsDirective } from '@taiga-ui/core';
import { JsonPipe } from '@angular/common';
import {
  TuiInputDateModule,
  TuiInputDateTimeModule,
  TuiInputModule,
  TuiInputTimeModule,
  TuiUnfinishedValidator
} from '@taiga-ui/legacy';
import { TuiCheckbox } from '@taiga-ui/kit';
import { TuiDay } from '@taiga-ui/cdk';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    JsonPipe,
    TuiTextfieldDirective,
    TuiIcon,
    TuiInputModule,
    TuiCheckbox,
    TuiInputDateTimeModule,
    TuiInputDateModule,
    TuiInputTimeModule
  ],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {
  private readonly fb = inject(FormBuilder);
  form = this.fb.group({
    name: ['', Validators.required],
    startDate: [new TuiDay(2024, 11, 16), Validators.required],
    startTime: ['', Validators.required],
    endDate: '',
    endTime: '',
    location: '',
    isMultiDay: false
  });
}
