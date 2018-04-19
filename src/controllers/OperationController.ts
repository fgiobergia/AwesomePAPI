/**
 * Italia PagoPA Proxy
 * Cittadinanza Digitale PagoPA services
 *
 */

import * as Mocked from '../MockedData';
import {UserController} from './UserController';

export class OperationController extends UserController
{
    constructor(userId: string)
    {
        super(userId);
    }

    getOperations(cardId: number): Array<Operation>
    {
        return Mocked.operations.filter( operation => operation.cardId === cardId );
    }

    getLatestOperations(maxOperations: number): Array<Operation>
    {
        return Mocked.operations.slice(1, maxOperations + 1);
    }
}
