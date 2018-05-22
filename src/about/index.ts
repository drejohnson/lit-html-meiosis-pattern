import { html } from 'lit-html/lib/lit-extended';
import { createView } from './view';

export const createAbout = (update: any) => {
  return {
    view: createView(update)
  };
};
