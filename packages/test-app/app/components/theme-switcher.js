import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
};

const THEME_ROTATION = {
  [THEME.LIGHT]: THEME.DARK,
  [THEME.DARK]: THEME.LIGHT,
};

export default class ThemeSwitcherComponent extends Component {
  @tracked theme;

  get icon() {
    return {
      [THEME.LIGHT]: 'bi-brightness-high-fill',
      [THEME.DARK]: 'bi-moon-stars-fill',
    }[this.theme];
  }

  constructor() {
    super(...arguments);
    this.theme = this.getCurrentTheme();
  }

  getCurrentTheme() {
    return document.documentElement.dataset.bsTheme;
  }

  @action toggle() {
    const theme = THEME_ROTATION[this.theme];

    document.documentElement.dataset.bsTheme = theme;
    document.getElementById('hljs-theme').href =
      `https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/stackoverflow-${theme}.min.css`;
    this.theme = theme;
  }
}
