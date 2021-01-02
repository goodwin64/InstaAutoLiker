import { classes, ids } from '../utils/cssIdentifiers';
import { selectors } from '../utils/jsSelectors';

function createToggleMenuIcon() {
  const iconWrapper = document.createElement('div');
  iconWrapper.classList.add(classes.topMenuIcon);
  const icon = document.createElement('i');
  icon.classList.add(classes.toggleMenu);
  icon.id = ids.toggleMenu;
  icon.innerText = '💗';
  iconWrapper.appendChild(icon);
  return iconWrapper;
}

export function renderMenuIcon() {
  const container = selectors.topMenuWrapper();
  const icon = selectors.menuToggle();
  if (!container || icon) {
    return;
  }
  const toggleMenuIcon = createToggleMenuIcon();
  if (toggleMenuIcon) {
    container.insertBefore(toggleMenuIcon, container.firstChild);
  }
}
