import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  items = [
    { id: 1, name: 'รายการที่ 1' },
    { id: 2, name: 'รายการที่ 2' },
    { id: 3, name: 'รายการที่ 3' },
  ];

  // ฟังก์ชัน trackBy ที่อ้างอิงจาก id
  trackById(index: number, item: any): number {
    return item.id;
  }

  // ฟังก์ชันเพื่ออัปเดตรายการข้อมูล
  updateItems() {
    this.items = [
      { id: 1, name: 'รายการที่ 1 (อัปเดต)' },
      { id: 2, name: 'รายการที่ 2 (อัปเดต)' },
      { id: 4, name: 'รายการที่ 4 (ใหม่)' },
    ];
  }
}
