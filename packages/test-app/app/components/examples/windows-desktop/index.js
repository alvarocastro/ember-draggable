import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/template';

class Icon {
  @tracked x;
  @tracked y;

  get position() {
    return htmlSafe(`top: ${this.y}px; left: ${this.x}px`);
  }

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
class GenericIcon extends Icon {
  constructor(x, y, name, image) {
    super(...arguments);
    this.name = name;
    this.image = image;
  }
}
class MyComputerIcon extends GenericIcon {
  name = 'My Computer';
  image = 'https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png';
}
class TrashIcon extends Icon {
  @tracked isFull = false;

  name = 'Recycle Bin';

  get image() {
    return this.isFull
      ? 'https://win98icons.alexmeub.com/icons/png/recycle_bin_full-4.png'
      : 'https://win98icons.alexmeub.com/icons/png/recycle_bin_empty-4.png';
  }
}

const GRID = {
  MARGIN: 8,
  HEIGHT: 96,
  WIDTH: 96,
};
export default class ExamplesSharedListsComponent extends Component {
  @tracked icons = [
    new MyComputerIcon(
      GRID.MARGIN + GRID.WIDTH * 0,
      GRID.MARGIN + GRID.HEIGHT * 0,
    ),
    new GenericIcon(
      GRID.MARGIN + GRID.WIDTH * 0,
      GRID.MARGIN + GRID.HEIGHT * 1,
      'My Documents',
      'https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png',
    ),
    new GenericIcon(
      GRID.MARGIN + GRID.WIDTH * 0,
      GRID.MARGIN + GRID.HEIGHT * 2,
      'top secret',
      'https://win98icons.alexmeub.com/icons/png/directory_closed-4.png',
    ),
    new GenericIcon(
      GRID.MARGIN + GRID.WIDTH * 0,
      GRID.MARGIN + GRID.HEIGHT * 3,
      'fancy.html',
      'https://win98icons.alexmeub.com/icons/png/html-5.png',
    ),
    new GenericIcon(
      GRID.MARGIN + GRID.WIDTH * 1,
      GRID.MARGIN + GRID.HEIGHT * 0,
      'DELETE ME!.txt',
      'https://win98icons.alexmeub.com/icons/png/notepad_file-2.png',
    ),
    new GenericIcon(
      GRID.MARGIN + GRID.WIDTH * 1,
      GRID.MARGIN + GRID.HEIGHT * 1,
      'flower.bmp',
      'https://win98icons.alexmeub.com/icons/png/paint_file-4.png',
    ),
  ];
  trash = new TrashIcon(
    GRID.MARGIN + GRID.WIDTH * 5,
    GRID.MARGIN + GRID.HEIGHT * 3,
    'Recycle Bin',
  );

  get isFatalErrorState() {
    return !this.icons.find((icon) => icon instanceof MyComputerIcon);
  }

  @action move(payload) {
    const icon = payload.source.data;
    const { pageX: fromX, pageY: fromY } = payload.event.location.initial.input;
    const { pageX: toX, pageY: toY } = payload.event.location.current.input;

    icon.x = icon.x + toX - fromX;
    icon.y = icon.y + toY - fromY;
  }

  @action delete({ source: { data: icon }, target: { data: target } }) {
    if (!confirm(`Are you sure you want to delete "${icon.name}"?`)) {
      return;
    }
    this.icons = this.icons.filter((i) => i !== icon);
    target.isFull = true;
  }
}
