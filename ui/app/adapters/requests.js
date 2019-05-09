import Application from './cluster';

export default Application.extend({
  query() {
    return this.ajax(this.urlForQuery(), 'GET');
  },

  urlForQuery() {
    return this.buildURL() + '/internal/counters/requests';
  },
});
