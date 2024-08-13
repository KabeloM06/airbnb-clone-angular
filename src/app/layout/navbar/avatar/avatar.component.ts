import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [
    CommonModule,
    FaIconComponent,
    FontAwesomeModule
  ],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {

  imageUrl = input<string>();
  avatarSize = input<"avatar-sm" | "avatar-xl">();

}
