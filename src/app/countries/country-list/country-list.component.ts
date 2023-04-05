import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/api/data.service';
import { ListePays } from 'src/app/models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries = new Observable <ListePays[]>();
  
  constructor (private dataService: DataService){ }

  ngOnInit() : void {
    this.countries = this.dataService.getAllCountries();
  }

}
