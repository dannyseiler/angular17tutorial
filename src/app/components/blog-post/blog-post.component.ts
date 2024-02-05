import { Component } from '@angular/core';
import { CommentsComponent } from "../comments/comments.component";
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-blog-post',
    standalone: true,
    templateUrl: './blog-post.component.html',
    styleUrl: './blog-post.component.css',
    imports: [CommentsComponent, CommonModule, NgOptimizedImage]
})
export class BlogPostComponent {

}
