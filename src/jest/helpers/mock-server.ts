import { HttpHandler } from 'msw';
import { setupServer } from 'msw/native';

export const setupMockServer = (handlers: HttpHandler[] = []) => {
  return setupServer(...handlers);
};
