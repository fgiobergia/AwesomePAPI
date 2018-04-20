import { ICreditCard } from './types/CreditCard';
import { IPaymentMethod, PaymentMethodType } from './types/PaymentMethod';

function genCC(id:string, issuer:string, num: string, message:string): ICreditCard {
    return {
        id,
        type: PaymentMethodType.CREDIT_CARD,
        issuer,
        number: num,
        message
    };
}

export const wallet: ReadonlyArray<IPaymentMethod> = [
    genCC("1", "American Express", "Ultimo utilizzo ieri alle 07:34", "3759 876543 21001"),
    genCC("2", "VISA", "Ultimo utilizzo ieri alle 10:20", "4000 1234 5678 9010"),
    genCC("3", "Mastercard", "Non ci sono nuove transazioni", "5412 7556 7890 0000"),
    genCC("4", "RedCard", "Ultimo utilizzo oggi alle 09:03", "4000 1234 5678 9010")
];
