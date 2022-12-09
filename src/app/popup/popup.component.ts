import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {


  @ViewChild('modalProduct', { static: false }) modal: ElementRef;
  @Input() source = new BehaviorSubject<string>('');

  ngOnInit(): void { }

  open(item: any) {
    this.source.next(item.name);
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }

}
