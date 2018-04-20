/**
 * Italia PagoPA Proxy
 * Cittadinanza Digitale PagoPA services
 *
 */

//  import { User } from '../types/User';
 import * as Mocked from '../MockedData';
 import { PaymentMethod, PaymentMethodType } from '../types/PaymentMethod';
 import { CreditCard } from '../types/CreditCard';


 // TODO: figure out if any sensible information should be censored before returning (e.g. cc number: "**** **** **** 1234" )
 export class UserController {
    //  private readonly user: User;

     constructor (public token: string) {
        //  this.user = {
        //      token: token
        //  };
     }

     public getWallet(): ReadonlyArray<PaymentMethod> {
         return Mocked.wallet;
     }

     public getCreditCards(): ReadonlyArray<CreditCard> {
         return Mocked.wallet
            .filter(method => method.type === PaymentMethodType.CREDIT_CARD)
            .map(card => card as CreditCard);
     }

     public getCreditCard(id: string): CreditCard | undefined {
         const paymentMethod = Mocked.wallet
            .filter(method => method.id === id && method.type === PaymentMethodType.CREDIT_CARD)[0];
        if (paymentMethod === undefined) {
            return undefined;
        }
        return paymentMethod as CreditCard;
     }
 }