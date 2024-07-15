import { Component } from "@angular/core";

// decorator
@Component({
  // select element by a tag
  // convension: seperate words by dash, just in case it crushes with other html tag name
  selector: 'app-header',
  // display the markup and content that should be displayed by the component
  // template: '<h1>hello world</h1>'
  templateUrl: './header.component.html',
  // old version of angular: false -> module based compnent
  standalone: true,
  styleUrl: './header.component.css'
})

export class HeaderComponent {}