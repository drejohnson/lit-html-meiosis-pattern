import { html } from 'lit-html/lib/lit-extended';
import { wrap } from '../utils/wrap';
import { amount, Model } from './types';

export const createView = (actions: any) => (model: Model) => html`
  <div>
    <span>Counter: </span>
    <span>${model.value}</span>
    <div>
      <button onclick="${wrap(actions.increase, 1)}">Increase</button>
      <button onclick="${wrap(actions.increase, -1)}">Decrease</button>
    </div>
  </div>
`;
