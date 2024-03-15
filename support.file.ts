import customCommand from './tools/commands/first.command';
import pages from './models/pages/page.main';
import endpoints from './models/endpoints/endpoint.main'

customCommand();

globalThis.pom = pages;
globalThis.eom = endpoints;