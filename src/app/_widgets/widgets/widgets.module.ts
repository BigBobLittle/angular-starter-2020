import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [NavComponent, FooterComponent],
  imports: [CommonModule],
  exports: [NavComponent, FooterComponent],
})
export class WidgetsModule {}
