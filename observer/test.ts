import { Sale } from './sale'
import { Client } from './client'

const blackFriday = new Sale()

const clientA = new Client('john', 'john@gmail.com')
const clientB = new Client('ann', 'ann@gmail.com')
const clientC = new Client('kesi', 'kesi@gmail.com')

blackFriday.addObserver(clientA)
blackFriday.addObserver(clientB)
blackFriday.addObserver(clientC)

blackFriday.notifyObservers()