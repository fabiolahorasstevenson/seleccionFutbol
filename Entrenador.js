"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Entrenador = void 0;
var Persona_1 = require("./Persona");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(pNombre, pApellido, pDNI, pMetodoEntrenamiento, pExperiencia) {
        var _this = _super.call(this, pNombre, pApellido, pDNI) || this;
        _this.metodoEntrenamiento = pMetodoEntrenamiento;
        _this.experiencia = pExperiencia;
        return _this;
    }
    Entrenador.prototype.setMetodoEntrenamiento = function (pMetodoEntrenamiento) {
        this.metodoEntrenamiento = pMetodoEntrenamiento;
    };
    Entrenador.prototype.getMetodoEntrenamiento = function () {
        return this.metodoEntrenamiento;
    };
    Entrenador.prototype.setExperiencia = function (pExperiencia) {
        this.experiencia = pExperiencia;
    };
    Entrenador.prototype.getExperiencia = function () {
        return this.experiencia;
    };
    return Entrenador;
}(Persona_1.Persona));
exports.Entrenador = Entrenador;
