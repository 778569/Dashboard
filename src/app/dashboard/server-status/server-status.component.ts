import { Component } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  
  currentStatus : 'online' | 'offline' | 'unknown' = 'online';

  constructor() {
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
