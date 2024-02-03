export {};

declare global {
  function eom<ENDPOINT extends Endpoints>(endpointName: ENDPOINT): EOM<ENDPOINT>;
  function pom<PAGE extends Pages>(pageName: PAGE): POM<PAGE>;
}