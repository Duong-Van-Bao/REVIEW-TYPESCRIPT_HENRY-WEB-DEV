"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = exports.Invoice = void 0;
class Invoice {
    constructor(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    print() {
        return `${this.client} owes ${this.amount} dollars for this work: ${this.work}`;
    }
}
exports.Invoice = Invoice;
class Payment {
    constructor(recipient, job, amt) {
        this.recipient = recipient;
        this.job = job;
        this.amt = amt;
    }
    print() {
        return `I owe ${this.recipient} ${this.amt} dollar(s) for this job: ${this.job}`;
    }
}
exports.Payment = Payment;
