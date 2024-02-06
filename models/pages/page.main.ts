import TestPage from './test.page';

export default function pom<PAGE extends Pages>(pageName: PAGE): POM<PAGE> {
  switch (pageName) {
    case 'testPage':
      return new TestPage() as POM<PAGE>;
    default:
      throw new Error(`Unsupported page: ${pageName}`);
  }
}
