/**
 * Italia PagoPA Proxy
 * Cittadinanza Digitale PagoPA services
 *
 */

import * as Mocked from '../MockedData';
import {UserController} from './UserController';

export class CreditCardController extends UserController
{
    constructor(userId: string)
    {
        super(userId);
    }

    getCreditCards(): Array<CreditCard>
    {
        return Mocked.cards;
    }

    getCreditCard(creditCardId: number): CreditCard
    {
        return Mocked.cards.find( card => card.id === creditCardId);
    }

}
