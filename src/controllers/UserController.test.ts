/**
 * Italia PagoPA Proxy
 * Cittadinanza Digitale PagoPA services
 *
 */
import { UserController } from "./UserController";

describe("User controller", () =>
{
    test("should get user's specific card", () =>
    {
        const userController: UserController = new UserController("token1234");
        const creditCards = userController.getCreditCard("1");
        expect(creditCards).toBeTruthy();
    });

    test("should get user's credit cards", () =>
    {
        const userController: UserController = new UserController("token1234");
        const creditCards = userController.getCreditCards();
        expect(creditCards).toBeTruthy();
        expect(creditCards.length).toBe(4);
    });
});
