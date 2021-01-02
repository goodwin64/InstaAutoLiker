import { cssClasses } from '../utils/cssClasses';
import { selectors } from '../utils/jsSelectors';

function createToggleMenuIcon() {
  const iconWrapper = document.createElement('div');
  iconWrapper.classList.add(cssClasses.topMenuIcon);
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-heart');
  icon.innerText = '♥';
  iconWrapper.appendChild(icon);
  return iconWrapper;
}

export function renderMenuIcon() {
  const container = selectors.topMenuWrapper();
  if (!container) {
    return;
  }
  const toggleMenuIcon = createToggleMenuIcon();
  if (toggleMenuIcon) {
    container.insertBefore(toggleMenuIcon, container.firstChild);
  }
}
