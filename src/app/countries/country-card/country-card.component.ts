import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ListePays } from 'src/app/models/country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryCardComponent {
  @Input() country!: ListePays
}
