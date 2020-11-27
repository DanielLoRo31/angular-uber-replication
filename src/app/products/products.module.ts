import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ComponentsModule } from '../components/components.module';
import { TemplateComponent } from './template/template.component';
import { PanelComponent } from './panel/panel.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TemplateComponent, PanelComponent, ContentComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
