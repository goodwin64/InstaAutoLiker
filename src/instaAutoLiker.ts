export function instaAutoLiker() {
  const classes = {
    topMenuWrapper: '_47KiJ',
    topMenuIcon: 'Fifk5',
  };

  const selectors = {
    topMenuWrapper: () => document.getElementsByClassName(classes.topMenuWrapper)?.[0],
  };

  wait(1000)
    .then(() => renderMenuIcon());

  function renderMenuIcon() {
    const container = selectors.topMenuWrapper();
    if (!container) {
      return;
    }
    const toggleMenuIcon = createToggleMenuIcon();
    if (toggleMenuIcon) {
      container.insertBefore(toggleMenuIcon, container.firstChild);
    }
  }

  function createToggleMenuIcon() {
    const iconWrapper = document.createElement('div');
    iconWrapper.classList.add(classes.topMenuIcon);
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-heart');
    icon.innerText = '♥';
    iconWrapper.appendChild(icon);
    return iconWrapper;
  }

  function wait(ms: number) {
    return new Promise(((resolve) => {
      setTimeout(resolve, ms);
    }));
  }
}
