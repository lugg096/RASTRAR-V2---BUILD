(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--background: #FFF5F5;\">\r\n\r\n  <img src=\"https://rastrar.com/assets/img/bg/1.jpg\" class=\"bg\" style=\"width: 100%;\r\n  height: 100%;\" alt=\"\">\r\n\r\n  <div style=\"background: linear-gradient(\r\n    -47deg, #eb656e 0%, #bf3942 100%);height: 100%;width: 100%;opacity: 0.94;position: absolute;\">\r\n  </div>\r\n\r\n\r\n  <div style=\"    color: #fff!important;position: absolute;\r\n  width: 580px;\r\n  right: 15%;\r\n  top: 12%;font-size: 15px;\">\r\n    <h1 style=\"visibility: visible;\r\n    animation-delay: 0.15s;\r\n    animation-name: fadeInUp;font-size: 2.6em;\r\n    font-weight: 700;\r\n    line-height: 1.2;\">Plataforma Blockchain para asegurar la trazabilidad digital.</h1>\r\n    <p style=\"margin-bottom: 1.5rem!important;margin-top: 1.5rem!important;\">Rastreamos el recorrido de un producto para\r\n      consumo humano a través de toda la cadena de suministro: producción,\r\n      procesamiento, distribución y comercialización.</p>\r\n\r\n    <b class=\"text-white\" style=\"font-weight: 700;\">Caracteristicas:</b>\r\n    <ul class=\"text-white list-use\" style=\"display: block;\r\n    list-style-type: disc;\r\n    margin-block-start: 1em;\r\n    margin-block-end: 1em;\r\n    margin-inline-start: 0px;\r\n    margin-inline-end: 0px;\r\n    padding-inline-start: 40px;    margin: 0;\r\n    padding: 0;    padding-left: 1em;\">\r\n      <li style=\"list-style: circle;\">Alineado al ISO22005:2008.</li>\r\n      <li style=\"list-style: circle;\">Utilizamos certificación digital acreditada basadas en credenciales verifiables,\r\n        NFTs y certificación\r\n        Blockchain</li>\r\n      <li style=\"list-style: circle;\">Rastreo de personas, mercaderías, medicamentos, productos agricolas o ganaderos.\r\n      </li>\r\n    </ul>\r\n\r\n  </div>\r\n\r\n\r\n  <svg style=\"position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\" viewBox=\"0 0 1920 310\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"svg replaced-svg\">\r\n    <defs></defs>\r\n    <g id=\"shapeHome\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n      <g id=\"shapeHome\" transform=\"translate(0.000000, -554.000000)\" fill=\"#FFFFFF\">\r\n        <path\r\n          d=\"M-3,551 C186.257589,757.321118 319.044414,856.322454 395.360475,848.004007 C509.834566,835.526337 561.525143,796.329212 637.731734,765.961549 C713.938325,735.593886 816.980646,681.910577 1035.72208,733.065469 C1254.46351,784.220361 1511.54925,678.92359 1539.40808,662.398665 C1567.2669,645.87374 1660.9143,591.478574 1773.19378,597.641868 C1848.04677,601.75073 1901.75645,588.357675 1934.32284,557.462704 L1934.32284,863.183395 L-3,863.183395\"\r\n          id=\"shapeHome\"></path>\r\n      </g>\r\n    </g>\r\n  </svg>\r\n\r\n  <div class=\"slides01\" style=\"box-shadow: var(--shadow-black-200);padding:  0;\">\r\n\r\n    <ion-slides #slidesPadre pager=\"false\" [options]=\"slideOptsOnboarding\" style=\"height: 100%;\">\r\n\r\n      <!-- Iniciar sesion-->\r\n      <ion-slide *ngIf=\"slideLogin\" class=\"ion-no-padding\" style=\"display: block;\">\r\n\r\n        <!-- Header -->\r\n        <div style=\"position: relative;\r\n      text-align: center;\r\n      padding: 0 25px;\r\n      margin-top: 30px;\">\r\n          <img src=\"../../assets/images/logo-color.svg\" alt=\"\" style=\"height: 50px;\">\r\n        </div>\r\n\r\n        <div style=\"\r\n      color: #2F3435;\r\n      padding: 0 30px;\r\n      padding-bottom: 50px;\r\n      padding-top: 30px;\r\n      width: 100%;position: relative;\">\r\n\r\n          <!--    <p class=\"title-gradient\">¡Bienvenido/a! </p> -->\r\n          <p style=\" text-align: left;\r\n      font-size: 13px;\r\n      color: #9f9e9e;\">Complete los siguientes datos para iniciar tu cuenta.<br>Si aún no no tiene una, puede crear una\r\n            desde el botón inferior\r\n            <b>Crear cuenta</b>.\r\n          </p>\r\n\r\n          <form [formGroup]=\"loginForm\" style=\"margin-top: 20px;\">\r\n\r\n            <ion-item class=\"item-input\" lines=\"none\">\r\n              <ion-label position=\"fixed\">\r\n                <ion-icon name=\"mail\"></ion-icon>\r\n              </ion-label>\r\n              <ion-input lines=\"none\" formControlName=\"email\" type=\"email\" placeholder=\"Correo electrónico\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <app-control-messages [control]=\"loginForm.controls['email']\"></app-control-messages>\r\n\r\n            <ion-item class=\"item-input\" lines=\"none\" style=\"    margin-top: 15px;\">\r\n              <ion-label position=\"fixed\">\r\n                <ion-icon name=\"lock-closed\"></ion-icon>\r\n              </ion-label>\r\n              <ion-input lines=\"none\" [type]=\"tipo\" formControlName=\"pass\" placeholder=\"Ingrese clave\">\r\n              </ion-input>\r\n              <span class=\"btn-view\" (click)=\"mostrar()\">\r\n                <ion-icon name=\"eye\" *ngIf=\"viewPass\" style=\"font-size: 23px;color: #b3b3b3;\"></ion-icon>\r\n                <ion-icon name=\"eye-off\" *ngIf=\"!viewPass\" style=\"font-size: 23px;color: #b3b3b3;\"></ion-icon>\r\n              </span>\r\n            </ion-item>\r\n            <app-control-messages [control]=\"loginForm.controls['pass']\"></app-control-messages>\r\n\r\n          </form>\r\n\r\n          <div style=\"text-align: center;margin-top: 25px;\">\r\n            <a href=\"javascript:void(0)\"\r\n              (click)=\"(loginForm.controls['pass'].value!='' && loginForm.controls['email'].value!='')?validateFormLogin():null\"\r\n              class=\"btn-3\"\r\n              [ngClass]=\"(loginForm.controls['pass'].value!='' && loginForm.controls['email'].value!='')?'btn-3':'btn-disable'\">\r\n              Continuar</a>\r\n          </div>\r\n\r\n      <!--     <div style=\"\r\n      font-size: 14px;\r\n      margin-top: 20px;\r\n      bottom: 0;\r\n      text-align: center;\r\n      font-weight: 600;\r\n      color: #888484;\">\r\n            ¿Eres nuevo en Rastrar? <span class=\"font-grd\" style=\"cursor: pointer;\"\r\n              (click)=\"slideNewAccount=true;nextSlidePadre()\"> Crear\r\n              cuenta</span>\r\n          </div> -->\r\n\r\n        </div>\r\n      </ion-slide>\r\n\r\n      <!-- Crear cuenta -->\r\n      <ion-slide *ngIf=\"slideNewAccount\" class=\"ion-no-padding\" style=\"display: block; \">\r\n\r\n        <!-- Header -->\r\n        <div style=\"position: relative;    text-align: left;    padding: 10px;\">\r\n          <ion-icon name=\"arrow-back-outline\" (click)=\"backSlidePadre();\"\r\n            style=\"cursor: pointer;  font-size: 20px;padding: 15px;position: absolute;    top: 10px;\r\n            left: 10px; color: var(--tertiary);\">\r\n          </ion-icon> <span class=\"title-gradient\" style=\"margin-left: 50px;\r\n        margin-top: 8px;\r\n        display: inline-block;\r\n        font-size: 22px;\">Nueva cuenta </span>\r\n\r\n        </div>\r\n\r\n\r\n        <div style=\"\r\n      color: #2F3435;\r\n      padding: 0 30px;\r\n      padding-bottom: 50px;\r\n      width: 100%;position: relative;\">\r\n\r\n          <!--         <p class=\"title-gradient\">Nueva cuenta </p> -->\r\n          <p style=\"  text-align: left;\r\n      font-size: 13px;\r\n      color: #9f9e9e;\">Complete los siguientes datos para continuar con la creación de su cuenta\r\n          </p>\r\n\r\n          <form [formGroup]=\"accountForm\" style=\"margin-top: 20px;\">\r\n\r\n            <ion-item class=\"item-input\" lines=\"none\">\r\n              <ion-label position=\"fixed\">\r\n                <ion-icon name=\"person\"></ion-icon>\r\n              </ion-label>\r\n              <ion-input lines=\"none\" formControlName=\"name\" placeholder=\"Ingrese su nombre o razón social\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <app-control-messages [control]=\"accountForm.controls['name']\"></app-control-messages>\r\n\r\n            <ion-item class=\"item-input\" lines=\"none\">\r\n              <ion-label position=\"fixed\">\r\n                <ion-icon name=\"shield-checkmark\"></ion-icon>\r\n              </ion-label>\r\n              <ion-input lines=\"none\" formControlName=\"dni\" type=\"text\" placeholder=\"Ingrese DNI o RUC\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <app-control-messages [control]=\"accountForm.controls['dni']\"></app-control-messages>\r\n\r\n            <ion-item class=\"item-input\" lines=\"none\">\r\n              <ion-label position=\"fixed\">\r\n                <ion-icon name=\"mail\"></ion-icon>\r\n              </ion-label>\r\n              <ion-input lines=\"none\" formControlName=\"email\" type=\"email\" placeholder=\"Ingrese correo electrónico\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <app-control-messages [control]=\"accountForm.controls['email']\"></app-control-messages>\r\n\r\n\r\n            <ion-item class=\"item-input\" lines=\"none\">\r\n              <ion-label position=\"fixed\">\r\n                <ion-icon name=\"lock-closed\"></ion-icon>\r\n              </ion-label>\r\n              <ion-input lines=\"none\" formControlName=\"pass\" type=\"text\" placeholder=\"Ingrese una clave\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <app-control-messages [control]=\"accountForm.controls['pass']\"></app-control-messages>\r\n\r\n\r\n          </form>\r\n\r\n\r\n\r\n\r\n\r\n          <ion-item lines=\"none\" class=\"check-terms\">\r\n            <ion-label>Acepto <a href=\"javascript:void(0)\">términos y condiciones</a> </ion-label>\r\n            <ion-checkbox slot=\"start\" value=\"acepto\" (ionChange)=\"checkboxClick($event)\">\r\n            </ion-checkbox>\r\n          </ion-item>\r\n\r\n\r\n\r\n          <div style=\"text-align: center;margin-top: 18px;\">\r\n            <a href=\"javascript:void(0)\" (click)=\"ter?validateForm():null\" class=\"btn-3\"\r\n              [ngClass]=\"ter?'btn-3':'btn-disable'\">\r\n              Continuar</a>\r\n          </div>\r\n\r\n        </div>\r\n      </ion-slide>\r\n\r\n    </ion-slides>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  object-fit: cover;\n}\n\n.slides01 {\n  height: 650px;\n  max-height: 78%;\n  width: 400px;\n  min-width: 25%;\n  background: #fff;\n  margin-top: 5%;\n  border-radius: 30px;\n  position: absolute;\n  left: 10%;\n}\n\n.menu-header-bg {\n  top: 30%;\n  position: absolute;\n  height: 50%;\n  width: 480px;\n  background: linear-gradient(-47deg, #eb656e 0%, #bf3942 100%);\n  box-shadow: 0px 1px 20px rgba(94, 94, 94, 0.25);\n  transform: rotate(-40deg);\n  border-radius: 16%;\n  margin-left: -320px;\n  margin-bottom: 25px;\n  z-index: 1;\n}\n\n.menu-header-bg div {\n  width: 100%;\n  height: 100%;\n}\n\n.menu-header-bg div img {\n  width: 132px;\n  position: absolute;\n  right: 25px;\n  bottom: 70px;\n  transform: rotate(40deg);\n}\n\n@media screen and (max-width: 1200px) {\n  .slides01 {\n    left: 20%;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .title {\n    font-size: 25px;\n  }\n\n  .subtitle {\n    font-weight: 500;\n  }\n\n  .slides01 {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    left: 0;\n    border-radius: 0px;\n    max-height: 100%;\n  }\n\n  .img-left {\n    display: none !important;\n  }\n}\n\n.item-input {\n  --background: transparent;\n  padding: 0px 0;\n  border: 2px solid #e1e1e1b8;\n  border-radius: 5px;\n}\n\n.item-input ion-label {\n  flex: 0 0 100px;\n  min-width: 40px;\n  max-width: 40px;\n  text-align: center;\n}\n\n.item-input ion-label ion-icon {\n  font-size: 16px;\n  color: #c3c3c3;\n  transform: translateY(2px);\n}\n\n.item-input ion-input {\n  color: var(--black-400);\n  font-size: 13px;\n}\n\n.btn-3 {\n  display: inline-block;\n  text-decoration: none;\n  background-image: linear-gradient(to right, #da5d67, #d75a64, #d45861, #d1555f, #ce525c, #cc5059, #c94d57, #c74b54, #c44951, #c1464f, #bf444c, #bc414a);\n  padding: 15px 70px;\n  border: none;\n  border-radius: 30px;\n  color: #ffffffdc;\n  font-size: 13px;\n  box-shadow: var(--shadow-black-200);\n  font-weight: 500;\n}\n\n.btn-3 ion-icon {\n  font-size: 16px;\n  transform: translateY(5px);\n  margin-right: 3px;\n  margin-top: -8px;\n}\n\n.btn-3:hover {\n  color: #fff;\n  text-decoration: none;\n}\n\n.btn-2 {\n  display: inline-block;\n  text-decoration: none;\n  background: #ffffff8a;\n  padding: 15px 70px;\n  border-radius: 30px;\n  border: 1px solid #959595c7;\n  font-size: 12px;\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);\n  font-weight: 600;\n  color: #484848eb;\n}\n\n.btn-2:hover {\n  text-decoration: none;\n  color: #0052ffad;\n}\n\n.check-terms {\n  --background: transparent;\n}\n\n.check-terms ion-label {\n  font-size: 12px !important;\n  color: #787777 !important;\n}\n\n.check-terms ion-label a {\n  color: #787777;\n  text-decoration: underline;\n  font-weight: 700;\n}\n\n.check-terms ion-checkbox {\n  margin-right: 12px;\n  --background-checked: var(--tertiary);\n  --border-color-checked: var(--tertiary);\n  --border-color: #d3d3d3;\n}\n\n.btn-disable {\n  background: linear-gradient(90deg, #e3c9c9 10%, #e3b5b5 100%);\n  color: #fff;\n  box-shadow: var(--shadow-black-100);\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkRBQUE7RUFDQSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFDTjs7QUFJQTtFQUNFO0lBQ0UsU0FBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLGVBQUE7RUFGRjs7RUFLQTtJQUNFLGdCQUFBO0VBRkY7O0VBS0E7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQUZGOztFQUtBO0lBQ0Usd0JBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQUtFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFJSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFGTjs7QUFNRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQUpKOztBQVFBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVKQUFBO0VBZUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FBbkJGOztBQXNCRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFwQko7O0FBd0JBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBckJGOztBQXdCQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFyQkY7O0FBd0JBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSx5QkFBQTtBQXJCRjs7QUFzQkU7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0FBcEJKOztBQXFCSTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBbkJOOztBQXNCRTtFQUNFLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHVCQUFBO0FBcEJKOztBQXdCQTtFQUNFLDZEQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFyQkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5zbGlkZXMwMSB7XHJcbiAgaGVpZ2h0OiA2NTBweDtcclxuICBtYXgtaGVpZ2h0OiA3OCU7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1pbi13aWR0aDogMjUlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTAlO1xyXG59XHJcblxyXG4ubWVudS1oZWFkZXItYmcge1xyXG4gIHRvcDogMzAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogNDgwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00N2RlZywgI2ViNjU2ZSAwJSwgI2JmMzk0MiAxMDAlKTtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDIwcHggcmdiKDk0IDk0IDk0IC8gMjUlKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2JTtcclxuICBtYXJnaW4tbGVmdDogLTMyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMzJweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMjVweDtcclxuICAgICAgYm90dG9tOiA3MHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuc2xpZGVzMDEge1xyXG4gICAgbGVmdDogMjAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAuc2xpZGVzMDEge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5pbWctbGVmdCB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaXRlbS1pbnB1dCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwcHggMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZTFlMWUxYjg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgZmxleDogMCAwIDEwMHB4O1xyXG4gICAgbWluLXdpZHRoOiA0MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjYzNjM2MzO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stNDAwKTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tMyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCxcclxuICAgICNkYTVkNjcsXHJcbiAgICAjZDc1YTY0LFxyXG4gICAgI2Q0NTg2MSxcclxuICAgICNkMTU1NWYsXHJcbiAgICAjY2U1MjVjLFxyXG4gICAgI2NjNTA1OSxcclxuICAgICNjOTRkNTcsXHJcbiAgICAjYzc0YjU0LFxyXG4gICAgI2M0NDk1MSxcclxuICAgICNjMTQ2NGYsXHJcbiAgICAjYmY0NDRjLFxyXG4gICAgI2JjNDE0YVxyXG4gICk7XHJcbiAgcGFkZGluZzogMTVweCA3MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmZGM7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1ibGFjay0yMDApO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogLThweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tMzpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uYnRuLTIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjhhO1xyXG4gIHBhZGRpbmc6IDE1cHggNzBweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NTk1OTVjNztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggOHB4IHJnYigwIDAgMCAvIDUlKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNDg0ODQ4ZWI7XHJcbn1cclxuXHJcbi5idG4tMjpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDA1MmZmYWQ7XHJcbn1cclxuXHJcbi5jaGVjay10ZXJtcyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzc4Nzc3NyAhaW1wb3J0YW50O1xyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjNzg3Nzc3O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS10ZXJ0aWFyeSk7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB2YXIoLS10ZXJ0aWFyeSk7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2QzZDNkMztcclxuICB9XHJcbn1cclxuXHJcbi5idG4tZGlzYWJsZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZTNjOWM5IDEwJSwgI2UzYjViNSAxMDAlKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYmxhY2stMTAwKTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_ionic_components_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ionic-components.service */ "L8EE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/apiMongo.service */ "GtMO");
/* harmony import */ var _compartido_funciones__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../compartido/funciones */ "3Djf");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");








/* import { User, Screen } from '../interface/interfaces';
import { Web3jsService } from '../services/web3js.service'; */






const { Geolocation, Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_12__["Plugins"];
let HomePage = class HomePage {
    constructor(_auth, appComp, _fun, _apiMongo, _storage, router, formBuilder, _comp) {
        this._auth = _auth;
        this.appComp = appComp;
        this._fun = _fun;
        this._apiMongo = _apiMongo;
        this._storage = _storage;
        this.router = router;
        this.formBuilder = formBuilder;
        this._comp = _comp;
        this.load = true;
        this.indexSlide = 0;
        this.initEnd = false;
        this.viewPass = false;
        this.tipo = "password";
        this.slideNewAccount = false;
        this.slideLogin = true;
        this.methodNewAccount = false;
        this.submitAttempt = false;
        this.dataUserDB = {
            publicKey: '',
            privateKey: ''
        };
        this.dataScreensDB = [];
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            speed: 700,
            autoplay: {
                delay: 2500,
            },
        };
        this.slideOptsOnboarding = {
            allowSlideNext: false,
            allowSlidePrev: false,
            slidesPerView: 1,
            initialSlide: 0,
            speed: 400
        };
        this.ter = false;
        this.initForm();
    }
    getLocation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getCurrentPosition = yield Geolocation.getCurrentPosition();
            console.log('Current position:', this.getCurrentPosition);
        });
    }
    connetionStatus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let connection = yield Network.getStatus();
        });
    }
    ngOnInit() {
        this.connetionStatus();
        this.getLocation();
    }
    tiggerFields(form) {
        Object.keys(form.controls).forEach(field => {
            let _control = form.get(field);
            if (_control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"])
                _control.markAsTouched({ onlySelf: true });
        });
    }
    validateForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tiggerFields(this.accountForm);
            if (this.accountForm.valid)
                this.createAccount();
        });
    }
    validateFormLogin() {
        this.slideNewAccount = false;
        this.tiggerFields(this.loginForm);
        if (this.loginForm.valid)
            this.login();
    }
    checkboxClick(e) {
        console.log(e);
        this.ter = e.detail.checked;
    }
    initForm() {
        this.accountForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dni: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.loginForm = this.formBuilder.group({
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] /* ,
            secreto1: ['', Validators.required], */
        });
    }
    setParamas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*     let updateParams = await this.storage.getLocalStorage('updateParams');
                if (!this._fun.isVarInvalid(updateParams)) return;
        
                this._apiMongo._get(env.COLLECTION.general, env.TABLE_SIS.tables, 'items').subscribe(async (res: any) => {
        
                  let tablas = res.result[0].tables;
        
                  for (let index = 0; index < tablas.length; index++) {
                    const tabla = tablas[index];
                    let createTable = await this.db.createTable(tabla.key, 'default');
                    console.log('createTable', createTable);
                    if (!createTable) {
                      await this.storage.setLocalStorage('updateParams', false);
                      return;
                    }
        
                    this._apiMongo._get(env.COLLECTION.general, tabla.key, 'items').subscribe(async (data_i: any) => {
                      let items = data_i.result[0][tabla.key];
                      console.log('items DB', items);
                      items = this._fun.patchValueJsonStrArry({ data: '', key: '', name: '', status: '' }, items)
                      console.log('items', items);
                      let savedItems = await this.db.addData(items, tabla.key);
                      console.log('savedItems', savedItems);
                      let listParams = await this.db.getData(null, tabla.key) || [];
                      console.log('listParams', listParams);
                      if (!savedItems) {
                        await this.storage.setLocalStorage('updateParams', false);
                        return;
                      }
                    });
        
                    if (index == (tablas.length - 1)) {
                      await this.storage.setLocalStorage('updateParams', true);
                      console.log('PARAMTROS ACTUALIZADOS');
        
                    }
                  }
        
                }) */
        });
    }
    access(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!user.status) {
                    this._comp.presentToast('Usuario esta deshabilitado', 'danger', 1500);
                    return;
                }
                if (user.data.idens[0].number == '') {
                    yield this._fun.alertError('El usuario no tiene una identificación asociada, debe solicitar actualizar su información');
                    return;
                }
                //VALIDAR ROL DE USUARIO
                /*       const res_role: any = await this._apiMongo.get(env.COLLECTION.general, env.TABLE_SIS.role, user.data.role.key);
                      console.log('res_role', res_role);
          
                      if (this._fun.isEmpty(res_role.result)) {
                        this._comp.presentToast('Rol no existe', 'danger', 1500);
                        return;
                      }
          
                      let role = res_role.result[0][env.TABLE_SIS.role][0];
                      console.log('role', role);
          
                      if (!role.data.acc_app) {
                        this._comp.presentToast('Usuario no tiene permisos de acceso', 'danger', 1500);
                        return;
                      }
                 */
                //AGREGAR PANTALLAS DE USUARIO
                console.log('user', user);
                yield this.updateListScreen(user);
                this._auth.currentUser.next(user);
                yield this._storage.set(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].TOKEN_KEY, user.key);
                this.router.navigate(['list-qr']);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    updateListScreen(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let DNI_USER = /* '72930779' */ user.data.idens[0].number;
                console.log('DNI_USER', DNI_USER + '***');
                const res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].COLLECTION.screenUser, DNI_USER, 'items');
                console.log('res_list', res);
                if (this._fun.isEmpty(res.result)) {
                    /* this.load = false; */
                    yield this._storage.set('screenUser', []);
                    resolve(false);
                    return;
                }
                let listScreen = [];
                console.log('ENTRO 0');
                console.log('ENTRO 1', res.result[0]);
                for (let index = 0; index < res.result[0][DNI_USER].length; index++) {
                    console.log('ENTRO', index);
                    let screen = res.result[0][DNI_USER][index].data;
                    screen.key = res.result[0][DNI_USER][index].key;
                    listScreen.push(screen);
                    if (index == (res.result[0][DNI_USER].length - 1)) {
                        yield this._storage.set('screenUser', listScreen);
                        resolve(true);
                    }
                }
            }));
        });
    }
    createAccount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this._comp.presentLoading();
            console.log('CREAR 1');
            this.dataUserDB.publicKey = '';
            this.dataUserDB.privateKey = '';
            console.log('this.dataUserDB', this.dataUserDB);
            let user_data_db = {
                idens: [
                    {
                        number: this.accountForm.controls['dni'].value,
                        type: 'DNI',
                        type_name: 'DNI'
                    }
                ],
                group: {
                    "collection": "general",
                    "table": "g_prod",
                    "key": "C4",
                    "value": "Otras funciones"
                },
                documents: [],
                email: this.accountForm.controls['email'].value,
                phone: "",
                password: this.accountForm.controls['pass'].value,
                properties: "{}",
                role: {
                    collection: "general",
                    key: "ADM_USER",
                    table: "role",
                    value: "Administrador"
                },
                dids: [
                    {
                        "txType": 1,
                        "hashTransaction": "",
                        "address": ''
                    }
                ],
                status: true,
                key: this._fun.makeid(5),
                table: "employee",
                name: this.accountForm.controls['name'].value,
                grupo: {
                    "collection": "general",
                    "table": "g_prod",
                    "key": "C4",
                    "value": "Otras funciones"
                }
            };
            let saved_us = yield this._apiMongo.create(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].COLLECTION.party, 'employee', user_data_db.key, user_data_db, false);
            console.log('saved_us', saved_us.result);
            if (this._fun.isVarInvalid(saved_us.result)) {
                yield this._fun.alertError(saved_us.message);
                loading.dismiss();
                return;
            }
            this._auth.currentUser.next(saved_us.result);
            yield this._storage.set(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].TOKEN_KEY, saved_us.result.key);
            loading.dismiss();
            this.router.navigate(['list-qr']);
        });
    }
    ionViewDidEnter() {
        this.backSlidePadre();
        this.backSlidePadre();
        this.backSlidePadre();
        this.backSlidePadre();
        this.slidesPadre.update(); //REFRESCAR AL USAR MODAL
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let connection = yield Network.getStatus();
            if (!connection.connected) {
                yield this._fun.alertError('No se encuentra con conexión a internet');
                return;
            }
            let loading = yield this._comp.presentLoading();
            const res = yield this._apiMongo.filter(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].COLLECTION.party, src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].TABLE_SIS.employee, { 'data.email': this.loginForm.value.email, 'data.password': this.loginForm.value.pass });
            console.log('res', res);
            loading.dismiss();
            if (this._fun.isEmpty(res.result)) {
                yield this._fun.alertError('Usuario no existe');
                return;
            }
            const user = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].TABLE_SIS.employee][0];
            console.log('user', user);
            /*     return; */
            this.submitAttempt = true;
            if (this.loginForm.valid) {
                this.load = true;
                this.access(user);
            }
        });
    }
    verSlide() {
        this.slidesDatos.getActiveIndex().then(res => {
            if (!this.initEnd)
                this.indexSlide = res;
            this.initEnd = false;
        });
    }
    mostrar() {
        if (this.viewPass) {
            this.tipo = "password";
            this.viewPass = false;
        }
        else {
            this.tipo = "text";
            this.viewPass = true;
        }
    }
    endSlide() {
        this.initEnd = true;
        this.indexSlide = 2;
    }
    nextSlideDatos() {
        this.slidesDatos.slideNext();
    }
    nextSlidePadre() {
        this.slidesPadre.lockSwipeToNext(false);
        this.slidesPadre.slideNext();
        this.slidesPadre.lockSwipeToNext(true);
    }
    backSlidePadre() {
        this.slidesPadre.lockSwipeToPrev(false);
        this.slidesPadre.slidePrev();
        this.slidesPadre.lockSwipeToPrev(true);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"] },
    { type: _compartido_funciones__WEBPACK_IMPORTED_MODULE_10__["Funciones"] },
    { type: _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_9__["ApiMongoService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_ionic_components_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentsService"] }
];
HomePage.propDecorators = {
    slidesPadre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slidesPadre', { static: false },] }],
    slidesDatos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slidesDatos', { static: false },] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map