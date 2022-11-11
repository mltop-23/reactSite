import {makeAutoObservable} from "mobx";

export default class AdminParametersStore {
    constructor() {
        this._type = {
            name: 'Тип',
            properties: [],
            selectedId: 0,
            setSelectedId : (id) => {
                this._type.selectedId = id
            }
        }
        this._brand = {
            name: 'Бренд',
            properties: [],
            selectedId: 0,
            setSelectedId : (id) => {
                this._brand.selectedId = id
            }
        }
        this._star = {
            name: 'Звезды',
            properties: [],
            selectedId: 0,
            setSelectedId : (id) => {
                this._star.selectedId = id
            }
        }
        this._producerCountry = {
            name: 'Страна',
            properties: [],
            selectedId: 0,
            setSelectedId : (id) => {
                this._producerCountry.selectedId = id
            }
        }
    }

    setType(typeProperties) {
        this._type.properties = typeProperties
    }

    addType(typeProperty) {
        this._type.properties = [...this._type.properties,typeProperty]
    }

    setBrand(brandProperties) {
        this._brand.properties = brandProperties
    }

    addBrand(brandProperty) {
        this._brand.properties = [...this._brand.properties,brandProperty]
    }

    setStar(starProperties) {
        this._star.properties = starProperties
    }

    addStar(starProperty) {
        this._star.properties = [...this._star.properties,starProperty]
    }

    setProducerCountry(producerCountryProperties) {
        this._producerCountry.properties = producerCountryProperties
    }

    addProducerCountry(producerCountryProperty) {
        this._producerCountry.properties = [...this._producerCountry.properties,producerCountryProperty]
    }


    get type() {
        return this._type
    }

    get brand() {
        return this._brand
    }

    get star() {
        return this._star
    }

    get producerCountry() {
        return this._producerCountry
    }
}