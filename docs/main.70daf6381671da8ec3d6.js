(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+zoA":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vimeo/player */ "hMnm");
/* harmony import */ var src_app_services_active_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/active-project.service */ "95Ls");
/* harmony import */ var src_app_services_device_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/device-info.service */ "iwwv");
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-useful-swiper */ "wSAv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../safe.pipe */ "Z2+D");








const _c0 = ["thisSwiper"];
function SliderComponent_div_3_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Live Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, content_r2.url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SliderComponent_div_3_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Full-screen Demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, content_r2.embed.split("|")[1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SliderComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, content_r2.embed.split("|")[1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"])("id", "video_" + content_r2.embed.split("video/")[1].toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-vimeo-id", content_r2.embed.split("video/")[1].toString());
} }
function SliderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SliderComponent_div_3_a_2_Template, 3, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SliderComponent_div_3_a_3_Template, 3, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SliderComponent_div_3_div_4_Template, 3, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data-history", "slide" + ctx_r1.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", content_r2.name.replace(":", " | "), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", content_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !content_r2.url && content_r2.embed.split("|")[0] == "vid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", content_r2.embed.split("|")[0] == "vid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](content_r2.copy);
} }
// import SwiperCore from 'swiper/core';
class SliderComponent {
    constructor(activeProjectService, deviceInfoService) {
        this.activeProjectService = activeProjectService;
        this.deviceInfoService = deviceInfoService;
        this.contents = [];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.newPlayers();
        console.log(this.playerArray);
        this.playerArray.filter((player, index) => {
            player.on('play', function () {
                console.log(`played video ${player.element.id}`);
            });
        });
        this.thisSwiper.swiper.on('slideChange', () => {
            clearTimeout(this.videoPlaybackTimer);
            this.playerArray.filter((player, index) => {
                player.pause();
            });
            this.videoPlaybackTimer = setTimeout(() => {
                // this.playerArray[this.thisSwiper.swiper.realIndex].play();
            }, 250);
        });
        this.activeProjectService.currentProject().subscribe((currentProjectIndex) => {
            this.thisSwiper.swiper.slideToLoop(currentProjectIndex, 500);
        });
        this.deviceInfoService.device.subscribe((device) => {
            // this.thisSwiper.swiper.slideToLoop(currentProjectIndex,500)
            // console.log(device);
            this.deviceType = device;
            if (this.orientation) {
                this.oldOrientation = this.orientation;
            }
            if (window.innerHeight >= window.innerWidth) {
                this.orientation = 'portrait';
                // this.thisSwiper.swiper.slides
                if (device.indexOf('mobile') > -1) {
                    // this.thisSwiper.swiper.destroy(false, true)
                    this.thisSwiper.swiper.changeDirection('vertical', true);
                }
            }
            else {
                this.orientation = 'landscape';
                this.thisSwiper.swiper.changeDirection('horizontal', true);
            }
        });
    }
    newPlayers() {
        let tempArr = [];
        this.contents.filter((content, index) => {
            if (content.embed.split('|')[0] == 'vid') {
                let embedPath = content.embed.split('video/');
                let player = new _vimeo_player__WEBPACK_IMPORTED_MODULE_1__["default"](`video_${embedPath[1]}`, {
                    id: parseInt(embedPath[1])
                });
                player.setLoop(true);
                tempArr.push(player);
            }
        });
        this.playerArray = tempArr;
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_active_project_service__WEBPACK_IMPORTED_MODULE_2__["ActiveProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_device_info_service__WEBPACK_IMPORTED_MODULE_3__["DeviceInfoService"])); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], viewQuery: function SliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.thisSwiper = _t.first);
    } }, inputs: { contents: "contents", slideCount: "slideCount", config: "config" }, decls: 8, vars: 2, consts: [[2, "height", "100%", "width", "100%", 3, "config"], ["thisSwiper", ""], [1, "swiper-wrapper"], ["class", "swiper-slide", 3, "data-history", 4, "ngFor", "ngForOf"], [1, "swiper-pagination"], [1, "prev-next-buttons"], [1, "swiper-button-next"], [1, "swiper-button-prev"], [1, "swiper-slide", 3, "data-history"], [3, "innerHTML"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "video-container", 4, "ngIf"], ["target", "_blank", 3, "href"], [1, "video-container"], ["width", "100%", "height", "100%", "frameborder", "0", "allow", "autoplay; fullscreen;", "loop", "1", 3, "src", "id"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "swiper", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SliderComponent_div_3_Template, 7, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contents);
    } }, directives: [ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_4__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_safe_pipe__WEBPACK_IMPORTED_MODULE_6__["SafePipe"]], styles: ["section[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: red;\n}\n\nsection[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: orange;\n}\n\nsection[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: yellow;\n}\n\nsection[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: green;\n}\n\n.swiper-slide[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n}\n\n.swiper-slide[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .swiper-slide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.swiper-slide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #a0f0ad;\n  font-size: 1rem;\n}\n\n.swiper-slide[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%] {\n  height: 60%;\n  width: 80%;\n}\n\n.swiper-slide[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-slide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.swiper-button-prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.swiper-button-next[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n@media (orientation: portrait) {\n  .swiper-slide[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%] {\n    padding: 1.5rem 0;\n    height: auto;\n    width: 95% !important;\n  }\n\n  .swiper-button-prev[_ngcontent-%COMP%], .swiper-button-next[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 47.5%;\n    transform: rotate(90deg);\n  }\n\n  .prev-next-buttons[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .swiper-button-prev[_ngcontent-%COMP%] {\n    top: 6rem;\n  }\n\n  .swiper-button-next[_ngcontent-%COMP%] {\n    top: unset;\n    bottom: 6rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxxQkFBQTtBQUNEOztBQUNBO0VBQ0Msd0JBQUE7QUFFRDs7QUFBQTtFQUNDLHdCQUFBO0FBR0Q7O0FBREE7RUFDQyx1QkFBQTtBQUlEOztBQURBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0csdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBSEM7RUFDQyxZQUFBO0FBS0Y7O0FBSEM7RUFDQyxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEM7RUFDQyxXQUFBO0VBQ0EsVUFBQTtBQUtGOztBQUpFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFNSDs7QUFIQztFQUNDLGVBQUE7QUFLRjs7QUFGQTtFQUNDLE9BQUE7QUFLRDs7QUFIQTtFQUNDLFFBQUE7QUFNRDs7QUFIQTtFQUlFO0lBRUMsaUJBQUE7SUFDQSxZQUFBO0lBQ0EscUJBQUE7RUFFRDs7RUFDRDtJQUNDLGVBQUE7SUFDQSxXQUFBO0lBQ0Esd0JBQUE7RUFFQTs7RUFBRDtJQUNDLGFBQUE7RUFHQTs7RUFERDtJQUNDLFNBQUE7RUFJQTs7RUFGRDtJQUNDLFVBQUE7SUFDQSxZQUFBO0VBS0E7QUFDRiIsImZpbGUiOiJzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uOm50aC1jaGlsZCgxKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbnNlY3Rpb246bnRoLWNoaWxkKDIpIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuc2VjdGlvbjpudGgtY2hpbGQoMykge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG5zZWN0aW9uOm50aC1jaGlsZCg0KSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoMSwgcHtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHR9XHJcblx0YSB7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRjb2xvcjogcmdiKDE2MCwgMjQwLCAxNzMpO1xyXG5cdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdH1cclxuXHQudmlkZW8tY29udGFpbmVyIHtcclxuXHRcdGhlaWdodDogNjAlO1xyXG5cdFx0d2lkdGg6IDgwJTtcclxuXHRcdGlmcmFtZSB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHAge1xyXG5cdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdH1cclxufVxyXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcclxuXHRsZWZ0OiAwO1xyXG59XHJcbi5zd2lwZXItYnV0dG9uLW5leHQge1xyXG5cdHJpZ2h0OiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG5cdC5zd2lwZXItc2xpZGUge1xyXG5cdFx0Ly8gaGVpZ2h0OiA2MHZoICFpbXBvcnRhbnQ7XHJcblx0XHQvLyBwYWRkaW5nOiA2cmVtIDA7IFxyXG5cdFx0LnZpZGVvLWNvbnRhaW5lciB7XHJcblx0XHRcdC8vIHBhZGRpbmc6IDRyZW07XHJcblx0XHRcdHBhZGRpbmc6IDEuNXJlbSAwO1xyXG5cdFx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRcdHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHR9XHJcblx0LnN3aXBlci1idXR0b24tcHJldiwgLnN3aXBlci1idXR0b24tbmV4dCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiA0Ny41JTtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuXHR9XHJcblx0LnByZXYtbmV4dC1idXR0b25zIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdC5zd2lwZXItYnV0dG9uLXByZXYge1xyXG5cdFx0dG9wOiA2cmVtO1xyXG5cdH1cclxuXHQuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcclxuXHRcdHRvcDogdW5zZXQ7XHJcblx0XHRib3R0b206IDZyZW07XHJcblx0fVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slider',
                templateUrl: './slider.component.html',
                styleUrls: ['./slider.component.scss']
            }]
    }], function () { return [{ type: src_app_services_active_project_service__WEBPACK_IMPORTED_MODULE_2__["ActiveProjectService"] }, { type: src_app_services_device_info_service__WEBPACK_IMPORTED_MODULE_3__["DeviceInfoService"] }]; }, { thisSwiper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['thisSwiper', { static: false }]
        }], contents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], slideCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "/hLs":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/landing-page/landing-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_config_projects_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/projects.config */ "fbD5");
/* harmony import */ var src_app_services_active_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/active-project.service */ "95Ls");
/* harmony import */ var src_app_services_device_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/device-info.service */ "iwwv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _work_page_work_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../work-page/work-page.component */ "iY1a");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about-page/about-page.component */ "iP39");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../card/card.component */ "lXt9");









function LandingPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.showPage("home"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "teresa.nededog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showPage("work"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "teresa.nededog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingPageComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.showPage("home"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.currentPage == "home");
} }
function LandingPageComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "select a rectangle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingPageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LandingPageComponent_div_12_div_1_Template, 3, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r3.currentPage == "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.hideCta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r3.projects)("cardType", ctx_r3.cardType);
} }
class LandingPageComponent {
    constructor(activeProjectService, deviceInfoService) {
        this.activeProjectService = activeProjectService;
        this.deviceInfoService = deviceInfoService;
        this.isMobile = false;
        this.hideCta = false;
        this.cardTypeArray = [
            'default',
            'stick',
            'fan'
        ];
        this.activeProjectService.currentPage().subscribe((currentPage) => {
            console.log(currentPage);
            this.currentPage = currentPage;
        });
        this.activeProjectService.firstClick().subscribe((confirmation) => {
            this.hideCta = confirmation;
        });
        this.activeProjectService.currentProject().subscribe((currentProject) => {
            console.log(currentProject);
            this.currentTitle = src_app_config_projects_config__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"][currentProject].name;
        });
        this.deviceInfoService.device.subscribe((device) => {
            if (device.indexOf('mobile') > -1) {
                this.isMobile = true;
                this.activeProjectService.setPage('work');
            }
        });
    }
    ngOnInit() {
        this.getActiveProjects();
        this.cardType = this.cardTypeArray[0];
    }
    getActiveProjects() {
        let tempArr = [];
        src_app_config_projects_config__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"].filter((project, index) => {
            if (project.active) {
                tempArr.push(project);
            }
        });
        this.projects = tempArr.reverse();
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    showPage(page) {
        this.activeProjectService.setPage(page);
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_active_project_service__WEBPACK_IMPORTED_MODULE_2__["ActiveProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_device_info_service__WEBPACK_IMPORTED_MODULE_3__["DeviceInfoService"])); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 32, vars: 13, consts: [["id", "landingPage"], ["id", "header"], ["class", "text", 3, "click", 4, "ngIf"], [1, "location"], [1, "button-container"], [3, "active", "click", 4, "ngIf"], [3, "click"], ["src", "assets/icons/iconmonstr-task-1.svg", "alt", ""], ["src", "assets/icons/iconmonstr-generation-14.svg", "alt", ""], ["class", "container", "id", "card-container", "style", "font-size: 1vw; height: 80vh; width: 100vw; margin: 6rem auto;", 3, "active", 4, "ngIf"], ["id", "work-container", 1, "container", 2, "height", "90vh", "width", "100vw", "margin", "0 auto"], ["id", "about-container", 1, "container", 2, "height", "auto", "width", "100vw", "margin", "4rem auto", "padding-bottom", "10rem"], ["id", "footer"], ["href", "mailto:treindle@gmail.com"], ["src", "assets/icons/iconmonstr-email-2.svg", "alt", ""], ["href", "tel:+18042527447"], ["src", "assets/icons/iconmonstr-phone-7.svg", "alt", ""], ["target", "_blank", "href", "https://github.com/treindle"], ["src", "assets/icons/iconmonstr-github-1.svg", "alt", ""], ["target", "_blank", "href", "https://linkedin.com/pub/Teresa-Nededog/9b/3a/96"], ["src", "assets/icons/iconmonstr-linkedin-1.svg", "alt", ""], ["target", "_blank", "href", "https://twitch.tv/t34burg"], ["src", "assets/icons/iconmonstr-twitch-1.svg", "alt", ""], ["target", "_blank", "href", "https://www.rankone.global/t34burg"], ["src", "assets/icons/iconmonstr-gamepad-3.svg", "alt", ""], [1, "text", 3, "click"], ["src", "assets/icons/iconmonstr-home-10.svg", "alt", ""], ["id", "card-container", 1, "container", 2, "font-size", "1vw", "height", "80vh", "width", "100vw", "margin", "6rem auto"], ["class", "cta", 4, "ngIf"], [3, "cards", "cardType"], [1, "cta"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LandingPageComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LandingPageComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LandingPageComponent_button_7_Template, 2, 2, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_button_click_8_listener() { return ctx.showPage("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_button_click_10_listener() { return ctx.showPage("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LandingPageComponent_div_12_Template, 3, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-work-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-about-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentPage == "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentPage == "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentPage == "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentPage == "about");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _work_page_work_page_component__WEBPACK_IMPORTED_MODULE_5__["WorkPageComponent"], _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_6__["AboutPageComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"]], styles: ["@keyframes spinClock {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinCounter {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n@keyframes fadeOutAnimation {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadeInAnimation {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeInSlideUpAnimation {\n  0% {\n    opacity: 0;\n  }\n  95% {\n    margin-bottom: 0;\n  }\n  100% {\n    margin-bottom: 0;\n    opacity: 1;\n  }\n}\n@keyframes grow {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: 100%;\n  }\n}\n@keyframes stretch {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 99.5%;\n  }\n}\n@keyframes stretchThenSlide {\n  0% {\n    width: 0;\n  }\n  50% {\n    width: 100%;\n  }\n  75% {\n    width: 100%;\n  }\n  100% {\n    left: 100%;\n    width: 0;\n  }\n}\n@keyframes slideUpHeaders {\n  0% {\n    bottom: -100%;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n@keyframes slideUpIntro {\n  0% {\n    bottom: -4em;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n@keyframes blindsIntro {\n  0% {\n    transform: rotateX(90deg);\n    color: white;\n  }\n  20% {\n    color: white;\n    transform: rotateX(0);\n  }\n  70% {\n    color: white;\n    transform: rotateX(0);\n  }\n  100% {\n    transform: rotateX(0);\n    color: grey;\n  }\n}\n@keyframes stayUpIntro {\n  0% {\n    bottom: -4em;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n@keyframes fireflyBox {\n  0% {\n    box-shadow: 0px 0px 0 white;\n  }\n  100% {\n    color: #fff;\n    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;\n  }\n}\n@keyframes fireflyText {\n  0% {\n    text-shadow: 0px 0px 0 white;\n  }\n  100% {\n    color: #fff;\n    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;\n  }\n}\n#header[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  z-index: 10;\n  height: 2rem;\n  width: 96vw;\n  padding: 0.5rem 2vw;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-image: linear-gradient(140deg, #BC70A4 0%, #EADEDB 50%, #7a9deb 75%);\n  justify-content: space-between;\n}\n#header[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bolder;\n  font-size: 1.5rem;\n}\n#header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: transparent;\n  outline: transparent;\n  border: transparent;\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n  color: white;\n  letter-spacing: 4px;\n  text-decoration: none;\n  font-size: 1.25rem;\n  margin-left: 1.25rem;\n}\n#header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], #header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: all 0.15s ease-in-out;\n}\n#header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, #header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.25);\n  color: lightgrey;\n}\n#header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], #header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.25);\n}\n#header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child, #header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child, #footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child, #footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n#header[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], #header[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.5;\n}\n#header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], #header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n  cursor: pointer;\n  font-size: 1.25rem;\n}\n#header[_ngcontent-%COMP%] {\n  top: 0;\n}\n#footer[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n.cta[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 2vw;\n  font-size: 1rem;\n}\n.cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-shadow: 0px 0px 0 white;\n  color: white;\n  animation: fireflyText infinite 1.5s alternate;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: top;\n  justify-content: center;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  z-index: -1;\n  transition: opacity 0.25s ease-in-out 0.25s;\n}\n.container.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n}\n#card-container[_ngcontent-%COMP%] {\n  overflow: visible;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n@media (orientation: portrait) {\n  #landingPage[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n  }\n\n  #about-container[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    overflow-x: hidden;\n  }\n\n  #work-container[_ngcontent-%COMP%], #card-container[_ngcontent-%COMP%] {\n    -webkit-overflow-scrolling: touch;\n    overflow-y: scroll;\n  }\n\n  .location[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxhbmltYXRpb25zLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0UsdUJBQUE7RUNDSjtFRENFO0lBQ0UseUJBQUE7RUNDSjtBQUNGO0FEQ0E7RUFDSTtJQUNJLHVCQUFBO0VDQ047RURDRTtJQUNJLDBCQUFBO0VDQ047QUFDRjtBRENBO0VBQ0k7SUFDSSxVQUFBO0VDQ047RURDRTtJQUNJLFVBQUE7RUNDTjtBQUNGO0FERUE7RUFDSTtJQUNJLFVBQUE7RUNBTjtFREVFO0lBQ0ksVUFBQTtFQ0FOO0FBQ0Y7QURHQTtFQUNJO0lBQ0ksVUFBQTtFQ0ROO0VER0U7SUFDSSxnQkFBQTtFQ0ROO0VER0U7SUFDSSxnQkFBQTtJQUNBLFVBQUE7RUNETjtBQUNGO0FER0E7RUFDSTtJQUNJLFNBQUE7RUNETjtFREdFO0lBQ0ksWUFBQTtFQ0ROO0FBQ0Y7QURHQTtFQUNJO0lBQ0UsUUFBQTtFQ0RKO0VER0U7SUFDRSxZQUFBO0VDREo7QUFDRjtBREdBO0VBQ0k7SUFDSSxRQUFBO0VDRE47RURHRTtJQUNJLFdBQUE7RUNETjtFREdFO0lBQ0ksV0FBQTtFQ0ROO0VER0U7SUFDSSxVQUFBO0lBQ0EsUUFBQTtFQ0ROO0FBQ0Y7QURHQTtFQUNJO0lBQ0ksYUFBQTtFQ0ROO0VER0U7SUFDSSxTQUFBO0VDRE47QUFDRjtBREdBO0VBQ0k7SUFDSSxZQUFBO0VDRE47RURHRTtJQUNJLFNBQUE7RUNETjtBQUNGO0FER0E7RUFDSTtJQUNJLHlCQUFBO0lBQ0EsWUFBQTtFQ0ROO0VER0U7SUFDSSxZQUFBO0lBQ0EscUJBQUE7RUNETjtFRElFO0lBQ0ksWUFBQTtJQUNBLHFCQUFBO0VDRk47RURLRTtJQUVJLHFCQUFBO0lBQ0EsV0FBQTtFQ0pOO0FBQ0Y7QURPQTtFQUNJO0lBQ0ksWUFBQTtFQ0xOO0VEUUU7SUFDSSxTQUFBO0VDTk47QUFDRjtBRFFBO0VBQ0k7SUFDSSwyQkFBQTtFQ05OO0VEU0U7SUFHSSxXQUFBO0lBQ0EsbUlBQ0U7RUNWUjtBQUNGO0FEbUJBO0VBQ0k7SUFDSSw0QkFBQTtFQ2pCTjtFRG9CRTtJQUdJLFdBQUE7SUFDQSxvSUFDRTtFQ3JCUjtBQUNGO0FBcElBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0VBQUE7RUFDQSw4QkFBQTtBQXNJSjtBQXJJSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBdUlSO0FBcklJO0VBQ0ksNkJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBcUlSO0FBcElRO0VBQ0ksaUNBQUE7QUFzSVo7QUFwSVE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FBc0laO0FBcklZO0VBQ0ksc0JBQUE7QUF1SWhCO0FBcElRO0VBQ0ksY0FBQTtBQXNJWjtBQXBJUTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtBQXNJWjtBQW5JSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFxSVI7QUFsSUE7RUFDSSxNQUFBO0FBcUlKO0FBbklBO0VBQ0ksU0FBQTtBQXNJSjtBQXBJQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBdUlKO0FBdElJO0VBQ0ksNEJBQUE7RUFDQSxZQUFBO0VBQ0EsOENBQUE7QUF3SVI7QUFySUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7QUF3SUo7QUF2SUk7RUFDSSxVQUFBO0VBQ0EsVUFBQTtBQXlJUjtBQXRJQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBeUlKO0FBdklBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBMElOOztFQXhJRTtJQUNJLGtCQUFBO0lBQ0Esa0JBQUE7RUEySU47O0VBeklFO0lBQ0ksaUNBQUE7SUFDQSxrQkFBQTtFQTRJTjs7RUExSUU7SUFDSSxhQUFBO0VBNklOO0FBQ0YiLCJmaWxlIjoibGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzcGluQ2xvY2sge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc3BpbkNvdW50ZXIge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVPdXRBbmltYXRpb24geyBcclxuICAgIDAlIHsgXHJcbiAgICAgICAgb3BhY2l0eTogMTsgXHJcbiAgICB9IFxyXG4gICAgMTAwJSB7IFxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLy8gcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgfSBcclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVJbkFuaW1hdGlvbiB7IFxyXG4gICAgMCUgeyBcclxuICAgICAgICBvcGFjaXR5OiAwOyBcclxuICAgIH0gXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgb3BhY2l0eTogMTsgXHJcbiAgICAgICAgLy8gcG9pbnRlci1ldmVudHM6IHVuc2V0O1xyXG4gICAgIH0gXHJcbn1cclxuQGtleWZyYW1lcyBmYWRlSW5TbGlkZVVwQW5pbWF0aW9uIHsgXHJcbiAgICAwJSB7IFxyXG4gICAgICAgIG9wYWNpdHk6IDA7IFxyXG4gICAgfSBcclxuICAgIDk1JSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIDEwMCUgeyBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7IFxyXG4gICAgIH0gXHJcbn1cclxuQGtleWZyYW1lcyBncm93IHsgXHJcbiAgICAwJSB7IFxyXG4gICAgICAgIGhlaWdodDogMDsgXHJcbiAgICB9IFxyXG4gICAgMTAwJSB7IFxyXG4gICAgICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICB9IFxyXG59XHJcbkBrZXlmcmFtZXMgc3RyZXRjaCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHdpZHRoOiA5OS41JTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHN0cmV0Y2hUaGVuU2xpZGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIDc1JSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2xpZGVVcEhlYWRlcnMge1xyXG4gICAgMCUgeyBcclxuICAgICAgICBib3R0b206IC0xMDAlOyBcclxuICAgIH0gXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgYm90dG9tOiAwOyBcclxuICAgICB9IFxyXG59XHJcbkBrZXlmcmFtZXMgc2xpZGVVcEludHJvIHtcclxuICAgIDAlIHsgXHJcbiAgICAgICAgYm90dG9tOiAtNGVtOyBcclxuICAgIH0gXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgYm90dG9tOiAwOyBcclxuICAgIH0gXHJcbn1cclxuQGtleWZyYW1lcyBibGluZHNJbnRybyB7XHJcbiAgICAwJSB7IFxyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7IFxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH0gXHJcbiAgICAyMCUgeyBcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDApOyBcclxuICAgICAgICAvLyBib3R0b206IDA7IFxyXG4gICAgfSBcclxuICAgIDcwJSB7IFxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7IFxyXG4gICAgICAgIC8vIGJvdHRvbTogMDsgXHJcbiAgICB9IFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLy8gYm90dG9tOiA0ZW07IFxyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTsgXHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcblxyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc3RheVVwSW50cm8ge1xyXG4gICAgMCUgeyBcclxuICAgICAgICBib3R0b206IC00ZW07IFxyXG4gICAgfSBcclxuXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgYm90dG9tOiAwOyBcclxuICAgIH0gXHJcbn1cclxuQGtleWZyYW1lcyBmaXJlZmx5Qm94IHtcclxuICAgIDAlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDAgd2hpdGU7XHJcbiAgICAgICAgLy8gY29sb3I6IGdyZXk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDEuNWVtIHdoaXRlO1xyXG4gICAgICAgIC8vIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3gtc2hhZG93OlxyXG4gICAgICAgICAgMCAwIDVweCAjZmZmLFxyXG4gICAgICAgICAgMCAwIDEwcHggI2ZmZixcclxuICAgICAgICAgIDAgMCAyMHB4ICNmZmYsXHJcbiAgICAgICAgICAwIDAgNDBweCAjMGZmLFxyXG4gICAgICAgICAgMCAwIDgwcHggIzBmZixcclxuICAgICAgICAgIDAgMCA5MHB4ICMwZmYsXHJcbiAgICAgICAgICAwIDAgMTAwcHggIzBmZixcclxuICAgICAgICAgIDAgMCAxNTBweCAjMGZmO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmlyZWZseVRleHQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDAgd2hpdGU7XHJcbiAgICAgICAgLy8gY29sb3I6IGdyZXk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAvLyB0ZXh0LXNoYWRvdzogMHB4IDBweCAxLjVlbSB3aGl0ZTtcclxuICAgICAgICAvLyBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6XHJcbiAgICAgICAgICAwIDAgNXB4ICNmZmYsXHJcbiAgICAgICAgICAwIDAgMTBweCAjZmZmLFxyXG4gICAgICAgICAgMCAwIDIwcHggI2ZmZixcclxuICAgICAgICAgIDAgMCA0MHB4ICMwZmYsXHJcbiAgICAgICAgICAwIDAgODBweCAjMGZmLFxyXG4gICAgICAgICAgMCAwIDkwcHggIzBmZixcclxuICAgICAgICAgIDAgMCAxMDBweCAjMGZmLFxyXG4gICAgICAgICAgMCAwIDE1MHB4ICMwZmY7XHJcbiAgICB9XHJcbn0iLCJAa2V5ZnJhbWVzIHNwaW5DbG9jayB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW5Db3VudGVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXRBbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbkFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluU2xpZGVVcEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDk1JSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZ3JvdyB7XG4gIDAlIHtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN0cmV0Y2gge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDk5LjUlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN0cmV0Y2hUaGVuU2xpZGUge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICA3NSUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgd2lkdGg6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVVcEhlYWRlcnMge1xuICAwJSB7XG4gICAgYm90dG9tOiAtMTAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVVcEludHJvIHtcbiAgMCUge1xuICAgIGJvdHRvbTogLTRlbTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmxpbmRzSW50cm8ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgMjAlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xuICB9XG4gIDcwJSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XG4gICAgY29sb3I6IGdyZXk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3RheVVwSW50cm8ge1xuICAwJSB7XG4gICAgYm90dG9tOiAtNGVtO1xuICB9XG4gIDEwMCUge1xuICAgIGJvdHRvbTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBmaXJlZmx5Qm94IHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMCB3aGl0ZTtcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNmZmYsIDAgMCAxMHB4ICNmZmYsIDAgMCAyMHB4ICNmZmYsIDAgMCA0MHB4ICMwZmYsIDAgMCA4MHB4ICMwZmYsIDAgMCA5MHB4ICMwZmYsIDAgMCAxMDBweCAjMGZmLCAwIDAgMTUwcHggIzBmZjtcbiAgfVxufVxuQGtleWZyYW1lcyBmaXJlZmx5VGV4dCB7XG4gIDAlIHtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwIHdoaXRlO1xuICB9XG4gIDEwMCUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNmZmYsIDAgMCAxMHB4ICNmZmYsIDAgMCAyMHB4ICNmZmYsIDAgMCA0MHB4ICMwZmYsIDAgMCA4MHB4ICMwZmYsIDAgMCA5MHB4ICMwZmYsIDAgMCAxMDBweCAjMGZmLCAwIDAgMTUwcHggIzBmZjtcbiAgfVxufVxuI2hlYWRlciwgI2Zvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDk2dnc7XG4gIHBhZGRpbmc6IDAuNXJlbSAydnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsICNCQzcwQTQgMCUsICNFQURFREIgNTAlLCAjN2E5ZGViIDc1JSk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiNoZWFkZXIgLmxvY2F0aW9uLCAjZm9vdGVyIC5sb2NhdGlvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4jaGVhZGVyIGJ1dHRvbiwgI2hlYWRlciBhLCAjZm9vdGVyIGJ1dHRvbiwgI2Zvb3RlciBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgY29sb3I6IHdoaXRlO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XG59XG4jaGVhZGVyIGJ1dHRvbiBpbWcsICNoZWFkZXIgYSBpbWcsICNmb290ZXIgYnV0dG9uIGltZywgI2Zvb3RlciBhIGltZyB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbn1cbiNoZWFkZXIgYnV0dG9uOmhvdmVyLCAjaGVhZGVyIGE6aG92ZXIsICNmb290ZXIgYnV0dG9uOmhvdmVyLCAjZm9vdGVyIGE6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xuICBjb2xvcjogbGlnaHRncmV5O1xufVxuI2hlYWRlciBidXR0b246aG92ZXIgaW1nLCAjaGVhZGVyIGE6aG92ZXIgaW1nLCAjZm9vdGVyIGJ1dHRvbjpob3ZlciBpbWcsICNmb290ZXIgYTpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xufVxuI2hlYWRlciBidXR0b246Zmlyc3QtY2hpbGQsICNoZWFkZXIgYTpmaXJzdC1jaGlsZCwgI2Zvb3RlciBidXR0b246Zmlyc3QtY2hpbGQsICNmb290ZXIgYTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuI2hlYWRlciBidXR0b24uYWN0aXZlLCAjaGVhZGVyIGEuYWN0aXZlLCAjZm9vdGVyIGJ1dHRvbi5hY3RpdmUsICNmb290ZXIgYS5hY3RpdmUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC41O1xufVxuI2hlYWRlciAudGV4dCwgI2hlYWRlciBzcGFuLCAjZm9vdGVyIC50ZXh0LCAjZm9vdGVyIHNwYW4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4jaGVhZGVyIHtcbiAgdG9wOiAwO1xufVxuXG4jZm9vdGVyIHtcbiAgYm90dG9tOiAwO1xufVxuXG4uY3RhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDJ2dztcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmN0YSBwIHtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMCB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBhbmltYXRpb246IGZpcmVmbHlUZXh0IGluZmluaXRlIDEuNXMgYWx0ZXJuYXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHRvcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dCAwLjI1cztcbn1cbi5jb250YWluZXIuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbn1cblxuI2NhcmQtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAjbGFuZGluZ1BhZ2Uge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgI2Fib3V0LWNvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuXG4gICN3b3JrLWNvbnRhaW5lciwgI2NhcmQtY29udGFpbmVyIHtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG5cbiAgLmxvY2F0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.scss']
            }]
    }], function () { return [{ type: src_app_services_active_project_service__WEBPACK_IMPORTED_MODULE_2__["ActiveProjectService"] }, { type: src_app_services_device_info_service__WEBPACK_IMPORTED_MODULE_3__["DeviceInfoService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\TROJAN\Projects\personal\foliage\src\main.ts */"zUnb");


/***/ }),

/***/ "95Ls":
/*!****************************************************!*\
  !*** ./src/app/services/active-project.service.ts ***!
  \****************************************************/
/*! exports provided: ActiveProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveProjectService", function() { return ActiveProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ActiveProjectService {
    constructor() {
        this._currentProject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this._currentPage$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('home');
        this._firstClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    currentProject() {
        return this._currentProject$.asObservable();
    }
    setProject(projectIndex) {
        this._currentProject$.next(projectIndex);
    }
    currentPage() {
        return this._currentPage$.asObservable();
    }
    firstClick() {
        return this._firstClick$.asObservable();
    }
    setPage(projectIndex) {
        this._currentPage$.next(projectIndex);
    }
    setFirstClick(confirmation) {
        this._firstClick$.next(confirmation);
    }
}
ActiveProjectService.ɵfac = function ActiveProjectService_Factory(t) { return new (t || ActiveProjectService)(); };
ActiveProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActiveProjectService, factory: ActiveProjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActiveProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "SoyA":
/*!************************************************************!*\
  !*** ./src/app/directives/breakpoint-classes.directive.ts ***!
  \************************************************************/
/*! exports provided: BreakpointClassesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointClassesDirective", function() { return BreakpointClassesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_device_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/device-info.service */ "iwwv");



class BreakpointClassesDirective {
    constructor(renderer, hostElement, deviceInfoService) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.deviceInfoService = deviceInfoService;
    }
    ngOnInit() {
        this.originalClass = this.hostElement.nativeElement.classList.value;
        this.deviceSubscription = this.deviceInfoService.device.subscribe((device) => {
            this.hostElement.nativeElement.classList = this.originalClass;
            if (this.orientation) {
                this.oldOrientation = this.orientation;
            }
            if (window.innerHeight >= window.innerWidth) {
                this.orientation = 'portrait';
            }
            else {
                this.orientation = 'landscape';
            }
            device = `${device}-${this.orientation}`;
            this.renderer.addClass(this.hostElement.nativeElement, device);
            if (device.indexOf('ios') > -1) {
                this.renderer.addClass(this.hostElement.nativeElement, window.devicePixelRatio.toString());
            }
        });
    }
}
BreakpointClassesDirective.ɵfac = function BreakpointClassesDirective_Factory(t) { return new (t || BreakpointClassesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_device_info_service__WEBPACK_IMPORTED_MODULE_1__["DeviceInfoService"])); };
BreakpointClassesDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BreakpointClassesDirective, selectors: [["", "appBreakpointClasses", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointClassesDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appBreakpointClasses]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: src_app_services_device_info_service__WEBPACK_IMPORTED_MODULE_1__["DeviceInfoService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



// import { ContentSetup } from './model/contents.model';
class AppComponent {
    constructor() {
        this.title = 'foliage';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Z2+D":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safe'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-useful-swiper */ "wSAv");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/slider/slider.component */ "+zoA");
/* harmony import */ var _directives_breakpoint_classes_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/breakpoint-classes.directive */ "SoyA");
/* harmony import */ var _components_pages_work_page_work_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/work-page/work-page.component */ "iY1a");
/* harmony import */ var _components_pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/landing-page/landing-page.component */ "/hLs");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/about-page/about-page.component */ "iP39");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/card/card.component */ "lXt9");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./safe.pipe */ "Z2+D");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_2__["NgxUsefulSwiperModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_4__["SliderComponent"],
        _directives_breakpoint_classes_directive__WEBPACK_IMPORTED_MODULE_5__["BreakpointClassesDirective"],
        _components_pages_work_page_work_page_component__WEBPACK_IMPORTED_MODULE_6__["WorkPageComponent"],
        _components_pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"],
        _components_pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__["AboutPageComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"],
        _safe_pipe__WEBPACK_IMPORTED_MODULE_11__["SafePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_2__["NgxUsefulSwiperModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_4__["SliderComponent"],
                    _directives_breakpoint_classes_directive__WEBPACK_IMPORTED_MODULE_5__["BreakpointClassesDirective"],
                    _components_pages_work_page_work_page_component__WEBPACK_IMPORTED_MODULE_6__["WorkPageComponent"],
                    _components_pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"],
                    _components_pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__["AboutPageComponent"],
                    _components_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"],
                    _safe_pipe__WEBPACK_IMPORTED_MODULE_11__["SafePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_2__["NgxUsefulSwiperModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fbD5":
/*!*******************************************!*\
  !*** ./src/app/config/projects.config.ts ***!
  \*******************************************/
/*! exports provided: PROJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
const PROJECTS = [
    {
        name: 'Baxter:Prismaflex',
        thumb: 'prisma.png',
        poster: 'baxter_prisma.jpg',
        demo: 'vid|Baxter Prismaflex-high.mp4',
        embed: 'vid|https://player.vimeo.com/video/511260965',
        copy: 'Medical sales tool for Baxters Prismaflex.',
        platform: 'iPad',
        url: '',
        tech: [5, 7, 8, 10, 12, 17, 18, 25, 28, 30],
        active: true
    },
    {
        name: "Baxter:Patient Journey",
        thumb: "journey.png",
        poster: "baxter_journey.JPG",
        demo: "vid|Baxter Patient Journey-high.mp4",
        embed: "vid|https://player.vimeo.com/video/511260901",
        copy: "Interactive experience and sales tool following four patient journeys.",
        platform: "iPad, mural",
        url: "",
        tech: [5, 7, 8, 10, 12, 17, 18, 25, 28],
        active: true
    },
    {
        name: "Inhance Digital Marketing Agency",
        thumb: "inhance.png",
        poster: "inhance.png",
        demo: "vid|Inhance Digital Marketing Agency-high.mp4",
        embed: "vid|https://player.vimeo.com/video/511260825",
        copy: "Offical website for Inhance Digital Marketing Agency",
        platform: "responsive",
        url: "https://www.inhance.com/",
        tech: [0, 2, 5, 6, 10, 14, 17, 18, 19, 24, 25, 27, 28, 30],
        active: true
    },
    {
        name: "Cummins:2.0 Engine Interactive",
        thumb: "2.0.png",
        poster: "2.0.JPG",
        demo: "vid|Cummins Engine Interactive-high.mp4",
        embed: "vid|https://player.vimeo.com/video/511260679",
        copy: "International, interactive marketing campaign for Cummins Engines On-Highway engines.",
        platform: "mural, surfacePro",
        url: "https://www.cummins.com/engines",
        tech: [0, 2, 5, 6, 10, 14, 17, 18, 19, 24, 25, 28, 30],
        active: true
    },
    {
        name: "Cummins:ConExpo",
        thumb: "con_expo.png",
        poster: "cummins17FEB02.png",
        demo: "vid|Cummins ConExpo-high.mp4",
        embed: "vid|https://player.vimeo.com/video/511260939",
        copy: "Interactive experience and product information tool for Cummins' Off-Highway Engine Components.",
        platform: "mural, surfacePro",
        url: "https://www.cummins.com/generators-power-systems",
        tech: [0, 2, 5, 6, 10, 14, 17, 18, 19, 24, 25, 28, 30],
        active: true
    },
    {
        name: "Cummins:IAA",
        thumb: "iaa.png",
        poster: "iaa.jpg",
        demo: "vid|Cummins IAA-high.mp4",
        embed: "vid|https://player.vimeo.com/video/511261003",
        copy: "Interactive experience and product information tool for Cummins' On-Highway Engine Components.",
        platform: "mural, surfacePro",
        url: "https://www.cummins.com/components",
        tech: [0, 2, 5, 6, 10, 14, 17, 18, 19, 24, 25, 28, 30],
        active: true
    },
    {
        name: "Illumina:Merlion",
        thumb: "illumina.png",
        poster: "illumina.jpg",
        demo: "vid|Illumina MiniSeq-high.mp4",
        embed: "vid|https://player.vimeo.com/video/511261054",
        copy: "Interactive product journey through Illumina's Miniseq",
        platform: "responsive",
        url: "",
        tech: [5, 6, 7, 10, 12, 17, 18, 19, 24],
        active: true
    },
    {
        name: "Aviall:Interactive Display",
        thumb: "aviall.png",
        poster: "aviall.jpg",
        demo: "vid|Boeing Aviall Interactive-high.mp4",
        embed: "vid|https://player.vimeo.com/video/511261145",
        copy: "Services interactive for Aviall, aircraft parts distributor and subsidiary of The Boeing Company.",
        platform: "mural",
        url: "",
        tech: [0, 2, 5, 6, 10, 14, 17, 18, 19, 24, 25, 28, 29, 30],
        active: true
    },
    {
        name: "Valent:Biosciences",
        thumb: "valent.png",
        poster: "valent.JPG",
        demo: "vid|Valent BioSciences-high.mp4",
        embed: "vid|https://player.vimeo.com/video/511261104",
        copy: "Informational sales tool for mosquito and Zika awareness.",
        platform: "surfacePro",
        url: "",
        tech: [0, 2, 5, 6, 10, 14, 17, 18, 19, 24, 25, 28, 30],
        active: true
    },
    {
        name: "AT&T Hackathon:Cheatah",
        thumb: "cheatah.png",
        poster: "cheatah.jpg",
        demo: "img|cheatah.jpg",
        embed: "img|cheatah.jpg",
        copy: "Study buddy locator through collegiate interests.",
        platform: "responsive",
        url: "cheatah.tdogg.io",
        tech: [5, 10, 17, 18, 19, 24, 25, 27, 31],
        active: false
    },
    {
        name: "DevLeague:Fastenate",
        thumb: "fastenate.png",
        poster: "fastenate.jpg",
        demo: "img|fastenate.jpg",
        embed: "img|fastenate.jpg",
        copy: "Responsive, live json reader",
        platform: "responsive",
        url: "fastenate.tdogg.io",
        tech: [5, 6, 10, 17, 18, 19, 24, 25, 27, 31],
        active: false
    },
    {
        name: "Devleague:Flappy App",
        thumb: "flappy.png",
        poster: "flappy.jpg",
        demo: "img|flappy.jpg",
        embed: "img|flappy.jpg",
        copy: "Responsive app",
        platform: "responsive",
        url: "flappy.tdogg.io",
        tech: [6, 17, 18],
        active: false
    },
    {
        name: "Devleague:GeezMail",
        thumb: "geezmail.png",
        poster: "geezmail.jpg",
        demo: "img|geezmail.jpg",
        embed: "img|geezmail.jpg",
        copy: "Email simulator challenge for DevLeague admission.",
        platform: "desktop",
        url: "geezmail.tdogg.io",
        tech: [17, 18],
        active: false
    },
    {
        name: "Global Game Jam:JigDraw",
        thumb: "jigdraw.png",
        poster: "jigdraw.jpg",
        demo: "img|jigdraw.jpg",
        embed: "img|jigdraw.jpg",
        copy: "Winning game for Global Game Jam, Honolulu",
        platform: "desktop",
        url: "jigdraw.tdogg.io",
        tech: [17, 18, 19, 27],
        active: false
    },
    {
        name: "TEDx Honolulu:Paradigm Shift:Scheduler",
        thumb: "tedxfront.png",
        poster: "tedxfront.jpg",
        demo: "img|tedxfront.jpg",
        embed: "img|tedxfront.jpg",
        copy: "Android app for TEDx Honolulu's Paradigm Shift event program.",
        platform: "responsive",
        url: "",
        tech: [0, 1, 2, 3, 5, 9, 14, 17, 18, 19, 24, 25, 27, 31],
        active: false
    },
    {
        name: "TEDx Honolulu:Paradigm Shift:CMS",
        thumb: "tedx.png",
        poster: "tedx.jpg",
        demo: "img|tedx.jpg",
        embed: "img|tedx.jpg",
        copy: "Content Management system for TEDx Honolulu's event program app.",
        platform: "responsive",
        url: "",
        tech: [0, 1, 2, 3, 5, 13, 14, 17, 18, 19, 24, 25, 27, 31],
        active: false
    },
    {
        name: "Personal:TechWomen",
        thumb: "techwomen.png",
        poster: "itwomen.jpg",
        demo: "img|itwomen.jpg",
        embed: "img|itwomen.jpg",
        copy: "Web resource for the empowerment of Women in Tech",
        platform: "responsive",
        url: "techwomen.tdogg.io",
        tech: [0, 1, 2, 3, 5, 14, 17, 18, 19, 24, 25, 27, 31],
        active: false
    },
    {
        name: "DevLeague:NewsFeed",
        thumb: "newsfeed.png",
        poster: "newsfeed.jpg",
        demo: "img|newsfeed.jpg",
        embed: "img|newsfeed.jpg",
        copy: "CMS driven site for our most famous human beings.",
        platform: "responsive",
        url: "newsfeed.tdogg.io",
        tech: [0, 1, 2, 3, 5, 9, 14, 17, 18, 19, 24, 25, 27, 31],
        active: false
    },
    {
        name: "AT&T Hackathon LA:IBM Watson",
        thumb: "todo.png",
        poster: "watson.jpg",
        demo: "img|watson.jpg",
        embed: "img|watson.jpg",
        copy: "1st place winner of IBM's Best Use of Watson at AT&T Hackathon LA. An end-to-end web solution that analyzes personality/tone of famous speakers using IBM Watson's Text/Tone Analysis and Personality Insights.",
        platform: "desktop",
        url: "",
        tech: [0, 10, 17, 18, 19, 27, 32, 33, 34],
        active: false
    },
    {
        name: "DevLeague:Starfox Travel Agency",
        thumb: "starfox.png",
        poster: "starfox.jpg",
        demo: "img|starfox.jpg",
        embed: "img|starfox.jpg",
        copy: "",
        platform: "responsive",
        url: "",
        tech: [6, 17, 18, 31],
        active: false
    },
    {
        name: "IBM:Ripple",
        thumb: "starfox.png",
        poster: "starfox.jpg",
        demo: "vid|IBM Ripple Effect-high.mp4",
        embed: "vid|https://player.vimeo.com/video/511322612",
        copy: "",
        platform: "responsive",
        url: "https://www.ibm.com/events/activations-ripple-effect/",
        tech: [6, 17, 18, 31],
        active: true
    },
    {
        name: "IBM:Quantum",
        thumb: "starfox.png",
        poster: "starfox.jpg",
        demo: "vid|IBM Quantum-high.mp4",
        embed: "vid|https://player.vimeo.com/video/511260636",
        copy: "",
        platform: "responsive",
        url: "https://www.ibm.com/events/activations-quantum",
        tech: [6, 17, 18, 31],
        active: true
    },
    {
        name: "IBM: Think City",
        thumb: "starfox.png",
        poster: "starfox.jpg",
        demo: "vid|IBM Think City-high.mp4",
        embed: "vid|https://player.vimeo.com/video/511260584",
        copy: "",
        platform: "responsive",
        url: "https://www.ibm.com/events/activations-think-city/",
        tech: [6, 17, 18, 31],
        active: true
    },
    {
        name: "Adobe: Platinum Club",
        thumb: "starfox.png",
        poster: "starfox.jpg",
        demo: "vid|Adobe Platinum Club.mp4",
        embed: "vid|https://player.vimeo.com/video/511425393",
        copy: "",
        platform: "responsive",
        url: "",
        tech: [6, 17, 18, 31],
        active: true
    },
    {
        name: "Nissan: NEXT Lineup",
        thumb: "starfox.png",
        poster: "starfox.jpg",
        demo: "vid|Nissan NEXT Lineup-high.mp4",
        embed: "vid|https://player.vimeo.com/video/511425580",
        copy: "",
        platform: "responsive",
        url: "https://www.nissanusa.com/live/zreveal",
        tech: [6, 17, 18, 31],
        active: true
    },
    {
        name: "FM Global: Hacker Resilience",
        thumb: "starfox.png",
        poster: "starfox.jpg",
        demo: "vid|FM Global Hacker Resilience-high.mp4",
        embed: "vid|https://player.vimeo.com/video/511263904",
        copy: "",
        platform: "responsive",
        url: "",
        tech: [6, 17, 18, 31],
        active: true
    },
    {
        name: "Andersen:VR Showroom",
        thumb: "starfox.png",
        poster: "starfox.jpg",
        demo: "vid|Andersen VR-high.mp4",
        embed: "vid|https://player.vimeo.com/video/511363802",
        copy: "",
        platform: "responsive",
        url: "",
        tech: [6, 17, 18, 31],
        active: true
    }
];


/***/ }),

/***/ "iP39":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/about-page/about-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) { return new (t || AboutPageComponent)(); };
AboutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutPageComponent, selectors: [["app-about-page"]], decls: 52, vars: 0, consts: [[1, "list"], [1, "sub-list"]], template: function AboutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Software Development Lead ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "experiential media | digital marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "FRONTEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Typescript | Javascript | ECMAScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Angular | VueJS | Handlebars | Pug | EJS | Twig | Mustache | Meteor | KeystoneJS | Sculpin | Drupal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SASS | LESS | Bootstrap | Foundation | Semantic UI | Ionic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mobile-first Responsive Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "ElectronJS | Cordova");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "D3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "BACKEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "AWS | Github Pages | Heroku | Digital Ocean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Helm | Docker | Django | NodeJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Express | Nginx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "MongoDB | Directus | MySQL | PostgresQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Additional Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "CLI: Bash | DOS | iTerm | GitBash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "OS: Windows | Mac | Linux | Ubuntu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Version Control: GIT | Perforce | Bitbucket | Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "PHP | Python | Java | C# | C++ | Ruby on Rails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Laravel | NPM | Symphony | Homebrew | Bower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "IBM Watson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Unity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  text-transform: lowercase;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.list[_ngcontent-%COMP%] {\n  margin-top: 10rem;\n}\n\n.sub-list[_ngcontent-%COMP%] {\n  float: left;\n  width: 33.33%;\n}\n\n.sub-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.sub-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.sub-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-align: left;\n  text-transform: lowercase;\n  margin-top: 0.5rem;\n}\n\n@media (orientation: portrait) {\n  div[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .list[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n\n  .sub-list[_ngcontent-%COMP%] {\n    width: 95%;\n    margin-top: 1rem;\n  }\n  .sub-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .sub-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    margin-top: 0.25rem;\n    margin-left: 0.85rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWJvdXQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBSUo7O0FBSEk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFLUjs7QUFISTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUtSOztBQUhJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUtSOztBQUFBO0VBQ0k7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7RUFHTjs7RUFERTtJQUNJLGFBQUE7RUFJTjs7RUFGRTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtFQUtOO0VBSk07SUFFSSxlQUFBO0VBS1Y7RUFITTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQUtWO0FBQ0YiLCJmaWxlIjoiYWJvdXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG59XHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHJlbTtcclxufVxyXG4uc3ViLWxpc3Qge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgLmxpc3Q6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICBsaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAubGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICAgIC5zdWItbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC44NXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-page',
                templateUrl: './about-page.component.html',
                styleUrls: ['./about-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iY1a":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/work-page/work-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: WorkPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPageComponent", function() { return WorkPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_config_projects_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/projects.config */ "fbD5");
/* harmony import */ var _directives_breakpoint_classes_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../directives/breakpoint-classes.directive */ "SoyA");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../slider/slider.component */ "+zoA");





class WorkPageComponent {
    constructor() {
        this.pageConfig = {
            // pagination: { el: '.swiper-pagination', clickable: true },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // effect: 'fade',
            // fadeEffect: {
            //   crossFade: true
            // },
            loop: true,
            freeMode: true,
            slidesPerView: 2,
            spaceBetween: 40,
            centeredSlides: true,
            initialSlide: 0,
            allowTouchMove: true,
            on: {
                beforeInit: function () {
                },
                init: () => {
                },
                beforeDestroy: () => {
                },
            }
        };
    }
    ngOnInit() {
        this.getActiveProjects();
    }
    getActiveProjects() {
        let tempArr = [];
        src_app_config_projects_config__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"].filter((project, index) => {
            if (project.active) {
                tempArr.push(project);
            }
        });
        this.projects = tempArr.reverse();
    }
}
WorkPageComponent.ɵfac = function WorkPageComponent_Factory(t) { return new (t || WorkPageComponent)(); };
WorkPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkPageComponent, selectors: [["app-work-page"]], decls: 2, vars: 2, consts: [["appBreakpointClasses", "", 2, "height", "95vh", "width", "95vw", "margin", "0 auto"], [3, "contents", "config"]], template: function WorkPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contents", ctx.projects)("config", ctx.pageConfig);
    } }, directives: [_directives_breakpoint_classes_directive__WEBPACK_IMPORTED_MODULE_2__["BreakpointClassesDirective"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work-page',
                templateUrl: './work-page.component.html',
                styleUrls: ['./work-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iwwv":
/*!*************************************************!*\
  !*** ./src/app/services/device-info.service.ts ***!
  \*************************************************/
/*! exports provided: DeviceInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceInfoService", function() { return DeviceInfoService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class DeviceInfoService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this._orientation$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this._deviceInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({
            name: '',
            version: null,
            os: '',
        });
        this._squished$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.detectBrowserVersion();
        this._device$ = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create((observer) => {
            this.breakpointObserver
                .observe([
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetLandscape,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebLandscape,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebPortrait,
                '(min-aspect-ratio: 29/7)',
                '(max-aspect-ratio: 1/1)',
            ])
                .subscribe((state) => {
                if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall] ||
                    state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small] ||
                    state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetLandscape] ||
                    state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait] ||
                    state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebLandscape] ||
                    state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebPortrait]) {
                    observer.next(this.checkDevice());
                }
                if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium]) {
                    observer.next('medium-desktop');
                }
                if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large]) {
                    observer.next('large-desktop');
                }
                if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge]) {
                    observer.next('xlarge-desktop');
                }
                if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetLandscape]) {
                    this._orientation$.next('landscape');
                }
                if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait]) {
                    this._orientation$.next('portrait');
                }
                if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebLandscape]) {
                    this._orientation$.next('landscape');
                }
                if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebPortrait]) {
                    this._orientation$.next('portrait');
                }
                if (state.breakpoints['(min-aspect-ratio: 29/7)'] ||
                    state.breakpoints['(max-aspect-ratio: 1/1)']) {
                    this._squished$.next(true);
                }
                else {
                    this._squished$.next(false);
                }
            });
        });
    }
    isIPadPro() {
        const ratio = window.devicePixelRatio || 1;
        const screen = {
            width: window.screen.width * ratio,
            height: window.screen.height * ratio,
        };
        return (navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 2 &&
            ((screen.width === 2048 && screen.height === 2732) ||
                (screen.width === 2732 && screen.height === 2048) ||
                (screen.width === 1536 && screen.height === 2048) ||
                (screen.width === 2048 && screen.height === 1536)));
    }
    checkDevice() {
        if (navigator.userAgent.match(/Tablet|iPad/i) || this.isIPadPro()) {
            return 'tablet';
        }
        else if (navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i)) {
            if (navigator.userAgent.match('Safari') && navigator.userAgent.match('iPhone')) {
                return 'mobile-ios';
            }
            else {
                return 'mobile';
            }
        }
        else {
            return 'small-desktop';
        }
    }
    detectBrowserVersion() {
        let os = this.getOS();
        var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            this._deviceInfo$.next({
                name: 'IE',
                version: tem[1],
                os: os,
            });
            return;
        }
        if (M[1] === 'Chrome' && ua.match(/\b(OPR|Edge)\/(\d+)/)) {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null)
                var temp = tem.slice(1).join(' ').replace('OPR', 'Opera').split(' ');
            this._deviceInfo$.next({
                name: temp[0],
                version: temp[1],
                os: os,
            });
            return;
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null)
            M.splice(1, 1, tem[1]);
        this._deviceInfo$.next({
            name: M[0].toLowerCase(),
            version: parseFloat(M[1]),
            os: os,
        });
    }
    getOS() {
        var userAgent = window.navigator.userAgent, platform = window.navigator.platform, macosPlatforms = ['Darwin', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'], windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'], iosPlatforms = ['iPhone', 'iPad', 'iPod'], os = null;
        if (macosPlatforms.indexOf(platform) !== -1) {
            if (window.devicePixelRatio == 2 && navigator.maxTouchPoints > 0) {
                os = 'iPad';
            }
            else {
                os = 'Mac';
            }
        }
        else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        }
        else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
        }
        else if (/Android/.test(userAgent)) {
            os = 'Android';
        }
        else if (!os && /Linux/.test(platform)) {
            os = 'Linux';
        }
        return os.toLowerCase();
    }
    get device() {
        return this._device$;
    }
    get deviceInfo() {
        return this._deviceInfo$.asObservable();
    }
    get orientation() {
        return this._orientation$.asObservable();
    }
    get squished() {
        return this._squished$;
    }
    isMobile(device) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(device === 'mobile' || device === 'mobile-ios' || device === 'tablet');
    }
    detectIE() {
        var ua = window.navigator.userAgent;
        // Test values; Uncomment to check result …
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge 12 (Spartan)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // Edge 13
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            // return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            return false;
        }
        // other browser
        return false;
    }
    detectEdge() {
        var ua = window.navigator.userAgent;
        // Test values; Uncomment to check result …
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge 12 (Spartan)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // Edge 13
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            // return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            return true;
        }
        // other browser
        return false;
    }
}
DeviceInfoService.ɵfac = function DeviceInfoService_Factory(t) { return new (t || DeviceInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
DeviceInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DeviceInfoService, factory: DeviceInfoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DeviceInfoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "lXt9":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "EgnG");
/* harmony import */ var src_app_config_projects_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/projects.config */ "fbD5");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_active_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/active-project.service */ "95Ls");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../safe.pipe */ "Z2+D");









const _c0 = ["exitCard"];
const _c1 = ["centerText"];
const _c2 = ["centerVideo"];
function CardComponent_div_0_video_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CardComponent_div_0_video_8_Template_video_mouseenter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.playDemo($event, i_r4); })("mouseleave", function CardComponent_div_0_video_8_Template_video_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.stopDemo($event, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "assets/videos/" + card_r3.demo.split("|")[1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("value", card_r3.name.replace(":", " | "));
} }
function CardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_0_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r4 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.jumpToCard($event, i_r4); })("mouseenter", function CardComponent_div_0_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.cardAnimation.pause(); })("mouseleave", function CardComponent_div_0_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.cardAnimation.play(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "tap to learn more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "click to learn more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CardComponent_div_0_video_8_Template, 2, 4, "video", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.cardType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", card_r3.name.replace(":", " "), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", card_r3.demo.split("|")[0] == "vid");
} }
class CardComponent {
    constructor(sanitizer, route, activeProjectService) {
        this.sanitizer = sanitizer;
        this.route = route;
        this.activeProjectService = activeProjectService;
        this.cards = [];
        this.cardActive = false;
        this.firstLanding = true;
        // this.activeProjectService.currentPage().subscribe((currentPage:string) => {  
        //   if (currentPage == 'home' && !this.firstLanding) {
        //     this.restartAnimation();
        //   }
        //   if (this.firstLanding) {
        //     this.firstLanding = false;
        //   }
        // })
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.jumpingSquares = document.querySelectorAll(".card.default");
        this.demoVideos = document.querySelectorAll(".demo-video");
        this.cardLayout(this.cardType);
        this.demoVideos.forEach(demoVideo => {
            demoVideo.muted = true;
        });
    }
    cardLayout(cardType) {
        switch (cardType) {
            case 'default':
                this.makeCircle(this.cards);
                break;
            case 'stick':
                this.makeSticks(this.cards);
                break;
            case 'fan':
                this.makeFan(this.cards);
                break;
        }
    }
    jumpToCard(event, index) {
        this.cardAnimation.pause();
        this.scaleUpCard(event, index);
        // this.activeProjectService.setProject(index);
        console.log(src_app_config_projects_config__WEBPACK_IMPORTED_MODULE_2__["PROJECTS"][index], index);
        this.activeProjectService.setFirstClick(true);
        if (this.cardActive) {
            // this.route.navigate(['/work'],{queryParams: {slide: index}})
            this.activeProjectService.setProject(index);
            this.activeProjectService.setPage('work');
        }
    }
    scaleUpCard(event, index) {
        this.exitCard.nativeElement.classList.add('show');
        this.jumpingSquares.forEach((jumpingSquare, i) => {
            if (i != index) {
                jumpingSquare.classList.add('disable');
            }
        });
        this.jumpingSquares[index].classList.add('scaleUp');
        this.cardActiveTimeout = setTimeout(() => {
            this.cardActive = true;
        }, 1500);
    }
    restartAnimation() {
        clearTimeout(this.cardActiveTimeout);
        this.exitCard.nativeElement.classList.remove('show');
        this.cardAnimation.play();
        this.jumpingSquares.forEach((jumpingSquare) => {
            jumpingSquare.classList.remove('disable', 'scaleUp');
        });
        this.cardActive = false;
        this.activeProjectService.setPage('home');
    }
    playDemo(event, index) {
        // if (!this.cardActive) {
        //   event.target.load();
        //   event.target.play();
        // }
        // this.centerVideo.nativeElement.src = event.target.src;
        // this.centerVideo.nativeElement.load()
        // this.centerVideo.nativeElement.play()
        this.currentTitle = event.target.value;
        this.centerText.nativeElement.classList.add('show');
    }
    stopDemo(event, index) {
        // if (!this.cardActive) {
        //   event.target.pause();
        // }
        this.centerText.nativeElement.classList.remove('show');
        // this.centerVideo.nativeElement.pause()
    }
    makeCircle(cards) {
        let interval = 360 / (this.cards.length);
        let delay = 5000 / (this.cards.length * 2);
        this.cardAnimation = animejs__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
            duration: delay,
            complete: function () {
                this.restart();
            }
        });
        var translateY = -5;
        var translateX = 0.25;
        let i = 0;
        this.jumpingSquares.forEach(jumpingSquare => {
            var rotate = interval * i;
            jumpingSquare.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + 'vw) translateX(' + translateX + 'vw)';
            // this.arrOfPositions.push(rotate);
            let titles = document.querySelectorAll(".text");
            titles[i].style.transform = 'rotate(' + (-rotate) + 'deg)';
            this.cardAnimation.add({
                begin: function () {
                    Object(animejs__WEBPACK_IMPORTED_MODULE_1__["default"])({
                        targets: jumpingSquare,
                        translateY: [translateY + 'vw', translateY - 1 + 'vw'],
                        scale: [1, 1.25],
                        easing: 'easeInOutSine',
                        direction: 'alternate',
                        duration: this.duration * Math.PI
                    });
                }
            });
            i++;
        });
    }
    makeSticks(cards) {
        console.log('sticks', cards);
    }
    makeFan(cards) {
        console.log('fan', cards);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_active_project_service__WEBPACK_IMPORTED_MODULE_5__["ActiveProjectService"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], viewQuery: function CardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.exitCard = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.centerText = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.centerVideo = _t.first);
    } }, inputs: { cards: "cards", cardType: "cardType" }, decls: 6, vars: 2, consts: [["class", "card", 3, "class", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "exit-card", 3, "click"], ["exitCard", ""], [1, "center-text", 3, "innerHTML"], ["centerText", ""], [1, "card", 3, "click", "mouseenter", "mouseleave"], [1, "text"], [3, "innerHTML"], [1, "portrait"], [1, "landscape"], [1, "video-container"], ["class", "demo-video", "muted", "true", "loop", "", "autoplay", "", 3, "src", "value", "mouseenter", "mouseleave", 4, "ngIf"], ["muted", "true", "loop", "", "autoplay", "", 1, "demo-video", 3, "src", "value", "mouseenter", "mouseleave"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardComponent_div_0_Template, 9, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_div_click_1_listener() { return ctx.restartAnimation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3, 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.currentTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_safe_pipe__WEBPACK_IMPORTED_MODULE_7__["SafePipe"]], styles: ["@keyframes spinClock {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinCounter {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n@keyframes fadeOutAnimation {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadeInAnimation {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeInSlideUpAnimation {\n  0% {\n    opacity: 0;\n  }\n  95% {\n    margin-bottom: 0;\n  }\n  100% {\n    margin-bottom: 0;\n    opacity: 1;\n  }\n}\n@keyframes grow {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: 100%;\n  }\n}\n@keyframes stretch {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 99.5%;\n  }\n}\n@keyframes stretchThenSlide {\n  0% {\n    width: 0;\n  }\n  50% {\n    width: 100%;\n  }\n  75% {\n    width: 100%;\n  }\n  100% {\n    left: 100%;\n    width: 0;\n  }\n}\n@keyframes slideUpHeaders {\n  0% {\n    bottom: -100%;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n@keyframes slideUpIntro {\n  0% {\n    bottom: -4em;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n@keyframes blindsIntro {\n  0% {\n    transform: rotateX(90deg);\n    color: white;\n  }\n  20% {\n    color: white;\n    transform: rotateX(0);\n  }\n  70% {\n    color: white;\n    transform: rotateX(0);\n  }\n  100% {\n    transform: rotateX(0);\n    color: grey;\n  }\n}\n@keyframes stayUpIntro {\n  0% {\n    bottom: -4em;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n@keyframes fireflyBox {\n  0% {\n    box-shadow: 0px 0px 0 white;\n  }\n  100% {\n    color: #fff;\n    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;\n  }\n}\n@keyframes fireflyText {\n  0% {\n    text-shadow: 0px 0px 0 white;\n  }\n  100% {\n    color: #fff;\n    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.card.disable[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.card.default[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transform-origin: 50% 160%;\n  height: 20%;\n  width: 3.25%;\n  background-color: transparent;\n  transition: background-color 0.15s ease-in-out, top 0.15s ease-in-out;\n  top: 15%;\n  left: 50%;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(1) {\n  border: #ff4d00 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(2) {\n  border: #ff9900 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(3) {\n  border: #ffe600 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(4) {\n  border: #ccff00 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(5) {\n  border: #80ff00 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(6) {\n  border: #33ff00 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(7) {\n  border: #00ff1a 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(8) {\n  border: #00ff66 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(9) {\n  border: #00ffb3 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(10) {\n  border: aqua 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(11) {\n  border: #00b3ff 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(12) {\n  border: #0066ff 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(13) {\n  border: #001aff 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(14) {\n  border: #3300ff 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(15) {\n  border: #8000ff 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(16) {\n  border: #cc00ff 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(17) {\n  border: #ff00e6 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(18) {\n  border: #ff0099 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(19) {\n  border: #ff004d 1px solid;\n}\n.card.default[_ngcontent-%COMP%]:nth-of-type(20) {\n  border: red 1px solid;\n}\n.card.default[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  display: none;\n}\n.card.default[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  z-index: 2;\n  background-color: black;\n  opacity: 0;\n  transition: opacity 0.25s ease-in-out;\n}\n.card.default[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition: transform 0.25s ease-in-out;\n}\n.card.default[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  opacity: 0;\n  transition: opacity 0.25s ease-in-out;\n  display: flex;\n  justify-content: center;\n}\n.card.default[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: auto;\n  height: 100%;\n}\n.card.default[_ngcontent-%COMP%]:hover {\n  background-color: grey;\n  z-index: 1;\n}\n.card.default[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: scale(2);\n}\n.card.default[_ngcontent-%COMP%]:hover   .video-container[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.card.default.scaleUp[_ngcontent-%COMP%] {\n  transition: all 0.5s ease-in-out 0.05s;\n  transform: translate(-50%, -50%) scale(2) !important;\n  transform-origin: 0 100%;\n  width: 50%;\n  height: 50%;\n  z-index: 1;\n  top: 75%;\n  left: 25%;\n  background-color: black;\n  border: none;\n}\n.card.default.scaleUp[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1) !important;\n  font-size: 1rem;\n}\n.card.default.scaleUp[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n  transform: scale(1);\n  text-align: center;\n}\n.card.default.scaleUp[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  display: unset;\n}\n.card.default.scaleUp[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%] {\n  opacity: 1;\n  overflow: unset;\n}\n.card.default.scaleUp[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  box-shadow: 0px 0px 0 white;\n  animation: fireflyBox infinite 1.5s alternate;\n}\n.card.stick[_ngcontent-%COMP%] {\n  height: 20%;\n  width: 20%;\n  background-color: green;\n}\n.card.fan[_ngcontent-%COMP%] {\n  height: 40%;\n  width: 20%;\n  background-color: blue;\n}\n.card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 100%;\n  width: 100%;\n  color: white;\n}\n.card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  top: 1rem;\n  font-size: 75%;\n  text-align: center;\n  text-shadow: 0px 0px 0 white;\n  animation: fireflyText infinite 1.5s alternate;\n}\n.card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p.portrait[_ngcontent-%COMP%] {\n  display: none;\n}\n.exit-card[_ngcontent-%COMP%] {\n  height: 3vw;\n  width: 3vw;\n  top: 4.25rem;\n  left: 6rem;\n  border-radius: 100%;\n  background-color: transparent;\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  position: fixed;\n  z-index: -1;\n  opacity: 0;\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n  color: white;\n  font-size: 4rem;\n  transform: scale(1);\n}\n.exit-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n}\n.exit-card.show[_ngcontent-%COMP%] {\n  transition-delay: 0;\n  opacity: 1;\n  z-index: 1;\n}\n.center-text[_ngcontent-%COMP%], .center-video[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 42%;\n  top: 27%;\n  border-radius: 100%;\n  overflow: hidden;\n  height: 42%;\n  width: 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  transition: opacity 0.25s ease-in-out;\n  color: white;\n  text-align: center;\n  font-size: 150%;\n}\n.center-text.show[_ngcontent-%COMP%], .center-video.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.center-video[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media (orientation: portrait) {\n  .exit-card[_ngcontent-%COMP%] {\n    left: 1rem;\n  }\n\n  .card.default.scaleUp[_ngcontent-%COMP%] {\n    height: 42%;\n  }\n  .card.default.scaleUp[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    animation: none;\n    width: 100%;\n  }\n  .card.default.scaleUp[_ngcontent-%COMP%]   p.portrait[_ngcontent-%COMP%] {\n    display: unset;\n  }\n  .card.default.scaleUp[_ngcontent-%COMP%]   p.landscape[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcYW5pbWF0aW9ucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNFLHVCQUFBO0VDQ0o7RURDRTtJQUNFLHlCQUFBO0VDQ0o7QUFDRjtBRENBO0VBQ0k7SUFDSSx1QkFBQTtFQ0NOO0VEQ0U7SUFDSSwwQkFBQTtFQ0NOO0FBQ0Y7QURDQTtFQUNJO0lBQ0ksVUFBQTtFQ0NOO0VEQ0U7SUFDSSxVQUFBO0VDQ047QUFDRjtBREVBO0VBQ0k7SUFDSSxVQUFBO0VDQU47RURFRTtJQUNJLFVBQUE7RUNBTjtBQUNGO0FER0E7RUFDSTtJQUNJLFVBQUE7RUNETjtFREdFO0lBQ0ksZ0JBQUE7RUNETjtFREdFO0lBQ0ksZ0JBQUE7SUFDQSxVQUFBO0VDRE47QUFDRjtBREdBO0VBQ0k7SUFDSSxTQUFBO0VDRE47RURHRTtJQUNJLFlBQUE7RUNETjtBQUNGO0FER0E7RUFDSTtJQUNFLFFBQUE7RUNESjtFREdFO0lBQ0UsWUFBQTtFQ0RKO0FBQ0Y7QURHQTtFQUNJO0lBQ0ksUUFBQTtFQ0ROO0VER0U7SUFDSSxXQUFBO0VDRE47RURHRTtJQUNJLFdBQUE7RUNETjtFREdFO0lBQ0ksVUFBQTtJQUNBLFFBQUE7RUNETjtBQUNGO0FER0E7RUFDSTtJQUNJLGFBQUE7RUNETjtFREdFO0lBQ0ksU0FBQTtFQ0ROO0FBQ0Y7QURHQTtFQUNJO0lBQ0ksWUFBQTtFQ0ROO0VER0U7SUFDSSxTQUFBO0VDRE47QUFDRjtBREdBO0VBQ0k7SUFDSSx5QkFBQTtJQUNBLFlBQUE7RUNETjtFREdFO0lBQ0ksWUFBQTtJQUNBLHFCQUFBO0VDRE47RURJRTtJQUNJLFlBQUE7SUFDQSxxQkFBQTtFQ0ZOO0VES0U7SUFFSSxxQkFBQTtJQUNBLFdBQUE7RUNKTjtBQUNGO0FET0E7RUFDSTtJQUNJLFlBQUE7RUNMTjtFRFFFO0lBQ0ksU0FBQTtFQ05OO0FBQ0Y7QURRQTtFQUNJO0lBQ0ksMkJBQUE7RUNOTjtFRFNFO0lBR0ksV0FBQTtJQUNBLG1JQUNFO0VDVlI7QUFDRjtBRG1CQTtFQUNJO0lBQ0ksNEJBQUE7RUNqQk47RURvQkU7SUFHSSxXQUFBO0lBQ0Esb0lBQ0U7RUNyQlI7QUFDRjtBQWpJQTtFQUNJLGtCQUFBO0FBbUlKO0FBbElJO0VBQ0ksb0JBQUE7QUFvSVI7QUFsSUk7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EscUVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQW9JUjtBQWxJWTtFQUNFLHlCQUFBO0FBb0lkO0FBcklZO0VBQ0UseUJBQUE7QUF1SWQ7QUF4SVk7RUFDRSx5QkFBQTtBQTBJZDtBQTNJWTtFQUNFLHlCQUFBO0FBNklkO0FBOUlZO0VBQ0UseUJBQUE7QUFnSmQ7QUFqSlk7RUFDRSx5QkFBQTtBQW1KZDtBQXBKWTtFQUNFLHlCQUFBO0FBc0pkO0FBdkpZO0VBQ0UseUJBQUE7QUF5SmQ7QUExSlk7RUFDRSx5QkFBQTtBQTRKZDtBQTdKWTtFQUNFLHNCQUFBO0FBK0pkO0FBaEtZO0VBQ0UseUJBQUE7QUFrS2Q7QUFuS1k7RUFDRSx5QkFBQTtBQXFLZDtBQXRLWTtFQUNFLHlCQUFBO0FBd0tkO0FBektZO0VBQ0UseUJBQUE7QUEyS2Q7QUE1S1k7RUFDRSx5QkFBQTtBQThLZDtBQS9LWTtFQUNFLHlCQUFBO0FBaUxkO0FBbExZO0VBQ0UseUJBQUE7QUFvTGQ7QUFyTFk7RUFDRSx5QkFBQTtBQXVMZDtBQXhMWTtFQUNFLHlCQUFBO0FBMExkO0FBM0xZO0VBQ0UscUJBQUE7QUE2TGQ7QUExTFE7RUFDSSxhQUFBO0FBNExaO0FBMUxRO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0FBNExaO0FBM0xZO0VBQ0ksbUJBQUE7RUFDQSx1Q0FBQTtBQTZMaEI7QUExTFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBNExaO0FBM0xZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUE2TGhCO0FBMUxRO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0FBNExaO0FBMUxnQjtFQUNJLG1CQUFBO0FBNExwQjtBQXpMWTtFQUNJLFVBQUE7QUEyTGhCO0FBeExRO0VBQ0ksc0NBQUE7RUFDQSxvREFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUEwTFo7QUF6TFk7RUFDSSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBMkxoQjtBQTFMZ0I7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTRMcEI7QUF6TFk7RUFDSSxjQUFBO0FBMkxoQjtBQXpMWTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBMkxoQjtBQTFMZ0I7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkNBQUE7QUEyTHBCO0FBdExJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQXdMUjtBQXRMSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUF3TFI7QUFyTFE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXVMWjtBQXJMUTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhDQUFBO0FBdUxaO0FBdExZO0VBQ0ksYUFBQTtBQXdMaEI7QUFuTEE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBc0xKO0FBckxJO0VBQ0ksc0JBQUE7QUF1TFI7QUFyTEk7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBdUxSO0FBcExBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXNMSjtBQXJMSTtFQUNJLFVBQUE7QUF1TFI7QUFwTEE7RUFDSSxVQUFBO0FBdUxKO0FBckxBO0VBQ0k7SUFDSSxVQUFBO0VBd0xOOztFQXRMRTtJQUNJLFdBQUE7RUF5TE47RUF2TFU7SUFDSSxlQUFBO0lBQ0EsV0FBQTtFQXlMZDtFQXBMVTtJQUNJLGNBQUE7RUFzTGQ7RUFwTFU7SUFDSSxhQUFBO0VBc0xkO0FBQ0YiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc3BpbkNsb2NrIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW5Db3VudGVyIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlT3V0QW5pbWF0aW9uIHsgXHJcbiAgICAwJSB7IFxyXG4gICAgICAgIG9wYWNpdHk6IDE7IFxyXG4gICAgfSBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC8vIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgIH0gXHJcbn1cclxuQGtleWZyYW1lcyBmYWRlSW5BbmltYXRpb24geyBcclxuICAgIDAlIHsgXHJcbiAgICAgICAgb3BhY2l0eTogMDsgXHJcbiAgICB9IFxyXG4gICAgMTAwJSB7IFxyXG4gICAgICAgIG9wYWNpdHk6IDE7IFxyXG4gICAgICAgIC8vIHBvaW50ZXItZXZlbnRzOiB1bnNldDtcclxuICAgICB9IFxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZUluU2xpZGVVcEFuaW1hdGlvbiB7IFxyXG4gICAgMCUgeyBcclxuICAgICAgICBvcGFjaXR5OiAwOyBcclxuICAgIH0gXHJcbiAgICA5NSUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBvcGFjaXR5OiAxOyBcclxuICAgICB9IFxyXG59XHJcbkBrZXlmcmFtZXMgZ3JvdyB7IFxyXG4gICAgMCUgeyBcclxuICAgICAgICBoZWlnaHQ6IDA7IFxyXG4gICAgfSBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgfSBcclxufVxyXG5Aa2V5ZnJhbWVzIHN0cmV0Y2gge1xyXG4gICAgMCUge1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB3aWR0aDogOTkuNSU7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBzdHJldGNoVGhlblNsaWRlIHtcclxuICAgIDAlIHtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICA3NSUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNsaWRlVXBIZWFkZXJzIHtcclxuICAgIDAlIHsgXHJcbiAgICAgICAgYm90dG9tOiAtMTAwJTsgXHJcbiAgICB9IFxyXG4gICAgMTAwJSB7IFxyXG4gICAgICAgIGJvdHRvbTogMDsgXHJcbiAgICAgfSBcclxufVxyXG5Aa2V5ZnJhbWVzIHNsaWRlVXBJbnRybyB7XHJcbiAgICAwJSB7IFxyXG4gICAgICAgIGJvdHRvbTogLTRlbTsgXHJcbiAgICB9IFxyXG4gICAgMTAwJSB7IFxyXG4gICAgICAgIGJvdHRvbTogMDsgXHJcbiAgICB9IFxyXG59XHJcbkBrZXlmcmFtZXMgYmxpbmRzSW50cm8ge1xyXG4gICAgMCUgeyBcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpOyBcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9IFxyXG4gICAgMjAlIHsgXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTsgXHJcbiAgICAgICAgLy8gYm90dG9tOiAwOyBcclxuICAgIH0gXHJcbiAgICA3MCUgeyBcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDApOyBcclxuICAgICAgICAvLyBib3R0b206IDA7IFxyXG4gICAgfSBcclxuICAgIDEwMCUge1xyXG4gICAgICAgIC8vIGJvdHRvbTogNGVtOyBcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7IFxyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG5cclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHN0YXlVcEludHJvIHtcclxuICAgIDAlIHsgXHJcbiAgICAgICAgYm90dG9tOiAtNGVtOyBcclxuICAgIH0gXHJcblxyXG4gICAgMTAwJSB7IFxyXG4gICAgICAgIGJvdHRvbTogMDsgXHJcbiAgICB9IFxyXG59XHJcbkBrZXlmcmFtZXMgZmlyZWZseUJveCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwIHdoaXRlO1xyXG4gICAgICAgIC8vIGNvbG9yOiBncmV5O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxLjVlbSB3aGl0ZTtcclxuICAgICAgICAvLyBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzpcclxuICAgICAgICAgIDAgMCA1cHggI2ZmZixcclxuICAgICAgICAgIDAgMCAxMHB4ICNmZmYsXHJcbiAgICAgICAgICAwIDAgMjBweCAjZmZmLFxyXG4gICAgICAgICAgMCAwIDQwcHggIzBmZixcclxuICAgICAgICAgIDAgMCA4MHB4ICMwZmYsXHJcbiAgICAgICAgICAwIDAgOTBweCAjMGZmLFxyXG4gICAgICAgICAgMCAwIDEwMHB4ICMwZmYsXHJcbiAgICAgICAgICAwIDAgMTUwcHggIzBmZjtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZpcmVmbHlUZXh0IHtcclxuICAgIDAlIHtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwIHdoaXRlO1xyXG4gICAgICAgIC8vIGNvbG9yOiBncmV5O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLy8gdGV4dC1zaGFkb3c6IDBweCAwcHggMS41ZW0gd2hpdGU7XHJcbiAgICAgICAgLy8gY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtc2hhZG93OlxyXG4gICAgICAgICAgMCAwIDVweCAjZmZmLFxyXG4gICAgICAgICAgMCAwIDEwcHggI2ZmZixcclxuICAgICAgICAgIDAgMCAyMHB4ICNmZmYsXHJcbiAgICAgICAgICAwIDAgNDBweCAjMGZmLFxyXG4gICAgICAgICAgMCAwIDgwcHggIzBmZixcclxuICAgICAgICAgIDAgMCA5MHB4ICMwZmYsXHJcbiAgICAgICAgICAwIDAgMTAwcHggIzBmZixcclxuICAgICAgICAgIDAgMCAxNTBweCAjMGZmO1xyXG4gICAgfVxyXG59IiwiQGtleWZyYW1lcyBzcGluQ2xvY2sge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluQ291bnRlciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlT3V0QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5BbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJblNsaWRlVXBBbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA5NSUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGdyb3cge1xuICAwJSB7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBzdHJldGNoIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiA5OS41JTtcbiAgfVxufVxuQGtleWZyYW1lcyBzdHJldGNoVGhlblNsaWRlIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgNzUlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlVXBIZWFkZXJzIHtcbiAgMCUge1xuICAgIGJvdHRvbTogLTEwMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm90dG9tOiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlVXBJbnRybyB7XG4gIDAlIHtcbiAgICBib3R0b206IC00ZW07XG4gIH1cbiAgMTAwJSB7XG4gICAgYm90dG9tOiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJsaW5kc0ludHJvIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIDIwJSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcbiAgfVxuICA3MCUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xuICAgIGNvbG9yOiBncmV5O1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN0YXlVcEludHJvIHtcbiAgMCUge1xuICAgIGJvdHRvbTogLTRlbTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmlyZWZseUJveCB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDAgd2hpdGU7XG4gIH1cbiAgMTAwJSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjZmZmLCAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgNDBweCAjMGZmLCAwIDAgODBweCAjMGZmLCAwIDAgOTBweCAjMGZmLCAwIDAgMTAwcHggIzBmZiwgMCAwIDE1MHB4ICMwZmY7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmlyZWZseVRleHQge1xuICAwJSB7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMCB3aGl0ZTtcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjZmZmLCAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgNDBweCAjMGZmLCAwIDAgODBweCAjMGZmLCAwIDAgOTBweCAjMGZmLCAwIDAgMTAwcHggIzBmZiwgMCAwIDE1MHB4ICMwZmY7XG4gIH1cbn1cbi5jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNhcmQuZGlzYWJsZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmNhcmQuZGVmYXVsdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDE2MCU7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMy4yNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCB0b3AgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHRvcDogMTUlO1xuICBsZWZ0OiA1MCU7XG59XG4uY2FyZC5kZWZhdWx0Om50aC1vZi10eXBlKDEpIHtcbiAgYm9yZGVyOiAjZmY0ZDAwIDFweCBzb2xpZDtcbn1cbi5jYXJkLmRlZmF1bHQ6bnRoLW9mLXR5cGUoMikge1xuICBib3JkZXI6ICNmZjk5MDAgMXB4IHNvbGlkO1xufVxuLmNhcmQuZGVmYXVsdDpudGgtb2YtdHlwZSgzKSB7XG4gIGJvcmRlcjogI2ZmZTYwMCAxcHggc29saWQ7XG59XG4uY2FyZC5kZWZhdWx0Om50aC1vZi10eXBlKDQpIHtcbiAgYm9yZGVyOiAjY2NmZjAwIDFweCBzb2xpZDtcbn1cbi5jYXJkLmRlZmF1bHQ6bnRoLW9mLXR5cGUoNSkge1xuICBib3JkZXI6ICM4MGZmMDAgMXB4IHNvbGlkO1xufVxuLmNhcmQuZGVmYXVsdDpudGgtb2YtdHlwZSg2KSB7XG4gIGJvcmRlcjogIzMzZmYwMCAxcHggc29saWQ7XG59XG4uY2FyZC5kZWZhdWx0Om50aC1vZi10eXBlKDcpIHtcbiAgYm9yZGVyOiAjMDBmZjFhIDFweCBzb2xpZDtcbn1cbi5jYXJkLmRlZmF1bHQ6bnRoLW9mLXR5cGUoOCkge1xuICBib3JkZXI6ICMwMGZmNjYgMXB4IHNvbGlkO1xufVxuLmNhcmQuZGVmYXVsdDpudGgtb2YtdHlwZSg5KSB7XG4gIGJvcmRlcjogIzAwZmZiMyAxcHggc29saWQ7XG59XG4uY2FyZC5kZWZhdWx0Om50aC1vZi10eXBlKDEwKSB7XG4gIGJvcmRlcjogYXF1YSAxcHggc29saWQ7XG59XG4uY2FyZC5kZWZhdWx0Om50aC1vZi10eXBlKDExKSB7XG4gIGJvcmRlcjogIzAwYjNmZiAxcHggc29saWQ7XG59XG4uY2FyZC5kZWZhdWx0Om50aC1vZi10eXBlKDEyKSB7XG4gIGJvcmRlcjogIzAwNjZmZiAxcHggc29saWQ7XG59XG4uY2FyZC5kZWZhdWx0Om50aC1vZi10eXBlKDEzKSB7XG4gIGJvcmRlcjogIzAwMWFmZiAxcHggc29saWQ7XG59XG4uY2FyZC5kZWZhdWx0Om50aC1vZi10eXBlKDE0KSB7XG4gIGJvcmRlcjogIzMzMDBmZiAxcHggc29saWQ7XG59XG4uY2FyZC5kZWZhdWx0Om50aC1vZi10eXBlKDE1KSB7XG4gIGJvcmRlcjogIzgwMDBmZiAxcHggc29saWQ7XG59XG4uY2FyZC5kZWZhdWx0Om50aC1vZi10eXBlKDE2KSB7XG4gIGJvcmRlcjogI2NjMDBmZiAxcHggc29saWQ7XG59XG4uY2FyZC5kZWZhdWx0Om50aC1vZi10eXBlKDE3KSB7XG4gIGJvcmRlcjogI2ZmMDBlNiAxcHggc29saWQ7XG59XG4uY2FyZC5kZWZhdWx0Om50aC1vZi10eXBlKDE4KSB7XG4gIGJvcmRlcjogI2ZmMDA5OSAxcHggc29saWQ7XG59XG4uY2FyZC5kZWZhdWx0Om50aC1vZi10eXBlKDE5KSB7XG4gIGJvcmRlcjogI2ZmMDA0ZCAxcHggc29saWQ7XG59XG4uY2FyZC5kZWZhdWx0Om50aC1vZi10eXBlKDIwKSB7XG4gIGJvcmRlcjogcmVkIDFweCBzb2xpZDtcbn1cbi5jYXJkLmRlZmF1bHQgaWZyYW1lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jYXJkLmRlZmF1bHQgLnRleHQge1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dDtcbn1cbi5jYXJkLmRlZmF1bHQgLnRleHQgc3BhbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcbn1cbi5jYXJkLmRlZmF1bHQgLnZpZGVvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNhcmQuZGVmYXVsdCAudmlkZW8tY29udGFpbmVyIHZpZGVvIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jYXJkLmRlZmF1bHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICB6LWluZGV4OiAxO1xufVxuLmNhcmQuZGVmYXVsdDpob3ZlciAudGV4dCBzcGFuIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbn1cbi5jYXJkLmRlZmF1bHQ6aG92ZXIgLnZpZGVvLWNvbnRhaW5lciB7XG4gIG9wYWNpdHk6IDE7XG59XG4uY2FyZC5kZWZhdWx0LnNjYWxlVXAge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dCAwLjA1cztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMikgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiA3NSU7XG4gIGxlZnQ6IDI1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5jYXJkLmRlZmF1bHQuc2NhbGVVcCAudGV4dCB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmNhcmQuZGVmYXVsdC5zY2FsZVVwIC50ZXh0IHNwYW4ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkLmRlZmF1bHQuc2NhbGVVcCBpZnJhbWUge1xuICBkaXNwbGF5OiB1bnNldDtcbn1cbi5jYXJkLmRlZmF1bHQuc2NhbGVVcCAudmlkZW8tY29udGFpbmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgb3ZlcmZsb3c6IHVuc2V0O1xufVxuLmNhcmQuZGVmYXVsdC5zY2FsZVVwIC52aWRlby1jb250YWluZXIgdmlkZW8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDAgd2hpdGU7XG4gIGFuaW1hdGlvbjogZmlyZWZseUJveCBpbmZpbml0ZSAxLjVzIGFsdGVybmF0ZTtcbn1cbi5jYXJkLnN0aWNrIHtcbiAgaGVpZ2h0OiAyMCU7XG4gIHdpZHRoOiAyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLmNhcmQuZmFuIHtcbiAgaGVpZ2h0OiA0MCU7XG4gIHdpZHRoOiAyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4uY2FyZCAudGV4dCBzcGFuLCAuY2FyZCAudGV4dCBwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZCAudGV4dCBwIHtcbiAgdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDc1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwIHdoaXRlO1xuICBhbmltYXRpb246IGZpcmVmbHlUZXh0IGluZmluaXRlIDEuNXMgYWx0ZXJuYXRlO1xufVxuLmNhcmQgLnRleHQgcC5wb3J0cmFpdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5leGl0LWNhcmQge1xuICBoZWlnaHQ6IDN2dztcbiAgd2lkdGg6IDN2dztcbiAgdG9wOiA0LjI1cmVtO1xuICBsZWZ0OiA2cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5leGl0LWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xufVxuLmV4aXQtY2FyZC5zaG93IHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMDtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbn1cblxuLmNlbnRlci10ZXh0LCAuY2VudGVyLXZpZGVvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0MiU7XG4gIHRvcDogMjclO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDQyJTtcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1MCU7XG59XG4uY2VudGVyLXRleHQuc2hvdywgLmNlbnRlci12aWRlby5zaG93IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNlbnRlci12aWRlbyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5leGl0LWNhcmQge1xuICAgIGxlZnQ6IDFyZW07XG4gIH1cblxuICAuY2FyZC5kZWZhdWx0LnNjYWxlVXAge1xuICAgIGhlaWdodDogNDIlO1xuICB9XG4gIC5jYXJkLmRlZmF1bHQuc2NhbGVVcCAudmlkZW8tY29udGFpbmVyIHZpZGVvIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNhcmQuZGVmYXVsdC5zY2FsZVVwIHAucG9ydHJhaXQge1xuICAgIGRpc3BsYXk6IHVuc2V0O1xuICB9XG4gIC5jYXJkLmRlZmF1bHQuc2NhbGVVcCBwLmxhbmRzY2FwZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_active_project_service__WEBPACK_IMPORTED_MODULE_5__["ActiveProjectService"] }]; }, { exitCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['exitCard']
        }], centerText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['centerText']
        }], centerVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['centerVideo']
        }], cards: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/landing-page/landing-page.component */ "/hLs");





const routes = [
    { path: '', component: _components_pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main.70daf6381671da8ec3d6.js.map