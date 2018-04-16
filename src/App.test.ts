import * as request from 'request';

import App from "./App";

const WS_URL = "http://localhost:3000";

describe("App", () =>
{

    test("should get welcome JSON", () =>
    {
        request(WS_URL+"/", function (error, response, body) {

            expect(response.statusCode).toBe(200);
            expect(error).toBe(null);
            expect(response.headers['content-type']).toContain("json");
            expect(body).toBe('{"message":"Welcome to AwesomePAPI!"}');

        });

    });

});
