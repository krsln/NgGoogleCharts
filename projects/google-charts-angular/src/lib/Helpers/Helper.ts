import {GoogleChartsConfig} from "../Models/GoogleChartsConfig";

/**
 * Generates a random ID which can be used to uniquely identify an element.
 */
export function generateRandomId() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substring(2, 11);
}

export function getDefaultConfig(): GoogleChartsConfig {
  return {
    version: 'current',
    safeMode: false
  };
}
