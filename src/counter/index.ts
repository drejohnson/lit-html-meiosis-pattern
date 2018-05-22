import { createActions } from './actions';
import { createView } from './view';

export const createCounter = (update: any) => ({
  model: () => ({
    value: 0
  }),

  view: createView(createActions(update))
});
