import TestEndpoint from './test.endpoint';

export default function eom<ENDPOINT extends Endpoints>(
  endpointName: ENDPOINT
): EOM<ENDPOINT> {
  switch (endpointName) {
    case 'testEndpoint':
      return new TestEndpoint('/api/test') as EOM<ENDPOINT>;
    default:
      throw new Error(`Unsupported endpoint: ${endpointName}`);
  }
}
