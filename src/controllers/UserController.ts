/**
 * Italia PagoPA Proxy
 * Cittadinanza Digitale PagoPA services
 *
 */

import * as Mocked from '../MockedData';
import { ICreditCard } from '../types/CreditCard';
import { IPaymentMethod, PaymentMethodType } from '../types/PaymentMethod';


// TODO: figure out if any sensible information should be censored before returning (e.g. cc number: "**** **** **** 1234" )
export class UserController {
    constructor (public token: string) {}

    public getWallet(): ReadonlyArray<IPaymentMethod> {
        return Mocked.wallet;
    }

    public getCreditCards(): ReadonlyArray<ICreditCard> {
        return Mocked.wallet
           .filter(method => method.type === PaymentMethodType.CREDIT_CARD)
           .map(card => card as ICreditCard);
    }

    public getCreditCard(id: string): ICreditCard | undefined {
        const paymentMethod = Mocked.wallet
           .filter(method => method.id === id && method.type === PaymentMethodType.CREDIT_CARD)[0];
       if (paymentMethod === undefined) {
           return undefined;
       }
       return paymentMethod as ICreditCard;
    }
}