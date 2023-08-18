import { Component , Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product! : Product;
  @Input() title = '';
  message= '';
  canEdit = false;

  onEditClick(){
    this.canEdit = !this.canEdit;
    if(this.canEdit){
      this.message = 'You can edit me!';
    } else {
      this.message = 'Im read only!';
    }
  }

}
