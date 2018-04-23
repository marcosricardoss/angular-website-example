import { Component } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngAfterViewInit() {    
    jQuery(".togglepanel").pageslide({ direction: "right", speed: 150, modal: true });
  } 
}
