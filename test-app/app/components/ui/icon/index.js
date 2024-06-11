import Component from '@glimmer/component';
import { assert } from '@ember/debug';

export default class UiIconComponent extends Component {
  get classStr () {
    assert('Must pass an icon name', this.args.name);

    return [
      `fa-${this.args.style ?? 'solid'}`,
      `fa-${this.args.name}`,
      (this.args.fw ?? true) && 'fa-fw',
      this.args.class
    ].filter(Boolean).join(' ');
  }
}
