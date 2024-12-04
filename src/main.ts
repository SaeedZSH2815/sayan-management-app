import { bootstrapApplication } from '@angular/platform-browser';
import {appConfig } from '../src/features/presentations/app/main/main.config';
import { MainComponent } from '../src/features/presentations/app/main/main.component';

bootstrapApplication(MainComponent,  appConfig)
  .catch((err) => console.error(err));
