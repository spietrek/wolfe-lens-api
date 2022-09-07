/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
class HttpException extends Error {
  constructor(readonly errorCode: number, readonly message: string | any) {
    super(message)
  }
}

export default HttpException
