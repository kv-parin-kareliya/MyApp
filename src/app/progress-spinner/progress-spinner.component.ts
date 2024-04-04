import {Component} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

/**
 * @title Basic progress-spinner
 */
@Component({
  selector: 'progress-spinner-overview-example',
  templateUrl: '../progress-spinner/progress-spinner.component.html',
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class ProgressSpinnerOverviewExample {}
