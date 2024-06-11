import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { stripIndent } from 'common-tags'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/typescript';
import handlebars from 'highlight.js/lib/languages/handlebars';

hljs.registerLanguage('js', javascript);
hljs.registerLanguage('hbs', handlebars);

export default class UiCodeComponent extends Component {
  @tracked highlightedCode;
  @tracked lang;
  element;

  get languageName () {
    return ({
      js: 'Javascript',
      hbs: 'Handlebars',
    })[this.lang];
  }

  @action init (element) {
    this.element = element;
    this.highlightCode();
  }

  @action update () {
    this.highlightCode();
  }

  highlightCode () {
    const code = this.args.code ?? this.element.innerHTML;
    let result;
    if (this.args.lang) {
      result = hljs.highlight(code, { language: this.args.lang });
    } else {
      result = hljs.highlightAuto(code);
    }
    this.lang = result.language;
    this.highlightedCode = stripIndent(result.value);
  }
}
