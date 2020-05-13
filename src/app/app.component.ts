import { Component } from '@angular/core';
import { Event, Router, ActivatedRoute, NavigationStart, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSpinner = true;
  title = 'WoodHead';
  constructor(private router: Router){
    this.router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart){
        this.showSpinner = true;
      }
      if(routerEvent instanceof NavigationEnd){
        this.showSpinner = false;
      }

    })
  }

}
