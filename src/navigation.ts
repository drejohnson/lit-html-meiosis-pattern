import UniversalRouter from 'universal-router';
import generateUrls from 'universal-router/generateUrls';
import { transforms } from './utils/transforms';

export const pages = {
  home: {
    id: 'HomePage',
    tab: 'Home'
  },
  about: {
    id: 'AboutPage',
    tab: 'About'
  }
};

export const createNavigation = (update: any) => {
  const navigateTo = (page: any) => (params: any) =>
    update(transforms.navigate(page, params));

  return {
    navigateToHome: navigateTo(pages.home),
    navigateToAbout: navigateTo(pages.about)
  };
};

export const createRouter = (navigation: any) => {
  const wrap = (action: any) => (ctx: any) => {
    action(ctx.params);
    return true;
  };

  const routes = [
    {
      path: '/',
      name: pages.home.id,
      action: wrap(navigation.navigateToHome)
    },
    {
      path: '/about',
      name: pages.about.id,
      action: wrap(navigation.navigateToAbout)
    }
  ];

  const router = new UniversalRouter(routes);

  const resolveRoute = () => {
    const route = document.location.hash.substring(1);
    console.log(document.location.hash.substring(1));
    router.resolve(route);
  };

  window.onpopstate = resolveRoute;

  const urlGenerator = generateUrls(router);
  const getLink = (id: any, params: any) => '#' + urlGenerator(id, params);

  const routeSync = (model: any) => {
    const link = getLink(model.page.id, model.page.params || {});
    if (document.location.hash.substring(1) !== link) {
      window.history.pushState({}, '', link);
    }
  };

  return { resolveRoute, routeSync, getLink };
};
