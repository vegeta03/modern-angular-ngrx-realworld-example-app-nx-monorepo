import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components';

@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  selector: 'cdt-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'conduit';
}
