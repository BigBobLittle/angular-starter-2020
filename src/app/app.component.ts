import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'waya-web-two';
  public loader = "big-boblittle"
  constructor(private toastr: ToastrService) {
    
  setTimeout(() => {
    this.loader = '';
    this.showSuccess()

  }, 3000);
  }
 
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
