/**
 * Italia PagoPA Proxy
 * Cittadinanza Digitale PagoPA services
 *
 */

export enum PaymentMethodType { CREDIT_CARD = "CREDIT_CARD" }

export interface IPaymentMethod {
    readonly id: string,
    readonly type: PaymentMethodType
}