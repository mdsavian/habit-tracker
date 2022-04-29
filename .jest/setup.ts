import { useRouter } from 'next/router'
import mockedRouter from './mockedRouter'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

useRouter.mockImplementation(() => mockedRouter)
