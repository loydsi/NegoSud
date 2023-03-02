import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/data/item.model';
import { WineType } from 'src/app/data/wineType.model';
import { Provider } from 'src/app/data/provider.model';
import { ItemService } from 'src/app/services/item.service';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent implements OnInit{
  items: Item[]=[];
  wineTypes : WineType[] = [];
  providers : Provider[] = [];
  term;


  constructor(private itemService :ItemService, public cartService: CartService){}

  addToCart(item) {
    if (!this.cartService.itemInCart(item)) {
      item.qtyTotal = 1;
      this.cartService.addToCart(item); //add items in cart
      this.items = [...this.cartService.getItems()];
    }
  }

  ngOnInit(): void {
    this.itemService.GetItem().subscribe(resultat => {
      this.items = resultat;
      console.log(this.items);
    });

    this.itemService.GetWineType().subscribe(resultat => {
      this.wineTypes = resultat;
      console.log(this.wineTypes);
    });

    this.itemService.GetProvider().subscribe(resultat => {
      this.providers = resultat;
      console.log(this.providers);
    });
  }
}
