(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Lhg":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "VqkN");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "JbQ8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/storage.service */ "n90K");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/data-service.service */ "njzu");











var img;
var clickStream$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
let HeaderComponent = class HeaderComponent {
    constructor(_dataService, _fun, zone, _storage, _router, _auth) {
        this._dataService = _dataService;
        this._fun = _fun;
        this.zone = zone;
        this._storage = _storage;
        this._router = _router;
        this._auth = _auth;
        this.menu = [];
        this.breadcrumbList = [];
        this.imgMet = 'mm0';
        this.accounts = [];
        this.menuClose = false;
        this.nameUser = '';
        this.roleUser = '';
    }
    ngOnInit() {
        this.menuClose = false;
        this._dataService.eventBtnMn().subscribe(data => {
            if (this._fun.isVarInvalid(data))
                return;
            console.log('data', data);
            this.menuClose = !this.menuClose;
        });
        this.getUser();
        /*   if (window.ethereum.isConnected() && typeof window.ethereum !== 'undefined' && window.ethereum.selectedAddress !== null) {
            console.log('MetaMask is installed!');
            if (typeof window.ethereum != "undefined" || !window.ethereum.isMetaMask) {
              this.goMMConnect();
            }
          } else {
            console.log('MetaMask not is installed!');
          }
      
          clickStream$.subscribe((accounts: any) => {
            if (Array.isArray(accounts)) {
              this.accounts = accounts[0];
              if (accounts.length == 0) {
                this.imgMet = 'mm0';
                console.log('NIGUNO');
              }
              else this.imgMet = 'mm1';
              this.zone.run(() => {
                console.log('force update the screen');
              });
            }
          });
      
          window.ethereum.on('accountsChanged', function (accounts) {
            clickStream$.next(accounts);
          }); */
    }
    goMMConnect() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('MOSTRAR CONECCION');
            yield window.ethereum.request({ method: 'eth_requestAccounts' });
            window.owner = window.ethereum.selectedAddress; //0x0Ca82c887265a45F81ea19Ba0b77479F1E81B919
            console.log('CUENTA SELECCIONADA', window.ethereum.selectedAddress);
            this.accounts = window.ethereum.selectedAddress;
            console.log('MetaMask not is installed!');
            this.imgMet = "mm1";
        });
    }
    closeSesion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._auth.logout();
        });
    }
    getUser() {
        this._auth.getUser().subscribe(res => {
            if (this._fun.isVarInvalid(res))
                return;
            this.nameUser = res.name;
            this.roleUser = res.data.role.value;
        });
    }
    perfil() {
        this._router.navigate(['/profile']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] },
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_8__["Funciones"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
HeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Luiggi Vargas\Desktop\RASTRAR\Ionic\RASTRAR - WEB\RESTRAR-WEB-V2\src\main.ts */"zUnb");


/***/ }),

/***/ "3Djf":
/*!*****************************************!*\
  !*** ./src/app/compartido/funciones.ts ***!
  \*****************************************/
/*! exports provided: Funciones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Funciones", function() { return Funciones; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ionic_components_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ionic-components.service */ "L8EE");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/alert/alert.component */ "QC9C");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-sha256 */ "bCcq");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/apiMongo.service */ "GtMO");


/* import { ContractsService } from '../services/contracts.service'; */







let Funciones = class Funciones {
    constructor(_apiMongo, _modal, 
    /*    private _contractsService: ContractsService, */
    _comp) {
        this._apiMongo = _apiMongo;
        this._modal = _modal;
        this._comp = _comp;
        this.months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        this.configInput = {
            name: {
                long: 32
            }
        };
        this.validatorkey = _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose(
        /*  [Validators.pattern("^[^0-9][a-zA-Z0-9_]+$"), */
        [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[a-zA-Z_][a-zA-Z0-9_]+$"),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.configInput.name.long),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
    }
    /* ALERT */
    alert(type, buttonConfim, textTitle, subtitle, desablet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isUndefined(desablet))
                return true;
            let options = {
                path: '/assets/json/' + type + '.json',
                loop: true,
                autoplay: true
            };
            return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const modal = yield this._modal.create({
                    component: _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"],
                    cssClass: 'style-alert',
                    componentProps: {
                        type,
                        textTitle,
                        subtitle,
                        buttonConfim,
                        options
                    }
                });
                modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    resolve(res.data);
                }));
                return yield modal.present();
            }));
        });
    }
    alertWarning(textInfo, textBut) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.TYPE_ALERT, textBut, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_TITLE, textInfo);
        });
    }
    getTime(tms) {
        let milliseconds = Math.floor((tms % 1000) / 100);
        let seconds = Math.floor((tms / 1000) % 60);
        let minutes = Math.floor((tms / (1000 * 60)) % 60);
        let hours = Math.floor((tms / (1000 * 60 * 60)) % 24);
        /*  hours = (hours < 10) ? "0" + hours : hours;
         minutes = (minutes < 10) ? "0" + minutes : minutes;
         seconds = (seconds < 10) ? "0" + seconds : seconds; */
        hours = (hours > 1) ? hours + " horas" : (hours == 1 ? hours + " hora" : '');
        minutes = (minutes > 1) ? minutes + " minutos" : (minutes == 1 ? minutes + " minuto" : '');
        seconds = (seconds > 1) ? seconds + " segundos" : (seconds == 1 ? seconds + " segundo" : '');
        /*     seconds = (seconds < 10) ? "0" + seconds : seconds; */
        return { hours, minutes, seconds, milliseconds };
    }
    noRefObj(data) {
        //Cuando se entrega un valor a una variable de otro varible, lo que pasa en realizada es que la segunda varaible guarda una referencia
        //de la variable inicial mas no se crea una nueva variable como copia, es decir que si la variable inicial cambia la segunda tambien
        //Generar una copia de objeto
        return JSON.parse(JSON.stringify(data));
    }
    alertError(error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('ERROR', error);
            let mensj = error;
            if (!this.isVarInvalid(error.message))
                mensj = error.message;
            yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.TYPE_ERROR, 'ok', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ERROR_TITLE, mensj);
        });
    }
    alertGen(bconf, tdesc) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.TYPE_ALERT, bconf, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_TITLE, tdesc);
        });
    }
    alertChangStatus(status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let bconf = 'Si, deshabilitar';
            let tdesc = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_DISABLED;
            if (status) {
                bconf = 'Si, habilitar',
                    tdesc = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_ENABLED;
            }
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.TYPE_ALERT, bconf, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_TITLE, tdesc);
        });
    }
    timeStamp() {
        return new Date().getTime();
    }
    isString(obj) {
        if (typeof obj === 'string' || obj instanceof String)
            return true;
        else
            false;
    }
    alertChangMaster(status, sm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let bconf = 'Si, quitar';
            let tdesc = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_REMOVE_MASTER;
            if (!status) {
                bconf = 'Si, habilitar',
                    tdesc = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_ENABLED_MASTER;
            }
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.TYPE_ALERT, bconf, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_TITLE, tdesc + sm);
        });
    }
    alertDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.TYPE_ALERT, 'Si, eliminar', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_TITLE, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_DELETE);
        });
    }
    alertSave(isEdit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let bconf = 'Si, crear';
            let tdesc = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_CREATE;
            if (isEdit) {
                bconf = 'Si, actualizar';
                tdesc = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_UPDATE;
            }
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.TYPE_ALERT, bconf, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_TITLE, tdesc);
        });
    }
    alertSucc(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.TYPE_SUC, ' Ok ', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_TITLE, message);
        });
    }
    isUndefined(data) {
        if (data == undefined)
            return true;
        return false;
    }
    isVarInvalid(data) {
        if (typeof data === 'string' || data instanceof String)
            data = data.trim();
        if (data == undefined || data == null || data == 'undefined' || data == 'null' || data == '')
            return true;
        return false;
    }
    isInvalidResApi(code) {
        if (code != 200 && code != '200')
            return true;
        return false;
    }
    isEmpty(...obj) {
        let isEmpty = true;
        for (let i = 0; i < obj.length; i++) {
            if (Array.isArray(obj[i])) {
                if (obj[i].length != 0)
                    isEmpty = false;
                break;
            }
            if (this.isVarInvalid((obj[i]))) {
                isEmpty = false;
                break;
            }
        }
        return isEmpty;
    }
    strToJson(str) {
        try {
            if (this.isVarInvalid(str))
                return {};
            else {
                return JSON.parse(str);
            }
        }
        catch (error) {
            this.alertError(error);
            return null;
        }
    }
    validJson(str) {
        try {
            if (this.isVarInvalid(str))
                return '';
            else {
                let valueJson = JSON.parse(str);
                return valueJson;
            }
        }
        catch (error) {
            this.alertError(error);
            return null;
        }
    }
    enum(item) {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].enum[item];
    }
    codeToenum(code) {
        let number = parseInt(code.replaceAll("C", ""));
        return number;
    }
    closeMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            }));
        });
    }
    sortJSON(arr, key, way) {
        return arr.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            if (typeof x === 'string' || x instanceof String)
                x = x.toLowerCase();
            if (typeof y === 'string' || y instanceof String)
                y = y.toLowerCase();
            if (way) {
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            }
            if (!way) {
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            }
        });
    }
    getParmas(key_table) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].COLLECTION.general, key_table, 'items');
            return res.result[0][key_table];
        });
    }
    patchValueJson(jsonEstruc, jsonData) {
        Object.keys(jsonEstruc).forEach(key => {
            jsonEstruc[key] = this.valueKeyJSON(jsonData, key);
        });
        return jsonEstruc;
    }
    valueKeyJSON(json, keyJson) {
        var value = null;
        Object.keys(json).forEach(key => {
            if (key == keyJson)
                value = json[key];
        });
        return value;
    }
    tmspToStr(timestamp) {
        var a = new Date(timestamp);
        var year = a.getFullYear();
        var month = this.months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }
    dateStrtoTms(date, minutesLocal) {
        let newDate = new Date();
        let d_str = newDate.toDateString();
        let timehms = newDate.getTime() - new Date(d_str).getTime();
        var parts = date.split('-');
        let mydate = new Date(parts[0], parts[1] - 1, parts[2]);
        let time = mydate.getTime();
        if (minutesLocal)
            time += timehms;
        return Math.floor(time / 1000);
    }
    datelocal() {
        let newDate = new Date();
        let time = newDate.getTime();
        return Math.floor(time / 1000);
    }
    dateTmsToStr(tmp) {
        let newDate = new Date(tmp);
        let year = newDate.getFullYear();
        let month = (newDate.getMonth() + 1) < 10 ? ('0' + (newDate.getMonth() + 1)) : (newDate.getMonth() + 1);
        let day = newDate.getDate() < 10 ? ('0' + newDate.getDate()) : newDate.getDate();
        return year + '-' + month + '-' + day;
    }
    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    makeDigit(length) {
        var result = '';
        var characters = '0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    genCodeId() {
        let newDate = new Date();
        let d_str = Math.floor((newDate.getTime()) / 1000) + '';
        d_str = d_str.substr(d_str.length - 7, d_str.length - 1);
        return (d_str + '-' + this.makeid2(2));
    }
    makeid2(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    makeCode() {
        let date = new Date().getTime();
        let alt = this.makeid(20);
        return Object(js_sha256__WEBPACK_IMPORTED_MODULE_7__["sha256"])(Object(js_sha256__WEBPACK_IMPORTED_MODULE_7__["sha256"])(alt + date.toString()));
    }
};
Funciones.ctorParameters = () => [
    { type: _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__["ApiMongoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_ionic_components_service__WEBPACK_IMPORTED_MODULE_2__["IonicComponentsService"] }
];
Funciones = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Funciones);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    url: 'http://18.230.79.100:8082/',
    url2: 'http://18.230.79.100:8082',
    url_STAMP: 'http://18.230.79.100:8085/',
    node: 'http://34.229.8.55:4545',
    TOKEN_KEY: 'user-rastrar',
    /* VARIABLES SMART CONTRACT */
    auth_token: 'eyJhbGciOiJFQ0RTQSIsICJ0eXAiOiAiRVRIU0lHTiJ9.eyJpYXQiOjE2MTYyNzU4NTQxMDYsImV4cCI6MjUxNjE2Mjc1ODU0MTA2LCJkYXRhIjp7InNlY3JldF9ib2xldGgiOiJzZWNyZXRvMyIsInNlcnZlcl9pZCI6IjB4MTI0NTJBNGEyYTVEMWE0RmQyMmRhMDRmQjI1NDBDMENEMEY4NjliRiIsImNvbnRyYWN0IjoiMHg2QjVBM0JmN2NDRDlmMkZFMThDQjA2ZTZkMDEwOUYwYWVFOWFhYUQwIiwiY2xpZW50X2lkIjoiMHhkZmMwRUJiYTdGYzJmMzlGNkE3OTk4MzAzMkM4NkZFNDU3QzlEMDcwIn19.MHg4MDMyNmYxNjZmZmE0NjE1YmVjMDA2YzA4NGI2OTFjYjA1MTYxZjViZTZhMjAwYWM1MTZmMmFmZDM0NTNlMDk4NzA4MTg0OTI0MDkwZDJkOGYzNzBlOTdkZGQyYzYyNjU3YWRjZGJlZmE5NGRkOGEwOTY2MzE4MTQ1NmIwNGVhZjFj',
    auth_token_stamp: 'eyJhbGciOiJFQ0RTQSIsICJ0eXAiOiAiRVRIU0lHTiJ3.eyJpYXQiOjE2MjYyOTIwMDQ2OTIsImV4cCI6MTcyNjI5MjAwNDY5MiwiZGF0YSI6eyJzZWNyZXRfYm9sZXRoIjoiVkFDVU5FIiwic2VydmVyX2lkIjoiMHg1RWQ0YTA5QkFhOTA2ODgzYzc0ODg5QjdkMjQyNjM3ZWQ2Rjg1MTBjIiwiY29udHJhY3QiOiIweGIzMTUxOTU1YTBGOTFGMzQwMjZGZjcwRURENzhjNjNmYzFhNmRCMjQiLCJjbGllbnRfaWQiOiIweDQzNGNhZGM5RUU1QzhDYTVCQzU0MEJiOTQ1NjExRTIwQzVhOTU3MTgifX0=.MHg2NWZmNjUyYzg0Y2I0MmZhYzg3NjMxOGI2MGI4ZTY5OGVlMWRmY2Y2NmFiNDFhZTQyNTBlMWYxY2E3MzVhYmRhN2UzNzIwN2E4Mjg3NWU3NmU2M2JiZjYxM2JkYjIxMDY4ZWJjMmVjOWVhMWI2NzFkNjY0MGU0NGYxZWMxZTQwNjFi',
    ct: {
        contract: '',
        c_vc: '0xBf6303A23Be21bcE1B561017fA4fcdA851C46633',
        c_did: '0x56537ec50C9cE4fA1B63eC3A5AFDF9D51C950cE1',
        addressFrom: '0x771971F5841bC4E7caa2CE160fb1e66b81c7f0e6',
        privateKey: 'ec98753d154ea984d7c3fa1a2b939c2c6b6a51a756eb7960b1f6030eafa7e3a8'
    },
    CREDENTIAL_APP: {
        client_id: "0xAeF5F9e6e63F711310e6122Ca12DD85d36910D1D",
        api_key: "0xf4ed4213624cadd343980c55da54257b10eb7d0f47255516868f58521553eb0f00977161b148bbcdca611a94f28e9c615cd1f762a1ca27bd7c32572dcb65400f1c",
        secret_shib: "0xd208de0792d2d7e6c96078c9fdc5f323bb9b5d11",
        domain_key: "0xf6ceb38bf0cab7d4a31bc3f4dd64814daf971c1653790487256313d761e50d13",
        contract: "0x8F6492b89137b79Ced4342D49F675Dc550B41AE5" //ContractVC 
    },
    /* TIPOS DE OPERACION */
    TIPO_OPERACION_ADD_DID: "addDID",
    TIPO_OPERACION_REVOKE_DID: "revokeDID",
    TIPO_OPERACION_ENABLE_DID: "enableDID",
    TIPO_OPERACION_GET_DID: "getDID",
    /* ESTADO DE DID */
    STATUS_DID_PENDING: 'pending',
    STATUS_DID_ENABLED: 'enabled',
    STATUS_DID_DISABLED: 'disabled',
    /* TIPO DE ENTIDAD */
    /*   TIPO_ENTIDAD_PRODUCTOR: 'producer',
      TIPO_ENTIDAD_EMPLEADO: 'employee',
      TIPO_ENTIDAD_COMPRADOR: 'customer', */
    TIPO_ENTIDAD_PRODUCTO: 'product',
    TIPO_ENTIDAD_ALPACA: 'alpaca',
    /* MENSAJES DE AVISOS */
    MSG: {
        TYPE_SUC: 'success',
        TYPE_ALERT: 'alert',
        TYPE_UPLOAD: 'upload',
        TYPE_SIGN: 'sign',
        TYPE_ERROR: 'danger',
        SUC_CREATE: 'El registro fue creado correctamente.',
        SUC_UPLOAD: 'El registro fue actualizado correctamente.',
        SUC_SAVE: 'La información fue guardada correctamente.',
        SUC_UPDATE: 'La información fue actualizada correctamente.',
        SUC_DELETE: 'El registro fue eliminado correctamente.',
        SUC_DISABLED: 'El registro fue deshabilitado correctamente.',
        SUC_ENABLED: 'El registro fue habilitado correctamente.',
        ALERT_CREATE: 'Esta seguro de crear registro?',
        ALERT_SAVE: 'Esta seguro de guardar registro?',
        ALERT_UPDATE: 'Esta seguro en actualizar información del registro?',
        ALERT_DELETE: 'Esta seguro de eliminar el registro?, esta acción será irrevocable.',
        ALERT_EXIT_FORM: 'Esta seguro de salir del formulario sin guardar información?',
        ALERT_DISABLED: 'Esta seguro de deshabilitar el registro?',
        ALERT_ENABLED: 'Esta seguro de habilitar el registro?',
        ALERT_REMOVE_MASTER: 'Esta seguro de quitar privilegios de Master al usuario, respecto al contrato de ',
        ALERT_ENABLED_MASTER: 'Esta seguro de habilitar privilegios de Master al usuario, respecto al contrato de ',
        ALERT_UPLOAD: 'Se usarán datos para esta acción. Esta seguro de continuar?',
        ERROR_SERV: 'Tuvimos problemas, vuelva a intentar por favor.',
        ERROR_GENERAL: 'Tuvimos problemas, vuelva a intentar por favor.',
        SUC_TITLE: 'Genial!',
        ALERT_TITLE: 'Alerta!',
        ERROR_TITLE: 'Error!',
    },
    ETAPAS_LOTE: [
        'Lavado', 'Secado', 'Laboratorio', 'Encidame', 'Casilleros', 'Desmanches', 'Carsa', 'Pasajes', 'Peinado', 'Top de ovillo', 'BUMP', 'Almacén', 'Prensado', 'Transporte', 'Embarque'
    ],
    /* Colecciones del sistema */
    COLLECTION: {
        screenUser: 'screenUser',
        dataQrUser: 'dataQrUser',
        associateQr: 'associateQr',
        tx: 'tx',
        party: 'party',
        input: 'input',
        general: 'general',
        object: 'object',
        document: 'document',
        trace: 'trace',
        traceDetail: 'traceDetail',
        monitor: 'monitor',
        merma: 'merma',
        credential: 'credential'
    },
    /* Tablas del sistema */
    TABLE_SIS: {
        _config: '_config',
        material: 'material',
        seat: 'seat',
        role: 'role',
        tables: 'tables',
        type_user: 'type_user',
        type_doc_ident: 'type_doc_identity',
        g_clie: 'g_clie',
        g_empl: 'g_empl',
        g_prod: 'g_prod',
        type_proveedor: 'type_proveedor',
        type_category: 'type_category',
        employee: 'employee',
        producer: 'producer',
        customer: 'customer',
        action: 'action',
        orden: 'partida',
        type_button: 'type_button',
        type_callToAction: 'type_callToAction',
        type_documents: 'type_documents',
        type_input: 'type_input',
        type_field: 'type_field',
        type_field_cert: 'type_field_cert',
        type_certificate: 'type_certificate',
        external: 'external',
        register: 'register',
        type_visibility: 'type_visibility',
        class_task: 'class_task',
        type_cert_register: 'type_cert_register',
        q_unid: 'unid_measure',
        type_product: 'type_product',
        type_via: 'type_via',
        country_source: 'country_source',
        country_target: 'country_target',
        airport: 'airport',
        seaports: 'seaports',
        type_quality: 'type_quality',
        field: 'field',
        task: 'task',
        process: 'process',
        screen: 'screen',
        report: 'report',
        traceDetail: 'traceDetail',
        clasification: 'clasification',
        raza: 'raza',
        color_prod: 'color_prod',
        city_origin: 'city_origin',
        DIDRegistry: 'DIDRegistry',
        VCRegistry: 'VCRegistry',
    },
    enum: {
        cooperativa: 0,
        employee: 1,
        producer: 2,
        customer: 3,
    },
    exec: {
        created: 1,
        pending: 2,
        in_progress: 3,
        finished: 4,
        delivery: 5,
        sent: 6,
        received: 7,
        classifying: 8,
        classified: 9
    }
};


/***/ }),

/***/ "Bavz":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar {\n  opacity: 1 !important;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 260px;\n  background: #fcfbfd;\n  z-index: 100;\n  transition: all 0.5s ease;\n  float: left;\n}\n\n.sidebar:hover {\n  opacity: 1;\n}\n\n.sidebar.close {\n  opacity: 1;\n  width: 78px;\n}\n\n.sidebar .logo-details {\n  height: 55px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.sidebar .logo-details .icon {\n  font-size: 30px;\n  color: #2c2f32;\n  height: 50px;\n  min-width: 78px;\n  text-align: center;\n  line-height: 50px;\n  /*cursor: pointer;*/\n}\n\n.sidebar .logo-details .logo_name {\n  font-size: 22px;\n  color: #2c2f32;\n  font-weight: 600;\n  transition: 0.3s ease;\n  transition-delay: 0.1s;\n}\n\n.sidebar.close .logo-details .logo_name {\n  transition-delay: 0s;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.icon_min {\n  position: absolute;\n  opacity: 0;\n}\n\n.sidebar.close .logo-details .icon_min {\n  transition-delay: 0s;\n  opacity: 1;\n  pointer-events: none;\n}\n\n.sidebar .nav-links {\n  /* height: 100%; */\n  padding: 30px 0 150px 0;\n  overflow: auto;\n}\n\n.sidebar.close .nav-links {\n  overflow: visible;\n}\n\n.sidebar .nav-links::-webkit-scrollbar {\n  display: none;\n}\n\n.sidebar .nav-links li {\n  position: relative;\n  list-style: none;\n  transition: all 0.4s ease;\n  /*     margin: 0 10px;\n  margin-left: 20px; */\n}\n\nli.profile {\n  margin-left: 0 !important;\n}\n\n.sidebar .nav-links li:hover {\n  background: #efefef;\n  border-radius: 20px;\n  padding: 4px 0px;\n  margin: 0 15px;\n}\n\n.sidebar .nav-links li:hover .icon {\n  /*   color: #4b4e50; */\n}\n\n.sidebar .nav-links li:hover .nav_title .link_name {\n  /*  font-weight: 600; */\n  color: #717374;\n}\n\n.sidebar .nav-links li:hover .icon-link {\n  /*    font-weight: 600; */\n  color: #4b4e50;\n}\n\n.sidebar.close .nav-links li {\n  margin: 0;\n}\n\n.sidebar.close .nav-links li:hover {\n  background: #efefef;\n  border-radius: 15px;\n}\n\n.sidebar .nav-links li .icon-link {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.sidebar.close .nav-links li .icon-link.select-page ion-icon {\n  min-width: 50px;\n}\n\n.sidebar .nav-links li .icon {\n  /*   height: 50px; */\n  min-width: 78px;\n  text-align: center;\n  line-height: 50px;\n  color: #959a9e;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.sidebar .nav-links li .icon.arrow {\n  font-size: 18px;\n  color: #bbbfc4c7;\n}\n\n.sidebar .nav-links li.showMenu .icon.arrow {\n  transform: rotate(-180deg);\n}\n\n.sidebar.close .nav-links .icon.arrow {\n  display: none;\n}\n\n.sidebar .nav-links li a {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n\n.sidebar .nav-links li a .link_name {\n  font-size: 15px;\n  font-weight: 400;\n  color: #959a9e;\n  margin-left: -14px;\n}\n\n.sidebar.close .nav-links li a .link_name {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.sidebar .nav-links li .sub-menu {\n  padding: 6px 6px 14px 20px;\n  /*  margin-top: -10px; */\n  /* background: #efefef; */\n  display: none;\n  border-radius: 20px;\n}\n\n.sidebar .nav-links li.showMenu .sub-menu {\n  display: block;\n}\n\n.sidebar .nav-links li .sub-menu a {\n  color: #959a9e;\n  font-size: 15px;\n  padding: 5px 0;\n  white-space: nowrap;\n  opacity: 0.6;\n  transition: all 0.3 ease;\n}\n\n.sidebar .nav-links li .sub-menu a:hover {\n  opacity: 1;\n}\n\n.sidebar.close .nav-links li .sub-menu {\n  background: #efefef;\n  position: absolute;\n  left: 100%;\n  top: -10px;\n  margin-top: 0;\n  padding: 10px 20px;\n  border-radius: 0 6px 6px 0;\n  opacity: 0;\n  display: block;\n  pointer-events: none;\n  transition: 0s;\n  font-weight: 500;\n}\n\n.sidebar.close .nav-links li:hover .sub-menu {\n  top: 0;\n  opacity: 1;\n  pointer-events: auto;\n  transition: all 0.4s ease;\n}\n\n.sidebar .nav-links li .sub-menu .link_name {\n  display: none;\n}\n\n.sidebar.close .nav-links li .sub-menu .link_name {\n  display: none;\n}\n\n.sidebar.close .nav-links li .sub-menu .link_name {\n  font-size: 15px;\n  opacity: 1;\n  display: block;\n}\n\n.sidebar .nav-links li .sub-menu.blank {\n  opacity: 1;\n  pointer-events: auto;\n  padding: 3px 20px 6px 16px;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.sidebar .nav-links li:hover .sub-menu.blank {\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.sidebar .profile-details {\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #efefef;\n  padding: 6px 0;\n  width: 260px;\n  transition: all 0.5s ease;\n}\n\n.sidebar.close .profile-details {\n  background: none;\n  transition: all 0s ease;\n}\n\n.sidebar.close .profile-details {\n  width: 78px;\n}\n\n.sidebar .profile-details .profile-content {\n  display: flex;\n  align-items: center;\n}\n\n.sidebar .profile-details img {\n  height: 52px;\n  width: 52px;\n  object-fit: cover;\n  border-radius: 16px;\n  margin: 0 14px 0 12px;\n  background: #efefef;\n  transition: all 0.5s ease;\n}\n\n.sidebar.close .profile-details img {\n  height: 40px;\n  width: 40px;\n  padding: 7px;\n}\n\n.sidebar .profile-details .profile_name,\n.sidebar .profile-details .job {\n  color: #959a9e;\n  font-size: 16px;\n  font-weight: 500;\n  /*   white-space: nowrap; */\n  white-space: normal;\n}\n\n.sidebar.close .profile-details .profile-content,\n.sidebar.close .profile-details .profile_name,\n.sidebar.close .profile-details .job {\n  display: none;\n}\n\n.sidebar .name-job {\n  margin-left: -20px;\n}\n\n.sidebar .profile-details .job {\n  font-size: 12px;\n}\n\n.home-section {\n  position: relative;\n  background: #e4e9f7;\n  height: 100vh;\n  left: 260px;\n  width: calc(100% - 260px);\n  transition: all 0.5s ease;\n}\n\n.sidebar.close ~ .home-section {\n  left: 78px;\n  width: calc(100% - 78px);\n}\n\n.home-section .home-content {\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n\n.home-section .home-content .icon-menu,\n.home-section .home-content .text {\n  color: #fcfbfd;\n  font-size: 35px;\n}\n\n.home-section .home-content .icon-menu {\n  margin: 0 15px;\n  cursor: pointer;\n}\n\n.home-section .home-content .text {\n  font-size: 26px;\n  font-weight: 600;\n}\n\n.btn-menu {\n  transition: all 0.2s ease;\n}\n\n.sidebar.close .btn-menu {\n  right: -65px !important;\n  transform: rotate(180deg);\n}\n\n.select-page {\n  background: #efefef;\n  border-radius: 20px;\n  padding: 4px 0px;\n  margin: 0 15px;\n}\n\n.select-page .icon {\n  color: #4b4e50;\n}\n\n.select-page .nav_title .link_name {\n  /*  font-weight: 600; */\n  color: #717374;\n}\n\n.select-sub-page {\n  font-weight: 700;\n  color: #2a2b4a !important;\n}\n\n.select-sub-page ion-icon {\n  color: #2a2b4a !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUVKOztBQUNBO0VBQ0ksb0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNBO0VBQ0ksb0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0E7c0JBQUE7QUFDSjs7QUFHQTtFQUNJLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUk7RUFDRSxzQkFBQTtBQUFOOztBQUVJO0VBQ0csdUJBQUE7RUFDQyxjQUFBO0FBQVI7O0FBSUE7RUFDQyx5QkFBQTtFQUNHLGNBQUE7QUFESjs7QUFJQTtFQUNJLFNBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtBQURKOztBQUlBO0VBQ0Usb0JBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLDBCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFJQTtFQUNJLDBCQUFBO0VBQ0Qsd0JBQUE7RUFDQyx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURKOztBQUtBO0VBQ0ksY0FBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFGSjs7QUFLQTtFQUNJLFVBQUE7QUFGSjs7QUFLQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksTUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBRko7O0FBS0E7RUFDSSxRQUFBO0VBQ0EsMkJBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGSjs7QUFPQTs7RUFFSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0YsMkJBQUE7RUFDRSxtQkFBQTtBQUpKOztBQU9BOzs7RUFHSSxhQUFBO0FBSko7O0FBT0E7RUFDSSxrQkFBQTtBQUpKOztBQU9BO0VBQ0ksZUFBQTtBQUpKOztBQU9BO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUpKOztBQU9BO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0FBSko7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7O0VBRUksY0FBQTtFQUNBLGVBQUE7QUFKSjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFPQTtFQUNJLHlCQUFBO0FBSko7O0FBT0E7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0FBSko7O0FBUUE7RUFDSyxtQkFBQTtFQUNELG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTEo7O0FBT0k7RUFDSSxjQUFBO0FBTFI7O0FBT0k7RUFDRyx1QkFBQTtFQUNDLGNBQUE7QUFMUjs7QUFTQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7QUFOSjs7QUFPSTtFQUNJLHlCQUFBO0FBTFIiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmNmYmZkO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5zaWRlYmFyOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNpZGViYXIuY2xvc2Uge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiA3OHB4O1xyXG59XHJcblxyXG4uc2lkZWJhciAubG9nby1kZXRhaWxzIHtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5sb2dvLWRldGFpbHMgLmljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMyYzJmMzI7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDc4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIC8qY3Vyc29yOiBwb2ludGVyOyovXHJcbn1cclxuXHJcbi5zaWRlYmFyIC5sb2dvLWRldGFpbHMgLmxvZ29fbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzJjMmYzMjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG59XHJcblxyXG4uc2lkZWJhci5jbG9zZSAubG9nby1kZXRhaWxzIC5sb2dvX25hbWUge1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5pY29uX21pbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyLmNsb3NlIC5sb2dvLWRldGFpbHMgLmljb25fbWluIHtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxufVxyXG5cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGlua3Mge1xyXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gICAgcGFkZGluZzogMzBweCAwIDE1MHB4IDA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnNpZGViYXIuY2xvc2UgLm5hdi1saW5rcyB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rczo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIC8qICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyAqL1xyXG59XHJcblxyXG5saS5wcm9maWxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICAvKiAgIGNvbG9yOiAjNGI0ZTUwOyAqL1xyXG4gICAgfVxyXG4gICAgLm5hdl90aXRsZSAubGlua19uYW1lIHtcclxuICAgICAgIC8qICBmb250LXdlaWdodDogNjAwOyAqL1xyXG4gICAgICAgIGNvbG9yOiAjNzE3Mzc0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpOmhvdmVyIC5pY29uLWxpbmsge1xyXG4gLyogICAgZm9udC13ZWlnaHQ6IDYwMDsgKi9cclxuICAgIGNvbG9yOiAjNGI0ZTUwO1xyXG59XHJcblxyXG4uc2lkZWJhci5jbG9zZSAubmF2LWxpbmtzIGxpIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNpZGViYXIuY2xvc2UgLm5hdi1saW5rcyBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSAuaWNvbi1saW5rIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2lkZWJhci5jbG9zZSAubmF2LWxpbmtzIGxpIC5pY29uLWxpbmsuc2VsZWN0LXBhZ2UgaW9uLWljb257XHJcbiAgICBtaW4td2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgLmljb257XHJcbiAgLyogICBoZWlnaHQ6IDUwcHg7ICovXHJcbiAgICBtaW4td2lkdGg6IDc4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjOTU5YTllO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSAuaWNvbi5hcnJvdyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI2JiYmZjNGM3O1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpLnNob3dNZW51IC5pY29uLmFycm93IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG59XHJcblxyXG4uc2lkZWJhci5jbG9zZSAubmF2LWxpbmtzIC5pY29uLmFycm93IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSBhIC5saW5rX25hbWUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjOTU5YTllO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci5jbG9zZSAubmF2LWxpbmtzIGxpIGEgLmxpbmtfbmFtZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgLnN1Yi1tZW51IHtcclxuICAgIHBhZGRpbmc6IDZweCA2cHggMTRweCAyMHB4O1xyXG4gICAvKiAgbWFyZ2luLXRvcDogLTEwcHg7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZWZlZmVmOyAqL1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpLnNob3dNZW51IC5zdWItbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSAuc3ViLW1lbnUgYSB7XHJcbiAgICBjb2xvcjogIzk1OWE5ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSAuc3ViLW1lbnUgYTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc2lkZWJhci5jbG9zZSAubmF2LWxpbmtzIGxpIC5zdWItbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCA2cHggNnB4IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IDBzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnNpZGViYXIuY2xvc2UgLm5hdi1saW5rcyBsaTpob3ZlciAuc3ViLW1lbnUge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSAuc3ViLW1lbnUgLmxpbmtfbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2lkZWJhci5jbG9zZSAubmF2LWxpbmtzIGxpIC5zdWItbWVudSAubGlua19uYW1lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaWRlYmFyLmNsb3NlIC5uYXYtbGlua3MgbGkgLnN1Yi1tZW51IC5saW5rX25hbWUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIC5zdWItbWVudS5ibGFuayB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAzcHggMjBweCA2cHggMTZweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaTpob3ZlciAuc3ViLW1lbnUuYmxhbmsge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5wcm9maWxlLWRldGFpbHMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcblxyXG4uc2lkZWJhci5jbG9zZSAucHJvZmlsZS1kZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMHMgZWFzZTtcclxufVxyXG5cclxuLnNpZGViYXIuY2xvc2UgLnByb2ZpbGUtZGV0YWlscyB7XHJcbiAgICB3aWR0aDogNzhweDtcclxufVxyXG5cclxuLnNpZGViYXIgLnByb2ZpbGUtZGV0YWlscyAucHJvZmlsZS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2lkZWJhciAucHJvZmlsZS1kZXRhaWxzIGltZyB7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICB3aWR0aDogNTJweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIG1hcmdpbjogMCAxNHB4IDAgMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcblxyXG4uc2lkZWJhci5jbG9zZSAucHJvZmlsZS1kZXRhaWxzIGltZyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuXHJcblxyXG59XHJcblxyXG4uc2lkZWJhciAucHJvZmlsZS1kZXRhaWxzIC5wcm9maWxlX25hbWUsXHJcbi5zaWRlYmFyIC5wcm9maWxlLWRldGFpbHMgLmpvYiB7XHJcbiAgICBjb2xvcjogIzk1OWE5ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgLyogICB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG5cclxuLnNpZGViYXIuY2xvc2UgLnByb2ZpbGUtZGV0YWlscyAucHJvZmlsZS1jb250ZW50LFxyXG4uc2lkZWJhci5jbG9zZSAucHJvZmlsZS1kZXRhaWxzIC5wcm9maWxlX25hbWUsXHJcbi5zaWRlYmFyLmNsb3NlIC5wcm9maWxlLWRldGFpbHMgLmpvYiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmFtZS1qb2Ige1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhciAucHJvZmlsZS1kZXRhaWxzIC5qb2Ige1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uaG9tZS1zZWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNlNGU5Zjc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbGVmdDogMjYwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLnNpZGViYXIuY2xvc2UgfiAuaG9tZS1zZWN0aW9uIHtcclxuICAgIGxlZnQ6IDc4cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzhweCk7XHJcbn1cclxuXHJcbi5ob21lLXNlY3Rpb24gLmhvbWUtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhvbWUtc2VjdGlvbiAuaG9tZS1jb250ZW50IC5pY29uLW1lbnUsXHJcbi5ob21lLXNlY3Rpb24gLmhvbWUtY29udGVudCAudGV4dCB7XHJcbiAgICBjb2xvcjogI2ZjZmJmZDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5cclxuLmhvbWUtc2VjdGlvbiAuaG9tZS1jb250ZW50IC5pY29uLW1lbnUge1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ob21lLXNlY3Rpb24gLmhvbWUtY29udGVudCAudGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYnRuLW1lbnUge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnNpZGViYXIuY2xvc2UgLmJ0bi1tZW51IHtcclxuICAgIHJpZ2h0OiAtNjVweCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoKzE4MGRlZyk7XHJcbn1cclxuXHJcblxyXG4uc2VsZWN0LXBhZ2V7XHJcbiAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjNGI0ZTUwO1xyXG4gICAgfVxyXG4gICAgLm5hdl90aXRsZSAubGlua19uYW1lIHtcclxuICAgICAgIC8qICBmb250LXdlaWdodDogNjAwOyAqL1xyXG4gICAgICAgIGNvbG9yOiAjNzE3Mzc0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VsZWN0LXN1Yi1wYWdle1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMmEyYjRhICFpbXBvcnRhbnQ7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBjb2xvcjogIzJhMmI0YSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "GFcb":
/*!*******************************************************!*\
  !*** ./src/app/components/alert/alert.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".svg {\n  /*     padding-top: 40%; */\n  margin: auto;\n  width: 18%;\n  margin: 20px auto;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLDBCQUFBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Zne1xyXG4vKiAgICAgcGFkZGluZy10b3A6IDQwJTsgKi9cclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "GtMO":
/*!**********************************************!*\
  !*** ./src/app/services/apiMongo.service.ts ***!
  \**********************************************/
/*! exports provided: ApiMongoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiMongoService", function() { return ApiMongoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-sha256 */ "bCcq");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_4__);





let ApiMongoService = class ApiMongoService {
    constructor(_http) {
        this._http = _http;
        this.corporationCode = '_STAMPING';
        this.dominio = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auth_token}`
        });
    }
    delete(collection, table, key) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}`);
        /*   console.log('URL DELETE',URL); */
        return this._http.delete(URL).toPromise();
    }
    getkey(collection, table, key) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}`);
        return this._http.get(URL).toPromise();
    }
    changeStatus(collection, table, key, status) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}?status=${status}`);
        return this._http.post(URL, {}).toPromise();
    }
    create(collection, table, key, body, upsert) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}/?upsert=${upsert}`);
        /* console.log('URL', URL); */
        /* console.log('collection', collection);
        console.log('table', table);
        console.log('key', key);
        console.log('upsert', upsert); */
        /* console.log('body', body); */
        return this._http.post(URL, body).toPromise();
    }
    get(collection, table, item) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${item}`);
        console.log('URL', URL);
        return this._http.get(URL).toPromise();
    }
    postGenerate(params, body) {
        const URL = this.dominio.concat(`${params}`);
        /* console.log('URL', URL); */
        /* console.log('body', body); */
        return this._http.post(URL, body, { headers: this.headers }).toPromise();
    }
    filter(collection, table, filter) {
        const URL = this.dominio.concat(`db/${collection}/${table}/filter`);
        /* console.log('URL', URL); */
        /* console.log('filter',filter); */
        return this._http.post(URL, filter).toPromise();
    }
    uploadFile(fileB64, ext) {
        const body = {
            hash: Object(js_sha256__WEBPACK_IMPORTED_MODULE_4__["sha256"])(fileB64),
            ext: ext,
            type: "base64",
            content: fileB64,
        };
        const URL = this.dominio.concat(`upload`);
        return this._http.post(URL, body, { headers: this.headers });
    }
    _filter(collection, table, filter) {
        const URL = this.dominio.concat(`db/${collection}/${table}/filter`);
        /* console.log('URL', URL); */
        return this._http.post(URL, filter);
    }
    _get(collection, table, item) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${item}`);
        return this._http.get(URL);
    }
    _create(collection, table, key, body, upsert) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}/?upsert=${upsert}`);
        /* console.log('URL', URL); */
        /*  console.log('collection', collection);
         console.log('table', table);
         console.log('key', key);
         console.log('upsert', upsert); */
        /* console.log('body', body); */
        return this._http.post(URL, body);
    }
};
ApiMongoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiMongoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiMongoService);



/***/ }),

/***/ "JbQ8":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropbtn {\n  cursor: pointer;\n}\n\n.dropdown {\n  position: absolute;\n  display: inline-block;\n}\n\n.menuOpen {\n  margin-left: 10px;\n  transition: 0.2s ease;\n}\n\n.menuClose {\n  margin-left: 35px;\n  transition: 0.2s ease;\n}\n\n.dropdown-content {\n  /*   display: none; */\n  position: absolute;\n  background-color: #ffffff;\n  min-width: 270px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  right: 0;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  font-size: 13px;\n}\n\n.dropdown-content a:hover {\n  color: var(--main-color) !important;\n  background-color: #f9fbff;\n}\n\n.dropdown-content div:hover {\n  background-color: #f9fbff;\n}\n\n.dropdown-content div:hover p {\n  color: var(--main-color) !important;\n}\n\n.dropdown-content div:hover p span {\n  color: var(--main-color) !important;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.text-dash {\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.pulse-color {\n  animation: pulse_color 2s ease infinite;\n}\n\n.mm0 {\n  color: #7c7c7c;\n}\n\n.mm1 {\n  color: #20e24a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDQSxxQkFBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLG1DQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQVNFLHlCQUFBO0FBTkY7O0FBRkU7RUFLRSxtQ0FBQTtBQUFKOztBQUpJO0VBQ0UsbUNBQUE7QUFNTjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFJQTtFQUNFLHVDQUFBO0FBREY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkYiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3BidG4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubWVudU9wZW57XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcbi5tZW51Q2xvc2V7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbi8qICAgZGlzcGxheTogbm9uZTsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBtaW4td2lkdGg6IDI3MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmZlxyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBkaXY6aG92ZXIge1xyXG4gIHAge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmZlxyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udGV4dC1kYXNoe1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuXHJcbi5wdWxzZS1jb2xvciB7XHJcbiAgYW5pbWF0aW9uOiBwdWxzZV9jb2xvciAycyBlYXNlIGluZmluaXRlO1xyXG59XHJcblxyXG5cclxuLm1tMHtcclxuICBjb2xvcjogcmdiKDEyNCwgMTI0LCAxMjQpO1xyXG59XHJcblxyXG4ubW0xe1xyXG4gIGNvbG9yOiByZ2IoMzIsIDIyNiwgNzQpO1xyXG59Il19 */");

/***/ }),

/***/ "L8EE":
/*!******************************************************!*\
  !*** ./src/app/services/ionic-components.service.ts ***!
  \******************************************************/
/*! exports provided: IonicComponentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicComponentsService", function() { return IonicComponentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let IonicComponentsService = class IonicComponentsService {
    constructor(loadingController, actionSheetController, toastController) {
        this.loadingController = loadingController;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
    }
    presentLoading(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const loading = yield this.loadingController.create({
                    message: text ? text : 'Por favor espere...',
                    backdropDismiss: false,
                    showBackdrop: true,
                    spinner: "bubbles"
                });
                yield loading.present();
                resolve(loading);
            }));
        });
    }
    /*   async presentLoading( message:string, duration:number ) {
        const loading = await this.loadingController.create({
          message: 'Por favor espere...',
          backdropDismiss: false,
          showBackdrop: true,
          spinner: "bubbles"
        });
        await loading.present();
    
        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed!');
      }
     */
    presentToast(texto, color, duracion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: texto,
                duration: duracion,
                color: color
            });
            toast.present();
        });
    }
    resizeImage(base64Str, maxWidth = 180, maxHeight = 150) {
        return new Promise((resolve) => {
            let img = new Image();
            img.src = base64Str;
            img.onload = () => {
                let canvas = document.createElement('canvas');
                const MAX_WIDTH = maxWidth;
                const MAX_HEIGHT = maxHeight;
                let width = img.width;
                let height = img.height;
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                }
                else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                let ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL());
            };
        });
    }
};
IonicComponentsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
IonicComponentsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IonicComponentsService);



/***/ }),

/***/ "MR0u":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "Z0AN");
/* harmony import */ var _sidebar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component.scss */ "Bavz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-service.service */ "njzu");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");









let SidebarComponent = class SidebarComponent {
    constructor(_fun, _auth, router, _dataService) {
        this._fun = _fun;
        this._auth = _auth;
        this.router = router;
        this._dataService = _dataService;
        this.selectPage = '';
        this.nameUser = '';
        this.roleUser = '';
    }
    ngOnInit() {
        this.getUser();
        this.configData();
        this.btnMenu(null);
    }
    configData() {
        if (this.router.url == '/procesos' || this.router.url == '/task' || this.router.url == '/pantalla' || this.router.url == '/campos' || this.router.url == '/acciones' || this.router.url == '/param')
            this.selectPage = '/config';
        else
            this.selectPage = this.router.url;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                // Show loading indicator
                console.log('event1', event.url);
                if (event.url == '/procesos' || event.url == '/task' || event.url == '/pantalla' || event.url == '/campos' || event.url == '/acciones' || event.url == '/param')
                    this.selectPage = '/config';
                else
                    this.selectPage = event.url;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                // Hide loading indicator
                /*   console.log('event2',event); */
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationError"]) {
                // Hide loading indicator
                console.log(event.error);
            }
        });
    }
    getUser() {
        this._auth.getUser().subscribe(res => {
            if (this._fun.isVarInvalid(res))
                return;
            if (res.name.length > 16) {
                let n = res.name.split(' ');
                this.nameUser = n[0] + ' ' + n[1] || '';
            }
            else
                this.nameUser = res.name;
            this.roleUser = res.data.role.value;
        });
    }
    perfil() {
        this.router.navigate(['/profile']);
    }
    navigateRouter(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate([page]);
        });
    }
    showMenu(event) {
        console.log('event', event.target);
        event.target.parentElement.parentElement.classList.toggle('showMenu');
    }
    btnMenu(event) {
        let sidebar = document.querySelector(".sidebar");
        console.log('sidebar', sidebar);
        sidebar.classList.toggle('close');
        this._dataService.eventBtnMenu.next(true);
    }
    logOut() {
        this._auth.logout();
    }
};
SidebarComponent.ctorParameters = () => [
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_7__["Funciones"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
SidebarComponent.propDecorators = {
    appPages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sidebar',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidebar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SidebarComponent);



/***/ }),

/***/ "QC9C":
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./alert.component.html */ "VqP8");
/* harmony import */ var _alert_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.component.scss */ "GFcb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_ionic_components_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ionic-components.service */ "L8EE");






let AlertComponent = class AlertComponent {
    constructor(ngZone, _modal, _comp) {
        this.ngZone = ngZone;
        this._modal = _modal;
        this._comp = _comp;
        this.buttonConfim = '';
        this.textTitle = '';
        this.subtitle = '';
        this.type = ''; // success | danger | alert
    }
    ngOnInit() { }
    animationCreated(animationItem) {
        this.animationItem = animationItem;
        setTimeout(() => {
            this.pause();
        }, 1500);
    }
    stop() {
        this.ngZone.runOutsideAngular(() => this.animationItem.stop());
    }
    play() {
        this.ngZone.runOutsideAngular(() => this.animationItem.play());
    }
    pause() {
        this.ngZone.runOutsideAngular(() => this.animationItem.pause());
    }
    closeModal() {
        this._modal.dismiss();
    }
    confirm() {
        this._modal.dismiss({ confirm: true });
    }
};
AlertComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_ionic_components_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentsService"] }
];
AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-alert',
        template: _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_alert_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AlertComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "Tx//":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "/Lhg");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "MR0u");






let LayoutModule = class LayoutModule {
};
LayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ]
    })
], LayoutModule);



/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "n90K");





let AuthGuard = class AuthGuard {
    constructor(_navCtrl, _storage, router) {
        this._navCtrl = _navCtrl;
        this._storage = _storage;
        this.router = router;
    }
    canActivate(route) {
        return this._storage.validarAuth().then(res => {
            if (!res) {
                this._navCtrl.navigateRoot('login');
                return !false;
            }
            return true;
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "VqP8":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/alert/alert.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"svg hide\" id=\"svg\">\r\n    <ng-lottie [options]=\"options\" (animationCreated)=\"animationCreated($event)\" (complete)=\"stop()\"></ng-lottie>\r\n  </div>\r\n  <div style=\"text-align: center;position: absolute;top: 45%;width: 100%;\">\r\n    <p style=\"font-size: 25px;color: #595959;font-weight: 600;margin-bottom: 0;\">{{textTitle}}</p>\r\n    <p style=\"margin-top: 5px;color: #5f5f5f;font-size: 16px;margin-left: 20px;margin-right: 20px;\">{{subtitle}}</p>\r\n\r\n   \r\n      <ion-button (click)=\"type != 'alert'?closeModal():confirm()\" class=\"button-02\"\r\n        style=\"--border-radius: 5px;font-size: 14px;--background: #2778c4;height: 40px;text-transform:initial;font-weight: 500;\">\r\n        {{buttonConfim}}\r\n      </ion-button>\r\n\r\n      <ion-button *ngIf=\"type == 'alert'\" (click)=\"closeModal()\" class=\"button-02\"\r\n        style=\"--border-radius: 5px;font-size: 14px;--background: rgb(221, 51, 51);height: 40px;font-weight: 500;\">\r\n        Cancelar\r\n      </ion-button>\r\n   \r\n\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "VqkN":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 55px;\">\r\n  <div style=\"position: absolute;margin-left: 20px;margin-top: 12px;\">\r\n    <p style=\"    font-size: 20px;\r\n    color: #2a2b4a;\r\n    font-weight: 800;\r\n    \" [ngClass]=\"menuClose?'menuClose':'menuOpen'\" >{{title}}</p>\r\n  </div>\r\n\r\n<!-- \r\n  <div class=\"dropdown\" style=\"right: 50px;margin-top:8px;\">\r\n    <div class=\"dropbtn row\" (click)=\"goMMConnect()\">\r\n      <p style=\"margin:0;font-size: 11px;line-height: 1.4;margin-left:8px;color: rgb(65, 62, 62);padding-top: 4px;\">\r\n        <ion-icon name=\"radio-button-on-outline\" style=\"font-size: 11px;transform: translateY(2px) translateX(-3px); \"\r\n          [ngClass]=\"imgMet\"></ion-icon>{{imgMet=='mm0'?'Desconectado':'Conectado'}} <br>\r\n        <span style=\"font-size: 12px;color: rgb(177, 172, 172);\"> {{imgMet!='mm0'? (accounts | slice:0:6)+' ...\r\n          '+(accounts | slice:38:42) :'Conectar cuenta'}}\r\n        </span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"dropdown\" style=\"right: 135px;margin-top:10px\">\r\n    <div class=\"dropbtn\">\r\n      <img [src]=\"'../../../assets/images/'+imgMet+'.png'\"\r\n        style=\"height: 32px;width: 32px;object-fit: cover;\">\r\n    </div>\r\n\r\n    <div class=\"dropdown-content\">\r\n      <div style=\"border-bottom: 1px solid rgb(243, 243, 243);display: flex;align-items:  flex-start\"\r\n        (click)=\"perfil()\">\r\n        <div style=\"display: inline-block;\">\r\n          <img src=\"../../../assets/images/usermt.png\"\r\n            style=\"height: 70px;width: 70px;border-radius: 100%;object-fit: cover;margin: 17px;\">\r\n        </div>\r\n\r\n        <div style=\"display: inline-block;padding-top: 15px;\">\r\n\r\n          <p style=\"font-size: 14px;color: black;font-weight: 600;transform: translateY(10px);\">\r\n            {{nameUser}}<br> <span style=\"font-size: 10px;color:var(--black-400);font-weight: 500; \">{{roleUser}}</span></p>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <a href=\"javascript:void(0)\" style=\"border-bottom: 1px solid rgb(243, 243, 243);\" (click)=\"perfil()\">\r\n        <ion-icon name=\"person-outline\" style=\"font-size: 14px;transform: translateY(2px);margin-right: 5px;\"></ion-icon> \r\n        Mi perfil</a>\r\n      <a href=\"javascript:void(0)\" (click)=\"closeSesion()\">\r\n        <ion-icon name=\"power-outline\" style=\"font-size: 14px;transform: translateY(2px);margin-right: 5px;\"></ion-icon> \r\n        Cerrar sesión</a>\r\n    </div>\r\n  </div> -->\r\n</div>\r\n\r\n\r\n<div>\r\n  <!-- <ul class=\"nav\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"home\">Home</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"stores\">Stores</a>\r\n    </li>\r\n  </ul> -->\r\n\r\n  <!-- breadcrumb -->\r\n  <!--   <div class=\"col\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\" \r\n        *ngFor=\"let item of breadcrumbList; let i = index\"\r\n        [class.active]=\"i===breadcrumbList.length-1\">\r\n        <a  *ngIf=\"i!==breadcrumbList.length-1\">\r\n          {{ item.name }}\r\n        </a>\r\n        <span *ngIf=\"i===breadcrumbList.length-1\">{{ item.name }}</span>\r\n      </li>\r\n    </ol>\r\n  </div> -->\r\n</div>");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ "Z0AN":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/sidebar.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar\">\r\n    <div class=\"logo-details\" style=\"    margin-top: 5px;\">\r\n\r\n       <!--  <ion-icon name=\"logo-amplify\" class=\"fab fa-stripe-s icon\"></ion-icon> -->\r\n        <img src=\"../../../assets/images/logo-min.svg\" alt=\"\" class=\"icon icon_min\" style=\"height: 40px;\">\r\n        <img src=\"../../../assets/images/logo-color.svg\" alt=\"\" class=\"logo_name\" style=\"height: 40px; margin-left: 23px;\">\r\n        <!-- <span class=\"logo_name\">Stamping</span> -->\r\n    </div>\r\n\r\n    <ul class=\"nav-links\">\r\n\r\n        <li *ngFor=\"let p of appPages; let i = index\">\r\n\r\n            <div class=\"icon-link\" *ngIf=\"p.modules.length == 0\" (click)=\"navigateRouter(p.url)\"\r\n            style=\"cursor: pointer;\" [ngClass]=\"(selectPage ==p.url)?'select-page':'icon-link'\">\r\n                <a href=\"javascript:void(0)\">\r\n                    <ion-icon [name]=\"p.icon\" class=\"icon\"></ion-icon>\r\n                    <span class=\"link_name\">  {{ p.name }}</span>\r\n                </a>\r\n                <ion-icon name=\"chevron-down-outline\" *ngIf=\"p.modules.length > 0\" class=\"icon arrow\" (click)=\"showMenu($event)\"></ion-icon>\r\n            </div>\r\n\r\n\r\n            <div class=\"icon-link\" *ngIf=\"p.modules.length > 0\" [ngClass]=\"(selectPage ==p.url)?'select-page':'icon-link'\">\r\n                <a href=\"javascript:void(0)\">\r\n                    <ion-icon [name]=\"p.icon\" class=\"icon\"></ion-icon>\r\n                    <span class=\"link_name\">  {{ p.name }}</span>\r\n                </a>\r\n                <ion-icon name=\"chevron-down-outline\" class=\"icon arrow\" (click)=\"showMenu($event)\"></ion-icon>\r\n            </div>\r\n\r\n            <ul class=\"sub-menu\" *ngIf=\"p.modules.length > 0\">\r\n                <li><a class=\"link_name\" href=\"#\">{{ p.name }}</a></li>\r\n                <li *ngFor=\"let sub of p.modules\">\r\n                    <a href=\"javascript:void(0)\" (click)=\"navigateRouter(sub.url)\"  [ngClass]=\"(router.url ==sub.url)?'select-sub-page':''\"\r\n                        class=\"nav_title\"> <ion-icon [name]=\"sub.icon\" class=\"icon\"></ion-icon> {{sub.name}}</a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n\r\n\r\n        <!--\r\n        <li>\r\n\r\n            <a href=\"#\" class=\"nav_title\">\r\n                <ion-icon name=\"person-outline\" class=\"icon\"></ion-icon>\r\n                <span class=\"link_name\">Usuarios</span>\r\n            </a>\r\n            <ul class=\"sub-menu blank\">\r\n                <li><a class=\"link_name\" href=\"#\">Category</a></li>\r\n            </ul>\r\n        </li>\r\n\r\n        <li>\r\n            <div class=\"icon-link\">\r\n                <a href=\"#\" class=\"nav_title\">\r\n                    <i class=\"fas fa-columns\"></i>\r\n                    <span class=\"link_name\">Category</span>\r\n                </a>\r\n                <i class=\"fas fa-chevron-down arrow\" (click)=\"showMenu($event)\"></i>\r\n            </div>\r\n            <ul class=\"sub-menu\">\r\n                <li><a class=\"link_name\" href=\"#\">Category</a></li>\r\n                <li><a href=\"#\">Web Desing</a></li>\r\n                <li><a href=\"#\">Card Desing</a></li>\r\n                <li><a href=\"#\">Login</a></li>\r\n            </ul>\r\n        </li>\r\n\r\n        <li>\r\n            <div class=\"icon-link\">\r\n                <a href=\"#\" class=\"nav_title\">\r\n                    <i class=\"fas fa-archive\"></i>\r\n                    <span class=\"link_name\">Post</span>\r\n                </a>\r\n                <i class=\"fas fa-chevron-down arrow\" (click)=\"showMenu($event)\"></i>\r\n            </div>\r\n            <ul class=\"sub-menu\">\r\n                <li><a class=\"link_name\" href=\"#\">Post</a></li>\r\n                <li><a href=\"#\">Web Desing</a></li>\r\n                <li><a href=\"#\">Card Desing</a></li>\r\n                <li><a href=\"#\">Login</a></li>\r\n            </ul>\r\n        </li>\r\n\r\n        <li>\r\n            <a href=\"#\" class=\"nav_title\">\r\n                <i class=\"far fa-map\"></i>\r\n                <span class=\"link_name\">Analytics</span>\r\n            </a>\r\n            <ul class=\"sub-menu blank\">\r\n                <li><a class=\"link_name\" href=\"#\">Analytics</a></li>\r\n            </ul>\r\n        </li>\r\n\r\n        <li>\r\n            <a href=\"#\" class=\"nav_title\">\r\n                <i class=\"fas fa-chart-line\"></i>\r\n                <span class=\"link_name\">Char</span>\r\n            </a>\r\n            <ul class=\"sub-menu blank\">\r\n                <li><a class=\"link_name\" href=\"#\">Char</a></li>\r\n            </ul>\r\n        </li>\r\n\r\n        <li>\r\n            <div class=\"icon-link\">\r\n                <a href=\"#\" class=\"nav_title\">\r\n                    <i class=\"fas fa-plug\"></i>\r\n                    <span class=\"link_name\">Plugins</span>\r\n                </a>\r\n                <i class=\"fas fa-chevron-down arrow\"></i>\r\n            </div>\r\n            <ul class=\"sub-menu\">\r\n                <li><a class=\"link_name\" href=\"#\">Plugins</a></li>\r\n                <li><a href=\"#\">Web Desing</a></li>\r\n                <li><a href=\"#\">Card Desing</a></li>\r\n                <li><a href=\"#\">Login</a></li>\r\n            </ul>\r\n        </li> -->\r\n\r\n\r\n        <li class=\"profile\" style=\"position: absolute;bottom: 0;\">\r\n            <div class=\"profile-details\">\r\n                <div class=\"profile-content\">\r\n                    <img src=\"../../../assets/images/usermt.png\" alt=\"\">\r\n                </div>\r\n\r\n                <div class=\"name-job\">\r\n                    <div class=\"profile_name\">{{nameUser}}</div>\r\n                    <div class=\"job\">{{roleUser}}</div>\r\n                </div>\r\n\r\n                <ion-icon name=\"power-outline\" class=\"icon\" style=\"font-size: 22px;\" (click)=\"logOut()\"></ion-icon>\r\n               <!--  <i class=\"fas fa-sign-out-alt\"></i> -->\r\n            </div>\r\n        </li>\r\n    </ul>\r\n\r\n    <div class=\"btn-menu\" style=\" position: absolute;\r\n    top: 0px;\r\n    right: -40px;padding: 10px 20px;\" (click)=\"btnMenu($event)\">\r\n        <div style=\"\r\n        background: #fcfbfd;\r\n    border-radius: 100%;\r\n    height: 32px;\r\n    width: 32px;\r\n    box-shadow: 0 0px 15px rgb(0 0 0 / 10%);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\">\r\n            <ion-icon name=\"chevron-back-outline\" class=\"icon-menu\" style=\"font-size: 17px;\"></ion-icon>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!-- <section class=\"home-section\">\r\n    <div class=\"home-content\">\r\n        <i class=\"fas fa-bars icon-menu\" (click)=\"btnMenu()\"></i>\r\n        <span class=\"text\">Drop Down</span>\r\n    </div>\r\n</section> -->\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: playerFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "hiuq");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lottie-web */ "lPHp");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/layout.module */ "Tx//");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/es */ "2Yyj");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13__);









/* import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'; */
/* LOTTIE */


function playerFactory() {
    return lottie_web__WEBPACK_IMPORTED_MODULE_10___default.a;
}




Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13___default.a, "es");
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        ],
        entryComponents: [],
        imports: [
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_8__["NgxQRCodeModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_9__["LottieModule"].forRoot({ player: playerFactory }) /* LOTTIE */
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"] },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: "es" }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _apiMongo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apiMongo.service */ "GtMO");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _compartido_funciones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../compartido/funciones */ "3Djf");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage.service */ "n90K");








let AuthService = class AuthService {
    constructor(_storage, _fun, _apiMongo, router) {
        this._storage = _storage;
        this._fun = _fun;
        this._apiMongo = _apiMongo;
        this.router = router;
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.dataSend = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    loadUser() {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let keyUser = yield this._storage.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TOKEN_KEY);
                console.log('RESPUESTA DE LOADUSER', keyUser);
                if (keyUser) {
                    const res_u = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].COLLECTION.party, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.employee, keyUser);
                    console.log('res_u', res_u);
                    if (this._fun.isEmpty(res_u.result)) {
                        yield this._fun.alertError('Error con permisos de acceso al sistema');
                        this.router.navigate(['login']);
                    }
                    let user = res_u.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.employee][0];
                    this.userData = user;
                    console.log('user00000001', user);
                    const res_r = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.role, user.data.role.key);
                    if (this._fun.isEmpty(res_r.result)) {
                        yield this._fun.alertError('Error con permisos de acceso al sistema');
                        this.router.navigate(['login']);
                    }
                    let role = res_r.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.role][0];
                    resolve(role);
                    if (role.data.acc_web) {
                        this.currentUser.next(user);
                        this._storage.set(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TOKEN_KEY, user.key);
                    }
                    else
                        yield this._fun.alertError('El usuario no tiene permisos de acceso al sistema WEB');
                }
                else
                    this.currentUser.next(false);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        }));
    }
    signIn(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const res_u = yield this._apiMongo.filter(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].COLLECTION.party, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.employee, { 'data.email': form.username.trim(), 'data.password': form.pass });
                console.log('RES', res_u);
                if (this._fun.isEmpty(res_u.result)) {
                    yield this._fun.alertError('No se encontro registro con usuario y contraseña ingresados');
                    return;
                }
                let user = res_u.result[0].employee[0];
                const res_r = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.role, user.data.role.key);
                if (this._fun.isEmpty(res_r.result)) {
                    return;
                }
                console.log('res', res_r);
                let role = res_r.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.role][0];
                console.log(role);
                console.log('USUARIO', user);
                if (role.data.acc_web) {
                    this.currentUser.next(user);
                    yield this._storage.set(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TOKEN_KEY, user.key);
                    this.router.navigate(['users']);
                }
                else
                    yield this._fun.alertError('El usuario no tiene permisos de acceso al sistema WEB');
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    // Access the current user
    getUser() {
        return this.currentUser.asObservable();
    }
    getData() {
        return this.dataSend.asObservable();
    }
    validarAuth() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.getUser().subscribe(res => {
                    console.log('RESPUSTAAAZAAAA', res);
                    if (res)
                        resolve(true);
                    resolve(false);
                });
            });
        });
    }
    // Remove all information of the previous user
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._storage.remove(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TOKEN_KEY);
            this.currentUser.next(false);
            this.router.navigate(['/login']);
        });
    }
    // Check if a user has a certain permission
    hasPermission(permissions) {
        for (const permission of permissions) {
            if (!this.currentUser.value || !this.currentUser.value.permissions.includes(permission)) {
                return false;
            }
        }
        return true;
    }
};
AuthService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _compartido_funciones__WEBPACK_IMPORTED_MODULE_6__["Funciones"] },
    { type: _apiMongo_service__WEBPACK_IMPORTED_MODULE_4__["ApiMongoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let StorageService = class StorageService {
    constructor() { }
    validarAuth() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = yield this.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].TOKEN_KEY);
            console.log(data);
            if (data)
                return Promise.resolve(true);
            return Promise.resolve(false);
        });
    }
    get(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let item = (yield Storage.get({ key: name })) || null;
            let value = item.value;
            if (!value)
                value = null;
            if (typeof value != 'object')
                value = JSON.parse(value);
            return Promise.resolve(value);
        });
    }
    set(name, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.set({ key: name, value: JSON.stringify(data) });
        });
    }
    remove(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.remove({ key });
        });
    }
};
StorageService.ctorParameters = () => [];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "njzu":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let DataService = class DataService {
    constructor() {
        this.dataSend = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.eventBtnMenu = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.dataSendForm = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.dataGeneration = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    eventBtnMn() {
        return this.eventBtnMenu.asObservable();
    }
    getData() {
        return this.dataSend.asObservable();
    }
    getDataForm() {
        return this.dataSendForm.asObservable();
    }
    getDataGeneration() {
        return this.dataGeneration.asObservable();
    }
};
DataService.ctorParameters = () => [];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");




const routes = [
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~home-home-module~pages-pages-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: '',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | pages-pages-module */[__webpack_require__.e("default~home-home-module~pages-pages-module"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN")).then(m => m.PagesPageModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map