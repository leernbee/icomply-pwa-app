import Store from '.';

export const setSettings = settings => {
  Store.update(s => {
    s.settings = settings;
  });
};
