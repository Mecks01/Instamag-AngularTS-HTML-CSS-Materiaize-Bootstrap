import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";
import * as M from "../assets/materialize/js/materialize.min.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild("carousel") carousel: ElementRef;
  isSelected ;
  options = [] ;

  ngOnInit() {
    this.isSelected = true ;
    
  }

  dataMyself = [
    "assets/images/ME1.jpg",
   
    "assets/images/ME2.jpg",
   
    "assets/images/ME3.jpg",
   
    "assets/images/ME4.jpg",
   
    "assets/images/ME5.jpg",
   
    "assets/images/ME6.jpg",
 ];
 dataCountry = [
  "assets/images/CAF.jpg",
 
  "assets/images/LND.jpg",
  
  "assets/images/CND.jpg",
  
  "assets/images/DAL.jpg",
  
  "assets/images/MAU.jpg",
  
  "assets/images/NY.jpeg",
  
  "assets/images/PRS.jpg",
] ;

  showMySelf(){
    this.isSelected = false ;
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);
    console.log('dataMyself---' + this.dataMyself) ;
    
  }

  showCountry(){
    console.log('dataMyself---' + this.dataMyself) ;
    this.isSelected = false ;
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);
  }

  refresh(){
    window.location.reload() ;
  }
  
}


