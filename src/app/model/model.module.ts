import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { ProductRepository } from './product.repository';
import { CategoryRepository } from './category.repository';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { AuthService } from './auth.service';
import { UygulamaComponent } from '../shop/uygulama/uygulama.component';

@NgModule({
    imports: [HttpClientModule],
    providers: [RestService, ProductRepository, CategoryRepository, Cart, Order, OrderRepository,AuthService,UygulamaComponent]
})
export class ModelModule { }