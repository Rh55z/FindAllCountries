# RestCountriesApp

## Application de visualisation de données de pays

Cette application utilise l’API Rest Countries pour extraire des données sur les pays et les afficher
dans une interface utilisateur conviviale. Les utilisateurs peuvent rechercher des pays, filtrer les
pays par region et afficher des information détaillées sur chaque pays.

### Fonctionnalités

Les fonctionnalités de l’application comprennent :

• Affichage de tous les pays disponibles dans l’API REST Countries sur la page d’accueil

• Possibilité de rechercher un pays en utilisant un champ de saisie

• Filtrage des pays par région a l’aide d’une liste déroulante

• Affichage des informations détaillées sur un pays en cliquant sur son nom

• Affichage des pays frontaliers en cliquant sur leur nom sur la page de détails du pays

• Possibilité de basculer entre un thème clair et sombre (optionnel)

## UI

!(https://github.com/Rh55z/FindAllCountries/blob/main/img/UI.png)

## Les methodes

#### country-list.component.ts

```ts
export class CountryListComponent implements OnInit {

  countries = new Observable <ListePays[]>();
  
  constructor (private dataService: DataService){ }

  ngOnInit() : void {
    this.countries = this.dataService.getAllCountries();
  }

}
```

La classe CountryListComponent initialise une propriété
"countries" qui stocke une liste de pays en utilisant le
service DataService et la méthode getAllCountries(). Cette
liste de pays est récupérée à partir de l'API REST
Countries en utilisant l'objet HttpClient. Cette classe peut
être utilisée pour afficher une liste de tous les pays dans le
template HTML d'un composant de l'application.


#### country-list.component.html
```ts
    <div class="cards">
        <app-country-card *ngFor="let countries of countries|async" [country]="countries" ></app-country-card>
    </div>
```
La directive *ngFor est utilisée pour boucler sur la liste des pays stockée dans la propriété "countries".



DataService est une classe avec une méthode
getAllCountries() qui utilise l'objet HttpClient pour envoyer
une requête GET à l'API REST Countries pour récupérer
une liste de tous les pays. Cette méthode retourne un
Observable de type ListePays, qui est un modèle de
données utilisé pour stocker les informations de pays. La
propriété apiUrl utilise une constante de l'environnement
(environment) pour obtenir l'URL de l'API.

#### country-card.component.html

```ts
<a [routerLink]="['/']" routerLinkActive="router-link-active">
    <div class="card-item">
        <img [src]="country.flag" class="card-image">
        <div class="card-content">
            <h6 class="title">{{country.name}}</h6>
            <p *ngIf="country.population"><span class="label">Population: </span> {{country.population|number}}</p>
            <p *ngIf="country.region"><span class="label">Region: </span> {{country.region}}</p>
            <p *ngIf="country.capital"><span class="label">Capital: </span> {{country.capital}}</p>
            <p *ngIf="country.timezones"><span class="label">Timezone: </span> {{country.timezones}}</p>
        </div>
    </div>
</a>
```

Le code permet de générer une carte pour un pays avec
son nom, son drapeau, sa population, sa région, sa capitale
et ses fuseaux horaires.

-----

## API

#### data.service.ts

```ts
import { HttpClient } from '@angular/common/http';

export class DataService{

    private apiUrl = environment.apiBaseUrl;

    construction(private readonly http: HttpClient) { }

    getAllCountries(): Observable<ListePays[]>{
        const url = `${this.apiUrl}/all`
        return this.http.get<ListePays[]>(url);
    }
}
```

#### country.ts

```ts
export type Root = ListePays[]

export interface ListePays {
  name: string
  topLevelDomain: string[]
  alpha2Code: string
  alpha3Code: string
  callingCodes: string[]
  capital?: string
  altSpellings?: string[]
  subregion: string
  region: string
  population: number
  latlng?: number[]
  demonym: string
  area?: number
  timezones: string[]
  borders?: string[]
  nativeName: string
  numericCode: string
  flags: Flags
  currencies?: Currency[]
  languages: Language[]
  translations: Translations
  flag: string
  regionalBlocs?: RegionalBloc[]
  cioc?: string
  independent: boolean
  gini?: number
}
```
