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
exports.Masajista = void 0;
var Persona_1 = require("./Persona");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(pNombre, pApellido, pDNI, pTipoMasaje) {
        var _this = _super.call(this, pNombre, pApellido, pDNI) || this;
        _this.tipoMasaje = pTipoMasaje;
        return _this;
    }
    Masajista.prototype.setTipoMasaje = function (pTipoMasaje) {
        this.tipoMasaje = pTipoMasaje;
    };
    Masajista.prototype.getTipoMasaje = function () {
        return this.tipoMasaje;
    };
    Masajista.prototype.HacerMasajeA = function (pPersona) {
        return "Se le hizo Masaje a " + pPersona.getApellido();
    };
    return Masajista;
}(Persona_1.Persona));
exports.Masajista = Masajista;
