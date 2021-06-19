import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  name: string = 'name';
  description: string = 'description';
  image_path: string = 'path';
  length: number = 0;
  color: string = 'color';
  style: string = 'style';

  constructor() {}

  ngOnInit(): void {}
}
