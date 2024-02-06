export default class TestEndpoint {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  test(failOnStatusCode = true) {
    return cy.request<TestEndpoint.Test[]>({
      method: 'GET',
      url: `${this.baseUrl}`,
      failOnStatusCode,
    });
  }
}
