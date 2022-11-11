import {makeAutoObservable} from "mobx";

export default class FiltersStore {
    constructor() {
        this._type = {
            name: 'Тип',
            properties: [],
            allSelectedId: [],
            setSelectedId : (id) => {
                this._type.allSelectedId.push(id)
            },
            removeSelectedId : (id) => {
                this._type.allSelectedId.remove(id)
            }
        }
        this._brand = {
            name: 'Бренд',
            properties: [],
            allSelectedId: [],
            setSelectedId : (id) => {
                this._brand.allSelectedId.push(id)
            },
            removeSelectedId : (id) => {
                this._brand.allSelectedId.remove(id)
            }
        }
        this._star = {
            name: 'Звезды',
            properties: [],
            allSelectedId: [],
            setSelectedId : (id) => {
                this._star.allSelectedId.push(id)
            },
            removeSelectedId : (id) => {
                this._star.allSelectedId.remove(id)
            }
        }
        this._producerCountry = {
            name: 'Страна',
            properties: [],
            allSelectedId: [],
            setSelectedId : (id) => {
                this._producerCountry.allSelectedId.push(id)
            },
            removeSelectedId : (id) => {
                this._producerCountry.allSelectedId.remove(id)
            }
        }

        this._priceSort = {
            name: 'Сортировка',
            inputType: 'radio',
            selectedId: 0,
            properties: [
                {
                    id: 1,
                    value: 'По возрастанию'
                },
                {
                    id: 2,
                    value: 'По убыванию'
                }
            ],
            setSelectedId : (id) => {
                this._priceSort.selectedId = id
            }
        }

        this._searchQuery = ''
        makeAutoObservable(this)
    }

    setType(typeProperties) {
        this._type.properties = typeProperties
    }

    setBrand(brandProperties) {
        this._brand.properties = brandProperties
    }

    setStar(starProperties) {
        this._star.properties = starProperties
    }

    setProducerCountry(producerCountryProperties) {
        this._producerCountry.properties = producerCountryProperties
    }

    setSearchQuery(searchQuery) {
        this._searchQuery = searchQuery
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

    get priceSort() {
        return this._priceSort
    }

    get searchQuery() {
        return this._searchQuery
    }
    setTypes(types) {
        this._type = types
    }
    setBrands(brands) {
        this._brand = brands
    }
}