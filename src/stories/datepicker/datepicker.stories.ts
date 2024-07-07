import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import {MatDatepickerModule,MatDatepickerInput, MatDatepicker} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { datepickerArgTypes } from './datepicker-argtypes';

const meta = {
  title: 'Components/Datepicker',
  component: MatDatepickerInput,
  tags: ['autodocs'],
  argTypes:{
    ...datepickerArgTypes
  },
  decorators: [
    moduleMetadata({
      imports: [MatDatepickerModule,MatFormFieldModule, MatInputModule],
      providers:[provideNativeDateAdapter()]
    }),
  ],
  render: (args:any) => ({
    props: args,
    template: 
    `
    <mat-form-field>
  <mat-label>Choose a date</mat-label>
  <input matInput [matDatepicker]="picker" [min]="min" [max]="max">
  <mat-hint>MM/DD/YYYY</mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker [startView]="startView"  [startAt]="startAt" [touchUi]="touchUi" [opened]="opened" [color]="color"></mat-datepicker>
</mat-form-field>

    `,
  }),
};

export default meta;
type Story = StoryObj<any>;

export const Basic: Story = {
  args: {
    value:null,
    disabled:false,
    startView:'month',
    touchUi:false,
    opened:false
  },
};

export const Disabled: Story = {
  args: {
    value:null,
    disabled:true,
    startView:'month',
    touchUi:false,
    opened:false
  },
};

export const MaxMinDates: Story = {
  args: {
    max:new Date((new Date().getFullYear()) + 1, 11, 31),
    min:new Date((new Date().getFullYear()) - 20, 0, 1),
    disabled:false,
    startView:'month',
    touchUi:false,
    opened:false
  },
};

export const YearAndMonthPicker: Story = {
  args: {
    value:null,
    startView:"multi-year",
    disabled:false,
    touchUi:false,
    opened:false
  },
};

export const StartDate: Story = {
  args: {
    value:null,
    startAt:new Date(1990, 0, 1),
    startView:"year",
    disabled:false,
    touchUi:false,
    opened:false
  },
};

export const touchUi: Story = {
  args: {
    value:null,
    startView:"month",
    disabled:false,
    touchUi:true,
    opened:false
  }
};

export const OpenTrue: Story = {
  args: {
    value:null,
    startView:"month",
    disabled:false,
    touchUi:false,
    opened:true
  },
};

export const ColorAccent: Story = {
  args: {
    value:null,
    startView:"month",
    disabled:false,
    touchUi:false,
    opened:false,
    color:'accent'
  },
};

export const ColorWarn: Story = {
  args: {
    value:null,
    startView:"month",
    disabled:false,
    touchUi:false,
    opened:false,
    color:'warn'
  },
};





