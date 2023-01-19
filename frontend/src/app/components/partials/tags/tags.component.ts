import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  tags?: Tag[];
  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foodService.getAllTags().subscribe((serverTags) => {
      this.tags = serverTags;
    });
  }
}
