# WayaWebTwo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## widgets
i have structured this project with a very high overview on user functionalities and component reusability. For that reason , i've made some plug and play modules. 
For example `spinner`  
in order to add your own custom widgets, follow the following steps 

1. `cd app/src/_widgets`
2. generate your widget componet by `ng g c [widgetName]`
3. go to `widget.module.ts`, add your new widget to the `exports array`  
4. call your widgets on any part of the project 
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
