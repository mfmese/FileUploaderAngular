# FileUploaderUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Development Notes

### Configuration
  You should set apiUrl in environment.ts file in order to connect web api endpoints
  
### Development Strategy
  Development was made taking into account component-based development

### Run Application
#### (1) In order to run this application, you need webapi. Therefore, you can go to https://github.com/mfmese/FileUploaderWebApi link and run webapi.
#### (2) Make sure the webapi is up and running
#### (3) After setup angular environment file, you can run the application by typing ng serve in the terminal.
#### (4) Make sure apiUrl is connecting to correct webapi baseurl.

### Created Test Cases (4 case created)
  #### DialogComponent
    should Add Files button created
    should not include Finish button when the dialog opened  (for negative scenario)
  #### FileUploadComponent
    calls the fake service getFiles() method
    should render Updated Files table
    
 
