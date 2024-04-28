import { ERROR_CODE, MY_ERROR } from "../errors/const";
import { HttpError } from "../errors/httpError";

import { ErrorTransformer } from "./error.transformer";

describe.skip("#transform", () => {
  describe("errorがHttpErrorの場合", () => {
    it("対応するjsonが返ること", async () => {
      const httpResponse = {
        data: undefined,
        error: { message: "", errors: [] },
        status: 400,
        statusText: "400 error",
      };
      const httpError = new HttpError(httpResponse);
      const expected = {
        message: "",
        cause: "",
        code: "",
        validationMessages: [],
        severity: "error",
      };

      const result = new ErrorTransformer().transform(httpError);
      expect(result).toEqual(expected);
    });
  });

  describe("errorがErrorの場合", () => {
    it("対応するjsonが返ること", async () => {
      const error = {
        message: "test",
      };
      const expected = {
        message: error.message,
        code: ERROR_CODE.INTERNAL_SERVER_ERROR,
        myErrorMessage: MY_ERROR.EER99,
        resultStatus: 500,
      };

      const result = new ErrorTransformer().transform(new Error(error.message));
      expect(result).toEqual(expected);
    });
  });
});
