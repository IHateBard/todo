import { http, HttpResponse } from "msw";

export const todo_list = [
  http.get("api/create", (resolver) => {
    return new HttpResponse(null, {
      status: 200,
      statusText: "mocking create response",
    });
  }),
  http.get("api/list", (resolver) => {
    return HttpResponse.json({
      kek: 1,
    });
  }),
];
