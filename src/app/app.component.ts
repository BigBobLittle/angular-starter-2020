import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'waya-web-two';

  constructor(private toastr: ToastrService) {
    this.showSuccess()
  }
 
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
