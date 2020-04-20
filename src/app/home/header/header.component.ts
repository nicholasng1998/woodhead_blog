import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public title;
  showSpinner = false;
  constructor(private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  navigating(){
    this.showSpinner = true;
    setTimeout(() =>{
      this.showSpinner = false;
    }, 2000);
  }
}
