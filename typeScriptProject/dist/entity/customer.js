"use strict";
class Customer {
    constructor(id, name, address) {
        this._id = id;
        this._name = name;
        this._address = address;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get address() {
        return this._address;
    }
}
