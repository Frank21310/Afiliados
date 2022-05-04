import { NgModule } from '@angular/core';

import { FormularioRoutingModule } from './formulario-routing.module';

import { FormularioComponent } from './formulario.component';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzProgressModule} from "ng-zorro-antd/progress";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {FormsModule} from "@angular/forms";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzSelectModule} from "ng-zorro-antd/select";


@NgModule({
    imports: [FormularioRoutingModule, NzCardModule, NzProgressModule, NzGridModule, NzSwitchModule, FormsModule, NzRadioModule, NzSelectModule],
  declarations: [FormularioComponent],
  exports: [FormularioComponent]
})
export class FormularioModule {

}
