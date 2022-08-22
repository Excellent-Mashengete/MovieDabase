// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const api_key = "?api_key=b47305b354135433a8512ad26ed78b50&language=en-US&page=1"
const baseUrl = "https://api.themoviedb.org/3/"

export const environment = {
  production: false,
  baseUrl: `${baseUrl}`,
  api_key: `${api_key}`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
