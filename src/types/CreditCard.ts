/**
 * Italia PagoPA Proxy
 * Cittadinanza Digitale PagoPA services
 *
 */

import { PaymentMethod } from './PaymentMethod';

export interface CreditCard extends PaymentMethod {
    issuer: string,
    number: string,
    message: string, // a message to visualize (e.g. last usage)
}