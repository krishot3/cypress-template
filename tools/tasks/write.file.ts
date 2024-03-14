import { promises as fsPromises } from 'fs';
/**
 * This tool helps save large files.
 * @example
 * // Example usage:
 * const file = {}; // Your JSON data
 * const path = 'files/testData.json'; // Path where you want to save the JSON file
 *
 * cy.task('writeFile', { filePath: path, jsonData: file }).then(($result) => {
 *  if ($result) {
 *    // Handle error if writing fails
 *    cy.log(`Failed to write JSON file: ${String($result)}`);
 *  } else {
 *    cy.log('JSON file written successfully.');
 *  }
 * });
 */
export default function writeFileTask(on: Cypress.PluginEvents) {
  on('task', {
    writeFile: async (data: { filePath: string; jsonData: unknown }) => {
      const { filePath, jsonData } = data;
      try {
        await fsPromises.writeFile(filePath, JSON.stringify(jsonData, null, 2));
        return null;
      } catch (error) {
        return error.message;
      }
    }
  });
}
