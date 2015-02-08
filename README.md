# ngOnStoppedTyping
Directive that runs desired method when user has stopped typing inside of an input.

Install
-
* bower install ng-on-stopped-typing
* Add 'ngOnStoppedTyping' to your angular module, e.g. angular.module('myApp', ['ngOnStoppedTyping']);

Usage
-
<input ng-model="myModel" on-stopped-typing="doSomething()" wait-timer="800"/>

What you need to know
-
* The **on-stopped-typing** attribute works only if input has n ng-model.
* **wait-timer** is by default set to 500ms
