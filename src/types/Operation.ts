/**
 * Italia PagoPA Proxy
 * Cittadinanza Digitale PagoPA services
 *
 */

class Operation
{
    cardId: number;
    date: string;
    time: string;
    subject: string;
    recipient: string;
    amount: number;
    currency: string;
    transactionCost: number;
    isNew: boolean
}