import { IObserver } from './contracts'

export class Sale {
    private observers: IObserver[]

    constructor() {
        this.observers = []
    }

    addObserver(ob: IObserver) {
        this.observers.push(ob)
    }

    notifyObservers() {
        console.log('Notifying clients:');
        this.observers.map((observer) => observer.sendEmail())
    }
}