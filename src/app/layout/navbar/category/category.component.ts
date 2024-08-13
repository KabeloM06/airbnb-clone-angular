import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category.model';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    FaIconComponent,
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{

  categoryService= inject(CategoryService); 

  categories: Category[] | undefined;

  currentActivatedCategory = this.categoryService.getCategoryByDefault();

  ngOnInit():void {
    this.fetchCategories();
  }

  private fetchCategories(){
    this.categories = this.categoryService.getCategories();
  }

}
