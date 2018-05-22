import flyd from 'flyd';
import { render } from 'lit-html/lib/lit-extended';
import { createAppModel, createApp } from './app';
import { createCounter } from './counter';
import { createNavigation, createRouter } from './navigation';

let update = flyd.stream();

const navigation = createNavigation(update);
const router = createRouter(navigation);

const app = createApp(update, navigation, router);
const counter = createCounter(update);

const models = flyd.scan(
  (model: any, modelUpdate: any) => modelUpdate(model),
  createAppModel(),
  update
);

const element = document.getElementById('app');
models.map(model => render(app.view(model), element));

// Resolve initial route
router.resolveRoute();
// Route sync
models.map(router.routeSync);
