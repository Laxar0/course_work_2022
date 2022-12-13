import { Component, Input } from '@angular/core';
import { ISoldier } from 'src/app/models/soldier';

@Component({
  selector: 'app-soldier',
  templateUrl: './soldier.component.html',
  styleUrls: ['./soldier.component.scss'],
})
export class SoldierComponent {
  @Input() soldier: ISoldier;
}
