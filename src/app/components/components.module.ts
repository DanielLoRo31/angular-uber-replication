import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularComponent } from './circular/circular.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ButtonComponent } from './button/button.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CircularComponent, NavBarComponent, ButtonComponent, SearchComponent, CardComponent],
  exports: [NavBarComponent, CardComponent],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class ComponentsModule { }
