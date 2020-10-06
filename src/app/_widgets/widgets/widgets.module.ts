import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [NavComponent, FooterComponent, SpinnerComponent],
  imports: [CommonModule],
  exports: [NavComponent, FooterComponent,SpinnerComponent],
})
export class WidgetsModule {}
