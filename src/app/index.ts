import { html } from 'lit-html/lib/lit-extended';
import { createHome } from '../home';
import { createAbout } from '../about';
import { pages } from '../navigation';

export const createAppModel = () => ({
  page: Object.assign({ params: {} }, pages.home)
});

export const createApp = (update: any, navigation: any, router: any) => {
  const homeComponent = createHome(update);
  const aboutComponent = createAbout(update);

  const pageMap = {
    [pages.home.id]: homeComponent,
    [pages.about.id]: aboutComponent
  };
  return {
    view: (model: any) => {
      const currentPageId = pageMap[model.page.id]
        ? model.page.id
        : pages.home.id;
      const component = pageMap[currentPageId];
      const currentTab = model.page.tab;
      const isActive = (tab: any) => (tab === currentTab ? 'active' : '');

      return html`
        <div>
          <nav className="navbar navbar-default">
            <a href=${router.getLink(pages.home.id)} className=${isActive(
        pages.home.tab
      )}>Home</a>
            <a href=${router.getLink(pages.about.id)} className=${isActive(
        pages.about.tab
      )}>About</a>
          </nav>
          ${component.view(model)}
        </div>
      `;
    }
  };
};
