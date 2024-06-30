import Component from '@glimmer/component';
import slugify from 'slugify';

export default class UiSectionComponent extends Component {
  get anchorId() {
    return this.args.anchorId ?? slugify(this.args.title, { lower: true });
  }
}
