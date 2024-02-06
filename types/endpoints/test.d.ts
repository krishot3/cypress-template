export {};

declare global {
  namespace TestEndpoint {
    type Test = {
      id: number;
      name: boolean;
    };
  }
}
