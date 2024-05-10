(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "+Pdu":
/*!********************************************************************!*\
  !*** ./src/app/pages/tabla-registros/tabla-registros.component.ts ***!
  \********************************************************************/
/*! exports provided: TablaRegistrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaRegistrosComponent", function() { return TablaRegistrosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabla_registros_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabla-registros.component.html */ "7N7p");
/* harmony import */ var _tabla_registros_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabla-registros.component.scss */ "mot8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");
/* harmony import */ var src_app_components_create_registro_create_registro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/create-registro/create-registro.component */ "dyU6");
/* harmony import */ var src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/apiMongo.service */ "GtMO");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");










let TablaRegistrosComponent = class TablaRegistrosComponent {
    constructor(_fun, _apiMongo, _mod, router, route) {
        this._fun = _fun;
        this._apiMongo = _apiMongo;
        this._mod = _mod;
        this.router = router;
        this.route = route;
        this.list_main = [];
        this.list = [];
        this.load = false;
        this.key_table = '';
        this.nameFilter = '';
        this.orderBy = {
            key: '',
            order: true
        };
        this.thead = [
            { key: 'key', name: 'Código' },
            { key: 'name', name: 'Valor' },
            { key: 'status', name: 'Estado' },
        ];
        this.optionFilter = [
            { key: 'key', value: '', type: 'string' },
            { key: 'status', value: false, type: 'boolean' }
        ];
    }
    ngOnInit() {
        this.key_table = this.route.snapshot.paramMap.get('key');
        this.getList();
    }
    getList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            try {
                const res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.general, this.key_table, 'items');
                if (this._fun.isEmpty(res.result)) {
                    this.load = false;
                    return;
                }
                console.log('res', res);
                this.list_main = res.result[0][this.key_table];
                this.list = this.list_main;
                this.filter();
                this.orderBy.order = true;
                this.orderBy.key = '';
                this.orderByTable('key');
                this.load = false;
            }
            catch (error) {
                this.load = false;
                yield this._fun.alertError(error);
            }
        });
    }
    changeInput(value, index, type) {
        if (type == 'checkbox') {
            value = value.detail.checked;
        }
        this.optionFilter[index].value = value;
        this.filter();
    }
    filter() {
        this.list = this.list_main.filter(a => {
            let filter1 = true;
            let filter2 = true;
            for (let index = 0; index < this.optionFilter.length; index++) {
                var itemf = this.optionFilter[index];
                if (itemf.type == 'string') {
                    filter1 = a[itemf.key].toLowerCase().indexOf(itemf.value.toLowerCase()) != -1;
                }
                if (itemf.type == 'boolean') {
                    if (a[itemf.key])
                        filter2 = true;
                    else
                        filter2 = itemf.value;
                }
            }
            return filter1 && filter2;
        });
        this.orderList();
    }
    orderByTable(key) {
        if (this.orderBy.key == key) {
            this.orderBy.order = !this.orderBy.order;
        }
        else {
            this.orderBy.order = true;
        }
        this.orderBy.key = key;
        this.orderList();
    }
    orderList() {
        let listOrder = this._fun.sortJSON(this.list, this.orderBy.key, this.orderBy.order);
        this.list = listOrder.filter(item => true);
    }
    back() {
        this.router.navigate(['param']);
    }
    changeStatus(key, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertChangStatus(status);
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                yield this._apiMongo.changeStatus(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.general, this.key_table, key, status);
                this.getList();
                yield this._fun.alertSucc(status ? src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_ENABLED : src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_DISABLED);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    delete(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertDelete();
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                yield this._apiMongo.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.general, this.key_table, key);
                this.getList();
                this.updateTableCount();
                yield this._fun.alertSucc(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_DELETE);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    updateTableCount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let resTable = yield this._apiMongo.getkey(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.tables, this.key_table);
                console.log('resTable', resTable);
                let table = resTable.result[0].tables[0];
                let count = table.data.properties.count - 1;
                console.log('table', table);
                var body = {
                    name: table.name,
                    properties: { count, eliminabled: false }
                };
                console.log('body', body);
                const res = yield this._apiMongo.create(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.tables, this.key_table, body, true);
                console.log('res', res);
                if (this._fun.isVarInvalid(res.result)) {
                    yield this._fun.alertError(res.message);
                    return;
                }
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    form(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this._mod.create({
                component: src_app_components_create_registro_create_registro_component__WEBPACK_IMPORTED_MODULE_7__["CreateRegistroComponent"],
                /*   cssClass: 'modal-small', */
                componentProps: {
                    key_table: this.key_table,
                    data
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(res.data);
                if (this._fun.isVarInvalid(res.data))
                    return;
                if (!this._fun.isVarInvalid(res.data.confirm))
                    this.getList();
            }));
            return yield modal.present();
        });
    }
    onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems;
    }
};
TablaRegistrosComponent.ctorParameters = () => [
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_6__["Funciones"] },
    { type: src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__["ApiMongoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
TablaRegistrosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabla-registros',
        template: _raw_loader_tabla_registros_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabla_registros_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TablaRegistrosComponent);



/***/ }),

/***/ "/IiH":
/*!********************************************************************!*\
  !*** ./src/app/pages/accion-botones/accion-botones.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Npb24tYm90b25lcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "0wo4":
/*!**********************************************************!*\
  !*** ./src/app/pages/parametros/parametros.component.ts ***!
  \**********************************************************/
/*! exports provided: ParametrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametrosComponent", function() { return ParametrosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_parametros_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./parametros.component.html */ "F+xw");
/* harmony import */ var _parametros_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parametros.component.scss */ "7tDv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");
/* harmony import */ var src_app_components_create_table_create_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/create-table/create-table.component */ "1TDX");
/* harmony import */ var src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/apiMongo.service */ "GtMO");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");










let ParametrosComponent = class ParametrosComponent {
    constructor(_apiMongo, _fun, _mod, router) {
        this._apiMongo = _apiMongo;
        this._fun = _fun;
        this._mod = _mod;
        this.router = router;
        this.list_main = [];
        this.list = [];
        this.load = false;
        this.nameFilter = '';
        this.orderBy = {
            key: '',
            order: true
        };
        this.thead = [
            { key: 'key', name: 'Tabla' },
            { key: 'name', name: 'Descripción' },
            { key: 'count', name: 'N° de registros' },
            { key: 'status', name: 'Estado' },
        ];
        this.optionFilter = [
            { key: 'key', value: '', type: 'string' },
            { key: 'status', value: false, type: 'boolean' }
        ];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getList();
    }
    getList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            try {
                const res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.tables, 'items');
                if (this._fun.isEmpty(res.result)) {
                    this.load = false;
                    return;
                }
                this.list_main = res.result[0].tables;
                this.list_main.forEach(item => {
                    item.count = item.data.properties.count;
                });
                this.list = this.list_main;
                console.log('this.list ', this.list);
                this.filter();
                this.orderBy.order = true;
                this.orderBy.key = '';
                this.orderByTable('key');
                this.load = false;
            }
            catch (error) {
                this.load = false;
                yield this._fun.alertError(error);
            }
        });
    }
    changeInput(value, index, type) {
        if (type == 'checkbox') {
            value = value.detail.checked;
        }
        this.optionFilter[index].value = value;
        this.filter();
    }
    filter() {
        this.list = this.list_main.filter(a => {
            let filter1 = true;
            let filter2 = true;
            for (let index = 0; index < this.optionFilter.length; index++) {
                var itemf = this.optionFilter[index];
                if (itemf.type == 'string') {
                    filter1 = a[itemf.key].toLowerCase().indexOf(itemf.value.toLowerCase()) != -1;
                }
                if (itemf.type == 'boolean') {
                    if (a[itemf.key])
                        filter2 = true;
                    else
                        filter2 = itemf.value;
                }
            }
            return filter1 && filter2;
        });
        this.orderList();
    }
    orderByTable(key) {
        if (this.orderBy.key == key) {
            this.orderBy.order = !this.orderBy.order;
        }
        else {
            this.orderBy.order = true;
        }
        this.orderBy.key = key;
        this.orderList();
    }
    orderList() {
        let listOrder = this._fun.sortJSON(this.list, this.orderBy.key, this.orderBy.order);
        this.list = listOrder.filter(item => true);
    }
    registros(key) {
        this.router.navigate(['table-reg/' + key]);
    }
    changeStatus(key, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertChangStatus(status);
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                yield this._apiMongo.changeStatus(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.tables, key, status);
                this.getList();
                yield this._fun.alertSucc(status ? src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_ENABLED : src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_DISABLED);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    delete(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertDelete();
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                yield this._apiMongo.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.tables, key); //Eliminar Tabla
                yield this._apiMongo.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.general, key, 'items'); //Eliminar registros de la tabla
                this.getList();
                yield this._fun.alertSucc(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_DELETE);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    form(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this._mod.create({
                component: src_app_components_create_table_create_table_component__WEBPACK_IMPORTED_MODULE_7__["CreateTableComponent"],
                cssClass: 'modal-small',
                componentProps: {
                    data
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(res.data);
                if (this._fun.isVarInvalid(res.data))
                    return;
                if (!this._fun.isVarInvalid(res.data.confirm))
                    this.getList();
            }));
            return yield modal.present();
        });
    }
    onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems;
    }
};
ParametrosComponent.ctorParameters = () => [
    { type: src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__["ApiMongoService"] },
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_6__["Funciones"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ParametrosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-parametros',
        template: _raw_loader_parametros_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parametros_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ParametrosComponent);



/***/ }),

/***/ "2OcZ":
/*!******************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios.component.ts ***!
  \******************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_usuarios_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./usuarios.component.html */ "S13f");
/* harmony import */ var _usuarios_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios.component.scss */ "gR97");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/create-user/create-user.component */ "vXps");
/* harmony import */ var src_app_components_get_did_get_did_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/get-did/get-did.component */ "GfNY");
/* harmony import */ var src_app_components_import_excel_import_excel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/import-excel/import-excel.component */ "mBxB");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");
/* harmony import */ var src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/apiMongo.service */ "GtMO");
/* harmony import */ var src_app_services_contracts_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/contracts.service */ "Ik1h");
/* harmony import */ var src_app_components_gen_cards_gen_cards_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/gen-cards/gen-cards.component */ "Fd7s");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_15__);












/* import { ConfigMasterComponent } from 'src/app/components/config-master/config-master.component'; */




let UsuariosComponent = class UsuariosComponent {
    constructor(_contractsService, _apiMongo, _fun, _auth, _mod) {
        this._contractsService = _contractsService;
        this._apiMongo = _apiMongo;
        this._fun = _fun;
        this._auth = _auth;
        this._mod = _mod;
        this.list_main = [];
        this.list = [];
        this.load = false;
        this.key_table = '';
        this.nameFilter = '';
        this.orderBy = {
            key: '',
            order: true
        };
        this.thead = [
            { key: 'name', name: 'Nombre' },
            /*    { key: 'group', name: 'Grupo' }, */
            { key: 'docment', name: 'Documento' },
            { key: 'did', name: 'DID' },
            { key: 'status', name: 'Estado' }
        ];
        this.optionFilter = [
            { key: 'name', value: '', type: 'string' },
            { key: 'status', value: false, type: 'boolean' }
        ];
        this._env = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        /*GET  PARAMAS*/
        this.listTypeDoc = [];
        this.listG_clie = [];
        this.listG_empl = [];
        this.listG_prod = [];
        this.listRole = [];
        this.listTypeProv = [];
        this.listAdmin = [];
        this.listQr = [];
        this.parmasOk = false;
        this.data2 = [{
                eid: 'e101',
                ename: 'ravi',
                esal: 1000
            }, {
                eid: 'e102',
                ename: 'ram',
                esal: 2000
            }, {
                eid: 'e103',
                ename: 'rajesh',
                esal: 3000
            }];
    }
    getParamas() {
        this._apiMongo._get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.type_doc_ident, 'items').subscribe((res) => {
            this.listTypeDoc = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.type_doc_ident];
            console.log('this.listTypeDoc', this.listTypeDoc);
        });
        this._apiMongo._get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.g_clie, 'items').subscribe((res) => {
            this.listG_clie = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.g_clie];
            console.log('this.listG_clie', this.listG_clie);
        });
        this._apiMongo._get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.g_empl, 'items').subscribe((res) => {
            this.listG_empl = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.g_empl];
            console.log('this.listG_empl', this.listG_empl);
        });
        this._apiMongo._get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.g_prod, 'items').subscribe((res) => {
            this.listG_prod = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.g_prod];
            console.log('this.listG_prod', this.listG_prod);
        });
        this._apiMongo._get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.role, 'items').subscribe((res) => {
            this.listRole = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.role];
            console.log('this.listRole', this.listRole);
        });
        if (this.userSesion.data.role.key == 'MASTER') {
            this._apiMongo._filter(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.object, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.screen, { "data.certificateType.key": 'C2' }).subscribe((res) => {
                this.listQr = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.screen];
                console.log('this.listQr', this.listQr);
            });
        }
        else {
            this.listQr = this.userSesion.data.qrlist;
        }
        this._apiMongo._get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.type_proveedor, 'items').subscribe((res) => {
            this.listTypeProv = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.type_proveedor];
            console.log('this.listTypeProv', this.listTypeProv);
        });
        this._apiMongo._get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.party, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.employee, 'items').subscribe((res) => {
            this.listAdmin = [];
            for (let index = 0; index < res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.employee].length; index++) {
                let ROLE = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.employee][index].data.role.value;
                let DNI = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.employee][index].data.idens[0].number;
                if (ROLE == 'Administrador') {
                    this.listAdmin = this.listAdmin.concat(res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.employee][index]);
                }
            }
            console.log('this.listAdmin', this.listAdmin);
        });
    }
    configList(list) {
        let listConfig = [];
        for (let index = 0; index < list.length; index++) {
            const item = list[index];
            let reg = {
                name: item.name,
                url: item.data.document.imgfile_anonymous.url,
                trxid: item.data.data_cert.tx.trxid,
                lacchainId: item.data.data_cert.tx.lacchainId,
                name_titular: item.data.document.subject.name,
                adrx_titular: item.data.document.subject.data.dids.address,
                objective_cert: item.data.data_cert.data.objective_cert
            };
            listConfig.push(reg);
            if (index == (list.length - 1))
                return listConfig;
        }
    }
    ngOnInit() {
        /*   let a = this.configList(this.data_prueba)
          console.log('LISTADO OK', a); */
        this._auth.getUser().subscribe((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!user)
                return;
            this.userSesion = user;
            this.key_table = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.producer;
            this.getParamas();
            this.getList();
        }));
    }
    segmentChanged(value) {
        if (this.load)
            return; // Corrigue erroes al cambiar de tabla rapidamente
        this.key_table = value.detail.value;
        this.list = [];
        this.getList();
    }
    getList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            try {
                let res;
                if (this.userSesion.data.role.key == 'MASTER') {
                    res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.party, this.key_table, 'items');
                }
                else {
                    res = yield this._apiMongo.filter(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.party, this.key_table, { 'data.uCreator': this.userSesion.data.idens[0].number });
                }
                console.log('res', res);
                if (this._fun.isEmpty(res.result)) {
                    this.load = false;
                    return;
                }
                this.list_main = res.result[0][this.key_table];
                this.list = this.list_main;
                console.log('LISTAAA', this.list);
                this.filter();
                this.orderBy.order = true;
                this.orderBy.key = '';
                this.orderByTable('key');
                this.load = false;
            }
            catch (error) {
                this.load = false;
                yield this._fun.alertError(error);
            }
        });
    }
    /* ELIMINAR */
    configMaster(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    changeInput(value, index, type) {
        if (type == 'checkbox') {
            value = value.detail.checked;
        }
        this.optionFilter[index].value = value;
        this.filter();
    }
    filter() {
        this.list = this.list_main.filter(a => {
            let filter1 = true;
            let filter2 = true;
            for (let index = 0; index < this.optionFilter.length; index++) {
                var itemf = this.optionFilter[index];
                if (itemf.type == 'string') {
                    filter1 = a[itemf.key].toLowerCase().indexOf(itemf.value.toLowerCase()) != -1;
                }
                if (itemf.type == 'boolean') {
                    if (a[itemf.key])
                        filter2 = true;
                    else
                        filter2 = itemf.value;
                }
            }
            return filter1 && filter2;
        });
        this.orderList();
    }
    orderByTable(key) {
        if (this.orderBy.key == key) {
            this.orderBy.order = !this.orderBy.order;
        }
        else {
            this.orderBy.order = true;
        }
        this.orderBy.key = key;
        this.orderList();
    }
    orderList() {
        console.log("asdas", this.list);
        let listOrder = this._fun.sortJSON(this.list, this.orderBy.key, this.orderBy.order);
        this.list = listOrder.filter(item => true);
    }
    changeStatus(data, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertChangStatus(status);
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                yield this._apiMongo.changeStatus(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.party, this.key_table, data.key, status);
                /*  if (data.data.dids.length != 0) {
          
                   //Validar conexión en MetaMask
                   await this._contractsService.connectMT();
          
                   let sing: any = await this._contractsService.statusDid(data.data.dids[0].address, status ? 'enable' : 'revoke');
          
                   let signData: any = sing.data;
          
                   let cred = { address: data.data.dids[0].address, pk: null };
                   await this._contractsService.
                     signData(signData, (status ? 'enable' : 'revoke') + ' DID', cred, 'did');
                 } */
                this.getList();
                yield this._fun.alertSucc(status ? src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].MSG.SUC_ENABLED : src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].MSG.SUC_DISABLED);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    delete(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertDelete();
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                yield this._apiMongo.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.party, this.key_table, data.key);
                /*      if (!this._fun.isVarInvalid(data.data.dids) && this.key_table != env.TABLE_SIS.producer) {
                       //   await this._contractsService.statusDid(data.data.dids[0].address, 'remove');
          
                       //Validar conexión en MetaMask
                       await this._contractsService.connectMT();
          
                       let sing: any = await this._contractsService.statusDid(data.data.dids[0].address, 'remove');
          
                       let signData: any = sing.data;
          
                       let cred = { address: data.data.dids[0].address, pk: null };
                       await this._contractsService.
                         signData(signData, 'remove DID', cred, 'did');
                     } */
                this.getList();
                yield this._fun.alertSucc(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].MSG.SUC_DELETE);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    form(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this._fun.isEmpty(this.listTypeProv, this.listTypeDoc, this.listG_clie, this.listG_empl, this.listG_prod, this.listRole, this.listAdmin))
                return;
            const modal = yield this._mod.create({
                component: src_app_components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_6__["CreateUserComponent"],
                /*   cssClass: 'modal-small', */
                backdropDismiss: false,
                componentProps: {
                    data,
                    key_table: this.key_table,
                    listTypeDoc: this.listTypeDoc,
                    listG_clie: this.listG_clie,
                    listG_empl: this.listG_empl,
                    listG_prod: this.listG_prod,
                    listRole: this.listRole,
                    listTypeProv: this.listTypeProv,
                    listAdmin: this.listAdmin,
                    userSesion: this.userSesion,
                    listQr: this.listQr
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(res.data);
                if (this._fun.isVarInvalid(res.data))
                    return;
                if (!this._fun.isVarInvalid(res.data.confirm))
                    this.getList();
            }));
            return yield modal.present();
        });
    }
    onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems;
    }
    /* **************************** */
    getDid(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let did = yield this._contractsService.statusDid(data.data.dids[0].address, 'get');
            console.log('MOSTRAR INFO DID', did);
            /*  data = { name: 'luiggi', did: '0xAD27e9cD2506EE56f5E4124b56D5Bc85e7EEBc95', data: [''] } */
            this._mod.create({
                cssClass: 'style-card-did',
                component: src_app_components_get_did_get_did_component__WEBPACK_IMPORTED_MODULE_7__["GetDidComponent"],
                componentProps: {
                    data,
                    type: this.key_table == src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.customer ? 'Comprador' : (this.key_table == src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.employee ? 'Empleado' : 'Proveedor')
                }
            }).then((modal) => modal.present());
            return;
        });
    }
    prepareExport() {
        let lista = [];
        for (let index = 0; index < this.list.length; index++) {
            const elm = this.list[index];
            let dataJson = {
                Address: elm.data.dids[0].address,
                Nombre: elm.name,
                Capacidad: elm.data.capacidad,
                Fecha_ingreso: elm.data.fingreso,
                Tipo_documento: elm.data.idens[0].type_name,
                Num_documento: elm.data.idens[0].number,
                Latitud: elm.data.latitud,
                Localidad: elm.data.localidad,
                Longitud: elm.data.longitud,
                Tipo_produccion: elm.data.tipoproduccion,
                Tipo_proveedor: elm.data.type.value,
                Cod_socio: elm.data.codSocio,
                Sexo: elm.data.sexo,
                Fecha_nacimiento: elm.data.fnaci,
                Sector: elm.data.sector,
                Estado_civil: elm.data.estadoCivil,
                Nivel_educativo: elm.data.nivelEducativo,
                Area_total: elm.data.areaTotal,
                Area_produccion: elm.data.areaProduccion,
                Area_crecimiento: elm.data.areaCrecimiento
            };
            lista.push(dataJson);
            if (index == (this.list.length - 1)) {
                this.exportAsExcelFile(lista, 'Proveedores');
            }
        }
    }
    exportAsExcelFile(json, excelFileName) {
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_14__["utils"].json_to_sheet(json);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_14__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const EXCEL_EXTENSION = '.xlsx';
        const data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_15__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
    importExcel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this._fun.isEmpty(this.listTypeProv, this.listTypeDoc, this.listG_clie, this.listG_empl, this.listG_prod, this.listRole))
                return;
            const modal = yield this._mod.create({
                cssClass: 'style-import-excel',
                backdropDismiss: false,
                component: src_app_components_import_excel_import_excel_component__WEBPACK_IMPORTED_MODULE_8__["ImportExcelComponent"],
                componentProps: {
                    userSesion: this.userSesion,
                    key_table: this.key_table,
                    listTypeDoc: this.listTypeDoc,
                    listG_clie: this.listG_clie,
                    listG_empl: this.listG_empl,
                    listG_prod: this.listG_prod,
                    listRole: this.listRole,
                    listTypeProv: this.listTypeProv
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                /* Actualizar lista */
            }));
            yield modal.present();
        });
    }
    genCards() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this._fun.isEmpty(this.listTypeProv, this.listTypeDoc, this.listG_clie, this.listG_empl, this.listG_prod, this.listRole))
                return;
            const modal = yield this._mod.create({
                cssClass: 'style-import-excel',
                backdropDismiss: false,
                component: src_app_components_gen_cards_gen_cards_component__WEBPACK_IMPORTED_MODULE_12__["GenCardsComponent"],
                componentProps: {
                    list_main: this.list_main,
                    key_table: this.key_table,
                    listTypeDoc: this.listTypeDoc,
                    listG_clie: this.listG_clie,
                    listG_empl: this.listG_empl,
                    listG_prod: this.listG_prod,
                    listRole: this.listRole,
                    listTypeProv: this.listTypeProv
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                /* Actualizar lista */
            }));
            yield modal.present();
        });
    }
};
UsuariosComponent.ctorParameters = () => [
    { type: src_app_services_contracts_service__WEBPACK_IMPORTED_MODULE_11__["ContractsService"] },
    { type: src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_10__["ApiMongoService"] },
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_9__["Funciones"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
UsuariosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-usuarios',
        template: _raw_loader_usuarios_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_usuarios_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UsuariosComponent);



/***/ }),

/***/ "3ZaD":
/*!************************************************!*\
  !*** ./src/app/pages/roles/roles.component.ts ***!
  \************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_roles_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./roles.component.html */ "fysh");
/* harmony import */ var _roles_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles.component.scss */ "oeyg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");
/* harmony import */ var src_app_components_add_rol_add_rol_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/add-rol/add-rol.component */ "muN4");
/* harmony import */ var src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/apiMongo.service */ "GtMO");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");










let RolesComponent = class RolesComponent {
    constructor(_fun, _apiMongo, _mod, _auth) {
        this._fun = _fun;
        this._apiMongo = _apiMongo;
        this._mod = _mod;
        this._auth = _auth;
        this.list_main = [];
        this.list = [];
        this.load = false;
        this.key_table = '';
        this.nameFilter = '';
        this.orderBy = {
            key: '',
            order: true
        };
        this.thead = [
            { key: 'key', name: 'Código' },
            { key: 'name', name: 'Nombre' },
            { key: 'web', name: 'Web' },
            { key: 'app', name: 'App' },
            { key: 'status', name: 'Estado' },
        ];
        this.optionFilter = [
            { key: 'key', value: '', type: 'string' },
            { key: 'status', value: false, type: 'boolean' }
        ];
    }
    ngOnInit() {
        this._auth.getUser().subscribe((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!user)
                return;
            this.userSesion = user;
            console.log('this.userSesion', this.userSesion);
            this.key_table = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.role;
            this.getList();
        }));
    }
    getList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            try {
                let res;
                if (this.userSesion.data.role.key == 'MASTER')
                    res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.general, this.key_table, 'items');
                else {
                    res = yield this._apiMongo.filter(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.general, this.key_table, { 'data.uCreator': this.userSesion.data.idens[0].number });
                }
                if (this._fun.isEmpty(res.result)) {
                    this.load = false;
                    return;
                }
                this.list_main = res.result[0][this.key_table];
                this.list = this.list_main;
                this.filter();
                this.orderBy.order = true;
                this.orderBy.key = '';
                this.orderByTable('key');
                this.load = false;
            }
            catch (error) {
                this.load = false;
                yield this._fun.alertError(error);
            }
        });
    }
    changeInput(value, index, type) {
        if (type == 'checkbox') {
            value = value.detail.checked;
        }
        this.optionFilter[index].value = value;
        this.filter();
    }
    filter() {
        this.list = this.list_main.filter(a => {
            let filter1 = true;
            let filter2 = true;
            for (let index = 0; index < this.optionFilter.length; index++) {
                var itemf = this.optionFilter[index];
                if (itemf.type == 'string') {
                    filter1 = a[itemf.key].toLowerCase().indexOf(itemf.value.toLowerCase()) != -1;
                }
                if (itemf.type == 'boolean') {
                    if (a[itemf.key])
                        filter2 = true;
                    else
                        filter2 = itemf.value;
                }
            }
            return filter1 && filter2;
        });
        this.orderList();
    }
    orderByTable(key) {
        if (this.orderBy.key == key) {
            this.orderBy.order = !this.orderBy.order;
        }
        else {
            this.orderBy.order = true;
        }
        this.orderBy.key = key;
        this.orderList();
    }
    orderList() {
        let listOrder = this._fun.sortJSON(this.list, this.orderBy.key, this.orderBy.order);
        this.list = listOrder.filter(item => true); //REFRESCAR TABLA
    }
    changeStatus(key, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertChangStatus(status);
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                yield this._apiMongo.changeStatus(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.general, this.key_table, key, status);
                this.getList();
                yield this._fun.alertSucc(status ? src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_ENABLED : src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_DISABLED);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    delete(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*     if (!data.data.eliminabled) {
                  console.log(data.data.eliminabled);
                  await this._fun.alertError('Rol está siendo usado por un usuario');
                  return;
                } */
            let alert = yield this._fun.alertDelete();
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                yield this._apiMongo.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.general, this.key_table, data.key);
                this.getList();
                yield this._fun.alertSucc(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_DELETE);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    form(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this._mod.create({
                component: src_app_components_add_rol_add_rol_component__WEBPACK_IMPORTED_MODULE_6__["AddRolComponent"],
                /*   cssClass: 'modal-small', */
                componentProps: {
                    data
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(res.data);
                if (this._fun.isVarInvalid(res.data))
                    return;
                if (!this._fun.isVarInvalid(res.data.confirm))
                    this.getList();
            }));
            return yield modal.present();
        });
    }
    onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems;
    }
};
RolesComponent.ctorParameters = () => [
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_5__["Funciones"] },
    { type: src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_7__["ApiMongoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
RolesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-roles',
        template: _raw_loader_roles_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_roles_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RolesComponent);



/***/ }),

/***/ "7N7p":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabla-registros/tabla-registros.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'Listado de registros'\"></app-header>\r\n\r\n<ion-content class=\"content-table\">\r\n\r\n  <!-- Cabecera y botones de acción -->\r\n  <div class=\"row content-header\">\r\n    <div class=\"col-6\">\r\n      <p class=\"title-header\">Registros de {{key_table}}</p>\r\n\r\n      <!-- Routing -->\r\n      <p class=\"routing\">\r\n        <a href=\"javascript:void(0)\" (click)=\"back()\">Tablas</a>\r\n        <ion-icon name=\"chevron-forward-outline\">\r\n        </ion-icon>\r\n        <a href=\"javascript:void(0)\"> Listado de registros</a>\r\n      </p>\r\n\r\n    </div>\r\n    <!-- Content buttons -->\r\n    <div class=\"col-6 content-buttons\">\r\n      <a href=\"javascript:void(0)\" class=\"btn-3\" (click)=\"form()\">\r\n        <ion-icon name=\"add-circle\"></ion-icon> Crear registro\r\n      </a>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- Card del listado -->\r\n  <ion-card class=\"card-table\">\r\n\r\n    <p class=\"text-filter\">Filtro de registros</p>\r\n    <div class=\"table-responsive table-style\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th (click)=\"orderByTable(item.key)\" *ngFor=\"let item of thead\"\r\n              [ngClass]=\"orderBy.key==item.key?'select-col-order' :''\">{{item.name}} <ion-icon\r\n                [name]=\"orderBy.key==item.key?(orderBy.order? 'arrow-down':'arrow-up' ) :'swap-vertical'\"\r\n                class=\"icon-filter\"></ion-icon>\r\n            </th>\r\n            <th>Acciones</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"list.length <= 0 && load\">\r\n            <td colspan=\"4\">\r\n              <div class=\"alert alert-secondary\" role=\"alert\">\r\n                <span><i class=\"fa fa-spinner fa-pulse\"></i>\r\n                  Cargando registros...\r\n                </span>\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let a of pageOfItems\">\r\n\r\n            <td>{{a.key}} <ion-badge *ngIf=\"a.data.properties.paramSystem\" class=\"status\" [ngClass]=\"'info'\"\r\n                style=\" margin-bottom: -8px;\">\r\n                <ion-icon name=\"lock-closed-outline\" style=\"font-size: 12px;\r\n              margin-top: -2px;\r\n              transform: translateY(0px);\">\r\n                </ion-icon> Conf. System\r\n              </ion-badge>\r\n            </td>\r\n            <td>{{a.name}}</td>\r\n\r\n            <td>\r\n              <ion-badge class=\"status\" [ngClass]=\"a.status?'enabled' :'disabled'\"> {{a.status?'Activo':'Desactivo'}}\r\n              </ion-badge>\r\n            </td>\r\n\r\n            <td>\r\n              <div class=\"dropdown\">\r\n                <div class=\"dropbtn\">\r\n                  <ion-button class=\"button-01\">\r\n                    <ion-icon name=\"settings-outline\" class=\"icon-01\">\r\n                    </ion-icon> <br>\r\n                  </ion-button>\r\n                </div>\r\n                <ng-container *ngIf=\"true\">\r\n                  <div class=\"dropdown-content\">\r\n\r\n                    <a href=\"javascript:void(0)\" (click)=\"form(a)\">\r\n                      <ion-icon name=\"create-outline\" class=\"icon-01\"> </ion-icon>Editar\r\n                    </a>\r\n\r\n                    <a href=\"javascript:void(0)\" *ngIf=\"a.status\" (click)=\"changeStatus(a.key,false)\">\r\n                      <ion-icon name=\"close-circle-outline\" class=\"icon-01\"></ion-icon> Deshabilitar\r\n                    </a>\r\n\r\n                    <a href=\"javascript:void(0)\" *ngIf=\"!a.status\" (click)=\"changeStatus(a.key,true)\">\r\n                      <ion-icon name=\"checkmark-circle-outline\" class=\"icon-01\"></ion-icon> Habilitar\r\n                    </a>\r\n\r\n                    <a href=\"javascript:void(0)\" (click)=\"delete(a.key)\" class=\"option-division\">\r\n                      <ion-icon name=\"trash-outline\" class=\"icon-01\">\r\n                      </ion-icon> Eliminar\r\n                    </a>\r\n\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n            </td>\r\n\r\n          </tr>\r\n          <tr *ngIf=\"list.length <= 0 && !load\">\r\n            <td colspan=\"5\">No se encontraron registros.</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n      <jw-pagination [items]=\"list\" [pageSize]=\"20\" (changePage)=\"onChangePage($event)\">\r\n      </jw-pagination>\r\n    </div>\r\n\r\n  </ion-card>\r\n\r\n</ion-content>");

/***/ }),

/***/ "7dJU":
/*!******************************************************!*\
  !*** ./src/app/pages/list-qr/list-qr.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "7tDv":
/*!************************************************************!*\
  !*** ./src/app/pages/parametros/parametros.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJhbWV0cm9zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "8PYf":
/*!***************************************!*\
  !*** ./src/app/pages/pages.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .home-section {\n    position: relative;\n    background: #e4e9f7;\n    height: 100vh;\n    left: 260px;\n    width: calc(100% - 260px);\n    transition: all 0.5s ease;\n}\n\n.sidebar.close ~ .home-section {\n    left: 78px;\n    width: calc(100% - 78px);\n}\n */\n.section {\n  position: relative;\n  /*   background: #e4e9f7; */\n  background: linear-gradient(to right, #ba3d47, #bd404a, #c0434c, #c2464f, #c54952, #c64a53, #c84c55, #c94d56, #c94d56, #c94d56, #c94d56, #c94d56);\n  /*   height: 100vh; */\n  left: 260px;\n  transition: all 0.5s ease;\n}\n.menuClose {\n  position: relative;\n  left: 78px;\n  width: calc(100% - 78px);\n  transition: all 0.5s ease;\n}\n.menuOpen {\n  position: relative;\n  left: 260px;\n  width: calc(100% - 260px);\n  transition: all 0.5s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztFQUFBO0FBZUE7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUpBQUE7RUFNQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUxGO0FBUUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0FBTEY7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFMRiIsImZpbGUiOiJwYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuaG9tZS1zZWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNlNGU5Zjc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbGVmdDogMjYwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLnNpZGViYXIuY2xvc2UgfiAuaG9tZS1zZWN0aW9uIHtcclxuICAgIGxlZnQ6IDc4cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzhweCk7XHJcbn1cclxuICovXHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qICAgYmFja2dyb3VuZDogI2U0ZTlmNzsgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCxcclxuICAgICNiYTNkNDcsI2JkNDA0YSwjYzA0MzRjLCNjMjQ2NGYsXHJcbiAgICAjYzU0OTUyLCNjNjRhNTMsI2M4NGM1NSwjYzk0ZDU2LFxyXG4gICAgI2M5NGQ1NiwjYzk0ZDU2LCNjOTRkNTYsI2M5NGQ1NlxyXG4gICk7XHJcbiAgLyogICBoZWlnaHQ6IDEwMHZoOyAqL1xyXG4gIGxlZnQ6IDI2MHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5tZW51Q2xvc2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA3OHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3OHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcblxyXG4ubWVudU9wZW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAyNjBweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "EIIZ":
/*!****************************************************!*\
  !*** ./src/app/pages/list-qr/list-qr.component.ts ***!
  \****************************************************/
/*! exports provided: ListQrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListQrComponent", function() { return ListQrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_qr_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-qr.component.html */ "F/CQ");
/* harmony import */ var _list_qr_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-qr.component.scss */ "7dJU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_components_get_did_get_did_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/get-did/get-did.component */ "GfNY");
/* harmony import */ var src_app_components_import_excel_import_excel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/import-excel/import-excel.component */ "mBxB");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");
/* harmony import */ var src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/apiMongo.service */ "GtMO");
/* harmony import */ var src_app_services_contracts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/contracts.service */ "Ik1h");
/* harmony import */ var src_app_components_gen_cards_gen_cards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/gen-cards/gen-cards.component */ "Fd7s");
/* harmony import */ var src_app_components_list_screen_list_screen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/list-screen/list-screen.component */ "t9ht");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_components_comp_demo_demo_inicio_demo_inicio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/comp-demo/demo-inicio/demo-inicio.component */ "jUMv");
/* harmony import */ var src_app_services_ionic_components_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/ionic-components.service */ "L8EE");
/* harmony import */ var src_app_components_generation_form_generation_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/components/generation-form/generation-form.component */ "LCgp");
/* harmony import */ var src_app_components_qr_multiple_qr_multiple_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/components/qr-multiple/qr-multiple.component */ "g+Y6");


















let ListQrComponent = class ListQrComponent {
    constructor(_comp, _auth, _contractsService, _apiMongo, _fun, _mod) {
        this._comp = _comp;
        this._auth = _auth;
        this._contractsService = _contractsService;
        this._apiMongo = _apiMongo;
        this._fun = _fun;
        this._mod = _mod;
        this.list_main = [];
        this.list = [];
        this.load = false;
        this.key_table = '';
        this.nameFilter = '';
        this.orderBy = {
            key: 'f_emision',
            order: false
        };
        this.thead = [
            { key: 'objective_cert', name: 'Asunto' },
            { key: 'buyer', name: 'Comprador' },
            { key: 'origin', name: 'Origen' },
            { key: 'destination', name: 'Destino' },
            { key: 'f_emision', name: 'Emisión' },
            { key: 'f_vencimineto', name: 'Vencimiento' },
            { key: 'status', name: 'Estado' }
        ];
        this.optionFilter = [
            { key: 'name', value: '', type: 'string' },
            { key: 'status', value: false, type: 'boolean' }
        ];
        this._env = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        /*GET  PARAMAS*/
        this.listTypeDoc = [];
        this.listG_clie = [];
        this.listG_empl = [];
        this.listG_prod = [];
        this.listRole = [];
        this.listTypeProv = [];
        this.parmasOk = false;
    }
    getParamas() { }
    configList(list) {
        let listConfig = [];
        for (let index = 0; index < list.length; index++) {
            const item = list[index];
            let reg = {
                name: item.name,
                url: item.data.document.imgfile_anonymous.url,
                trxid: item.data.data_cert.tx.trxid,
                lacchainId: item.data.data_cert.tx.lacchainId,
                name_titular: item.data.document.subject.name,
                adrx_titular: item.data.document.subject.data.dids.address,
                objective_cert: item.data.data_cert.data.objective_cert
            };
            listConfig.push(reg);
            if (index == (list.length - 1))
                return listConfig;
        }
    }
    ngOnInit() {
        /*     let a:any = [1, 2, 3];
            let b = [4, 5, 6];
            a.push(...b);
            console.log('ARRAy', a); */
        this.getParamas();
        this.getList();
    }
    segmentChanged(value) {
        if (this.load)
            return; // Corrigue erroes al cambiar de tabla rapidamente
        this.key_table = value.detail.value;
        this.list = [];
        this.getList();
    }
    getList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            try {
                this._auth.getUser().subscribe((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (!user)
                        return;
                    this.userSesion = user;
                    this.listReg();
                }));
                this.load = false;
            }
            catch (error) {
                this.load = false;
                yield this._fun.alertError(error);
            }
        });
    }
    listReg() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let DNI_USER = this.userSesion.data.idens[0].number;
            if (this.userSesion.data.role.key == 'MASTER') {
                const emp_temp = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.party, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.employee, 'items');
                /*   console.log('emp_temp', emp_temp); */
                let listTemp = [];
                for (let index = 0; index < emp_temp.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.employee].length; index++) {
                    let DNI = emp_temp.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.employee][index].data.idens[0].number;
                    const res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.dataQrUser, DNI, 'items');
                    if (!this._fun.isEmpty(res.result)) {
                        if (!this._fun.isVarInvalid(res.result[0][DNI])) {
                            listTemp = listTemp.concat(res.result[0][DNI]);
                        }
                    }
                }
                this.list_main = listTemp;
                this.list_main.forEach(element => {
                    element.objective_cert = element.data.dataView.objective_cert;
                    element.buyer = element.data.dataView.buyer;
                    element.origin = element.data.dataView.origin;
                    element.destination = element.data.dataView.destination;
                    element.f_emision = element.data.dataView.f_emision;
                    element.f_vencimineto = element.data.dataView.f_vencimineto;
                });
                this.list = this.list_main;
                this.orderList();
            }
            else {
                const res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.dataQrUser, DNI_USER, 'items');
                if (this._fun.isEmpty(res.result)) {
                    this.load = false;
                    return;
                }
                this.list_main = res.result[0][DNI_USER];
                this.list_main.forEach(element => {
                    element.objective_cert = element.data.dataView.objective_cert;
                    element.buyer = element.data.dataView.buyer;
                    element.origin = element.data.dataView.origin;
                    element.destination = element.data.dataView.destination;
                    element.f_emision = element.data.dataView.f_emision;
                    element.f_vencimineto = element.data.dataView.f_vencimineto;
                });
                this.list = this.list_main;
                this.orderList();
            }
        });
    }
    verQR(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this._mod.create({
                component: src_app_components_qr_multiple_qr_multiple_component__WEBPACK_IMPORTED_MODULE_17__["QrMultipleComponent"],
                cssClass: 'style-qr',
                backdropDismiss: false,
                componentProps: {
                    dataAssociateQR: data.data.dataAssociateQR,
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                /*    console.log(res.data);
                   if (this._fun.isVarInvalid(res.data)) return;
                   if (!this._fun.isVarInvalid(res.data.confirm)) this.getList(); */
            }));
            return yield modal.present();
        });
    }
    verDemo(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('data', data);
            const modal = yield this._mod.create({
                component: src_app_components_comp_demo_demo_inicio_demo_inicio_component__WEBPACK_IMPORTED_MODULE_14__["DemoInicioComponent"],
                cssClass: 'style-demo',
                componentProps: {
                    data,
                    viewDemo_pre: false
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                /*    console.log(res.data);
                   if (this._fun.isVarInvalid(res.data)) return;
                   if (!this._fun.isVarInvalid(res.data.confirm)) this.getList(); */
            }));
            return yield modal.present();
        });
    }
    changeInput(value, index, type) {
        if (type == 'checkbox') {
            value = value.detail.checked;
        }
        console.log("OPTIONFILTER", this.optionFilter);
        this.optionFilter[index].value = value;
        this.filter();
    }
    filter() {
        this.list = this.list_main.filter(a => {
            let filter1 = true;
            let filter2 = true;
            for (let index = 0; index < this.optionFilter.length; index++) {
                var itemf = this.optionFilter[index];
                if (itemf.type == 'string') {
                    filter1 = a.data.dataView.buyer.toLowerCase().indexOf(itemf.value.toLowerCase()) != -1;
                }
                if (itemf.type == 'boolean') {
                    if (a[itemf.key])
                        filter2 = true;
                    else
                        filter2 = itemf.value;
                }
            }
            return filter1 && filter2;
        });
        this.orderList();
    }
    orderByTable(key) {
        console.log(key);
        if (this.orderBy.key == key) {
            this.orderBy.order = !this.orderBy.order;
        }
        else {
            this.orderBy.order = true;
        }
        this.orderBy.key = key;
        this.orderList();
    }
    orderList() {
        let listOrder = this._fun.sortJSON(this.list, this.orderBy.key, this.orderBy.order);
        this.list = listOrder.filter(item => true);
    }
    changeStatus(data, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertChangStatus(status);
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                yield this._apiMongo.changeStatus(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.party, this.key_table, data.key, status);
                /*  if (data.data.dids.length != 0) {
          
                   //Validar conexión en MetaMask
                   await this._contractsService.connectMT();
          
                   let sing: any = await this._contractsService.statusDid(data.data.dids[0].address, status ? 'enable' : 'revoke');
          
                   let signData: any = sing.data;
          
                   let cred = { address: data.data.dids[0].address, pk: null };
                   await this._contractsService.
                     signData(signData, (status ? 'enable' : 'revoke') + ' DID', cred, 'did');
                 } */
                this.getList();
                yield this._fun.alertSucc(status ? src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].MSG.SUC_ENABLED : src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].MSG.SUC_DISABLED);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    delete(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertDelete();
            if (this._fun.isVarInvalid(alert))
                return;
            let loading = yield this._comp.presentLoading();
            try {
                yield this._apiMongo.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].COLLECTION.dataQrUser, this.userSesion.data.idens[0].number, data.key);
                this.getList();
                loading.dismiss();
                yield this._fun.alertSucc(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].MSG.SUC_DELETE);
            }
            catch (error) {
                loading.dismiss();
                yield this._fun.alertError(error);
            }
        });
    }
    onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems;
    }
    /* **************************** */
    getDid(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let did = yield this._contractsService.statusDid(data.data.dids[0].address, 'get');
            console.log('MOSTRAR INFO DID', did);
            /*  data = { name: 'luiggi', did: '0xAD27e9cD2506EE56f5E4124b56D5Bc85e7EEBc95', data: [''] } */
            this._mod.create({
                cssClass: 'style-card-did',
                component: src_app_components_get_did_get_did_component__WEBPACK_IMPORTED_MODULE_6__["GetDidComponent"],
                componentProps: {
                    data,
                    type: this.key_table == src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.customer ? 'Comprador' : (this.key_table == src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].TABLE_SIS.employee ? 'Empleado' : 'Proveedor')
                }
            }).then((modal) => modal.present());
            return;
        });
    }
    importExcel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this._fun.isEmpty(this.listTypeProv, this.listTypeDoc, this.listG_clie, this.listG_empl, this.listG_prod, this.listRole))
                return;
            const modal = yield this._mod.create({
                cssClass: 'style-import-excel',
                backdropDismiss: false,
                component: src_app_components_import_excel_import_excel_component__WEBPACK_IMPORTED_MODULE_7__["ImportExcelComponent"],
                componentProps: {
                    key_table: this.key_table,
                    listTypeDoc: this.listTypeDoc,
                    listG_clie: this.listG_clie,
                    listG_empl: this.listG_empl,
                    listG_prod: this.listG_prod,
                    listRole: this.listRole,
                    listTypeProv: this.listTypeProv
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                /* Actualizar lista */
            }));
            yield modal.present();
        });
    }
    genCards() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this._fun.isEmpty(this.listTypeProv, this.listTypeDoc, this.listG_clie, this.listG_empl, this.listG_prod, this.listRole))
                return;
            const modal = yield this._mod.create({
                cssClass: 'style-import-excel',
                backdropDismiss: false,
                component: src_app_components_gen_cards_gen_cards_component__WEBPACK_IMPORTED_MODULE_11__["GenCardsComponent"],
                componentProps: {
                    list_main: this.list_main,
                    key_table: this.key_table,
                    listTypeDoc: this.listTypeDoc,
                    listG_clie: this.listG_clie,
                    listG_empl: this.listG_empl,
                    listG_prod: this.listG_prod,
                    listRole: this.listRole,
                    listTypeProv: this.listTypeProv
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                /* Actualizar lista */
            }));
            yield modal.present();
        });
    }
    editCred(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let screem = this._fun.noRefObj(data);
            console.log('screem', screem);
            let screenData = {
                dataSreen: {
                    description: "Datos Genéricos",
                    imagenUrl: "/files/0xdfc0EBba7Fc2f39F6A79983032C86FE457C9D070/8e1de7bfc2d59cb53ef1ee1d1b17b83b0d61901d8cb1acb443811ecc9df468c2.png/?token=721a685476003a8bd2a481592165a90791924c1572b0226f50d886beb768fabc"
                },
                sectionConfig: screem.data.dataScreem,
                updateData: screem.data.dataCred.credential.verifiableCredential[0].credentialSubject,
                key: screem.key,
                table: screem.table,
                dataAssociateQR: screem.data.dataAssociateQR
            };
            const modal = yield this._mod.create({
                cssClass: 'style-form',
                backdropDismiss: false,
                component: src_app_components_generation_form_generation_form_component__WEBPACK_IMPORTED_MODULE_16__["GenerationFormComponent"],
                componentProps: {
                    screenData
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('res', res);
                if (this._fun.isVarInvalid(res.data))
                    return;
                if (!this._fun.isVarInvalid(res.data.refresh)) {
                    console.log('CERRAR MODAL DE LISTA DE SCREEN');
                    this.listReg();
                }
            }));
            yield modal.present();
        });
    }
    selectScreen() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this._mod.create({
                /*     cssClass: 'style-import-excel', */
                backdropDismiss: false,
                component: src_app_components_list_screen_list_screen_component__WEBPACK_IMPORTED_MODULE_12__["ListScreenComponent"],
                componentProps: {}
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                /* Actualizar lista */
                if (this._fun.isVarInvalid(res.data))
                    return;
                if (!this._fun.isVarInvalid(res.data.confirm)) {
                    console.log('ACTUALZIAR LISTADO DE CREDENCIALES');
                    this.listReg();
                    yield this._fun.alertSucc(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].MSG.SUC_CREATE);
                }
            }));
            yield modal.present();
        });
    }
};
ListQrComponent.ctorParameters = () => [
    { type: src_app_services_ionic_components_service__WEBPACK_IMPORTED_MODULE_15__["IonicComponentsService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
    { type: src_app_services_contracts_service__WEBPACK_IMPORTED_MODULE_10__["ContractsService"] },
    { type: src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_9__["ApiMongoService"] },
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_8__["Funciones"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
ListQrComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-qr',
        template: _raw_loader_list_qr_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_qr_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListQrComponent);



/***/ }),

/***/ "EqQB":
/*!********************************************************!*\
  !*** ./src/app/pages/pantallas/pantallas.component.ts ***!
  \********************************************************/
/*! exports provided: PantallasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantallasComponent", function() { return PantallasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pantallas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pantallas.component.html */ "z0El");
/* harmony import */ var _pantallas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pantallas.component.scss */ "OQ/A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");
/* harmony import */ var src_app_components_create_table_create_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/create-table/create-table.component */ "1TDX");
/* harmony import */ var src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/apiMongo.service */ "GtMO");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");










let PantallasComponent = class PantallasComponent {
    constructor(_apiMongo, _fun, _mod, router) {
        this._apiMongo = _apiMongo;
        this._fun = _fun;
        this._mod = _mod;
        this.router = router;
        this.list_main = [];
        this.list = [];
        this.load = false;
        this.nameFilter = '';
        this.orderBy = {
            key: '',
            order: true
        };
        this.thead = [
            { key: 'name', name: 'Nombre' },
            { key: 'type', name: 'Tipo' },
            { key: 'action', name: 'Acción' },
            { key: 'fields', name: 'Campos' },
            { key: 'status', name: 'Estado' },
        ];
        this.optionFilter = [
            /* { key: 'key', value: '', type: 'string' }, */
            { key: 'name', value: '', type: 'string' },
            { key: 'status', value: false, type: 'boolean' }
        ];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getList();
    }
    duplicar(key_table) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.object, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.screen, key_table);
                let screen = res.result[0].screen[0];
                let dataDupl = screen.data;
                dataDupl.name = screen.name + ' (COPIA)';
                dataDupl.status = true;
                const res_create = yield this._apiMongo.create(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.object, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.screen, this._fun.makeCode(), dataDupl, false);
                console.log('MOSTRAR 2', res);
                if (this._fun.isVarInvalid(res.result)) {
                    yield this._fun.alertError(res.message);
                    return;
                }
                yield this._fun.alertSucc('Registro fue duplicado correctamente');
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    getList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            try {
                const res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.object, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.screen, 'items');
                if (this._fun.isEmpty(res.result)) {
                    this.load = false;
                    return;
                }
                this.list_main = res.result[0].screen;
                this.list = this.list_main;
                this.filter();
                this.orderBy.order = true;
                this.orderBy.key = '';
                this.orderByTable('key');
                this.load = false;
            }
            catch (error) {
                this.load = false;
                yield this._fun.alertError(error);
            }
        });
    }
    changeInput(value, index, type) {
        if (type == 'checkbox') {
            value = value.detail.checked;
        }
        this.optionFilter[index].value = value;
        this.filter();
    }
    filter() {
        this.list = this.list_main.filter(a => {
            let filter1 = true;
            let filter2 = true;
            for (let index = 0; index < this.optionFilter.length; index++) {
                var itemf = this.optionFilter[index];
                if (itemf.type == 'string') {
                    filter1 = a[itemf.key].toLowerCase().indexOf(itemf.value.toLowerCase()) != -1;
                }
                if (itemf.type == 'boolean') {
                    if (a[itemf.key])
                        filter2 = true;
                    else
                        filter2 = itemf.value;
                }
            }
            return filter1 && filter2;
        });
        console.log('LIST FILTER', this.list);
        this.orderList();
    }
    orderByTable(key) {
        if (this.orderBy.key == key) {
            this.orderBy.order = !this.orderBy.order;
        }
        else {
            this.orderBy.order = true;
        }
        this.orderBy.key = key;
        this.orderList();
    }
    orderList() {
        let listOrder = this._fun.sortJSON(this.list, this.orderBy.key, this.orderBy.order);
        this.list = listOrder.filter(item => true);
    }
    registros(key) {
        this.router.navigate(['create-screen/' + key]);
    }
    changeStatus(key, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertChangStatus(status);
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                yield this._apiMongo.changeStatus(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.object, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.screen, key, status);
                this.getList();
                yield this._fun.alertSucc(status ? src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_ENABLED : src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_DISABLED);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    delete(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertDelete();
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                yield this._apiMongo.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.object, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.screen, key);
                yield this._fun.alertSucc(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_DELETE);
                this.getList();
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    form(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this._mod.create({
                component: src_app_components_create_table_create_table_component__WEBPACK_IMPORTED_MODULE_7__["CreateTableComponent"],
                cssClass: 'modal-small',
                componentProps: {
                    data
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(res.data);
                if (this._fun.isVarInvalid(res.data))
                    return;
                if (!this._fun.isVarInvalid(res.data.confirm))
                    this.getList();
            }));
            return yield modal.present();
        });
    }
    onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems;
    }
};
PantallasComponent.ctorParameters = () => [
    { type: src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__["ApiMongoService"] },
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_6__["Funciones"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PantallasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pantallas',
        template: _raw_loader_pantallas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pantallas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PantallasComponent);



/***/ }),

/***/ "F+xw":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parametros/parametros.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'Parámetros'\"></app-header>\r\n\r\n<ion-content class=\"content-table\">\r\n\r\n  <!-- Cabecera y botones de acción -->\r\n  <div class=\"row content-header\">\r\n    <div class=\"col-6\">\r\n      <p class=\"title-header\">Listado de tablas</p>\r\n    </div>\r\n    <!-- Content buttons -->\r\n    <div class=\"col-6 content-buttons\">\r\n      <!--      <ion-button (click)=\"form()\" class=\"button-03\">\r\n        <ion-icon name=\"add\"></ion-icon> Crear tabla\r\n      </ion-button> -->\r\n\r\n      <a href=\"javascript:void(0)\" class=\"btn-3\" (click)=\"form()\">\r\n        <ion-icon name=\"add-circle\"></ion-icon> Crear tabla\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Card del listado -->\r\n  <ion-card class=\"card-table\">\r\n\r\n    <p class=\"text-filter\">Filtro de registros</p>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-4\">\r\n        <input class=\"form-control\" [ngModel]=\"nameFilter\" (ngModelChange)=\"changeInput($event,0,'input')\"\r\n          placeholder=\"Buscar por nombre\">\r\n      </div>\r\n\r\n      <div class=\"col-4 checkbox-filer\">\r\n        <ion-checkbox slot=\"start\" (ionChange)=\"changeInput($event,1,'checkbox')\" color=\"tertiary\">\r\n        </ion-checkbox>\r\n        <label>Ver desactivados</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"table-responsive table-style\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th (click)=\"orderByTable(item.key)\" *ngFor=\"let item of thead\"\r\n              [ngClass]=\"orderBy.key==item.key?'select-col-order' :''\">{{item.name}} <ion-icon\r\n                [name]=\"orderBy.key==item.key?(orderBy.order? 'arrow-down':'arrow-up' ) :'swap-vertical'\"\r\n                class=\"icon-filter\"></ion-icon>\r\n            </th>\r\n            <th>Acciones</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"list.length <= 0 && load\">\r\n            <td colspan=\"5\">\r\n              <div class=\"alert alert-secondary\" role=\"alert\">\r\n                <span><i class=\"fa fa-spinner fa-pulse\"></i>\r\n                  Cargando registros...\r\n                </span>\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let a of pageOfItems\">\r\n\r\n            <td>\r\n              <ion-icon name=\"apps-outline\" style=\"font-size: 18px;transform:translateY(5px) ;\"></ion-icon> {{a.key}}\r\n              <ng-container *ngIf=\"a.data.properties_obj\">\r\n                <ion-badge *ngIf=\"a.data.properties_obj.paramSystem\" class=\"status\" [ngClass]=\"'info'\"\r\n                  style=\" margin-bottom: -8px;\">\r\n                  <ion-icon name=\"lock-closed-outline\" style=\"font-size: 12px;\r\n                  margin-top: -2px;\r\n                  transform: translateY(0px);\">\r\n                  </ion-icon> Conf. System\r\n                </ion-badge>\r\n              </ng-container>\r\n            </td>\r\n            <td> {{a.name}}\r\n\r\n\r\n            </td>\r\n            <td> {{a.data.properties.count}} </td>\r\n            <td>\r\n              <ion-badge class=\"status\" [ngClass]=\"a.status?'enabled' :'disabled'\"> {{a.status?'Activo':'Desactivo'}}\r\n              </ion-badge>\r\n            </td>\r\n\r\n            <td>\r\n              <div class=\"dropdown\">\r\n                <div class=\"dropbtn\">\r\n                  <ion-button class=\"button-01\">\r\n                    <ion-icon name=\"settings-outline\" class=\"icon-01\">\r\n                    </ion-icon> <br>\r\n                  </ion-button>\r\n                </div>\r\n\r\n                <div class=\"dropdown-content\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"registros(a.key)\">\r\n                    <ion-icon name=\"list-outline\" class=\"icon-01\">\r\n                    </ion-icon>Ver registros\r\n                  </a>\r\n\r\n\r\n                  <ng-container *ngIf=\"!a.data.properties.paramSystem\">\r\n                    <a href=\"javascript:void(0)\" (click)=\"form(a)\" >\r\n                      <ion-icon name=\"create-outline\" class=\"icon-01\"> </ion-icon>Editar\r\n                    </a>\r\n\r\n\r\n\r\n                    <a href=\"javascript:void(0)\" *ngIf=\"a.status\" (click)=\"changeStatus(a.key,false)\">\r\n                      <ion-icon name=\"close-circle-outline\" class=\"icon-01\"></ion-icon> Deshabilitar\r\n                    </a>\r\n\r\n\r\n                    <a href=\"javascript:void(0)\" *ngIf=\"!a.status\" (click)=\"changeStatus(a.key,true)\">\r\n                      <ion-icon name=\"checkmark-circle-outline\" class=\"icon-01\"></ion-icon> Habilitar\r\n                    </a>\r\n\r\n                    <a href=\"javascript:void(0)\" (click)=\"delete(a.key)\" class=\"option-division\">\r\n                      <ion-icon name=\"trash-outline\" class=\"icon-01\">\r\n                      </ion-icon> Eliminar\r\n                    </a>\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n            </td>\r\n\r\n          </tr>\r\n          <tr *ngIf=\"list.length <= 0 && !load\">\r\n            <td colspan=\"5\">No se encontraron registros.</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n      <jw-pagination [items]=\"list\" [pageSize]=\"20\" (changePage)=\"onChangePage($event)\">\r\n      </jw-pagination>\r\n    </div>\r\n\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ "F/CQ":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list-qr/list-qr.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'Módulo de QRs'\"></app-header>\r\n\r\n<ion-content class=\"content-table\">\r\n\r\n  <!-- Cabecera y botones de acción -->\r\n  <div class=\"row content-header\">\r\n    <div class=\"col-6\">\r\n      <p class=\"title-header\">Listado de QRs\r\n      </p>\r\n    </div>\r\n    <!-- Content buttons -->\r\n    <div class=\"col-6 content-buttons\">\r\n      <a href=\"javascript:void(0)\" class=\"btn-3\" (click)=\"selectScreen()\">\r\n        <ion-icon name=\"add-circle\"></ion-icon> Crear QR\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-card class=\"card-table\">\r\n    <!--     <ion-segment (ionChange)=\"segmentChanged($event)\" style=\"max-width: 500px;margin-bottom: 25px;\" mode=\"md\"\r\n      [value]=\"_env.TABLE_SIS.producer\">\r\n\r\n      <ion-segment-button [value]=\"_env.TABLE_SIS.producer\">\r\n        <ion-label style=\"text-transform: capitalize;\">Proveedores</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button [value]=\"_env.TABLE_SIS.employee\">\r\n        <ion-label style=\"text-transform: capitalize;\">Empleados</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button [value]=\"_env.TABLE_SIS.customer\">\r\n        <ion-label style=\"text-transform: capitalize;\">Compradores</ion-label>\r\n      </ion-segment-button>\r\n\r\n    </ion-segment> -->\r\n\r\n    <p class=\"text-filter\">Filtro de registros</p>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-4\">\r\n        <input class=\"form-control\" [ngModel]=\"nameFilter\" (ngModelChange)=\"changeInput($event,0,'input')\"\r\n          placeholder=\"Buscar\">\r\n      </div>\r\n\r\n      <div class=\"col-6 checkbox-filer\">\r\n       <!-- <ion-checkbox slot=\"start\" (ionChange)=\"changeInput($event,1,'checkbox')\" color=\"tertiary\">\r\n        </ion-checkbox>\r\n        <label>Ver desactivados</label>-->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"table-responsive table-style\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th (click)=\"orderByTable(item.key)\" *ngFor=\"let item of thead\"\r\n              [ngClass]=\"orderBy.key==item.key?'select-col-order' :''\">{{item.name}} <ion-icon\r\n                [name]=\"orderBy.key==item.key?(orderBy.order? 'arrow-down':'arrow-up' ) :'swap-vertical'\"\r\n                class=\"icon-filter\"></ion-icon>\r\n            </th>\r\n            <th>Acciones</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"list.length <= 0 && load\">\r\n            <td colspan=\"6\">\r\n              <div class=\"alert alert-secondary\" role=\"alert\">\r\n                <span><i class=\"fa fa-spinner fa-pulse\"></i>\r\n                  Cargando registros...\r\n                </span>\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n\r\n\r\n          <tr *ngFor=\"let a of pageOfItems\">\r\n\r\n            <td>{{a.data.dataView.objective_cert}}</td>\r\n            <td>{{a.data.dataView.buyer}}</td>\r\n            <td>{{a.data.dataView.origin}}</td>\r\n            <td>{{a.data.dataView.destination}}</td>\r\n\r\n            <td style=\"text-transform: capitalize;\">{{a.data.dataView.f_emision*1000 | date:'MMM d, y'}}</td>\r\n            <td style=\"text-transform: capitalize;\">{{a.data.dataView.f_vencimineto*1000 | date:'MMM d, y'}}</td>\r\n\r\n            <td>\r\n              <ion-badge class=\"status\" [ngClass]=\"a.data.temp?'enabled' :'info'\">\r\n                {{a.data.temp?'Activo':'Pendiente'}}\r\n              </ion-badge>\r\n            </td>\r\n\r\n\r\n            <td>\r\n              <div class=\"dropdown\">\r\n                <div class=\"dropbtn\">\r\n                  <ion-button class=\"button-01\">\r\n                    <ion-icon name=\"settings-outline\" class=\"icon-01\">\r\n                    </ion-icon> <br>\r\n                  </ion-button>\r\n                </div>\r\n\r\n                <div class=\"dropdown-content\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"verQR(a)\">\r\n                    <ion-icon name=\"qr-code-outline\"\r\n                      style=\"font-size: 18px;margin-right: 3px;color: var(--main-color);\"></ion-icon> Ver QR\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"verDemo(a)\">\r\n                    <ion-icon name=\"create-outline\" class=\"icon-01\"> </ion-icon> Ver demo\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"editCred(a)\">\r\n                    <ion-icon name=\"create-outline\" class=\"icon-01\"> </ion-icon> Editar\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"delete(a)\" class=\"option-division\">\r\n                    <ion-icon name=\"trash-outline\" class=\"icon-01\">\r\n                    </ion-icon> Eliminar\r\n                  </a>\r\n\r\n                </div>\r\n              </div>\r\n            </td>\r\n\r\n          </tr>\r\n\r\n\r\n          <tr *ngIf=\"list.length <= 0 && !load\">\r\n            <td colspan=\"5\">No se encontraron registros.</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n      <jw-pagination [items]=\"list\" [pageSize]=\"20\" (changePage)=\"onChangePage($event)\">\r\n      </jw-pagination>\r\n    </div>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "F1in":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<!-- <ion-split-pane contentId=\"main-content\" class=\"scrollable-element \">\r\n  <ion-menu contentId=\"main-content\" type=\"overlay\" class=\"menuClass\" id=\"menu\">\r\n     <div style=\"padding: 5px;background: #c0474d;overflow-y: scroll;display: block;height: 100%;\">\r\n      <div style=\"width: 100%;text-align: left;padding-top:15px;padding-left: 15px;\">\r\n        <img src=\"../assets/images/coopecan-letras-blancas-transparente.svg\"\r\n          style=\"width: 58%;height: auto;margin: auto;\">\r\n      </div>\r\n      <ion-list id=\"inbox-list\" style=\"background: #c0474d\">\r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n          <p *ngIf=\"p.code=='section'\"\r\n            style=\"margin: 0;color: rgb(231, 231, 231);margin-top: 20px;margin-bottom:10px;margin-left: 15px;\">\r\n            {{p.title}}</p>\r\n          <ion-item *ngIf=\"p.code!='section'\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\"\r\n            routerLinkActive=\"selected\">\r\n            <ion-icon [name]=\"p.icon\" style=\"font-size: 20px;margin-left: 8px;\"></ion-icon>\r\n            <p style=\"padding-left: 12px;margin-top :9px;margin-bottom: 8px;letter-spacing: 1px;font-size: 10x;\">\r\n              {{ p.title }}\r\n            </p>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n    </div>\r\n  </ion-menu>\r\n\r\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n</ion-split-pane> -->\r\n\r\n<div id=\"main-wrapper\" >\r\n \r\n  <!--     <app-header></app-header> -->\r\n  <app-sidebar #sidebar [appPages]=\"appPages\"></app-sidebar>\r\n  <div class=\"page-wrapper\" [ngClass]=\"menuClose?'menuClose':'menuOpen'\">\r\n   <!--    <router-outlet>\r\n      </router-outlet> -->\r\n      <ion-router-outlet  style=\"position: fixed;\" [ngClass]=\"menuClose?'menuClose':'menuOpen'\"></ion-router-outlet>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "MHl1":
/*!********************************************************!*\
  !*** ./src/app/pages/acciones/acciones.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Npb25lcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "OQ/A":
/*!**********************************************************!*\
  !*** ./src/app/pages/pantallas/pantallas.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYW50YWxsYXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "P9+s":
/*!*******************************************************************************************!*\
  !*** ./node_modules/jw-angular-pagination/__ivy_ngcc__/fesm2015/jw-angular-pagination.js ***!
  \*******************************************************************************************/
/*! exports provided: JwPaginationComponent, JwPaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwPaginationComponent", function() { return JwPaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwPaginationModule", function() { return JwPaginationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jw_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jw-paginate */ "TNpa");
/* harmony import */ var jw_paginate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jw_paginate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function (a0) { return { active: a0 }; };
function JwPaginationComponent_ul_0_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const page_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.setPage(page_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r1.pager.currentPage === page_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r2);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function JwPaginationComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.setPage(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "First");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.setPage(ctx_r7.pager.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, JwPaginationComponent_ul_0_li_7_Template, 3, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.setPage(ctx_r8.pager.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.setPage(ctx_r9.pager.totalPages); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx_r0.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx_r0.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, ctx_r0.pager.currentPage === ctx_r0.pager.totalPages));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx_r0.pager.currentPage === ctx_r0.pager.totalPages));
} }
let JwPaginationComponent = class JwPaginationComponent {
    constructor() {
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.initialPage = 1;
        this.pageSize = 10;
        this.maxPages = 10;
        this.pager = {};
    }
    ngOnInit() {
        // set page if items array isn't empty
        if (this.items && this.items.length) {
            this.setPage(this.initialPage);
        }
    }
    ngOnChanges(changes) {
        // reset page if items array has changed
        if (changes.items.currentValue !== changes.items.previousValue) {
            this.setPage(this.initialPage);
        }
    }
    setPage(page) {
        // get new pager object for specified page
        this.pager = jw_paginate__WEBPACK_IMPORTED_MODULE_2___default()(this.items.length, page, this.pageSize, this.maxPages);
        // get new page of items from items array
        var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // call change page function in parent component
        this.changePage.emit(pageOfItems);
    }
};
JwPaginationComponent.ɵfac = function JwPaginationComponent_Factory(t) { return new (t || JwPaginationComponent)(); };
JwPaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JwPaginationComponent, selectors: [["jw-pagination"]], inputs: { initialPage: "initialPage", pageSize: "pageSize", maxPages: "maxPages", items: "items" }, outputs: { changePage: "changePage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "page-item", "first-item", 3, "ngClass"], [1, "page-link", 3, "click"], [1, "page-item", "previous-item", 3, "ngClass"], ["class", "page-item number-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next-item", 3, "ngClass"], [1, "page-item", "last-item", 3, "ngClass"], [1, "page-item", "number-item", 3, "ngClass"]], template: function JwPaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, JwPaginationComponent_ul_0_Template, 14, 13, "ul", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pager.pages && ctx.pager.pages.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], JwPaginationComponent.prototype, "items", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], JwPaginationComponent.prototype, "changePage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], JwPaginationComponent.prototype, "initialPage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], JwPaginationComponent.prototype, "pageSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], JwPaginationComponent.prototype, "maxPages", void 0);

let JwPaginationModule = class JwPaginationModule {
};
JwPaginationModule.ɵfac = function JwPaginationModule_Factory(t) { return new (t || JwPaginationModule)(); };
JwPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: JwPaginationModule });
JwPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JwPaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'jw-pagination',
                template: `<ul *ngIf="pager.pages && pager.pages.length" class="pagination">
    <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item first-item">
        <a (click)="setPage(1)" class="page-link">First</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item previous-item">
        <a (click)="setPage(pager.currentPage - 1)" class="page-link">Previous</a>
    </li>
    <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}" class="page-item number-item">
        <a (click)="setPage(page)" class="page-link">{{page}}</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item next-item">
        <a (click)="setPage(pager.currentPage + 1)" class="page-link">Next</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item last-item">
        <a (click)="setPage(pager.totalPages)" class="page-link">Last</a>
    </li>
</ul>`
            }]
    }], function () { return []; }, { changePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], initialPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](JwPaginationModule, { declarations: function () { return [JwPaginationComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]; }, exports: function () { return [JwPaginationComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JwPaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                declarations: [JwPaginationComponent],
                exports: [JwPaginationComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of jw-pagination
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=jw-angular-pagination.js.map

/***/ }),

/***/ "Q3A5":
/*!*************************************!*\
  !*** ./src/app/pages/pages.page.ts ***!
  \*************************************/
/*! exports provided: PagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesPage", function() { return PagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pages_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pages.page.html */ "F1in");
/* harmony import */ var _pages_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.page.scss */ "8PYf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _compartido_funciones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../compartido/funciones */ "3Djf");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data-service.service */ "njzu");







let PagesPage = class PagesPage {
    constructor(_dataService, _fun, authService) {
        this._dataService = _dataService;
        this._fun = _fun;
        this.authService = authService;
        this.appPages = [];
        this.options = [
            {
                "name": "Lista de QR",
                url: '/list-qr',
                code: 'qrs',
                icon: 'archive-outline',
                "modules": []
            },
            {
                "name": "Usuarios",
                url: '/users',
                code: 'use',
                icon: 'people',
                "modules": []
            },
            {
                "name": "Roles",
                url: '/roles',
                code: 'rol',
                icon: 'shield-half-outline',
                "modules": []
            },
            {
                "name": "Doc. externos",
                url: '/doc-ext',
                code: 'docex',
                icon: 'layers-outline',
                "modules": []
            },
            {
                "name": "Configuración",
                url: '/config',
                code: 'conf',
                icon: 'build-outline',
                "modules": [
                    { name: 'Pantallas', url: '/pantalla', code: 'scr', icon: 'today-outline' },
                    { name: 'Acciones', url: '/acciones', code: 'acc', icon: 'repeat-outline' },
                    { name: 'Parámetros', url: '/param', code: 'par', icon: 'apps' }
                ]
            }
        ];
        this.sections = [
            { title: 'Administración', code: 'section' },
            { title: 'Configuración', code: 'section' }
        ];
        this.menuClose = false;
    }
    ngOnInit() {
        this.getUser();
        this._dataService.eventBtnMn().subscribe(data => {
            if (this._fun.isVarInvalid(data))
                return;
            console.log('data', data);
            this.menuClose = !this.menuClose;
        });
    }
    getUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.role = yield this.authService.loadUser();
            let data = this.role.data.conf_web;
            //Unica Lista
            let uList = [];
            for (let index = 0; index < data.length; index++) {
                const mod = data[index];
                uList.push(...mod.modules);
            }
            console.log('LISTA UNICA', uList);
            for (let x = 0; x < this.options.length; x++) {
                const opt = this.options[x];
                if (opt.code == 'conf') {
                    let confModules = [];
                    let cf1 = uList.filter(m => m.code == 'scr' && m.value); //Pantalla
                    let cf2 = uList.filter(m => m.code == 'acc' && m.value); //Acciones
                    let cf3 = uList.filter(m => m.code == 'par' && m.value); //Parametros
                    if (!this._fun.isEmpty(cf1))
                        confModules.push({ name: 'Pantallas', url: '/pantalla', code: 'scr', icon: 'today-outline' });
                    if (!this._fun.isEmpty(cf2))
                        confModules.push({ name: 'Acciones', url: '/acciones', code: 'acc', icon: 'repeat-outline' });
                    if (!this._fun.isEmpty(cf3))
                        confModules.push({ name: 'Parámetros', url: '/param', code: 'par', icon: 'apps' });
                    if (confModules.length > 0) {
                        this.appPages.push({
                            "name": "Configuración",
                            url: '/config',
                            code: 'conf',
                            icon: 'build-outline',
                            "modules": confModules
                        });
                    }
                }
                else {
                    let mdOpc = uList.filter(m => m.code == opt.code && m.value);
                    if (!this._fun.isEmpty(mdOpc))
                        this.appPages.push(opt);
                }
            }
        });
    }
};
PagesPage.ctorParameters = () => [
    { type: _services_data_service_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _compartido_funciones__WEBPACK_IMPORTED_MODULE_4__["Funciones"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
PagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pages',
        template: _raw_loader_pages_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pages_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PagesPage);



/***/ }),

/***/ "RPTm":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'Información de usuario'\"></app-header>\r\n\r\n<ion-content>\r\n  <div style=\"background: var(--fondo-1);height: 180px;\">\r\n    <div style=\"position: absolute;top:115px;left:10% ;\">\r\n      <img src=\"../../../assets/images/usermt.png\"\r\n        style=\"height: 130px;width: 130px;border-radius: 100%;object-fit: cover;\">\r\n      <div class=\"btn-main\" style=\"position: absolute;right:2%;bottom: 0; \" (click)=\"copyText()\">\r\n        <ion-icon name=\"shield-checkmark\" style=\"color: #fff;font-size: 24px;transform: translateY(12px)\"> </ion-icon>\r\n      </div>\r\n    </div>\r\n\r\n    <p\r\n      style=\"position: relative; left: 25%;margin-top: 120px; font-size: 32px;color: black;font-weight: 600;display: inline-block;transform: translateY(10px);line-height: 1.3;\">\r\n      {{user.name}}<br> <span style=\"font-size: 15px;color:var(--black-400);font-weight: 500; \">{{user.role}}</span>\r\n    </p>\r\n\r\n  </div>\r\n\r\n\r\n  <div style=\"width: 80%;margin: 0 auto;margin-top: 100px;\">\r\n\r\n <!--    <p style=\"margin: 10px 15px;font-size: 18px;color: #686868;font-weight: 600;margin-bottom: 0;\">Contratos\r\n      inteligentes</p>\r\n    <p style=\"margin: 10px 15px;font-size: 12px;color: #686868;font-weight: 500;margin-top: 0;\">Tu informacion se\r\n      encuentra segura alojada en la blochain</p>\r\n    <div class=\"row\">\r\n\r\n      <ion-item lines=\"none\" class=\"col-12 col-lg-6\">\r\n        <ion-label class=\"ion-text-wrap\">\r\n          <p>Identidades digitales (DID)</p>\r\n          <p\r\n            style=\"font-size: 13px;font-style: italic; margin: 10px 0;line-height: 1;color: black;padding-right: 10px;\">\r\n            {{_env.ct.c_did}}\r\n          </p>\r\n\r\n          <ion-badge class=\"status\" [ngClass]=\"'pending'\" style=\"transform: translateY(6px) ;font-size: 11px;\"\r\n            *ngIf=\"owner_did\">\r\n            <ion-icon name=\"rocket\" style=\"font-size: 11px;transform: translateY(1px);\"></ion-icon>\r\n            Is Owner DID\r\n          </ion-badge>\r\n\r\n          <ion-badge class=\"status\" [ngClass]=\"'enabled'\"\r\n            style=\"transform: translateY(6px);margin-left:5px ;font-size: 11px;\" *ngIf=\"m_did\">\r\n            <ion-icon name=\"shield-checkmark\" style=\"font-size: 11px;transform: translateY(1px);\"></ion-icon>\r\n            Is Master DID\r\n          </ion-badge>\r\n\r\n        </ion-label>\r\n        <ion-button (click)=\"owner(_env.ct.c_did,'identidades digitales')\" class=\"button-03\"\r\n          style=\"height: 35px;width: 115px;\">\r\n          Trasnferir<ion-icon name=\"key\" style=\"font-size: 18px;margin-left: 3px;color: white;\"></ion-icon>\r\n        </ion-button>\r\n\r\n\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"col-12 col-lg-6 item-text-wrap\">\r\n        <ion-label class=\"ion-text-wrap\">\r\n          <p>Credenciales verificables (VC)</p>\r\n          <p\r\n            style=\"font-size: 13px;font-style: italic; margin: 10px 0;line-height: 1;color: black;padding-right: 10px;\">\r\n            {{_env.ct.c_vc}}</p>\r\n\r\n          <ion-badge class=\"status\" [ngClass]=\"'pending'\" style=\"transform: translateY(6px);font-size: 11px;\"\r\n            *ngIf=\"owner_vc\">\r\n            <ion-icon name=\"rocket\" style=\"font-size: 11px;transform: translateY(1px);\"></ion-icon>\r\n            Is Owner VC\r\n          </ion-badge>\r\n\r\n          <ion-badge class=\"status\" [ngClass]=\"'enabled'\"\r\n            style=\"transform: translateY(6px);margin-left:5px ;font-size: 11px;\" *ngIf=\"m_vc\">\r\n            <ion-icon name=\"shield-checkmark\" style=\"font-size: 11px;transform: translateY(1px);\"></ion-icon>\r\n            Is Master VC\r\n          </ion-badge>\r\n\r\n        </ion-label>\r\n        <ion-button (click)=\"owner(_env.ct.c_vc,'credenciales verificables')\" class=\"button-03\"\r\n          style=\"height: 35px;width: 115px;\">\r\n          Trasnferir<ion-icon name=\"key\" style=\"font-size: 18px;margin-left: 3px;color: white;\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </div>\r\n -->\r\n\r\n\r\n    <p style=\"margin: 10px 15px;font-size: 18px;color: #686868;font-weight: 600;margin-bottom: 0;margin-top: 30px;\">\r\n      Datos personales</p>\r\n    <p style=\"margin: 10px 15px;font-size: 12px;color: #686868;font-weight: 500;margin-top: 0;\">Tu informacion se\r\n      encuentra segura alojada en la blochain</p>\r\n    <div class=\"row\">\r\n\r\n\r\n      <!-- button=\"true\"  -->\r\n      <ion-item lines=\"none\" class=\"col-12 col-lg-6\">\r\n        <ion-label>\r\n          <p>Nombre completo</p>\r\n          {{user.name}}\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"col-12 col-lg-6\">\r\n        <ion-label>\r\n          <p>Cargo</p>\r\n          {{user.role}}\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"col-12 col-lg-6\">\r\n        <ion-label>\r\n          <p>Email</p>\r\n          {{user.email}}\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <!--    <ion-item lines=\"none\" class=\"col-12 col-lg-6\">\r\n          <ion-label>\r\n            <p>Contraseña</p>\r\n            *************\r\n          </ion-label>\r\n          <ion-button  class=\"button-01\" style=\"height: 40px;width: 100px;\">\r\n            Cambiar <ion-icon name=\"key\" style=\"font-size: 18px;margin-left: 3px;color: var(--main-color);\">\r\n            </ion-icon>\r\n          </ion-button>\r\n        </ion-item> -->\r\n\r\n\r\n\r\n\r\n\r\n      <ion-item lines=\"none\" class=\"col-12 col-lg-6\">\r\n        <ion-label>\r\n          <p>DID</p>\r\n          {{ (user.DID | slice:0:6)+' ...\r\n          '+(user.DID | slice:38:42) }}\r\n        </ion-label>\r\n        <ion-button (click)=\"generarQR({value: user.DID,text: 'DID'})\" class=\"button-04\"\r\n          style=\"height: 35px;width: 100px;\">\r\n          Ver QR <ion-icon name=\"qr-code-outline\" style=\"font-size: 18px;margin-left: 3px;color: white;\">\r\n          </ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"col-12 col-lg-6\">\r\n        <ion-label>\r\n          <p> {{user.name_ident}}</p>\r\n          {{user.doc_ident}}\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!--  <div style=\"text-align: center;margin-top: 100px;;\">\r\n    <div style=\"height: 400px;width: 320px; box-shadow: var(--shadow-black-200);border-radius: 10px;display: inline-block\" ></div>\r\n    <div style=\"height: 200px;width: 600px; margin-left: 30px; border-radius: 10px;display: inline-block;background: #f7f7fc;margin-top: 0;\" ></div>\r\n  </div>\r\n -->\r\n\r\n  <div>\r\n\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "S13f":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuarios/usuarios.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'Módulo de usuarios'\"></app-header>\r\n\r\n<ion-content class=\"content-table\">\r\n\r\n  <!-- Cabecera y botones de acción -->\r\n  <div class=\"row content-header\">\r\n    <div class=\"col-6\">\r\n      <p class=\"title-header\">Listado de\r\n        {{key_table==_env.TABLE_SIS.customer?'compradores':(key_table==_env.TABLE_SIS.employee?'externos':'proveedores')}}\r\n      </p>\r\n    </div>\r\n    <!-- Content buttons -->\r\n    <div class=\"col-6 content-buttons\">\r\n      <a href=\"javascript:void(0)\" class=\"btn-3\" (click)=\"prepareExport()\" *ngIf=\"key_table ==_env.TABLE_SIS.producer\">\r\n        <ion-icon name=\"download-outline\"></ion-icon> Exportar Excel\r\n      </a>\r\n\r\n      <a href=\"javascript:void(0)\" class=\"btn-3\" (click)=\"importExcel()\" *ngIf=\"key_table ==_env.TABLE_SIS.producer\">\r\n        <ion-icon name=\"push-outline\"></ion-icon> Importar Excel\r\n      </a>\r\n\r\n      <a href=\"javascript:void(0)\" class=\"btn-3\" (click)=\"genCards()\" *ngIf=\"key_table ==_env.TABLE_SIS.producer\">\r\n        <ion-icon name=\"card-outline\"></ion-icon> Generar cards\r\n      </a>\r\n\r\n      <a href=\"javascript:void(0)\" class=\"btn-3\" (click)=\"form()\">\r\n        <ion-icon name=\"add-circle\"></ion-icon> Crear usuario\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-card class=\"card-table\">\r\n    <ion-segment (ionChange)=\"segmentChanged($event)\" style=\"max-width: 500px;margin-bottom: 25px;\" mode=\"md\"\r\n      [value]=\"_env.TABLE_SIS.producer\">\r\n\r\n      <ion-segment-button [value]=\"_env.TABLE_SIS.producer\">\r\n        <ion-label style=\"text-transform: capitalize;\">Proveedores</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button [value]=\"_env.TABLE_SIS.employee\">\r\n        <ion-label style=\"text-transform: capitalize;\">Externos</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button [value]=\"_env.TABLE_SIS.customer\">\r\n        <ion-label style=\"text-transform: capitalize;\">Compradores</ion-label>\r\n      </ion-segment-button>\r\n\r\n    </ion-segment>\r\n    \r\n    <p class=\"text-filter\">Filtro de registros</p>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-4\">\r\n        <input class=\"form-control\" [ngModel]=\"nameFilter\" (ngModelChange)=\"changeInput($event,0,'input')\"\r\n          placeholder=\"Buscar\">\r\n      </div>\r\n\r\n      <div class=\"col-6 checkbox-filer\">\r\n        <ion-checkbox slot=\"start\" (ionChange)=\"changeInput($event,1,'checkbox')\" color=\"tertiary\">\r\n        </ion-checkbox>\r\n        <label>Ver desactivados</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"table-responsive table-style\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th (click)=\"orderByTable(item.key)\" *ngFor=\"let item of thead\"\r\n              [ngClass]=\"orderBy.key==item.key?'select-col-order' :''\">{{item.name}} <ion-icon\r\n                [name]=\"orderBy.key==item.key?(orderBy.order? 'arrow-down':'arrow-up' ) :'swap-vertical'\"\r\n                class=\"icon-filter\"></ion-icon>\r\n            </th>\r\n            <th>Acciones</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"list.length <= 0 && load\">\r\n            <td colspan=\"6\">\r\n              <div class=\"alert alert-secondary\" role=\"alert\">\r\n                <span><i class=\"fa fa-spinner fa-pulse\"></i>\r\n                  Cargando registros...\r\n                </span>\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let a of pageOfItems\">\r\n\r\n            <td>{{a.name}}</td>\r\n            <!--   <td>{{a.data.group.value}}</td> -->\r\n            <td>{{a.data.idens[0].number}}</td>\r\n            <td>{{a.data.dids.length!=0? (a.data.dids[0].address | slice:0:6)+' ...\r\n              '+(a.data.dids[0].address | slice:38:42) :'Pendiente de creación'}}\r\n            </td>\r\n\r\n            <td>\r\n              <ion-badge class=\"status\" [ngClass]=\"a.status?'enabled' :'disabled'\">\r\n                {{a.status?'Activo':'Desactivo'}}\r\n              </ion-badge>\r\n            </td>\r\n\r\n            <td>\r\n              <div class=\"dropdown\">\r\n                <div class=\"dropbtn\">\r\n                  <ion-button class=\"button-01\">\r\n                    <ion-icon name=\"settings-outline\" class=\"icon-01\">\r\n                    </ion-icon> <br>\r\n                  </ion-button>\r\n                </div>\r\n\r\n                <div class=\"dropdown-content\">\r\n                  <a href=\"javascript:void(0)\" *ngIf=\"a.data.dids.length!=0\" (click)=\"getDid(a)\">\r\n                    <ion-icon name=\"shield-checkmark-outline\"\r\n                      style=\"font-size: 18px;margin-right: 3px;color: var(--main-color);\"></ion-icon> Ver DID\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"configMaster(a)\" *ngIf=\"a.table==_env.TABLE_SIS.employee\">\r\n                    <ion-icon name=\"rocket-outline\" style=\"font-size: 18px;margin-right: 3px;color: var(--main-color);\">\r\n                    </ion-icon> Config. Master\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"form(a)\">\r\n                    <ion-icon name=\"create-outline\" class=\"icon-01\"> </ion-icon>Editar\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" *ngIf=\"a.status\" (click)=\"changeStatus(a,false)\">\r\n                    <ion-icon name=\"close-circle-outline\" class=\"icon-01\"></ion-icon> Deshabilitar\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" *ngIf=\"!a.status\" (click)=\"changeStatus(a,true)\">\r\n                    <ion-icon name=\"checkmark-circle-outline\" class=\"icon-01\"></ion-icon> Habilitar\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"delete(a)\" class=\"option-division\">\r\n                    <ion-icon name=\"trash-outline\" class=\"icon-01\">\r\n                    </ion-icon> Eliminar\r\n                  </a>\r\n\r\n                </div>\r\n              </div>\r\n            </td>\r\n\r\n          </tr>\r\n          <tr *ngIf=\"list.length <= 0 && !load\">\r\n            <td colspan=\"5\">No se encontraron registros.</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n      <jw-pagination [items]=\"list\" [pageSize]=\"20\" (changePage)=\"onChangePage($event)\">\r\n      </jw-pagination>\r\n    </div>\r\n  </ion-card>\r\n\r\n</ion-content>");

/***/ }),

/***/ "SJz+":
/*!**********************************************************!*\
  !*** ./src/app/pages/doc-extern/doc-extern.component.ts ***!
  \**********************************************************/
/*! exports provided: DocExternComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocExternComponent", function() { return DocExternComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_doc_extern_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./doc-extern.component.html */ "sy6e");
/* harmony import */ var _doc_extern_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doc-extern.component.scss */ "s9Vn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_add_doc_extern_add_doc_extern_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/add-doc-extern/add-doc-extern.component */ "NqfC");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");
/* harmony import */ var src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/apiMongo.service */ "GtMO");
/* harmony import */ var src_app_services_contracts_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/contracts.service */ "Ik1h");
/* harmony import */ var src_app_components_get_cred_get_cred_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/get-cred/get-cred.component */ "GHh1");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");












let DocExternComponent = class DocExternComponent {
    constructor(_auth, _contractsService, _fun, _apiMongo, _mod) {
        this._auth = _auth;
        this._contractsService = _contractsService;
        this._fun = _fun;
        this._apiMongo = _apiMongo;
        this._mod = _mod;
        this.list_main = [];
        this.list = [];
        this.load = false;
        this.key_table = '';
        this.nameFilter = '';
        this.orderBy = {
            key: '',
            order: true
        };
        this.thead = [
            { key: 'name', name: 'Titulo' },
            { key: 'data.document.iat', name: 'Fecha de emisión' },
            { key: 'data.document.subject.name', name: 'Titular' },
            /* { key: 'did', name: 'Cred. verificable' }, */
            { key: 'data.document.documentType.value', name: 'Tipo' },
            { key: 'status', name: 'Estado' },
        ];
        this.optionFilter = [
            { key: 'status', value: false, type: 'boolean' },
            { key: 'name', value: '', type: 'string' },
            { key: 'data.document.subject.name', value: '', type: 'string' },
        ];
        this._env = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"];
        /*GET  PARAMAS*/
        this.listDocType = [];
        this.parmasOk = false;
    }
    getParamas() {
        this._apiMongo._get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.type_documents, 'items').subscribe((res) => {
            this.listDocType = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.type_documents];
        });
    }
    ngOnInit() {
        this.key_table = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.producer;
        this._auth.getUser().subscribe((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!user)
                return;
            this.userSesion = user;
            this.key_table = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.producer;
            this.getParamas();
            this.getList();
        }));
    }
    segmentChanged(value) {
        if (this.load)
            return; // Corrigue erroes al cambiar de tabla rapidamente
        this.key_table = value.detail.value;
        this.list = [];
        this.getList();
    }
    getList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            try {
                let res;
                if (this.userSesion.data.role.key == 'MASTER') {
                    res = yield this._apiMongo.filter(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].COLLECTION.document, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.external, { 'data.partyType': this._fun.enum(this.key_table) });
                }
                else {
                    res = yield this._apiMongo.filter(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].COLLECTION.document, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.external, { 'data.partyType': this._fun.enum(this.key_table), 'data.document.subject.data.uCreator': this.userSesion.data.idens[0].number });
                }
                console.log('res_0000000', res);
                //  res = await this._apiMongo.filter(env.COLLECTION.document, env.TABLE_SIS.external, { 'data.partyType': this._fun.enum(this.key_table) });
                if (this._fun.isEmpty(res.result)) {
                    this.load = false;
                    return;
                }
                this.list_main = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.external];
                this.list = this.list_main;
                /*       this.filter(); */
                this.orderBy.order = true;
                this.orderBy.key = '';
                this.orderByTable('key');
                this.load = false;
            }
            catch (error) {
                this.load = false;
                yield this._fun.alertError(error);
            }
        });
    }
    changeInput(value, index, type) {
        if (type == 'checkbox') {
            value = value.detail.checked;
        }
        if (index == -1) {
            this.optionFilter[1].value = value;
            this.optionFilter[2].value = value;
        }
        else
            this.optionFilter[index].value = value;
        this.filter();
    }
    filter() {
        this.list = this.list_main.filter(a => {
            let arrayBand = [];
            for (let index = 0; index < this.optionFilter.length; index++) {
                arrayBand.push(true);
                var itemf = this.optionFilter[index];
                if (itemf.type == 'string') {
                    let arrayJSON = [];
                    arrayJSON = itemf.key.split('.');
                    if (arrayJSON.length > 1) {
                        let valorA = JSON.parse(JSON.stringify(a));
                        arrayJSON.forEach(fld => { valorA = valorA[fld]; });
                        arrayBand[index] = valorA.toLowerCase().indexOf(itemf.value.toLowerCase()) != -1;
                    }
                    else {
                        arrayBand[index] = a[itemf.key].toLowerCase().indexOf(itemf.value.toLowerCase()) != -1;
                    }
                }
                if (itemf.type == 'boolean') {
                    if (a[itemf.key])
                        arrayBand[index] = true;
                    else
                        arrayBand[index] = itemf.value;
                }
                if (index == (this.optionFilter.length - 1)) {
                    return arrayBand[0] && (arrayBand[1] || arrayBand[2]);
                }
            }
        });
        this.orderList();
    }
    orderByTable(key) {
        if (this.orderBy.key == key) {
            this.orderBy.order = !this.orderBy.order;
        }
        else {
            this.orderBy.order = true;
        }
        this.orderBy.key = key;
        this.orderList();
    }
    orderList() {
        let listOrder = this._fun.sortJSON(this.list, this.orderBy.key, this.orderBy.order);
        this.list = listOrder.filter(item => true);
    }
    changeStatus(data, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertChangStatus(status);
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                let res = yield this._apiMongo.changeStatus(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].COLLECTION.document, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.external, data.key, status);
                this.getList();
                yield this._fun.alertSucc(status ? src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].MSG.SUC_ENABLED : src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].MSG.SUC_DISABLED);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    getCred(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this._fun.isEmpty(this.listDocType))
                return;
            const modal = yield this._mod.create({
                cssClass: 'style-get-cred',
                component: src_app_components_get_cred_get_cred_component__WEBPACK_IMPORTED_MODULE_10__["GetCredComponent"],
                componentProps: {
                    data
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this._fun.isVarInvalid(res.data))
                    return;
                if (!this._fun.isVarInvalid(res.data.confirm))
                    this.getList();
            }));
            return yield modal.present();
        });
    }
    delete(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertDelete();
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                yield this._apiMongo.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].COLLECTION.document, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.external, data.key);
                this.getList();
                yield this._fun.alertSucc(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].MSG.SUC_DELETE);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    form(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this._fun.isEmpty(this.listDocType))
                return;
            const modal = yield this._mod.create({
                component: src_app_components_add_doc_extern_add_doc_extern_component__WEBPACK_IMPORTED_MODULE_4__["AddDocExternComponent"],
                componentProps: {
                    key_table: this.key_table,
                    listDocType: this.listDocType
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this._fun.isVarInvalid(res.data))
                    return;
                if (!this._fun.isVarInvalid(res.data.confirm))
                    this.getList();
            }));
            return yield modal.present();
        });
    }
    onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems;
    }
};
DocExternComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
    { type: src_app_services_contracts_service__WEBPACK_IMPORTED_MODULE_9__["ContractsService"] },
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_7__["Funciones"] },
    { type: src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__["ApiMongoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
DocExternComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-doc-extern',
        template: _raw_loader_doc_extern_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_doc_extern_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DocExternComponent);



/***/ }),

/***/ "TNpa":
/*!*****************************************************!*\
  !*** ./node_modules/jw-paginate/lib/jw-paginate.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function paginate(totalItems, currentPage, pageSize, maxPages) {
    if (currentPage === void 0) { currentPage = 1; }
    if (pageSize === void 0) { pageSize = 10; }
    if (maxPages === void 0) { maxPages = 10; }
    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);
    // ensure current page isn't out of range
    if (currentPage < 1) {
        currentPage = 1;
    }
    else if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    var startPage, endPage;
    if (totalPages <= maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = totalPages;
    }
    else {
        // total pages more than max so calculate start and end pages
        var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = maxPages;
        }
        else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        }
        else {
            // current page somewhere in the middle
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }
    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // create an array of pages to ng-repeat in the pager control
    var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
    // return object with all pager properties required by the view
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
}
module.exports = paginate;


/***/ }),

/***/ "VMY1":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Wen6":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/acciones/acciones.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'Acciones'\"></app-header>\r\n\r\n<ion-content class=\"content-table\">\r\n\r\n  <!-- Cabecera y botones de acción -->\r\n  <div class=\"row content-header\">\r\n    <div class=\"col-6\">\r\n      <p class=\"title-header\">Listado de acciones</p>\r\n    </div>\r\n    <!-- Content buttons -->\r\n    <div class=\"col-6 content-buttons\">\r\n\r\n      <a href=\"javascript:void(0)\" class=\"btn-3\" (click)=\"form()\" >\r\n        <ion-icon name=\"add-circle\"></ion-icon> Crear acción </a>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Card del listado -->\r\n  <ion-card class=\"card-table\">\r\n\r\n    <p class=\"text-filter\">Filtro de registros</p>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-4\">\r\n        <input class=\"form-control\" [ngModel]=\"nameFilter\" (ngModelChange)=\"changeInput($event,0,'input')\"\r\n          placeholder=\"Buscar por nombre\">\r\n      </div>\r\n\r\n      <div class=\"col-4 checkbox-filer\">\r\n        <ion-checkbox slot=\"start\" (ionChange)=\"changeInput($event,1,'checkbox')\" color=\"tertiary\">\r\n        </ion-checkbox>\r\n        <label>Ver desactivados</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"table-responsive table-style\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th (click)=\"orderByTable(item.key)\" *ngFor=\"let item of thead\"\r\n              [ngClass]=\"orderBy.key==item.key?'select-col-order' :''\">{{item.name}} <ion-icon\r\n                [name]=\"orderBy.key==item.key?(orderBy.order? 'arrow-down':'arrow-up' ) :'swap-vertical'\"\r\n                class=\"icon-filter\"></ion-icon>\r\n            </th>\r\n            <th>Acciones</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"list.length <= 0 && load\">\r\n            <td colspan=\"5\">\r\n              <div class=\"alert alert-secondary\" role=\"alert\">\r\n                <span><i class=\"fa fa-spinner fa-pulse\"></i>\r\n                  Cargando registros...\r\n                </span>\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let a of pageOfItems\">\r\n\r\n            <td> {{a.key}}</td>\r\n            <td> {{a.name}} </td>\r\n            <td> {{a.data.buttons.length}} </td>\r\n            <td>\r\n              <span class=\"status\" [ngClass]=\"a.status ?'enabled':'disabled'\">\r\n                {{a.status ?'Activo':'Desactivo'}}\r\n              </span>\r\n            </td>\r\n\r\n            <td>\r\n              <div class=\"dropdown\">\r\n                <div class=\"dropbtn\">\r\n                  <ion-button class=\"button-01\">\r\n                    <ion-icon name=\"settings-outline\" class=\"icon-01\">\r\n                    </ion-icon> <br>\r\n                  </ion-button>\r\n                </div>\r\n\r\n                <div class=\"dropdown-content\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"botones(a.key)\">\r\n                    <ion-icon name=\"list-outline\" class=\"icon-01\">\r\n                    </ion-icon>Ver registros\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"form(a)\">\r\n                    <ion-icon name=\"create-outline\" class=\"icon-01\"> </ion-icon>Editar\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" *ngIf=\"a.status\" (click)=\"changeStatus(a.key,false)\">\r\n                    <ion-icon name=\"close-circle-outline\" class=\"icon-01\"></ion-icon> Deshabilitar\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" *ngIf=\"!a.status\" (click)=\"changeStatus(a.key,true)\">\r\n                    <ion-icon name=\"checkmark-circle-outline\" class=\"icon-01\"></ion-icon> Habilitar\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"delete(a.key)\" class=\"option-division\">\r\n                    <ion-icon name=\"trash-outline\" class=\"icon-01\">\r\n                    </ion-icon> Eliminar\r\n                  </a>\r\n\r\n                </div>\r\n              </div>\r\n            </td>\r\n\r\n          </tr>\r\n          <tr *ngIf=\"list.length <= 0 && !load\">\r\n            <td colspan=\"5\">No se encontraron registros.</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n      <jw-pagination [items]=\"list\" [pageSize]=\"20\" (changePage)=\"onChangePage($event)\">\r\n      </jw-pagination>\r\n    </div>\r\n\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ "Y5Lh":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "RPTm");
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.scss */ "VMY1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");
/* harmony import */ var src_app_components_alert_input_alert_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/alert-input/alert-input.component */ "hWnB");
/* harmony import */ var src_app_components_generar_code_qr_generar_code_qr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/generar-code-qr/generar-code-qr.component */ "pNKe");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_contracts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/contracts.service */ "Ik1h");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "AytR");












let ProfileComponent = class ProfileComponent {
    constructor(_fun, _contractsService, _auth, router, _mod, _modal) {
        this._fun = _fun;
        this._contractsService = _contractsService;
        this._auth = _auth;
        this.router = router;
        this._mod = _mod;
        this._modal = _modal;
        this.did_us = false;
        this._env = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"];
        this.user = {
            name: '',
            role: '',
            DID: '',
            email: '',
            doc_ident: '',
            name_ident: ''
        };
        this.m_did = false;
        this.m_vc = false;
        this.owner_did = false;
        this.owner_vc = false;
    }
    ngOnInit() {
        this.getUser();
    }
    getUser() {
        this._auth.getUser().subscribe(res => {
            if (this._fun.isVarInvalid(res))
                return;
            console.log(res);
            this.data = res;
            this.isMaster();
            if (res.data.dids.length != 0)
                this.did_us = true;
            this.user.name = res.name;
            this.user.role = res.data.role.value,
                this.user.DID = this.did_us ? res.data.dids[0].address : 'DID pendiente de creación';
            this.user.email = res.data.email;
            this.user.doc_ident = res.data.idens[0].number;
            this.user.name_ident = res.data.idens[0].type_name;
        });
    }
    isMaster() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!this._fun.isEmpty(this.data.data.dids)) {
                    this._contractsService.isMaster(this.data.data.dids[0].address, src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].ct.c_did)
                        .subscribe((res_did) => {
                        this.m_did = res_did.data;
                        console.log('RES res_vc', res_did);
                    });
                    this._contractsService.isMaster(this.data.data.dids[0].address, src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].ct.c_vc)
                        .subscribe((res_vc) => {
                        this.m_vc = res_vc.data;
                        console.log('RES res_vc', res_vc);
                    });
                    this._contractsService.owner(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].ct.c_vc)
                        .subscribe((owner) => {
                        this.owner_did = owner.data;
                        console.log('RES owner_did', owner);
                    });
                    this._contractsService.owner(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].ct.c_vc)
                        .subscribe((owner) => {
                        this.owner_vc = owner.data;
                        console.log('RES owner_vc', owner);
                    });
                }
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    compartir() {
    }
    copyText() {
    }
    owner(ct, name_ct) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this._mod.create({
                component: src_app_components_alert_input_alert_input_component__WEBPACK_IMPORTED_MODULE_7__["AlertInputComponent"],
                cssClass: 'style-alert-input',
                componentProps: {
                    buttonConfim: 'Si, transferir',
                    textTitle: 'Alerta',
                    subtitle: 'Una vez que se tranfiera la propiedad su usuario no tendra acceso al contrato. Esta acción irrevocable, esta seguro de tranferir propiedad del contrato de ' + name_ct + ' ?',
                    field: {
                        value: '',
                        caption: 'Ingresa dirección del nuevo propietario',
                        placeholder: 'x0a1a1...a1a1a1',
                        type: 'text'
                    }
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(res.data);
                if (this._fun.isVarInvalid(res.data))
                    return;
                if (!this._fun.isVarInvalid(res.data.confirm)) {
                    /* ************************* */
                    //Validar conexión en MetaMask
                    yield this._contractsService.connectMT();
                    //FALTA TERMINAR
                    /*  let sing: any = await this._contractsService.tranfertowner(this.ct);
                 
                     let signData: any = sing.data;
                 
                     let cred = { address: this.address, pk: null };
                     await this._contractsService.
                       signData(signData, 'Add Master', cred, this.ct);
                 
                     await this._fun.alertSucc('Se actualizó privilegios de usuario correctamente'); */
                    /* *************************** */
                    this.isMaster();
                }
            }));
            return yield modal.present();
        });
    }
    generarQR(data) {
        this._modal.create({
            cssClass: 'modal-qr',
            component: src_app_components_generar_code_qr_generar_code_qr_component__WEBPACK_IMPORTED_MODULE_8__["GenerarCodeQRComponent"],
            componentProps: {
                codeQR: data.value,
                texto: data.text,
            }
        }).then((modal) => modal.present());
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_6__["Funciones"] },
    { type: src_app_services_contracts_service__WEBPACK_IMPORTED_MODULE_10__["ContractsService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileComponent);



/***/ }),

/***/ "bAdY":
/*!**********************************************************************!*\
  !*** ./src/app/pages/create-pantalla/create-pantalla.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --border-color: #e9ecef;\n}\n\n.item-native {\n  z-index: 10000 !important;\n}\n\n/* ion-item::part(native) {\n    padding-inline-start: 5px;\n  } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjcmVhdGUtcGFudGFsbGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTs7S0FBQSIsImZpbGUiOiJjcmVhdGUtcGFudGFsbGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2U5ZWNlZjtcclxufVxyXG5cclxuLml0ZW0tbmF0aXZlIHtcclxuICAgIHotaW5kZXg6IDEwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIGlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweDtcclxuICB9ICovIl19 */");

/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesPageModule", function() { return PagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "hiuq");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages-routing.module */ "viRw");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");
/* harmony import */ var _pages_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages.page */ "Q3A5");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "Y5Lh");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layout/layout.module */ "Tx//");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jw-angular-pagination */ "P9+s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_qr_list_qr_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list-qr/list-qr.component */ "EIIZ");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./usuarios/usuarios.component */ "2OcZ");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./roles/roles.component */ "3ZaD");
/* harmony import */ var _parametros_parametros_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parametros/parametros.component */ "0wo4");
/* harmony import */ var _tabla_registros_tabla_registros_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tabla-registros/tabla-registros.component */ "+Pdu");
/* harmony import */ var _pantallas_pantallas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pantallas/pantallas.component */ "EqQB");
/* harmony import */ var _create_pantalla_create_pantalla_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./create-pantalla/create-pantalla.component */ "srgz");
/* harmony import */ var _acciones_acciones_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./acciones/acciones.component */ "v3vT");
/* harmony import */ var _accion_botones_accion_botones_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./accion-botones/accion-botones.component */ "fbn7");
/* harmony import */ var _doc_extern_doc_extern_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./doc-extern/doc-extern.component */ "SJz+");

























let PagesPageModule = class PagesPageModule {
};
PagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages_page__WEBPACK_IMPORTED_MODULE_8__["PagesPage"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
            _list_qr_list_qr_component__WEBPACK_IMPORTED_MODULE_14__["ListQrComponent"],
            _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_16__["UsuariosComponent"],
            _doc_extern_doc_extern_component__WEBPACK_IMPORTED_MODULE_24__["DocExternComponent"],
            _roles_roles_component__WEBPACK_IMPORTED_MODULE_17__["RolesComponent"],
            _parametros_parametros_component__WEBPACK_IMPORTED_MODULE_18__["ParametrosComponent"],
            _tabla_registros_tabla_registros_component__WEBPACK_IMPORTED_MODULE_19__["TablaRegistrosComponent"],
            _pantallas_pantallas_component__WEBPACK_IMPORTED_MODULE_20__["PantallasComponent"],
            _create_pantalla_create_pantalla_component__WEBPACK_IMPORTED_MODULE_21__["CreatePantallaComponent"],
            _acciones_acciones_component__WEBPACK_IMPORTED_MODULE_22__["AccionesComponent"],
            _accion_botones_accion_botones_component__WEBPACK_IMPORTED_MODULE_23__["AccionBotonesComponent"]
        ],
        imports: [
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_12__["JwPaginationModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_6__["PagesPageRoutingModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__["QRCodeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_5__["NgxQRCodeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"]
        ]
    })
], PagesPageModule);



/***/ }),

/***/ "fbn7":
/*!******************************************************************!*\
  !*** ./src/app/pages/accion-botones/accion-botones.component.ts ***!
  \******************************************************************/
/*! exports provided: AccionBotonesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccionBotonesComponent", function() { return AccionBotonesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_accion_botones_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./accion-botones.component.html */ "xFcF");
/* harmony import */ var _accion_botones_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accion-botones.component.scss */ "/IiH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");
/* harmony import */ var src_app_components_create_button_create_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/create-button/create-button.component */ "ewux");
/* harmony import */ var src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/apiMongo.service */ "GtMO");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");










let AccionBotonesComponent = class AccionBotonesComponent {
    constructor(_fun, _apiMongo, _mod, router, route) {
        this._fun = _fun;
        this._apiMongo = _apiMongo;
        this._mod = _mod;
        this.router = router;
        this.route = route;
        this.list_main = [];
        this.list = [];
        this.load = false;
        this.key_table = '';
        this.nameFilter = '';
        this.orderBy = {
            key: '',
            order: true
        };
        this.thead = [
            { key: 'name', name: 'Nombre' },
            { key: 'note', name: 'Descripción' },
            { key: 'type', name: 'Tipo' },
        ];
        this.optionFilter = [
            { key: 'name', value: '', type: 'string' }
        ];
        /*GET  PARAMAS*/
        this.listTypeBut = [];
        this.listCallAct = [];
    }
    getParamas() {
        this._apiMongo._get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.type_button, 'items').subscribe((res) => {
            this.listTypeBut = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.type_button];
        });
        this._apiMongo._get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.type_callToAction, 'items').subscribe((res) => {
            this.listCallAct = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.type_callToAction];
        });
    }
    ngOnInit() {
        this.getParamas();
        this.key_table = this.route.snapshot.paramMap.get('key');
        this.getList();
    }
    getList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            try {
                const res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.object, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.action, this.key_table);
                if (this._fun.isEmpty(res.result)) {
                    this.load = false;
                    return;
                }
                /*  console.log('res', res); */
                this.action = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.action][0];
                this.list_main = this.action.data.buttons;
                /*       console.log('res', res);
                      console.log('this.action', this.action);
                      console.log('this.list_main', this.list_main); */
                this.list = this.list_main;
                console.log('LIST 01', this.list);
                this.filter();
                console.log('LIST 02', this.list);
                this.orderBy.order = true;
                this.orderBy.key = '';
                this.orderByTable('name');
                this.load = false;
            }
            catch (error) {
                this.load = false;
                yield this._fun.alertError(error);
            }
        });
    }
    changeInput(value, index, type) {
        if (type == 'checkbox') {
            value = value.detail.checked;
        }
        this.optionFilter[index].value = value;
        this.filter();
    }
    filter() {
        this.list = this.list_main.filter(a => {
            let filter1 = true;
            let filter2 = true;
            for (let index = 0; index < this.optionFilter.length; index++) {
                var itemf = this.optionFilter[index];
                if (itemf.type == 'string') {
                    filter1 = a[itemf.key].toLowerCase().indexOf(itemf.value.toLowerCase()) != -1;
                }
                if (itemf.type == 'boolean') {
                    if (a[itemf.key])
                        filter2 = true;
                    else
                        filter2 = itemf.value;
                }
            }
            return filter1 && filter2;
        });
        this.orderList();
    }
    orderByTable(key) {
        if (this.orderBy.key == key) {
            this.orderBy.order = !this.orderBy.order;
        }
        else {
            this.orderBy.order = true;
        }
        this.orderBy.key = key;
        this.orderList();
    }
    orderList() {
        console.log('this.list', this.list);
        console.log('orderBy.key', this.orderBy.key);
        console.log('orderBy.order', this.orderBy.order);
        let listOrder = this._fun.sortJSON(this.list, this.orderBy.key, this.orderBy.order);
        this.list = listOrder.filter(item => true);
    }
    back() {
        this.router.navigate(['acciones']);
    }
    changeStatus(key, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertChangStatus(status);
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                yield this._apiMongo.changeStatus(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.object, this.key_table, key, status);
                this.getList();
                yield this._fun.alertSucc(status ? src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_ENABLED : src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_DISABLED);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    delete(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('index', i);
            this.action.data.buttons;
            var index = this.action.data.buttons.indexOf(i);
            console.log('index', index);
            if (index > -1) {
                let a = this.action.data.buttons.splice(index, 1);
                console.log('NUEVO VALOR', a);
            }
            console.log('buttons', this.action.data.buttons);
            return;
            let alert = yield this._fun.alertDelete();
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                /*       await this._apiMongo.delete(env.COLLECTION.object, this.key_table, key); */
                this.getList();
                this.updateTableCount();
                yield this._fun.alertSucc(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_DELETE);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    updateTableCount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let resTable = yield this._apiMongo.getkey(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.object, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.action, this.key_table);
                console.log('resTable', resTable);
                let table = resTable.result[0].action[0];
                let count = table.data.properties.count - 1;
                console.log('table', table);
                var body = {
                    name: table.name,
                    properties: { count, eliminabled: false }
                };
                console.log('body', body);
                const res = yield this._apiMongo.create(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.object, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.action, this.key_table, body, true);
                console.log('res', res);
                if (this._fun.isVarInvalid(res.result)) {
                    yield this._fun.alertError(res.message);
                    return;
                }
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    form(data, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*   if (this._fun.isEmpty(this.listTypeBut, this.listCallAct)) return;
           */
            const modal = yield this._mod.create({
                component: src_app_components_create_button_create_button_component__WEBPACK_IMPORTED_MODULE_7__["CreateButtonComponent"],
                /*   cssClass: 'modal-small', */
                componentProps: {
                    index,
                    action: this.action,
                    data,
                    listTypeBut: this.listTypeBut,
                    listCallAct: this.listCallAct
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(res.data);
                if (this._fun.isVarInvalid(res.data))
                    return;
                if (!this._fun.isVarInvalid(res.data.confirm))
                    this.getList();
            }));
            return yield modal.present();
        });
    }
    onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems;
    }
};
AccionBotonesComponent.ctorParameters = () => [
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_6__["Funciones"] },
    { type: src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__["ApiMongoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AccionBotonesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-accion-botones',
        template: _raw_loader_accion_botones_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_accion_botones_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccionBotonesComponent);



/***/ }),

/***/ "fysh":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/roles/roles.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'Roles'\"></app-header>\r\n\r\n<ion-content class=\"content-table\">\r\n\r\n  <!-- Cabecera y botones de acción -->\r\n  <div class=\"row content-header\">\r\n    <div class=\"col-6\">\r\n      <p class=\"title-header\">Listado de roles</p>\r\n    </div>\r\n    <!-- Content buttons -->\r\n    <div class=\"col-6 content-buttons\">\r\n\r\n      <a href=\"javascript:void(0)\" class=\"btn-3\" (click)=\"form()\" >\r\n        <ion-icon name=\"add-circle\"></ion-icon> Crear rol </a>\r\n\r\n    <!--   <ion-button class=\"button-03\">\r\n        <ion-icon name=\"add\"></ion-icon> \r\n      </ion-button> -->\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- Card del listado -->\r\n  <ion-card class=\"card-table\">\r\n\r\n\r\n    <p class=\"text-filter\">Filtro de registros</p>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-4\">\r\n        <input class=\"form-control\" [ngModel]=\"nameFilter\" (ngModelChange)=\"changeInput($event,0,'input')\"\r\n          placeholder=\"Buscar\">\r\n      </div>\r\n\r\n      <div class=\"col-4 checkbox-filer\">\r\n        <ion-checkbox slot=\"start\" (ionChange)=\"changeInput($event,1,'checkbox')\" color=\"tertiary\">\r\n        </ion-checkbox>\r\n        <label>Ver desactivados</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"table-responsive table-style\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th (click)=\"orderByTable(item.key)\" *ngFor=\"let item of thead\"\r\n              [ngClass]=\"orderBy.key==item.key?'select-col-order' :''\">{{item.name}} <ion-icon\r\n                [name]=\"orderBy.key==item.key?(orderBy.order? 'arrow-down':'arrow-up' ) :'swap-vertical'\"\r\n                class=\"icon-filter\"></ion-icon>\r\n            </th>\r\n            <th>Acciones</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"list.length <= 0 && load\">\r\n            <td colspan=\"6\">\r\n              <div class=\"alert alert-secondary\" role=\"alert\">\r\n                <span><i class=\"fa fa-spinner fa-pulse\"></i>\r\n                  Cargando registros...\r\n                </span>\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let a of pageOfItems\">\r\n\r\n            <td>{{a.key}}</td>\r\n            <td>{{a.name}}</td>\r\n            <td>{{a.data.acc_web?'Con acceso':'Sin acceso'}}</td>\r\n            <td>{{a.data.acc_app?'Con acceso':'Sin acceso'}}</td>\r\n\r\n            <td>\r\n              <ion-badge class=\"status\" [ngClass]=\"a.status?'enabled' :'disabled'\"> {{a.status?'Activo':'Desactivo'}}\r\n              </ion-badge>\r\n            </td>\r\n\r\n            <td>\r\n              <div class=\"dropdown\">\r\n                <div class=\"dropbtn\">\r\n                  <ion-button class=\"button-01\">\r\n                    <ion-icon name=\"settings-outline\" class=\"icon-01\">\r\n                    </ion-icon> <br>\r\n                  </ion-button>\r\n                </div>\r\n\r\n                <div class=\"dropdown-content\">\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"form(a)\">\r\n                    <ion-icon name=\"create-outline\" class=\"icon-01\"> </ion-icon>Editar\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" *ngIf=\"a.status && a.key!='MASTER'\" (click)=\"changeStatus(a.key,false)\">\r\n                    <ion-icon name=\"close-circle-outline\" class=\"icon-01\"></ion-icon> Deshabilitar\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" *ngIf=\"!a.status\" (click)=\"changeStatus(a.key,true)\">\r\n                    <ion-icon name=\"checkmark-circle-outline\" class=\"icon-01\"></ion-icon> Habilitar\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" *ngIf=\" a.key!='MASTER'\" (click)=\"delete(a)\" class=\"option-division\">\r\n                    <ion-icon name=\"trash-outline\" class=\"icon-01\">\r\n                    </ion-icon> Eliminar\r\n                  </a>\r\n\r\n                </div>\r\n              </div>\r\n            </td>\r\n\r\n          </tr>\r\n          <tr *ngIf=\"list.length <= 0 && !load\">\r\n            <td colspan=\"5\">No se encontraron registros.</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n      <jw-pagination [items]=\"list\" [pageSize]=\"20\" (changePage)=\"onChangePage($event)\">\r\n      </jw-pagination>\r\n    </div>\r\n\r\n\r\n  </ion-card>\r\n\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "gR97":
/*!********************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c3Vhcmlvcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "mot8":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tabla-registros/tabla-registros.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsYS1yZWdpc3Ryb3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "oeyg":
/*!**************************************************!*\
  !*** ./src/app/pages/roles/roles.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "pnmj":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-pantalla/create-pantalla.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'Pantalla'\"></app-header>\r\n\r\n<ion-content class=\"content-table\">\r\n\r\n  <!-- Cabecera y botones de acción -->\r\n  <div class=\"row content-header\">\r\n    <div class=\"col-6\">\r\n      <p class=\"title-header\">{{isEdit?'Editar':'Crear'}} pantalla\r\n        <!-- {{key_table}} -->\r\n      </p>\r\n\r\n      <!-- Routing -->\r\n      <p class=\"routing\">\r\n        <a href=\"javascript:void(0)\" (click)=\"goScreen()\">Pantallas</a>\r\n        <ion-icon name=\"chevron-forward-outline\">\r\n        </ion-icon>\r\n        <a href=\"javascript:void(0)\"> {{isEdit?'Edición':'Creación'}} de pantalla</a>\r\n      </p>\r\n\r\n    </div>\r\n    <!-- Content buttons -->\r\n    <div class=\"col-6 content-buttons\">\r\n\r\n      <!--    <ion-button (click)=\"screenTask()\" class=\"button-04\">\r\n        <ion-icon name=\"eye\"></ion-icon> Vista previa\r\n      </ion-button> -->\r\n\r\n   <!--    <a href=\"javascript:void(0)\" class=\"btn-3\" (click)=\"screenTask()\">\r\n        <ion-icon name=\"eye-outline\"></ion-icon> Vista previa\r\n      </a> -->\r\n\r\n      <a href=\"javascript:void(0)\" class=\"btn-3\" (click)=\"validateForm()\">\r\n        <ion-icon name=\"save\" style=\"    font-size: 22px;\r\n        transform: translateY(6px);\"></ion-icon> Guardar\r\n      </a>\r\n\r\n      <!--  <ion-button (click)=\"validateForm()\" class=\"button-03\">\r\n        <ion-icon name=\"save-outline\"></ion-icon> Guardar\r\n      </ion-button> -->\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Card del listado -->\r\n  <ion-card class=\"card-table\">\r\n\r\n    <p class=\"text-filter\">Información general</p>\r\n\r\n    <form [formGroup]=\"sreenForm\">\r\n\r\n      <div class=\"row\" style=\"margin-top: 10px;\">\r\n        <div class=\"col-12 col-md-4  p-0\">\r\n          <ion-item style=\"margin-top: 10px;\" lines=\"inset\">\r\n            <ion-label position=\"stacked\" class=\"label-form\">Nombre de pantalla</ion-label>\r\n            <ion-input formControlName=\"name\" placeholder=\"Ingrese el nombre\" class=\"input-form\"></ion-input>\r\n          </ion-item>\r\n          <app-control-messages [control]=\"sreenForm.controls['name']\"></app-control-messages>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4  p-0\">\r\n          <ion-item style=\"margin-top: 10px;\" lines=\"inset\">\r\n            <ion-label position=\"stacked\" class=\"label-form\">Descripción</ion-label>\r\n            <ion-input formControlName=\"description\" placeholder=\"Ingrese el descripción\" class=\"input-form\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <app-control-messages [control]=\"sreenForm.controls['description']\"></app-control-messages>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-4 p-0\" formGroupName=\"action\">\r\n\r\n          <ion-item style=\"margin-top: 10px;\" lines=\"inset\" (click)=\"listFields()\">\r\n            <ion-label position=\"stacked\" class=\"label-form\">Acción</ion-label>\r\n            <ion-input formControlName=\"name\" placeholder=\"Selecionar acción\" class=\"input-form\"></ion-input>\r\n            <span class=\"input-icon\">\r\n              <ion-icon name=\"search\"></ion-icon>\r\n            </span>\r\n          </ion-item>\r\n          <app-control-messages [control]=\"sreenForm.controls['action']\" [field]=\"'name'\"></app-control-messages>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-6 col-md-4 p-0\" formGroupName=\"certificateType\">\r\n          <ion-item style=\"margin-top: 10px;\" lines=\"inset\">\r\n            <ion-label position=\"stacked\" class=\"label-form\">Tipo de pantalla</ion-label>\r\n            <ion-select formControlName=\"key\" okText=\"ok\" cancelText=\"Cancelar\"\r\n              (ionChange)=\"selectChang($event,listCertType,'certificateType',_env.TABLE_SIS.type_certificate)\"\r\n              [value]=\"sreenForm.controls['certificateType'].value.key\" placeholder=\"Seleccionar tipo\"\r\n              class=\"input-form\">\r\n              <ion-select-option [value]=\"opt.key\" *ngFor=\"let opt of listCertType\">{{opt.name}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <app-control-messages [control]=\"sreenForm.controls['certificateType']\" [field]=\"'key'\">\r\n          </app-control-messages>\r\n        </div>\r\n\r\n        <div class=\"col-6 col-md-4 p-0\">\r\n          <ion-item style=\"margin-top: 10px;\" lines=\"inset\">\r\n            <ion-label position=\"stacked\" class=\"label-form\">Visibilidad</ion-label>\r\n            <ion-select  [disabled]=\"isSystem\"  okText=\"ok\" cancelText=\"Cancelar\"\r\n            formControlName=\"visibility_type\" placeholder=\"Visibilidad\"\r\n              class=\"input-form\">\r\n              <ion-select-option [value]=\"opt.key\" *ngFor=\"let opt of listVisType\">{{opt.name}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <app-control-messages [control]=\"sreenForm.controls['visibility_type']\">\r\n          </app-control-messages>\r\n        </div>\r\n\r\n        <div class=\"col-6 col-md-4 pt-3\" *ngIf=\"sreenForm.controls['imagenUrl'].value==''\">\r\n          <p style=\"font-size: 14px;\r\n          color: #484848;\r\n          margin-bottom: 8px;\">Imagen referencial\r\n          </p>\r\n          <ion-button (click)=\"fileInputImg.click()\" class=\"button-03\">\r\n            <ion-icon name=\"image-outline\"></ion-icon>\r\n            Seleccionar imagen\r\n          </ion-button>\r\n\r\n          <p style=\"color: var(--black-400); margin: 0;margin-top: 3px; font-size: 12px;font-style: italic\">\r\n            {{imgeFile.name}}\r\n          </p>\r\n          <input hidden (change)=\"onFileSelected('imgfile')\" #fileInputImg type=\"file\" accept=\"image/*\" id=\"imgfile\">\r\n        </div>\r\n\r\n        <div class=\"col-6 col-md-4  pt-3\" *ngIf=\"sreenForm.controls['imagenUrl'].value!=''\">\r\n          <p style=\"font-size: 14px;\r\n    color: #484848;\r\n    margin-bottom: 8px;\">Imagen referencial\r\n            <ion-icon name=\"create-outline\" style=\"padding: 5px;\r\n            font-size: 18px;\r\n            margin-top: -20px;\r\n            transform: translateY(7px);cursor: pointer;\" (click)=\"changeImagen()\"></ion-icon>\r\n          </p>\r\n\r\n          <ion-button [href]=\"urlImg\" target=\"_blank\" class=\"button-03\">\r\n            <ion-icon name=\"image-outline\"></ion-icon>\r\n            Ver imagen\r\n          </ion-button>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <p class=\"text-filter\">Configuración de campos</p>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"content-buttons\">\r\n\r\n          <p class=\"routing\">\r\n            <a href=\"javascript:void(0)\" *ngIf=\"typeCert=='C2'\" class=\"btn-3\" (click)=\"addSection()\">\r\n              <ion-icon name=\"list-outline\"></ion-icon> Agregar sección\r\n            </a>\r\n\r\n            <a href=\"javascript:void(0)\" class=\"btn-3\" (click)=\"form()\">\r\n              <ion-icon name=\"add-circle\"></ion-icon> Agregar campo\r\n            </a>\r\n          </p>\r\n\r\n\r\n\r\n          <!--   <ion-button (click)=\"form()\" class=\"button-03\">\r\n            <ion-icon name=\"add\"></ion-icon> Agregar campo\r\n          </ion-button> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"table-responsive table-style\">\r\n      <!--     <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th (click)=\"orderByTable(item.key)\" *ngFor=\"let item of thead\"\r\n              [ngClass]=\"orderBy.key==item.key?'select-col-order' :''\">{{item.name}} <ion-icon\r\n                [name]=\"orderBy.key==item.key?(orderBy.order? 'arrow-down':'arrow-up' ) :'swap-vertical'\"\r\n                class=\"icon-filter\"></ion-icon>\r\n            </th>\r\n            <th>Acciones</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"list.length <= 0 && load\">\r\n            <td colspan=\"5\">\r\n              <div class=\"alert alert-secondary\" role=\"alert\">\r\n                <span><i class=\"fa fa-spinner fa-pulse\"></i>\r\n                  Cargando registros...\r\n                </span>\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let a of pageOfItems;index as i\">\r\n\r\n            <td>{{a.field.key}}</td>\r\n            <td>{{a.field.name}}\r\n\r\n            </td>\r\n            <td>{{a.required?'Si':'No'}}</td>\r\n            <td>{{a.field.data.iscertificade?'Si':'Ninguno'}}</td>\r\n\r\n            <td>\r\n              <div class=\"dropdown\">\r\n                <div class=\"dropbtn\">\r\n                  <ion-button class=\"button-01\" [disabled]=\"a.field.data.properties.SYSTEM\">\r\n                    <ion-icon name=\"settings-outline\" class=\"icon-01\">\r\n                    </ion-icon> <br>\r\n                  </ion-button>\r\n                </div>\r\n\r\n                <div class=\"dropdown-content\" *ngIf=\"!a.field.data.properties.SYSTEM\">\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"form(a,i)\">\r\n                    <ion-icon name=\"create-outline\" class=\"icon-01\"> </ion-icon>Editar\r\n                  </a>\r\n\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"delete(i)\" class=\"option-division\">\r\n                    <ion-icon name=\"trash-outline\" class=\"icon-01\">\r\n                    </ion-icon> Eliminar\r\n                  </a>\r\n\r\n                </div>\r\n              </div>\r\n            </td>\r\n\r\n          </tr>\r\n          <tr *ngIf=\"list.length <= 0 && !load\">\r\n            <td colspan=\"5\">No se encontraron registros.</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n      <jw-pagination [items]=\"list\" [pageSize]=\"20\" (changePage)=\"onChangePage($event)\">\r\n      </jw-pagination> -->\r\n\r\n\r\n\r\n\r\n      <div>\r\n        <!-- ***PRUEBA*** -->\r\n        <div style=\"border-top: 1px solid #e9ecef;\">\r\n          <div class=\"row\" style=\"\r\n          width: 100%;color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, #737373)));font-size: 14px;\r\n          margin-left: 25px;font-weight: 600;padding: 18px;\">\r\n            <!--    <div class=\"col-2\">\r\n              Código\r\n            </div> -->\r\n            <div class=\"col-4\">\r\n              Nombre\r\n            </div>\r\n\r\n            <div class=\"col-2\">\r\n              Tipo\r\n            </div>\r\n\r\n            <div class=\"col-2\">\r\n              Requerido\r\n            </div>\r\n\r\n            <div class=\"col-2\">\r\n              Valor\r\n            </div>\r\n\r\n            <div class=\"col-2\">\r\n              Acciones\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div style=\"border-top: 1px solid #e9ecef;\" *ngIf=\"list.length == 0\">\r\n          <div class=\"row\"\r\n            style=\"padding: 13px;width: 100%;color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, #737373)));font-size: 14px;margin-left: 25px;\">\r\n            <div class=\"col-12\">\r\n              No se encontraron registros.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <ion-reorder-group (ionItemReorder)=\"doReorder($event)\" disabled=\"false\">\r\n\r\n\r\n\r\n\r\n          <div *ngFor=\"let a of list;index as i\"\r\n            style=\"border-top: 1px solid #e9ecef;padding: 13px;overflow: initial;position: relative;\">\r\n            <div *ngIf=\"!a.section && !a.block\" class=\"row\"\r\n              style=\"width: 100%;color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, #737373)));font-size: 14px;margin-left: 25px;\">\r\n              <!--     <div class=\"col-2\" style=\"width: 10%;\">\r\n                {{a.field.key}}\r\n              </div> -->\r\n              <div class=\"col-4\">\r\n              {{a.field.name}}\r\n                <!--               <ion-badge\r\n                  *ngIf=\"a.field.data.properties.field_req_c1 || a.field.data.properties.field_req_c2 || a.field.data.properties.field_req_c3 || a.field.data.properties.field_req_c4\"\r\n                  class=\"status info\" style=\"font-size: 9px;margin-bottom:-5px;\">\r\n                  System\r\n                </ion-badge> -->\r\n              </div>\r\n              <div class=\"col-2\">\r\n                {{a.field.data.type.value}} ({{a.field.data.inputtype.value}})\r\n              </div>\r\n\r\n              <div class=\"col-2\">\r\n                {{a.required?'Si':'No'}}\r\n              </div>\r\n\r\n              <div class=\"col-2\">\r\n                {{a.field.data.value==''?'Ninguno':a.field.data.value}}\r\n              </div>\r\n\r\n\r\n              <div class=\"col-2 dropdown\">\r\n                <div class=\"dropbtn\">\r\n                  <ion-button class=\"button-01\" style=\"height: 37px;\">\r\n                    <ion-icon name=\"settings-outline\" class=\"icon-01\">\r\n                    </ion-icon> <br>\r\n                  </ion-button>\r\n                </div>\r\n\r\n                <div class=\"dropdown-content\">\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"form(a,i)\">\r\n                    <ion-icon name=\"create-outline\" class=\"icon-01\"> </ion-icon>Editar\r\n                  </a>\r\n\r\n\r\n                  <a href=\"javascript:void(0)\" *ngIf=\"!a.system\" (click)=\"delete(i)\" class=\"option-division\">\r\n                    <ion-icon name=\"trash-outline\" class=\"icon-01\">\r\n                    </ion-icon> Eliminar\r\n                  </a>\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"a.section || a.block\" class=\"row\" style=\"width: 100%;\r\n              margin-left: 25px;\r\n              color: #d36970e8;\r\n              font-size: 16px;\r\n              font-weight: 600;\r\n              font-style: italic;\">\r\n              <div class=\"col-10\" style=\"width: 10%;\">\r\n                {{a.name}} {{a.section?'(Sección)':'(Bloque)'}}\r\n              </div>\r\n\r\n              <div class=\"col-2 dropdown\">\r\n                <div class=\"dropbtn\">\r\n                  <ion-button class=\"button-01\" style=\"height: 37px;\">\r\n                    <ion-icon name=\"settings-outline\" class=\"icon-01\">\r\n                    </ion-icon> <br>\r\n                  </ion-button>\r\n                </div>\r\n\r\n                <div class=\"dropdown-content\">\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"form(a,i)\">\r\n                    <ion-icon name=\"create-outline\" class=\"icon-01\"> </ion-icon>Editar\r\n                  </a>\r\n\r\n\r\n                  <a href=\"javascript:void(0)\" *ngIf=\"!a.system\" (click)=\"delete(i)\" class=\"option-division\">\r\n                    <ion-icon name=\"trash-outline\" class=\"icon-01\">\r\n                    </ion-icon> Eliminar\r\n                  </a>\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <ion-reorder slot=\"end\" style=\"position: absolute;top: 10px;\"></ion-reorder>\r\n          </div>\r\n\r\n        </ion-reorder-group>\r\n        <!-- ***************** -->\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </ion-card>\r\n\r\n</ion-content>");

/***/ }),

/***/ "s9Vn":
/*!************************************************************!*\
  !*** ./src/app/pages/doc-extern/doc-extern.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2MtZXh0ZXJuLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "srgz":
/*!********************************************************************!*\
  !*** ./src/app/pages/create-pantalla/create-pantalla.component.ts ***!
  \********************************************************************/
/*! exports provided: CreatePantallaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePantallaComponent", function() { return CreatePantallaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_pantalla_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-pantalla.component.html */ "pnmj");
/* harmony import */ var _create_pantalla_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-pantalla.component.scss */ "bAdY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");
/* harmony import */ var src_app_components_add_field_add_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/add-field/add-field.component */ "B0wP");
/* harmony import */ var src_app_components_gen_screen_gen_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/gen-screen/gen-screen.component */ "aFrh");
/* harmony import */ var src_app_components_list_select_list_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/list-select/list-select.component */ "Kzxc");
/* harmony import */ var src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/apiMongo.service */ "GtMO");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_components_add_section_add_section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/add-section/add-section.component */ "T/ei");














let CreatePantallaComponent = class CreatePantallaComponent {
    constructor(router, _mod, _apiMongo, _fun, formBuilder, route) {
        this.router = router;
        this._mod = _mod;
        this._apiMongo = _apiMongo;
        this._fun = _fun;
        this.formBuilder = formBuilder;
        this.route = route;
        this.isEdit = false;
        this._env = src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"];
        this.fields_EXT_MP = [];
        this.fields_ASO_MP = [];
        this.typeCert = '';
        this.urlImg = '';
        this.imgeFile = {
            name: '',
            bytes: '',
            ext: '',
            b64: ''
        };
        this.urlPrevius = '';
        /* ********************************* */
        this.list_main = [];
        this.list = [];
        this.load = false;
        this.orderBy = {
            key: '',
            order: true
        };
        this.thead = [
            { key: 'key', name: 'Código' },
            { key: 'name', name: 'Nombre' },
            { key: 'status', name: 'Requerido' },
            { key: 'maping', name: 'Mapeo (Certificado)' },
        ];
        this.optionFilter = [
            { key: 'key', value: '', type: 'string' }
        ];
        this.fields_CERT = [
            {
                "field": {
                    "_id": "60e76c709a97170c24260694",
                    "table": "field",
                    "key": "objective_cert",
                    "status": true,
                    "name": "Asunto",
                    "data": {
                        "key": "objective_cert",
                        "value": "",
                        "placeholder": "Ingrese asunto de certificado",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C3",
                            "value": "textarea",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {
                            "SYSTEM": "C1"
                        },
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": true,
                        "certificateType": {
                            "collection": "general",
                            "table": "type_field_cert",
                            "key": "C6",
                            "value": "Asunto a certificar",
                            "properties": {
                                "codeApp": "objective_cert"
                            }
                        }
                    }
                },
                system: true,
                properties: "",
                required: true,
                visibility_type: "C0"
            },
            {
                "field": {
                    "key": "img_reg",
                    "name": "Fotos de registro",
                    "status": true,
                    "table": "field",
                    "_id": "60e48a789a97170c24260618",
                    "data": {
                        "key": "img_reg",
                        "value": "",
                        "placeholder": "Agregar fotos",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C5",
                            "value": "imageselect"
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text"
                        },
                        "properties": "",
                        "width": {
                            "boost": "col-12",
                            "porc": 100
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false
                    }
                },
                system: false,
                properties: "",
                required: true,
                visibility_type: "C0"
            },
            {
                "field": {
                    "_id": "60e4db529a97170c24260642",
                    "table": "field",
                    "key": "adrx_titular",
                    "status": true,
                    "name": "Titular ",
                    "data": {
                        "key": "adrx_titular",
                        "value": "",
                        "placeholder": "Ingrese DID (did:ethr:lacchain:address)",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C0",
                            "value": "address",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {
                            "SYSTEM": "C1"
                        },
                        "width": {
                            "boost": "col-12",
                            "porc": 100
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": true,
                        "certificateType": {
                            "collection": "general",
                            "table": "type_field_cert",
                            "key": "C3",
                            "value": "DID del titular",
                            "properties": {
                                "codeApp": "adrx_titular"
                            }
                        }
                    }
                },
                system: true,
                properties: "",
                required: true,
                visibility_type: "C0"
            },
            {
                "field": {
                    "_id": "60e85fa39a97170c2426069f",
                    "table": "field",
                    "key": "name_titular",
                    "status": true,
                    "name": "Nombre de titular",
                    "data": {
                        "key": "name_titular",
                        "value": "",
                        "placeholder": "Ingrese nombre",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {
                            "SYSTEM": "C1"
                        },
                        "width": {
                            "boost": "col-12",
                            "porc": 100
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": true,
                        "certificateType": {
                            "collection": "general",
                            "table": "type_field_cert",
                            "key": "C4",
                            "value": "Nombre del titular",
                            "properties": {
                                "codeApp": "name_titular"
                            }
                        }
                    }
                },
                system: true,
                properties: "",
                required: true,
                visibility_type: "C0"
            },
            /*    {
                 "field": {
                   "_id": "60e48e0e9a97170c24260623",
                   "table": "field",
                   "key": "f_emision",
                   "status": true,
                   "name": "Fecha de emisión",
                   "data": {
                     "key": "f_emision",
                     "value": "",
                     "placeholder": "Ingresar fecha",
                     "type": {
                       "collection": "general",
                       "table": "type_field",
                       "key": "C2",
                       "value": "input",
                       "properties": {}
                     },
                     "inputtype": {
                       "collection": "general",
                       "table": "type_input",
                       "key": "C4",
                       "value": "date",
                       "properties": {}
                     },
                     "properties": {
                       "SYSTEM": "C1"
                     },
                     "width": {
                       "boost": "col-12",
                       "porc": 100
                     },
                     "optionOf": "",
                     "isSystem": false,
                     "iscertificade": true,
                     "certificateType": {
                       "collection": "general",
                       "table": "type_field_cert",
                       "key": "C7",
                       "value": "Fecha de emisión",
                       "properties": {
                         "codeApp": "f_emision"
                       }
                     }
                   }
                 },
                 system: true,
                 properties: "",
                 required: true,
                 visibility_type: "C0"
               }, */
            {
                "field": {
                    "_id": "60e48e389a97170c24260624",
                    "table": "field",
                    "key": "f_vencimiento",
                    "status": true,
                    "name": "Fecha de vencimiento",
                    "data": {
                        "key": "f_vencimiento",
                        "value": "",
                        "placeholder": "Ingresar fecha",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C4",
                            "value": "date",
                            "properties": {}
                        },
                        "properties": {
                            "SYSTEM": "C1"
                        },
                        "width": {
                            "boost": "col-12",
                            "porc": 100
                        },
                        "optionOf": "",
                        "isSystem": true,
                        "iscertificade": true,
                        "certificateType": {
                            "collection": "general",
                            "table": "type_field_cert",
                            "key": "C8",
                            "value": "Fecha de vencimineto",
                            "properties": {
                                "codeApp": "f_vencimiento"
                            }
                        }
                    }
                },
                system: false,
                properties: "",
                required: true,
                visibility_type: "C0"
            }
        ];
        this.fieldGenQR = [
            {
                name: "Información comercial",
                code: 'infoComer',
                section: true,
                system: true
            },
            {
                field: {
                    key: "objective_cert",
                    name: "Asunto (Lote, SKU u Orden de compra)",
                    data: {
                        "key": "objective_cert",
                        "value": "",
                        "placeholder": "Ingresar texto",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: true,
                visibility_type: "C0"
            },
            {
                field: {
                    key: "buyer",
                    name: "Comprador",
                    data: {
                        "key": "buyer",
                        "value": "",
                        "placeholder": "Ingresar texto",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: true,
                visibility_type: "C0"
            },
            {
                field: {
                    key: "amount",
                    name: "Cantidad (Kg)",
                    data: {
                        "key": "amount",
                        "value": "",
                        "placeholder": "Ingresar número",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "number",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: true,
                visibility_type: "C0"
            },
            {
                field: {
                    key: "origin",
                    name: "Origen",
                    data: {
                        "key": "origin",
                        "value": "",
                        "placeholder": "Ingresar texto",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: true,
                visibility_type: "C0"
            },
            {
                field: {
                    key: "destination",
                    name: "Destino",
                    data: {
                        "key": "destination",
                        "value": "",
                        "placeholder": "Ingresar texto",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: true,
                visibility_type: "C0"
            },
            {
                field: {
                    key: "f_emision",
                    name: "Fecha de emisión",
                    data: {
                        "key": "f_emision",
                        "value": "",
                        "placeholder": "Seleccionar",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C4",
                            "value": "date",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: true,
                visibility_type: "C0"
            },
            {
                field: {
                    key: "f_vencimineto",
                    name: "Fecha de vencimiento",
                    data: {
                        "key": "f_vencimineto",
                        "value": "",
                        "placeholder": "Seleccionar",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C4",
                            "value": "date",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: true,
                visibility_type: "C0"
            },
            /*2da SECCION  */
            {
                name: "Información de producto",
                code: 'infoProd',
                section: true,
                system: true
            },
            {
                field: {
                    key: "desc",
                    name: "Descripción",
                    data: {
                        "key": "desc",
                        "value": "",
                        "placeholder": "Ingresar texto",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: true,
                visibility_type: "C0"
            },
            /*3da SECCION  */
            {
                name: "Procedencia de Materia Prima",
                code: 'procMP',
                section: true,
                system: true
            },
            /*4ta SECCION  */
            /*  {
               name: "Cadena de Suministro",
               code: 'cadeSumin',
               section: true,
               system: true
             }, */
            /*5ta SECCION  */
            {
                name: "Información de contacto",
                code: 'contact',
                section: true,
                system: true
            },
            {
                field: {
                    key: "businessName",
                    name: "Nombre de negocio",
                    data: {
                        "key": "businessName",
                        "value": "",
                        "placeholder": "Ingresar nombre",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: false,
                visibility_type: "C0"
            },
            {
                field: {
                    key: "logoUrl",
                    name: "Logo de negocio",
                    data: {
                        "key": "logoUrl",
                        "value": "",
                        "placeholder": "Ingresar URL",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: false,
                visibility_type: "C0"
            },
            {
                field: {
                    key: "businessDesc",
                    name: "Descripción del negocio",
                    data: {
                        "key": "businessDesc",
                        "value": "",
                        "placeholder": "Ingresar texto",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C3",
                            "value": "textarea",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-12",
                            "porc": 100
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: false,
                visibility_type: "C0"
            },
            {
                field: {
                    key: "facebook",
                    name: "Facebook",
                    data: {
                        "key": "facebook",
                        "value": "",
                        "placeholder": "Ingresar URL",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: false,
                visibility_type: "C0"
            },
            {
                field: {
                    key: "instagram",
                    name: "Instagram",
                    data: {
                        "key": "instagram",
                        "value": "",
                        "placeholder": "Ingresar URL",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: false,
                visibility_type: "C0"
            },
            {
                field: {
                    key: "linkedin",
                    name: "Linkedin",
                    data: {
                        "key": "linkedin",
                        "value": "",
                        "placeholder": "Ingresar URL",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: false,
                visibility_type: "C0"
            },
            {
                field: {
                    key: "youtube",
                    name: "Youtube",
                    data: {
                        "key": "youtube",
                        "value": "",
                        "placeholder": "Ingresar URL",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: false,
                visibility_type: "C0"
            },
            {
                field: {
                    key: "correo",
                    name: "Correo",
                    data: {
                        "key": "correo",
                        "value": "",
                        "placeholder": "Ingresar correo de contacto",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: false,
                visibility_type: "C0"
            },
            {
                field: {
                    key: "web",
                    name: "Pagina web oficial",
                    data: {
                        "key": "correo",
                        "value": "",
                        "placeholder": "Ingresar URL",
                        "type": {
                            "collection": "general",
                            "table": "type_field",
                            "key": "C2",
                            "value": "input",
                            "properties": {}
                        },
                        "inputtype": {
                            "collection": "general",
                            "table": "type_input",
                            "key": "C0",
                            "value": "text",
                            "properties": {}
                        },
                        "properties": {},
                        "width": {
                            "boost": "col-6",
                            "porc": 50
                        },
                        "optionOf": "",
                        "isSystem": false,
                        "iscertificade": false,
                        "certificateType": {
                            "collection": "",
                            "table": "",
                            "key": "",
                            "value": false,
                            "properties": {}
                        }
                    }
                },
                system: true,
                properties: "",
                required: false,
                visibility_type: "C0"
            },
            {
                name: "Fotos y videos",
                code: 'fotVid',
                section: true,
                system: true
            },
        ];
        this.sreenForm = formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: [''],
            imagenText: [''],
            imagenUrl: [''],
            certificateType: this.formBuilder.group({
                collection: [''],
                table: [''],
                key: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                value: ['']
            }),
            action: this.formBuilder.group({
                key: [''],
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                status: [''],
                table: [''],
                _id: [''],
                data: [{}]
            }),
            visibility_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            fields: [[]]
        });
    }
    doReorder(ev) {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        console.log('Dragged', ev.detail.from, 'to', ev.detail.to);
        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        console.log('EVENTO', ev);
        ev.detail.complete();
        let element = this.list[ev.detail.from];
        this.list.splice(ev.detail.from, 1);
        this.list.splice(ev.detail.to, 0, element);
        this.sreenForm.controls['fields'].setValue(this.list);
        /*  let itm: any = this.list[ev.detail.from];
         this.list[ev.detail.from] = this.list[ev.detail.to];
         this.list[ev.detail.to] = itm;
         console.log('LIST',this.list); */
        console.log('LIST', this.list);
    }
    addToOrder(from, to, elm) {
        console.log('from', from);
        console.log('to', to);
        this.list.splice(from, 1);
        this.list.splice(to + 1, 0, elm);
        this.sreenForm.controls['fields'].setValue(this.list);
    }
    toggleReorderGroup() {
        this.reorderGroup.disabled = !this.reorderGroup.disabled;
    }
    /* CAMPO SELECT SIMPLE*/
    selectChang(event, array, groupForm, table) {
        let key = event.detail.value;
        let value = array.filter(r => r.key == key)[0].name;
        this.fieldsSystem(key);
        this.sreenForm.controls[groupForm].setValue({
            collection: "general",
            table,
            key,
            value
        });
        console.log('sreenForm', this.sreenForm.value);
    }
    getParamas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._apiMongo._get(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].TABLE_SIS.type_certificate, 'items').subscribe((res) => {
                this.listCertType = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].TABLE_SIS.type_certificate];
            });
            this._apiMongo._get(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].TABLE_SIS.type_visibility, 'items').subscribe((res) => {
                this.listVisType = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].TABLE_SIS.type_visibility];
            });
            /*     // Certificado de actividades de campo
                this._apiMongo._filter(env.COLLECTION.object, env.TABLE_SIS.field, { "data.properties.field_req_c1": true }).subscribe((res: any) => {
                  this.fields_CERT = res.result[0][env.TABLE_SIS.field];
                });
            
                // Certificado de extraccion de materia prima
                this._apiMongo._filter(env.COLLECTION.object, env.TABLE_SIS.field, { "data.properties.field_req_c2": true }).subscribe((res: any) => {
                  this.fields_EXT_MP = res.result[0][env.TABLE_SIS.field];
                });
            
                // Certificado de actividades asociadas a la materia prima
                this._apiMongo._filter(env.COLLECTION.object, env.TABLE_SIS.field, { "data.properties.field_req_c3": true }).subscribe((res: any) => {
                  this.fields_ASO_MP = res.result[0][env.TABLE_SIS.field];
                });
             */
            this._apiMongo._get(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].TABLE_SIS.type_field, 'items').subscribe((res) => {
                this.listFieldType = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].TABLE_SIS.type_field];
            });
            this._apiMongo._get(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].TABLE_SIS.type_input, 'items').subscribe((res) => {
                this.listInputType = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].TABLE_SIS.type_input];
            });
            this._apiMongo._get(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].TABLE_SIS.type_field_cert, 'items').subscribe((res) => {
                this.listFieldCert = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].TABLE_SIS.type_field_cert];
            });
        });
    }
    fieldsSystem(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.typeCert = type;
            /*   let arr = this.sreenForm.controls['fields'].value;
              let filter = arr.filter(cf => {
                console.log('type', type);
          
                console.log('cf', cf);
                console.log('KEY', cf.field.data.properties['field_req_' + type.toLowerCase()]);
          
                if (this._fun.isVarInvalid(cf.field.data.properties['field_req_' + type.toLowerCase()])) return false;
                else return true;
              })
              console.log('filter', filter); */
            /*    return; */
            this.sreenForm.controls['fields'].setValue([]);
            /*     this.sreenForm.controls['fields'].setValue(filter); */
            console.log('VALUE', this.sreenForm.controls['fields'].value);
            let field_Cert;
            if (type == 'C1')
                field_Cert = this.fields_CERT; //ok
            if (type == 'C2')
                field_Cert = this.fieldGenQR;
            if (type == 'C3')
                field_Cert = [];
            if (type == 'C4')
                field_Cert = this.fields_ASO_MP;
            for (let index = 0; index < field_Cert.length; index++) {
                let field = field_Cert[index];
                /*   if (field.data.iscertificade) {
                    field.key = field.data.certificateType.properties.codeApp;
                  }
                  console.log('field...............1', field); */
                /*
                      let config_field = {
                        field: field,
                        properties: "",
                        required: (type == 'C2') ? false : true,
                        visibility_type: (field.key == 'NOTES_PRIVATE') ? 'C2' : "C0"
                      } */
                let arr = this.sreenForm.controls['fields'].value;
                arr.push(field);
                this.sreenForm.controls['fields'].setValue(arr);
                if (index == (field_Cert.length - 1))
                    this.getList();
            }
            if (field_Cert.length == 0)
                this.getList();
        });
    }
    ngOnInit() {
        this.getParamas();
        /*this.fieldsSystem();*/
        this.key_table = this.route.snapshot.paramMap.get('key');
        if (this.key_table != 'new')
            this.editData();
        /*
            
            this.list = this.fieldGenQR; */
        console.log('this.list', this.list);
    }
    changeImagen() {
        this.sreenForm.controls['imagenUrl'].setValue('');
    }
    onFileSelected(field) {
        const inputNode = document.querySelector('#' + field);
        console.log('inputNode.files[0]', inputNode.files[0]);
        this.imgeFile.name = inputNode.files[0].name;
        const file = inputNode.files[0];
        this.imgeFile.bytes = file.size;
        this.imgeFile.ext = file.type.split("/")[1];
        console.log('file', file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.imgeFile.b64 = reader.result.split(";base64,")[1];
            console.log('this.contentFile', this.imgeFile.b64);
        });
    }
    editData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isEdit = true;
            let res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].COLLECTION.object, src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].TABLE_SIS.screen, this.key_table);
            let screen = res.result[0].screen[0];
            this.sreenForm.patchValue(screen.data);
            this.sreenForm.controls['name'].setValue(screen.name);
            this.typeCert = this.sreenForm.controls['certificateType'].value.key;
            console.log('screen', screen);
            console.log('this.sreenForm', this.sreenForm.value);
            this.list = this.sreenForm.controls['fields'].value;
            if (this.sreenForm.controls['imagenUrl'].value != '') {
                let endPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].url.substr(0, src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].url.length - 1); //quitar el "/"
                /*   this.urlPrevius = this.sreenForm.controls['imagenUrl'].value; */
                this.urlImg = endPoint + this.sreenForm.controls['imagenUrl'].value;
                this.getList();
            }
        });
    }
    tiggerFields() {
        Object.keys(this.sreenForm.controls).forEach(field => {
            let _control = this.sreenForm.get(field);
            if (_control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"])
                _control.markAsTouched({ onlySelf: true });
            if (_control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) {
                Object.keys(_control.controls).forEach(field_g => {
                    let _control_g = _control.get(field_g);
                    if (_control_g instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"])
                        _control_g.markAsTouched({ onlySelf: true });
                });
            }
        });
    }
    validateForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tiggerFields();
            if (this.sreenForm.valid) {
                let alert = yield this._fun.alertSave(this.isEdit);
                if (this._fun.isVarInvalid(alert))
                    return;
                this.create();
            }
        });
    }
    create() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('this.sreenForm.value', this.sreenForm.value);
            try {
                let key = this.isEdit ? this.key_table : this._fun.makeCode();
                console.log('MOSTRAR 1');
                if (this.imgeFile.b64 != '') {
                    let res_upload_imgfile = yield this._apiMongo.uploadFile(this.imgeFile.b64, this.imgeFile.ext).toPromise();
                    console.log('res_upload_imgfile', res_upload_imgfile.data.url);
                    this.sreenForm.controls['imagenUrl'].setValue(res_upload_imgfile.data.url);
                }
                const res = yield this._apiMongo.create(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].COLLECTION.object, src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].TABLE_SIS.screen, key, this.sreenForm.value, this.isEdit);
                console.log('MOSTRAR 2', res);
                if (this._fun.isVarInvalid(res.result)) {
                    yield this._fun.alertError(res.message);
                    return;
                }
                this.goScreen();
                yield this._fun.alertSucc(this.isEdit ? src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].MSG.SUC_UPDATE : src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].MSG.SUC_CREATE);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    goScreen() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['pantalla']);
        });
    }
    listFields() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this._mod.create({
                cssClass: 'style-list-select',
                component: src_app_components_list_select_list_select_component__WEBPACK_IMPORTED_MODULE_10__["ListSelectComponent"],
                componentProps: {
                    type_text: 'acciones',
                    key_table: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].TABLE_SIS.action,
                    item: this.sreenForm.controls['action'].value,
                    collection: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].COLLECTION.object
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this._fun.isVarInvalid(res.data))
                    return;
                if (!this._fun.isVarInvalid(res.data.confirm)) {
                    this.sreenForm.controls['action'].setValue(res.data.confirm);
                    console.log('this.sreenForm.value', this.sreenForm.value);
                }
            }));
            yield modal.present();
        });
    }
    addSection(data, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this._mod.create({
                cssClass: 'modal-small',
                component: src_app_components_add_section_add_section_component__WEBPACK_IMPORTED_MODULE_13__["AddSectionComponent"],
                componentProps: {
                    data,
                    index
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this._fun.isVarInvalid(res.data))
                    return;
                if (!this._fun.isVarInvalid(res.data.confirm)) {
                    console.log(res.data.confirm);
                    let arr = this.sreenForm.controls['fields'].value;
                    if (this._fun.isVarInvalid(data))
                        arr.push(res.data.confirm);
                    else
                        arr[index] = res.data.confirm;
                    this.sreenForm.controls['fields'].setValue(arr);
                    console.log('LISTAAA', this.sreenForm.controls['fields'].value);
                    this.getList();
                }
            }));
            return yield modal.present();
        });
    }
    form(data, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this._fun.isEmpty(this.listVisType, this.listFieldType, this.listInputType, this.listFieldCert))
                return;
            let listSections = this.list.filter(d => d.section == true);
            console.log('listSections', listSections);
            let codeSelect = '';
            if (data) {
                for (let x = 0; x < this.list.length; x++) {
                    const elmt = this.list[x];
                    if (elmt.section)
                        codeSelect = elmt.code;
                    else {
                        console.log('elmt', elmt);
                        console.log('data', data);
                        if (elmt.field.key == data.field.key)
                            break;
                    }
                    ;
                }
            }
            console.log('certificateType', this.sreenForm.controls['certificateType'].value.key);
            const modal = yield this._mod.create({
                component: src_app_components_add_field_add_field_component__WEBPACK_IMPORTED_MODULE_8__["AddFieldComponent"],
                componentProps: {
                    certificateType: this.sreenForm.controls['certificateType'].value.key,
                    codeSelect,
                    listSections,
                    data,
                    index,
                    listVisType: this.listVisType,
                    listFieldType: this.listFieldType,
                    listInputType: this.listInputType,
                    listFieldCert: this.listFieldCert
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this._fun.isVarInvalid(res.data))
                    return;
                if (!this._fun.isVarInvalid(res.data.confirm)) {
                    console.log('res.data.confirm', res.data.confirm);
                    let arr = this.sreenForm.controls['fields'].value;
                    if (this._fun.isVarInvalid(data)) {
                        arr.push(res.data.confirm);
                        let index2 = 0;
                        let filteredObj = this.list.find(function (item, i) {
                            if (item.code == res.data.confirm.field.data.sectionSelect) {
                                console.log('INDEX', i);
                                index2 = i;
                                return i;
                            }
                        });
                        this.addToOrder(arr.length - 1, index2, res.data.confirm);
                    }
                    else {
                        arr[index] = res.data.confirm;
                        /* ****** */
                        /* let index3 = 0;
                        let filteredObj = this.list.find(function (item, i) {
                          if (item.code == res.data.confirm.field.data.sectionSelect) {
                            console.log('INDEX', i);
                            index3 = i;
                            return i;
                          }
                        }) */
                        //this.addToOrder(index, index3, res.data.confirm);
                    }
                    this.sreenForm.controls['fields'].setValue(arr);
                    /*         console.log(res.data.confirm.field.data.properties.SYSTEM); */
                    console.log('this.sreenForm.value', this.sreenForm.value);
                    this.getList();
                }
            }));
            return yield modal.present();
        });
    }
    getList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            try {
                this.list_main = this.sreenForm.controls['fields'].value;
                console.log('this.list_main', this.list_main);
                this.list = this.list_main;
                /*  this.filter(); */
                this.orderBy.order = true;
                this.orderBy.key = '';
                /*  this.orderByTable('key'); */
                this.load = false;
            }
            catch (error) {
                this.load = false;
                yield this._fun.alertError(error);
            }
        });
    }
    changeInput(value, index, type) {
        if (type == 'checkbox') {
            value = value.detail.checked;
        }
        this.optionFilter[index].value = value;
        /*   this.filter(); */
    }
    filter() {
        this.list = this.list_main.filter(a => {
            a = a.field;
            let filter1 = true;
            let filter2 = true;
            for (let index = 0; index < this.optionFilter.length; index++) {
                var itemf = this.optionFilter[index];
                if (itemf.type == 'string') {
                    filter1 = a[itemf.key].toLowerCase().indexOf(itemf.value.toLowerCase()) != -1;
                }
                if (itemf.type == 'boolean') {
                    if (a[itemf.key])
                        filter2 = true;
                    else
                        filter2 = itemf.value;
                }
            }
            return filter1 && filter2;
        });
        /*  this.orderList(); */
    }
    orderByTable(key) {
        if (this.orderBy.key == key) {
            this.orderBy.order = !this.orderBy.order;
        }
        else {
            this.orderBy.order = true;
        }
        this.orderBy.key = key;
        this.orderList();
    }
    orderList() {
        let listOrder = this._fun.sortJSON(this.list, this.orderBy.key, this.orderBy.order);
        this.list = listOrder.filter(item => true);
    }
    delete(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let arr = this.sreenForm.controls['fields'].value;
            arr.splice(index, 1);
            this.sreenForm.controls['fields'].setValue(arr);
            this.getList();
        });
    }
    onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems;
    }
    /* ************************* */
    screenTask() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('LIST', this.list);
            /*   return; */
            let metadata = {
                code: '001',
                title: this.sreenForm.value.name == '' ? 'Sin titulo' : this.sreenForm.value.name,
                icon: '',
                buttons: [
                    {
                        color: '#fff',
                        background: '#1c1c24',
                        width: '50',
                        text: 'Terminar',
                        type: 'confirm' // confirm |  cancel  
                    }
                ],
                fields: []
            };
            for (let index = 0; index < this.list.length; index++) {
                const fld = this.list[index];
                console.log('FLD', fld);
                let options = [];
                if (fld.field.data.type.value == 'select' || fld.field.data.type.value == 'checkbox') {
                    let res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].COLLECTION.general, fld.field.data.tableSelect.key, 'items');
                    options = res.result[0][fld.field.data.tableSelect.key];
                }
                if (fld.field.data.type.value == 'searchUser')
                    options.push(fld.field.data.tableSelect);
                let f = {
                    code: fld.field.key,
                    caption: fld.field.name,
                    value: fld.field.data.value,
                    placeholder: fld.field.data.placeholder,
                    type: fld.field.data.type.value,
                    inputtype: fld.field.data.inputtype.value,
                    rows: null,
                    width: fld.field.data.width,
                    long: null,
                    max: 0,
                    min: 0,
                    options: options,
                    required: fld.required,
                    propertiesConfig: fld.properties || fld.field.data.properties || null,
                    visibility_type: fld.visibility_type,
                    fieldProducer: !this._fun.isVarInvalid(fld.field.data.fieldProducer)
                };
                metadata.fields.push(f);
                /* console.log('PUSH', metadata); */
                if (index == (this.list.length - 1)) {
                    const modal = yield this._mod.create({
                        component: src_app_components_gen_screen_gen_screen_component__WEBPACK_IMPORTED_MODULE_9__["GenScreenComponent"],
                        /* cssClass: 'modal-small', */
                        componentProps: {
                            preview: true,
                            metadata,
                            task: {},
                            data: {},
                        }
                    });
                    modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(res.data);
                        if (this._fun.isVarInvalid(res.data))
                            return;
                        if (!this._fun.isVarInvalid(res.data.confirm))
                            this.getList();
                    }));
                    return yield modal.present();
                }
            }
        });
    }
};
CreatePantallaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_11__["ApiMongoService"] },
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_7__["Funciones"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
CreatePantallaComponent.propDecorators = {
    reorderGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonReorderGroup"],] }]
};
CreatePantallaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-pantalla',
        template: _raw_loader_create_pantalla_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_pantalla_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreatePantallaComponent);



/***/ }),

/***/ "sy6e":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doc-extern/doc-extern.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'Documentos externos'\"></app-header>\n\n<ion-content class=\"content-table\">\n\n  <!-- Cabecera y botones de acción -->\n  <div class=\"row content-header\">\n    <div class=\"col-6\">\n      <p class=\"title-header\">Documentos de\n        {{key_table==_env.TABLE_SIS.customer?'compradores':(key_table==_env.TABLE_SIS.employee?'empleados':'proveedores')}}\n      </p>\n    </div>\n    <!-- Content buttons -->\n    <div class=\"col-6 content-buttons\">\n      <a href=\"javascript:void(0)\" class=\"btn-3\" (click)=\"form()\">\n        <ion-icon name=\"add-circle\"></ion-icon> Crear registro\n      </a>\n    </div>\n  </div>\n\n  <!-- Card del listado -->\n  <ion-card class=\"card-table\">\n    <ion-segment (ionChange)=\"segmentChanged($event)\" style=\"max-width: 500px;margin-bottom: 25px;\" mode=\"md\"\n      [value]=\"_env.TABLE_SIS.producer\">\n\n      <ion-segment-button [value]=\"_env.TABLE_SIS.producer\">\n        <ion-label style=\"text-transform: capitalize;\">Productores</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button [value]=\"_env.TABLE_SIS.employee\">\n        <ion-label style=\"text-transform: capitalize;\">Externos</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button [value]=\"_env.TABLE_SIS.customer\">\n        <ion-label style=\"text-transform: capitalize;\">Compradores</ion-label>\n      </ion-segment-button>\n\n    </ion-segment>\n\n    <p class=\"text-filter\">Filtro de registros</p>\n    <div class=\"row\">\n\n      <div class=\"col-4\">\n        <input class=\"form-control\" [ngModel]=\"nameFilter\" (ngModelChange)=\"changeInput($event,-1,'input')\"\n          placeholder=\"Buscar por nombre de titular\">\n      </div>\n\n      <div class=\"col-6 checkbox-filer\">\n        <ion-checkbox slot=\"start\" (ionChange)=\"changeInput($event,0,'checkbox')\" color=\"tertiary\">\n        </ion-checkbox>\n        <label>Ver desactivados</label>\n      </div>\n    </div>\n\n    <div class=\"table-responsive table-style\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th (click)=\"orderByTable(item.key)\" *ngFor=\"let item of thead\"\n              [ngClass]=\"orderBy.key==item.key?'select-col-order' :''\">{{item.name}} <ion-icon\n                [name]=\"orderBy.key==item.key?(orderBy.order? 'arrow-down':'arrow-up' ) :'swap-vertical'\"\n                class=\"icon-filter\"></ion-icon>\n            </th>\n            <th>Acciones</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngIf=\"list.length <= 0 && load\">\n            <td colspan=\"7\">\n              <div class=\"alert alert-secondary\" role=\"alert\">\n                <span><i class=\"fa fa-spinner fa-pulse\"></i>\n                  Cargando registros...\n                </span>\n              </div>\n\n            </td>\n          </tr>\n\n          <tr *ngFor=\"let a of pageOfItems\">\n\n            <td>{{a.name}}</td>\n            <td>{{a.data.document.iat*1000 | date: 'dd/MM/yyy' }}</td>\n            <td>{{a.data.document.subject.name}}</td>\n           <!--  <td>{{(a.data.document.credential.hashTransaction | slice:0:6)+' ...\n              '+(a.data.document.credential.hashTransaction | slice:62:66)}}\n            </td> -->\n\n            <td>{{a.data.document.documentType.value}}</td>\n            <td>\n\n              <ion-badge class=\"status\" [ngClass]=\"a.status?'enabled':'disabled'\">\n                {{a.status?'Activo':'Desactivo'}}\n              </ion-badge>\n            </td>\n\n            <td>\n              <div class=\"dropdown\">\n                <div class=\"dropbtn\">\n                  <ion-button class=\"button-01\">\n                    <ion-icon name=\"settings-outline\" class=\"icon-01\">\n                    </ion-icon> <br>\n                  </ion-button>\n                </div>\n\n                <div class=\"dropdown-content\">\n                \n                  <a href=\"javascript:void(0)\" (click)=\"getCred(a)\">\n                    <ion-icon name=\"document-outline\"\n                      style=\"font-size: 18px;margin-right: 3px;color: var(--main-color);\"></ion-icon> Ver documento\n                  </a>\n\n                  <a href=\"javascript:void(0)\" *ngIf=\"a.status\" (click)=\"changeStatus(a,false)\">\n                    <ion-icon name=\"close-circle-outline\" class=\"icon-01\"></ion-icon> Deshabilitar\n                  </a>\n\n                  <a href=\"javascript:void(0)\" *ngIf=\"!a.status\" (click)=\"changeStatus(a,true)\">\n                    <ion-icon name=\"checkmark-circle-outline\" class=\"icon-01\"></ion-icon> Habilitar\n                  </a>\n\n                  <a href=\"javascript:void(0)\" (click)=\"delete(a)\" class=\"option-division\">\n                    <ion-icon name=\"trash-outline\" class=\"icon-01\">\n                    </ion-icon> Eliminar\n                  </a>\n\n                </div>\n              </div>\n            </td>\n\n          </tr>\n          <tr *ngIf=\"list.length <= 0 && !load\">\n            <td colspan=\"5\">No se encontraron registros.</td>\n          </tr>\n\n        </tbody>\n\n      </table>\n      <jw-pagination [items]=\"list\" [pageSize]=\"20\" (changePage)=\"onChangePage($event)\">\n      </jw-pagination>\n    </div>\n\n\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "v3vT":
/*!******************************************************!*\
  !*** ./src/app/pages/acciones/acciones.component.ts ***!
  \******************************************************/
/*! exports provided: AccionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccionesComponent", function() { return AccionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_acciones_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./acciones.component.html */ "Wen6");
/* harmony import */ var _acciones_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acciones.component.scss */ "MHl1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");
/* harmony import */ var src_app_components_create_accion_create_accion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/create-accion/create-accion.component */ "wNeK");
/* harmony import */ var src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/apiMongo.service */ "GtMO");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");










let AccionesComponent = class AccionesComponent {
    constructor(_apiMongo, _fun, _mod, router) {
        this._apiMongo = _apiMongo;
        this._fun = _fun;
        this._mod = _mod;
        this.router = router;
        this.list_main = [];
        this.list = [];
        this.load = false;
        this.nameFilter = '';
        this.orderBy = {
            key: '',
            order: true
        };
        this.thead = [
            { key: 'key', name: 'Código' },
            { key: 'name', name: 'Nombre' },
            { key: 'count', name: 'N° de botones' },
            { key: 'status', name: 'Estado' },
        ];
        this.optionFilter = [
            { key: 'key', value: '', type: 'string' },
            { key: 'status', value: false, type: 'boolean' }
        ];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getList();
    }
    getList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            try {
                const res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.object, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.action, 'items');
                /*   console.log('res',res);
                  return; */
                if (this._fun.isEmpty(res.result)) {
                    this.load = false;
                    return;
                }
                this.list_main = res.result[0].action;
                this.list_main.forEach(item => {
                    item.count = item.data.buttons.length;
                });
                this.list = this.list_main;
                console.log('this.list ', this.list);
                this.filter();
                this.orderBy.order = true;
                this.orderBy.key = '';
                this.orderByTable('key');
                this.load = false;
            }
            catch (error) {
                this.load = false;
                yield this._fun.alertError(error);
            }
        });
    }
    changeInput(value, index, type) {
        if (type == 'checkbox') {
            value = value.detail.checked;
        }
        this.optionFilter[index].value = value;
        this.filter();
    }
    filter() {
        this.list = this.list_main.filter(a => {
            let filter1 = true;
            let filter2 = true;
            for (let index = 0; index < this.optionFilter.length; index++) {
                var itemf = this.optionFilter[index];
                if (itemf.type == 'string') {
                    filter1 = a[itemf.key].toLowerCase().indexOf(itemf.value.toLowerCase()) != -1;
                }
                if (itemf.type == 'boolean') {
                    if (a[itemf.key])
                        filter2 = true;
                    else
                        filter2 = itemf.value;
                }
            }
            return filter1 && filter2;
        });
        this.orderList();
    }
    orderByTable(key) {
        if (this.orderBy.key == key) {
            this.orderBy.order = !this.orderBy.order;
        }
        else {
            this.orderBy.order = true;
        }
        this.orderBy.key = key;
        this.orderList();
    }
    orderList() {
        let listOrder = this._fun.sortJSON(this.list, this.orderBy.key, this.orderBy.order);
        this.list = listOrder.filter(item => true);
    }
    botones(key) {
        this.router.navigate(['act-but/' + key]);
    }
    changeStatus(key, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertChangStatus(status);
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                yield this._apiMongo.changeStatus(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.object, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.action, key, status);
                this.getList();
                yield this._fun.alertSucc(status ? src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_ENABLED : src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_DISABLED);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    delete(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertDelete();
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                yield this._apiMongo.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.object, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].TABLE_SIS.action, key); //Eliminar Tabla
                yield this._apiMongo.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].COLLECTION.object, key, 'items'); //Eliminar registros de la tabla
                this.getList();
                yield this._fun.alertSucc(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].MSG.SUC_DELETE);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    form(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this._mod.create({
                component: src_app_components_create_accion_create_accion_component__WEBPACK_IMPORTED_MODULE_7__["CreateAccionComponent"],
                cssClass: 'modal-small',
                componentProps: {
                    data
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(res.data);
                if (this._fun.isVarInvalid(res.data))
                    return;
                if (!this._fun.isVarInvalid(res.data.confirm))
                    this.getList();
            }));
            return yield modal.present();
        });
    }
    onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems;
    }
};
AccionesComponent.ctorParameters = () => [
    { type: src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__["ApiMongoService"] },
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_6__["Funciones"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AccionesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-acciones',
        template: _raw_loader_acciones_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_acciones_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccionesComponent);



/***/ }),

/***/ "viRw":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesPageRoutingModule", function() { return PagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _accion_botones_accion_botones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accion-botones/accion-botones.component */ "fbn7");
/* harmony import */ var _acciones_acciones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./acciones/acciones.component */ "v3vT");
/* harmony import */ var _create_pantalla_create_pantalla_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-pantalla/create-pantalla.component */ "srgz");
/* harmony import */ var _doc_extern_doc_extern_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doc-extern/doc-extern.component */ "SJz+");
/* harmony import */ var _list_qr_list_qr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-qr/list-qr.component */ "EIIZ");
/* harmony import */ var _pages_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages.page */ "Q3A5");
/* harmony import */ var _pantallas_pantallas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pantallas/pantallas.component */ "EqQB");
/* harmony import */ var _parametros_parametros_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parametros/parametros.component */ "0wo4");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "Y5Lh");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./roles/roles.component */ "3ZaD");
/* harmony import */ var _tabla_registros_tabla_registros_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tabla-registros/tabla-registros.component */ "+Pdu");
/* harmony import */ var _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./usuarios/usuarios.component */ "2OcZ");















const routes = [
    {
        path: '',
        component: _pages_page__WEBPACK_IMPORTED_MODULE_8__["PagesPage"],
        /*  canActivate: [noLoginGuard], */
        children: [
            { path: 'users', component: _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_14__["UsuariosComponent"] },
            { path: 'roles', component: _roles_roles_component__WEBPACK_IMPORTED_MODULE_12__["RolesComponent"] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"] },
            { path: 'list-qr', component: _list_qr_list_qr_component__WEBPACK_IMPORTED_MODULE_7__["ListQrComponent"] },
            { path: 'doc-ext', component: _doc_extern_doc_extern_component__WEBPACK_IMPORTED_MODULE_6__["DocExternComponent"] },
            { path: 'acciones', component: _acciones_acciones_component__WEBPACK_IMPORTED_MODULE_4__["AccionesComponent"] },
            { path: 'act-but/:key', component: _accion_botones_accion_botones_component__WEBPACK_IMPORTED_MODULE_3__["AccionBotonesComponent"] },
            { path: 'param', component: _parametros_parametros_component__WEBPACK_IMPORTED_MODULE_10__["ParametrosComponent"] },
            { path: 'table-reg/:key', component: _tabla_registros_tabla_registros_component__WEBPACK_IMPORTED_MODULE_13__["TablaRegistrosComponent"] },
            { path: 'pantalla', component: _pantallas_pantallas_component__WEBPACK_IMPORTED_MODULE_9__["PantallasComponent"] },
            { path: 'create-screen/:key', component: _create_pantalla_create_pantalla_component__WEBPACK_IMPORTED_MODULE_5__["CreatePantallaComponent"] },
            { path: '', redirectTo: 'list-qr', pathMatch: 'full' }
        ]
    }
];
let PagesPageRoutingModule = class PagesPageRoutingModule {
};
PagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PagesPageRoutingModule);



/***/ }),

/***/ "xFcF":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accion-botones/accion-botones.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'Listado de botones'\"></app-header>\r\n\r\n<ion-content class=\"content-table\">\r\n\r\n  <!-- Cabecera y botones de acción -->\r\n  <div class=\"row content-header\">\r\n    <div class=\"col-6\">\r\n      <p class=\"title-header\">Botones de {{key_table}}</p>\r\n\r\n      <!-- Routing -->\r\n      <p class=\"routing\">\r\n        <a href=\"javascript:void(0)\" (click)=\"back()\">Acciones</a>\r\n        <ion-icon name=\"chevron-forward-outline\">\r\n        </ion-icon>\r\n        <a href=\"javascript:void(0)\"> Listado de botones</a>\r\n      </p>\r\n\r\n    </div>\r\n    <!-- Content buttons -->\r\n    <div class=\"col-6 content-buttons\">\r\n      <ion-button (click)=\"form()\" class=\"button-03\">\r\n        <ion-icon name=\"add\"></ion-icon> Crear botón\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- Card del listado -->\r\n  <ion-card class=\"card-table\">\r\n\r\n    <p class=\"text-filter\">Filtro de registros</p>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-4\">\r\n        <input class=\"form-control\" [ngModel]=\"nameFilter\" (ngModelChange)=\"changeInput($event,0,'input')\"\r\n          placeholder=\"Buscar por código\">\r\n      </div>\r\n\r\n      <div class=\"col-4 checkbox-filer\">\r\n        <ion-checkbox slot=\"start\" (ionChange)=\"changeInput($event,1,'checkbox')\" color=\"tertiary\">\r\n        </ion-checkbox>\r\n        <label>Ver desactivos</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"table-responsive table-style\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th (click)=\"orderByTable(item.key)\" *ngFor=\"let item of thead\"\r\n              [ngClass]=\"orderBy.key==item.key?'select-col-order' :''\">{{item.name}} <ion-icon\r\n                [name]=\"orderBy.key==item.key?(orderBy.order? 'arrow-down':'arrow-up' ) :'swap-vertical'\"\r\n                class=\"icon-filter\"></ion-icon>\r\n            </th>\r\n            <th>Acciones</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"list.length <= 0 && load\">\r\n            <td colspan=\"4\">\r\n              <div class=\"alert alert-secondary\" role=\"alert\">\r\n                <span><i class=\"fa fa-spinner fa-pulse\"></i>\r\n                  Cargando registros...\r\n                </span>\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let a of pageOfItems;index as i\">\r\n\r\n            <td>{{a.name}}</td>\r\n            <td>{{a.note}}</td>\r\n            <td>{{a.type}}</td>\r\n\r\n            <td>\r\n              <div class=\"dropdown\">\r\n                <div class=\"dropbtn\">\r\n                  <ion-button class=\"button-01\">\r\n                    <ion-icon name=\"settings-outline\" class=\"icon-01\">\r\n                    </ion-icon> <br>\r\n                  </ion-button>\r\n                </div>\r\n\r\n                <div class=\"dropdown-content\">\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"form(a,i)\">\r\n                    <ion-icon name=\"create-outline\" class=\"icon-01\"> </ion-icon>Editar\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"delete(i)\" class=\"option-division\">\r\n                    <ion-icon name=\"trash-outline\" class=\"icon-01\">\r\n                    </ion-icon> Eliminar\r\n                  </a>\r\n\r\n                </div>\r\n              </div>\r\n            </td>\r\n\r\n          </tr>\r\n          <tr *ngIf=\"list.length <= 0 && !load\">\r\n            <td colspan=\"5\">No se encontraron registros.</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n      <jw-pagination [items]=\"list\" [pageSize]=\"5\" (changePage)=\"onChangePage($event)\">\r\n      </jw-pagination>\r\n    </div>\r\n\r\n  </ion-card>\r\n\r\n</ion-content>");

/***/ }),

/***/ "z0El":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pantallas/pantallas.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'Pantallas del sitema'\"></app-header>\r\n\r\n<ion-content class=\"content-table\">\r\n\r\n  <!-- Cabecera y botones de acción -->\r\n  <div class=\"row content-header\">\r\n    <div class=\"col-6\">\r\n      <p class=\"title-header\">Listado de pantallas</p>\r\n    </div>\r\n    <!-- Content buttons -->\r\n    <div class=\"col-6 content-buttons\">\r\n   <!--    <ion-button (click)=\"registros('new')\" class=\"button-03\">\r\n        <ion-icon name=\"add\"></ion-icon> Crear pantalla\r\n      </ion-button> -->\r\n\r\n      <a href=\"javascript:void(0)\" class=\"btn-3\" (click)=\"registros('new')\" >\r\n        <ion-icon name=\"add-circle\"></ion-icon> Crear pantalla </a>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Card del listado -->\r\n  <ion-card class=\"card-table\">\r\n\r\n    <p class=\"text-filter\">Filtro de registros</p>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-4\">\r\n        <input class=\"form-control\" [ngModel]=\"nameFilter\" (ngModelChange)=\"changeInput($event,0,'input')\"\r\n          placeholder=\"Buscar por nombre\">\r\n      </div>\r\n\r\n      <div class=\"col-4 checkbox-filer\">\r\n        <ion-checkbox slot=\"start\" (ionChange)=\"changeInput($event,1,'checkbox')\" color=\"tertiary\">\r\n        </ion-checkbox>\r\n        <label>Ver desactivados</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"table-responsive table-style\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th (click)=\"orderByTable(item.key)\" *ngFor=\"let item of thead\"\r\n              [ngClass]=\"orderBy.key==item.key?'select-col-order' :''\">{{item.name}} <ion-icon\r\n                [name]=\"orderBy.key==item.key?(orderBy.order? 'arrow-down':'arrow-up' ) :'swap-vertical'\"\r\n                class=\"icon-filter\"></ion-icon>\r\n            </th>\r\n            <th>Acciones</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"list.length <= 0 && load\">\r\n            <td colspan=\"6\">\r\n              <div class=\"alert alert-secondary\" role=\"alert\">\r\n                <span><i class=\"fa fa-spinner fa-pulse\"></i>\r\n                  Cargando registros...\r\n                </span>\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let a of pageOfItems\">\r\n\r\n            <td> {{a.name}} </td>\r\n            <td> {{a.data.certificateType.value}} </td>\r\n            <td> {{a.data.action.name}} </td>\r\n            <td> {{a.data.fields.length}} </td>\r\n            <td>\r\n              <ion-badge class=\"status\" [ngClass]=\"a.status?'enabled' :'disabled'\">\r\n                {{a.status?'Activo':'Desactivo'}}\r\n              </ion-badge>\r\n            </td>\r\n\r\n            <td>\r\n              <div class=\"dropdown\">\r\n                <div class=\"dropbtn\">\r\n                  <ion-button class=\"button-01\">\r\n                    <ion-icon name=\"settings-outline\" class=\"icon-01\">\r\n                    </ion-icon> <br>\r\n                  </ion-button>\r\n                </div>\r\n\r\n                <div class=\"dropdown-content\">\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"duplicar(a.key)\">\r\n                    <ion-icon name=\"copy-outline\" class=\"icon-01\"></ion-icon> Duplicar\r\n                  </a>\r\n    \r\n                  <a href=\"javascript:void(0)\" (click)=\"registros(a.key)\">\r\n                    <ion-icon name=\"create-outline\" class=\"icon-01\"> </ion-icon>Editar\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" *ngIf=\"a.status\" (click)=\"changeStatus(a.key,false)\">\r\n                    <ion-icon name=\"close-circle-outline\" class=\"icon-01\"></ion-icon> Deshabilitar\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" *ngIf=\"!a.status\" (click)=\"changeStatus(a.key,true)\">\r\n                    <ion-icon name=\"checkmark-circle-outline\" class=\"icon-01\"></ion-icon> Habilitar\r\n                  </a>\r\n\r\n                  <a href=\"javascript:void(0)\" (click)=\"delete(a.key)\" class=\"option-division\">\r\n                    <ion-icon name=\"trash-outline\" class=\"icon-01\">\r\n                    </ion-icon> Eliminar\r\n                  </a>\r\n\r\n                </div>\r\n              </div>\r\n            </td>\r\n\r\n          </tr>\r\n          <tr *ngIf=\"list.length <= 0 && !load\">\r\n            <td colspan=\"5\">No se encontraron registros.</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n      <jw-pagination [items]=\"list\" [pageSize]=\"20\" (changePage)=\"onChangePage($event)\">\r\n      </jw-pagination>\r\n    </div>\r\n\r\n  </ion-card>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map