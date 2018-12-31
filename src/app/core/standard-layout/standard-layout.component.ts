import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-standard-layout',
  templateUrl: './standard-layout.component.html'
})
export class StandardLayoutComponent {
  menuIcon = faBars;
}
