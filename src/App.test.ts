/**
 * Italia PagoPA Proxy
 * Cittadinanza Digitale PagoPA services
 *
 *
 */

import * as express from "express";
import * as http from "http";
import * as request from "request";

import { PaymentMethodType } from "./types/PaymentMethod";
import { CreditCard } from "./types/CreditCard";


import App from "./App";

const WS_URL = "http://localhost:3000";
let server: http.Server; // tslint:disable-line
let app: express.Application; // tslint:disable-line

beforeAll(() =>
{
    app = new App(true).express;
    app.set("port", 3000);
    server = http.createServer(app);
    server.listen(3000);
});

describe("App", () =>
{
    test("should get welcome JSON", (done) =>
    {
        request(WS_URL + "/", (error, response, body) =>
        {
            expect(response).toBeTruthy();
            expect(response.statusCode).toBe(200);
            expect(error).toBe(null); // tslint:disable-line
            expect(response.headers["content-type"]).toContain("json");
            expect(JSON.parse(body)).toEqual({
                "message": "Welcome to AwesomePAPI!",
                "version": "0.0.10"
            });
            done();
        });
    });

    test("should return a wallet", (done) => {
        request(WS_URL + "/wallet", (error, response, body) => {
            expect(response).toBeTruthy();
            expect(response.statusCode).toBe(200);
            expect(error).toBe(null);
            expect(response.headers["content-type"]).toContain("json");
            const obj = JSON.parse(body);
            expect(obj).toHaveProperty("status", "OK");
            expect(obj).toHaveProperty("wallet");
            expect(obj["wallet"].length).toBeGreaterThan(1);
            done();
        });
    });

    test("should return credit cards", (done) => {
        request(WS_URL + "/cards", (error, response, body) => {
            expect(response).toBeTruthy();
            expect(response.statusCode).toBe(200);
            expect(error).toBe(null);
            expect(response.headers["content-type"]).toContain("json");
            const obj = JSON.parse(body);
            expect(obj).toHaveProperty("status", "OK");
            expect(obj).toHaveProperty("credit_cards");
            expect(obj["credit_cards"].length).toBeGreaterThan(1);
            const countCC = obj["credit_cards"].reduce((i: number, v: CreditCard) => v.type === PaymentMethodType.CREDIT_CARD ? i + 1 : i, 0);
            expect(obj["credit_cards"].length).toBe(countCC);
            done();
        });
    });

    test("should return a SINGLE credit card", (done) => {
        request(WS_URL + "/cards/3", (error, response, body) => {
            expect(response).toBeTruthy();
            expect(response.statusCode).toBe(200);
            expect(error).toBe(null);
            expect(response.headers["content-type"]).toContain("json");
            const obj = JSON.parse(body);
            expect(obj).toHaveProperty("status", "OK");
            expect(obj).toHaveProperty("credit_card");
            expect(obj["credit_card"]).toEqual({
                id: "3",
                type: "CREDIT_CARD",
                issuer: "Mastercard",
                number: "Non ci sono nuove transazioni",
                message: "5412 7556 7890 0000"
            });
            done();
        });
    });
});

afterAll(() =>
{
    server.close();
});
