import { Component, Input } from '@angular/core';
import { Element } from '../../../core/models/entities';

@Component({
  selector: 'app-element-icon',
  imports: [],
  templateUrl: './element-icon.component.html',
  styleUrl: './element-icon.component.css'
})
export class ElementIconComponent {

  @Input() element: Element;

}
