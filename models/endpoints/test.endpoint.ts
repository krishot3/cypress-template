export default class TestEndpoint {
  private readonly baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = `${baseUrl}/test`;
  }

  test(failOnStatusCode = true) {
    return cy.request<Endpoints.Test[]>({
      method: 'GET',
      url: `${this.baseUrl}`,
      failOnStatusCode,
    });
  }
}