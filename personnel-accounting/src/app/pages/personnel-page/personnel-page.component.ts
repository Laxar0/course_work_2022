import { Component } from '@angular/core';
import { soldiers } from 'src/app/data/soldiers';
import { ISoldier } from 'src/app/models/soldier';

@Component({
  selector: 'app-personnel-page',
  templateUrl: './personnel-page.component.html',
  styleUrls: ['./personnel-page.component.scss'],
})
export class PersonnelPageComponent {
  soldiers: ISoldier[] = soldiers;
}
