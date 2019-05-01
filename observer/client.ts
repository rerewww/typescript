import { IObserver } from './contracts'

export class Client implements IObserver {
    private name: string
    private email: string
    
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    sendEmail(): void {
        console.log(`Sending a mail to ${this.name}`)
    }
}