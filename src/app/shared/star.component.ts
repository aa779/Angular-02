import { Component, Input } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent {
  @Input() rating: number;
  starWidth: Number;

// tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    console.log('The rating is ' + this.rating + ' was clicked!');
  }
}
