import {Product} from '../../model/product';
import {Status} from '../../model/status';

export interface ProductsState {
  selectedProduct: Product;
  products: Array<Product>;
  status: Status;
  errorMessage?: string;
}
