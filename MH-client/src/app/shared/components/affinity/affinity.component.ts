import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-affinity',
  imports: [],
  templateUrl: './affinity.component.html',
  styleUrl: './affinity.component.css'
})
export class AffinityComponent {

  @Input() affinity: number;
}
