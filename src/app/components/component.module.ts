
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CustomtabsComponent } from '../components/customtabs/customtabs.component';
import { FormsModule } from '@angular/forms';

const components = [
    CustomtabsComponent,
];
@NgModule({
    declarations: [
        components
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule
    ],
    exports: [
        ...components,
    ]
})
export class ComponentModule { }
