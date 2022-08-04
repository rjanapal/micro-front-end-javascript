import {mount} from 'products/ProductsIndex';
import {mountCart} from 'cart/CartShow';

mount(document.querySelector('#display-content'));
mountCart(document.querySelector('#dev-cart'));