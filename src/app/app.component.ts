import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
// import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
// import {MatCardModule} from '@angular/material/card';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {FormsModule} from '@angular/forms';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
// import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
// import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
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
            MatRadioModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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

class AppModule {}
export class ButtonOverviewExample {}
export class ToolbarBasicExample {}
export class CardOverviewExample {}
export class InputOverviewExample {}
export class SliderRangeExample {}
export class TabGroupBasicExample {}
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
