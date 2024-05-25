import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  toasts: { message: string, type: string }[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  showToast(message: string, type: string = 'info') {
    this.toasts.push({message, type});
    setTimeout(() => {
      this.toasts.shift();
    }, 3000);
  }

  getToastClass(type: string) {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  }

}
