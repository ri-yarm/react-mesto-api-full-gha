export default class BadReqestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}
