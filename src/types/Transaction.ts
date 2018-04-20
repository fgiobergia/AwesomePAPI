/**
 * Italia PagoPA Proxy
 * Cittadinanza Digitale PagoPA services
 *
 */

 import { PaymentMethod } from './PaymentMethod';
export interface Transaction {
    method: PaymentMethod,
    fee: number,
    amount: number,
    currency: string,
    description: string,
    date: string,
    recipient: string,
    isNew: boolean // TODO: figure out how to handle this
}