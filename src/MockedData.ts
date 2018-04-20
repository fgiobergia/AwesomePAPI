import { CreditCard } from './types/CreditCard';
import { PaymentMethod, PaymentMethodType } from './types/PaymentMethod';

function genCC(id:string, issuer:string, number: string, message:string): CreditCard {
    const cc: CreditCard = {
        id: id,
        type: PaymentMethodType.CREDIT_CARD,
        issuer: issuer,
        number: number,
        message: message
    };
    return cc;
}

export const wallet: ReadonlyArray<PaymentMethod> = [
    genCC("1", "American Express", "Ultimo utilizzo ieri alle 07:34", "3759 876543 21001"),
    genCC("2", "VISA", "Ultimo utilizzo ieri alle 10:20", "4000 1234 5678 9010"),
    genCC("3", "Mastercard", "Non ci sono nuove transazioni", "5412 7556 7890 0000"),
    genCC("4", "RedCard", "Ultimo utilizzo oggi alle 09:03", "4000 1234 5678 9010")
];

// export const operations: ReadonlyArray<Operation> = [
//     {
//         cardId: 1,
//         date: "17/04/2018",
//         time: "07:34",
//         subject: "Certificato di residenza",
//         recipient: "Comune di Gallarate",
//         amount: -20.02,
//         currency: "EUR",
//         transactionCost: 0.5,
//         isNew: true
//     },
//     {
//         cardId: 2,
//         date: "16/04/2018",
//         time: "15:01",
//         subject: "Spesa Supermarket",
//         recipient: "Segrate",
//         amount: -74.1,
//         currency: "EUR",
//         transactionCost: 0.5,
//         isNew: true
//     },
//     {
//         cardId: 4,
//         date: "15/04/2018",
//         time: "08:56",
//         subject: "Prelievo contante",
//         recipient: "Busto Arsizio", // tslint:disable-line
//         amount: -200.0,
//         currency: "EUR",
//         transactionCost: 0.5,
//         isNew: true
//     },
//     {
//         cardId: 2,
//         date: "14/02/2018",
//         time: "10:21",
//         subject: "Accredito per storno",
//         recipient: "Banca Sella",
//         amount: 100.1,
//         currency: "USD",
//         transactionCost: 0.5,
//         isNew: false
//     },
//     {
//         cardId: 4,
//         date: "22/01/2018",
//         time: "14:54",
//         subject: "Esecuzione atti notarili",
//         recipient: "Comune di Legnano",
//         transactionCost: 0.5,
//         amount: -56.0,
//         currency: "EUR",
//         isNew: false
//     },
//     {
//         cardId: 4,
//         date: "01/01/2018",
//         time: "23:34",
//         subject: "Pizzeria Da Gennarino",
//         recipient: "Busto Arsizio",
//         amount: -45.0,
//         currency: "EUR",
//         transactionCost: 0.5,
//         isNew: false
//     },
//     {
//         cardId: 1,
//         date: "22/12/2017",
//         time: "14:23",
//         subject: "Rimborso TARI 2012",
//         recipient: "Comune di Gallarate",
//         amount: 150.2,
//         currency: "EUR",
//         transactionCost: 0,
//         isNew: false
//     },
//     {
//         cardId: 1,
//         date: "17/12/2017",
//         time: "12:34",
//         subject: "Ristorante I Pini",
//         recipient: "Busto Arsizio",
//         transactionCost: 0,
//         amount: -134.0,
//         currency: "EUR",
//         isNew: false
//     },
//     {
//         cardId: 4,
//         date: "13/12/2017",
//         time: "10:34",
//         subject: "Estetista Estella",
//         recipient: "Milano - via Parini 12",
//         transactionCost: 0.5,
//         amount: -100.0,
//         currency: "EUR",
//         isNew: false
//     }
// ];

// export const paymentMethods: ReadonlyArray<PaymentMethod> = [
//     {
//         id: 0,
//         type: "Credit Card"
//     },
//     {
//         id: 1,
//         type: "Bank Account"
//     },
//     {
//         id: 2,
//         type: "Other"
//     }
// ];
