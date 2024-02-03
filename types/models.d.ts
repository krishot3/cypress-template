import TestEndpoint from '../models/endpoints/test.endpoint'
import TestPage from '../models/pages/test.page'

export {}

declare global {
  type Endpoints = 'testEndpoint' | 'test1'

  type EOM<ENDPOINT> = ENDPOINT extends 'testEndpoint'
    ? TestEndpoint
    : never

  type Pages = 'testPage' | 'test1'

  type POM<PAGE> = PAGE extends 'testPage'
    ? TestPage
    : never 
}