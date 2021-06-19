import { Component, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface IProduct {
  _id: string;
  name: string;
  description: string;
  image: string;
  length: Number;
  color: string;
  style: String;
}
const DATA: IProduct[] = [];
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  URL: string = `http://localhost:30001/products`;
  public dataSource: IProduct[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'image',
    'length',
    'color',
    'style',
    'update',
    'delete',
  ];
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }
  loadData = () => {
    this._http.get<IProduct[]>(this.URL).subscribe((data) => {
      data.forEach((dt) => {
        DATA.push(dt);
      });
      this.dataSource = DATA;
    });
  };
  updateData = (event: MouseEvent) => {
    const table = (<HTMLElement>event.target).parentElement?.parentElement
      ?.parentElement;
    const id = table?.childNodes[0].textContent?.trim();
    const name = table?.childNodes[1].textContent?.trim();
    const description = table?.childNodes[2].textContent?.trim();
    const image_path = table?.childNodes[3].textContent?.trim();
    let length = table?.childNodes[4].textContent?.trim();
    if (length) {
      let lengthNum = parseInt(length);
    }
    const color = table?.childNodes[5].textContent?.trim();
    const style = table?.childNodes[6].textContent?.trim();
    /*  this._http.put(`${this.URL}/${id}`,{}).subscribe((data) => {
      console.log(data); */
    // });
  };
  deleteData = (event: MouseEvent) => {
    let id = (<HTMLElement>event.target).parentElement?.parentElement
      ?.parentElement?.childNodes[0].textContent;
    id = id?.trim();
    this._http.delete(`${this.URL}/${id}`).subscribe((data) => {
      console.log(data);
    });
  };
}
