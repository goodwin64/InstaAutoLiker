import { renderMenuIcon } from './operations/renderMenuIcon';
import { wait } from './utils/wait';

export function instaAutoLiker() {
  wait(1000)
    .then(() => renderMenuIcon());
}
