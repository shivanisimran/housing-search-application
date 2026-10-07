import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number | null = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.paramMap.get('id'));
  }

}
