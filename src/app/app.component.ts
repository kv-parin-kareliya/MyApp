import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ChipsAutocompleteExample } from "./chip-set/chip-set.component";
import { TableBasicExample } from "./table-comp/table-comp.component";
import { SnackBarOverviewExample } from "./snack-bar/snack-bar.component";
import { SteperComponent, StepperVerticalExample } from "./steper/steper.component";
import { GridListDynamicExample } from "./grid-list/grid-list.component";
import { TreeFlatOverviewExample } from "./tree/tree.component";
import { ProgressBarIndeterminateExample } from "./progress-bar/progress-bar.component";
import { ProgressSpinnerOverviewExample } from "./progress-spinner/progress-spinner.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,
        MatSlideToggleModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        FormsModule,
        MatInputModule,
        NgIf,
        MatSliderModule,
        MatTabsModule,
        MatBadgeModule,
        MatDividerModule,
        MatCheckboxModule,
        MatRadioModule,
        MatChipsModule,
        CommonModule, ChipsAutocompleteExample, TableBasicExample, SnackBarOverviewExample, GridListDynamicExample, StepperVerticalExample, TreeFlatOverviewExample, ProgressBarIndeterminateExample, ProgressSpinnerOverviewExample]
})
export class AppComponent {
  checked: any;
  indeterminate: any;
  labelPosition: any;
  disabled: any;
  toggleBadgeVisibility() {
    throw new Error('Method not implemented.');
  }
  title = 'my-app';
  hidden: unknown;
}

class AppModule { }
export class ButtonOverviewExample { }
export class ToolbarBasicExample { }
export class CardOverviewExample { }
export class InputOverviewExample { }
export class SliderRangeExample { }
export class TabGroupBasicExample { }
export class CheckboxConfigurableExample {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}
export class BadgeOverviewExample {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
export class InputClearableExample {
  value = 'Clear me';
}
