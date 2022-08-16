// Classe de uma aplicação orientada a ORM onde os atributos são os campos do DB.
// Classe Anêmica, não possui regras de negôcios, só carrega dados, tendo getters e setters.

import { Address } from "./address";

class Customer {

    _id: string; // únicidade
    _name: string;
    _address!: Address;
    _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validade();
    }

    // Princípío da auto-validação.
    validade() {
        if(this._name.length === 0){
            throw new Error("Name is required");
        }
        if(this._id.length === 0){
            throw new Error("Id is required");
        }
    }

    changeName(name:string) {
        this._name = name;
        this.validade()
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }
    
    get address(): Address {
        return this._address;
    }

    // Setters e getters não representam uma intenção do sistema.
    // A modelagem do domínio rico expressa o negócio, e não setters e getters.
    // DDD faz com que o estádo atual da entidade esteja sempre correta.

    activate() {
        if(this._address !== undefined) {
            throw new Error("Address is mandatory to activate a customer");
        }

        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    set Address(address: Address){
        this._address = address
    }
}