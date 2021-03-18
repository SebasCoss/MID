import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  
  readonly baseAppUrl: string = 'http://localhost/API_MID/public';
  readonly idUsario: string = 'GACC961017';

  ToastTimer = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
  });

  constructor() { }  

}
