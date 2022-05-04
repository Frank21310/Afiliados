import { NgModule } from '@angular/core';

import { ConsultaRoutingModule } from './consulta-routing.module';

import { ConsultaComponent } from './consulta.component';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzProgressModule} from "ng-zorro-antd/progress";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {FormsModule} from "@angular/forms";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [ConsultaRoutingModule, NzCardModule, NzProgressModule, NzGridModule, NzSwitchModule, FormsModule, NzRadioModule, NzSelectModule, NzTableModule, NzDividerModule, CommonModule],
  declarations: [ConsultaComponent],
  exports: [ConsultaComponent]
})
export class ConsultaModule {

}
