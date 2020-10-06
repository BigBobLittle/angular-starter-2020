import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private toastr: ToastrService) {}

  alertSuccess(msg:any) {
    this.toastr.success(msg);
  }

  alertDanger(msg:any){
    this.toastr.error(msg);
  }

  alertWarning(msg:any){
    this.toastr.warning(msg);
  }

  alertInfo(msg:any){
    this.toastr.info(msg)
  }
}
