/**
 * Italia PagoPA Proxy
 * Cittadinanza Digitale PagoPA services
 *
 */

export abstract class UserController
{
    protected userId: string;
    protected constructor(userId: string)
    {
        this.userId = userId;
    }
}