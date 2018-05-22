import { amount, Model } from './types';

export const createActions = (update: any) => ({
  increase: (amount: amount) =>
    update((model: Model) => {
      model.value = model.value + amount;
      return model;
    })
});
