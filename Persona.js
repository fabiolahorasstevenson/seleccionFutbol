"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(pNombre, pApellido, pDNI) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.dni = pDNI;
    }
    Persona.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setDNI = function (pDNI) {
        this.dni = pDNI;
    };
    Persona.prototype.getDNI = function () {
        return this.dni;
    };
    return Persona;
}());
exports.Persona = Persona;
