"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var notification_panel_component_1 = require('./notification-panel.component');
var background_component_1 = require('./background.component');
var user_group_selection_component_1 = require('./user-group-selection.component');
var login_panel_component_1 = require('./login-panel.component');
var footer_component_1 = require('./footer.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "    \n        <div class=\"bold notifications-container\"></div>\n        <header>\n            <div class=\"logo\">\n                <img src=\"app/img/logo.png\"/>\n            </div>\n        </header>        \n        <div class=\"container\"></div>\n        <div class=\"login-panel\"></div>\n        <div class=\"user-selection\"></div>        \n        <div class=\"footer\"></div>\n    ",
            directives: [
                notification_panel_component_1.NotificationPanelComponent,
                background_component_1.BackgroundComponent,
                user_group_selection_component_1.UserGroupSelectionComponent,
                login_panel_component_1.LoginPanelComponent,
                footer_component_1.FooterComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map