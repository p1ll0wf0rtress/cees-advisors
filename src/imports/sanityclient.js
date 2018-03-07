const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: 'gtb605x1',
  dataset: 'production',
  useCdn: false
})

export default client;