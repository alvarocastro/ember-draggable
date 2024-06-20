import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import slugify from 'slugify';

export default class UiSectionComponent extends Component {
  get anchorId () {
    return this.args.anchorId ?? slugify(this.args.title, { lower: true });
  }
}

