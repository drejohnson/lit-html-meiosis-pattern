const navigate = (page: any, params = {}) => (model: any) =>
  Object.assign(model, { page: Object.assign({ params }, page) });

export const transforms = {
  navigate,

  navigateTo: (page: any) => (params: any) => navigate(page, params)
};
