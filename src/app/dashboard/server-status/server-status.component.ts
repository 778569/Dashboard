import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  
  private interval? : ReturnType<typeof setInterval>;
  currentStatus : 'online' | 'offline' | 'unknown' = 'online';

  constructor() {
    
  }
  ngOnDestroy(): void {
    clearTimeout(this.interval)
  }
  ngOnInit(): void {
    setInterval(()=> {
      const rand = Math.random();

      if(rand < 0.5){
        this.currentStatus = 'online'
      }else if(rand<0.9){
        this.currentStatus = 'offline'
      }else{
        this.currentStatus ='unknown'
      }
    },5000);
  }

  
}
