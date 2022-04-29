const mockedRouter = {
  push: () => Promise.resolve(),
  replace: () => Promise.resolve(),
  prefetch: () => Promise.resolve(),
  pathname: '/',
  route: '/',
  asPath: '/',
  query: '',
}

export default mockedRouter
