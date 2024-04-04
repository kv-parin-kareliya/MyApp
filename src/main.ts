import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';



var ProgressSpinnerWrapper = document.querySelector(".progress-spinner-wrapper");
var MatSlideToggle = document.querySelector("mat-slide-toggle");
var section = document.querySelector("section");
if(MatSlideToggle) {
  ProgressSpinner();
}

function ProgressSpinner () {
  (section as HTMLElement).style.opacity = "1";
  setTimeout('', 50000);
  console.log("Hello");
  (ProgressSpinnerWrapper as HTMLElement).style.display = "none";
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
