import { NgModule } from '@angular/core';

import { FormularioRoutingModule } from './formulario-routing.module';

import { FormularioComponent } from './formulario.component';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzProgressModule} from "ng-zorro-antd/progress";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzWaveModule} from "ng-zorro-antd/core/wave";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFormModule} from "ng-zorro-antd/form";


@NgModule({
  imports: [FormularioRoutingModule, NzCardModule, NzProgressModule, NzGridModule, NzSwitchModule, FormsModule, NzRadioModule, NzSelectModule, ReactiveFormsModule, NzWaveModule, NzCheckboxModule, NzInputModule, NzButtonModule, NzFormModule],
  declarations: [FormularioComponent],
  exports: [FormularioComponent]
})
export class FormularioModule {

}
