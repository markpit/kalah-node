import * as express from 'express';
import { interfaces, controller, httpGet, request, response } from "inversify-express-utils";

@controller("/test")
export class TestController implements interfaces.Controller {

  @httpGet("/")
  public index (@request() req: express.Request, @response() res: express.Response) {
    res.status(200).send("Test Controller");
  }
}
