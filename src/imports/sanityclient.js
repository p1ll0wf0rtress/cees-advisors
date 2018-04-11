const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: 'ef8nihto',
  dataset: 'production',
  useCdn: true
})

export default client;