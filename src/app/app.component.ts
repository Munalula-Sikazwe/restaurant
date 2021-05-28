import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feature:string = 'recipes';

  onNavigate(featureName:string){
    this.feature = featureName;
  }

}
