import { pages } from '../navigation';
import { createHome } from '../home';
import { createAbout } from '../about';

export const createActions = (update: any) => {
  const homeComponent = createHome(update);
  const aboutComponent = createAbout(update);
  const pageMap = {
    [pages.home.id]: homeComponent,
    [pages.about.id]: aboutComponent
  };

  return {
    loadPage: (component: any) =>
      update((model: any) => {
        const currentPageId = pageMap[model.page.id]
          ? model.page.id
          : pages.home.id;
        const component = pageMap[currentPageId];
        model.page.id = component;
        return model;
      })
  };
};
