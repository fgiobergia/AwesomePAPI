/**
 * Italia PagoPA Proxy
 * Cittadinanza Digitale PagoPA services
 *
 *
 */

import * as request from 'request';

import App from "./App";
import * as http from 'http';

const WS_URL = "http://localhost:3000";
let server =  null;

beforeAll(() => {

    App.set('port', 3000);
    server = http.createServer(App);
    server.listen(3000);
});

describe("App", () =>
{

    test("should get welcome JSON", () =>
    {
        request(WS_URL+"/", function (error, response, body) {

            expect(response.statusCode).toBe(200);
            expect(error).toBe(null);
            expect(response.headers['content-type']).toContain("json");
            expect(body).toBe("{\"message\":\"Welcome to AwesomePAPI!\",\"version\":\"0.0.10\"}");

        });

    });

});

afterAll(() => {

    server.shutdown();

});
