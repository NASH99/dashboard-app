import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu-select',
  templateUrl: './menu-select.component.html',
  styleUrls: ['./menu-select.component.scss']
})
export class MenuSelectComponent {
  @Input() name = '';
  @Input() img = '';
  @Input() page = '';
}
