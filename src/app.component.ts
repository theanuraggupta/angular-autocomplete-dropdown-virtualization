import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule  } from '@syncfusion/ej2-angular-buttons';
/**
 * AutoComplete Default functionality Sample
 */
import { Component, ViewChild } from '@angular/core';
import { AutoCompleteComponent, VirtualScroll } from '@syncfusion/ej2-angular-dropdowns';

AutoCompleteComponent.Inject(VirtualScroll);
@Component({
    standalone: true,
    imports: [ AutoCompleteModule,  CheckBoxModule, DropDownListModule, FormsModule, ReactiveFormsModule, ],
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    @ViewChild('sample')
    public AutoCompleteObj: AutoCompleteComponent;
    // defined the array of data
    public records: { [key: string]: Object }[] = [];
    constructor() {
        for (let i: number = 1; i <= 150; i++) {
            const item: { [key: string]: Object } = {
                id: 'id' + i,
                text: `Item ${i}`,
            };
            this.records.push(item);
        }
    }
    // maps the appropriate column to fields property
    public fields: object = { text: 'text', value: 'text' };
    // set the placeholder to AutoComplete input
    public waterMark: string = 'e.g. Item 1';
}