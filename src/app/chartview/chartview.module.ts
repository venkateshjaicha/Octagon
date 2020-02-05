import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule, MatGridListModule, MatButtonModule } from '@angular/material';
import { ChartRoutingModule } from './chartview.routing.module';
import { ChartviewComponent } from './chartview.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [ChartsModule, MatCardModule, MatGridListModule, CommonModule, TranslateModule, ChartRoutingModule],
  declarations: [ChartviewComponent]
})
export class ChartviewModule {}
