import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: 'product-dashboard.component.html',
  styleUrls: ['product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit, OnDestroy {

  searchFormGroup: FormGroup;
  searchSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.searchFormGroup = this.formBuilder.group({
      searchProduct: ['', [Validators.required]]
    });

    this.searchSubscription = this.searchFormGroup.get('searchProduct')
      .valueChanges
      .pipe(
        /*debounceTime(600),*/
        switchMap(v => {
          return this.httpClient.get('http://localhost:3000/products/', {
            params: {
              q: v
            }
          });
        }),
      ).subscribe(response => {
      });
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

}
