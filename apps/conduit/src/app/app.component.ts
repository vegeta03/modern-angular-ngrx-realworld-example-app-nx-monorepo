import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent, NavbarComponent } from './components';
import { User } from '@realword/core/api-types';

@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent],
  selector: 'cdt-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  user = signal<User>({
    username: 'vegeta03',
    email: 'shyam.vegeta@gmail.com',
    token: 'pride',
    bio: 'Prince of Saiyans',
    image: 'https://i.pinimg.com/originals/2b/db/46/2bdb464b906e446833be1a01609f47a0.jpg',
  });

  isLoggedIn = signal<boolean>(false);
}
