import { classes, ids } from './cssIdentifiers';

export const selectors = {
  topMenuWrapper: () => document.getElementsByClassName(classes.topMenuWrapper)?.[0],
  menuToggle: () => document.getElementById(ids.toggleMenu),
};
