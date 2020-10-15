import { Component } from '@angular/core';
import countryList from '../util/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  countries = '';
  limit = 5;

  handleSlideChange(newLimit: number){
    this.limit = newLimit;
  }

  generate(){
    this.shuffleArray(countryList);

    //India should be a part of random country.
    let India = countryList.indexOf('India');
    let rndm = ~~(Math.random() * this.limit) + 0;
    const tmp = countryList[India]
    countryList[India] = countryList[rndm]
    countryList[rndm] = tmp
    
    this.countries = countryList.slice(0, this.limit).join(' • ');
  }

  shuffleArray(array) {
    for (var i = array.length -1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

}
