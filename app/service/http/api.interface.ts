/** The next api routes return data like:
 * { data: { ... } } or { data: [ { ... } ] }
 * Allow for the data response object to be generic
 */
export interface ApiResponse<T = any> {
  data: T;
}
