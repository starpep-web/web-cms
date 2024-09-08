module.exports = () => ({
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 25,
      amountLimit: 250,
      apolloServer: {
        tracing: false
      }
    }
  }
});
