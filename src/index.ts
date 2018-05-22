import flyd from 'flyd';
import { render } from 'lit-html/lib/lit-extended';
import { createCounter } from './counter';
import { UpdateFunction } from './utils/types';

let update = flyd.stream();

const counter = createCounter(update);

const models = flyd.scan(
  (model: any, func: any) => func(model),
  counter.model(),
  update
);

const element = document.getElementById('app');
models.map(model => render(counter.view(model), element));
