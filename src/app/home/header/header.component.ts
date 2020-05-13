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
    console.log("Hello Developer!!");
    // this.showSpinner = true;
    // document.body.style.opacity = '0.5';
    // setTimeout(() =>{
    //   this.showSpinner = false;
    //   document.body.style.opacity = '1';
    // }, 1000);
  }
}
