import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/template';
import { stripIndent } from 'common-tags';
import he from 'he';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/typescript';
import handlebars from 'highlight.js/lib/languages/handlebars';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('js', javascript);
hljs.registerLanguage('hbs', handlebars);
hljs.registerLanguage('bash', bash);

export default class UiCodeComponent extends Component {
  @tracked highlightedCode;
  @tracked lang;
  element;

  get languageName() {
    return {
      js: 'Javascript',
      hbs: 'Handlebars',
      bash: 'Terminal',
    }[this.lang];
  }

  @action onMount(element) {
    this.element = element;
    this.highlightCode();
  }

  @action update() {
    this.highlightCode();
  }

  highlightCode() {
    const code = this.args.code ?? he.decode(this.element.innerHTML);
    let result;
    if (this.args.lang) {
      result = hljs.highlight(code, { language: this.args.lang });
    } else {
      result = hljs.highlightAuto(code);
    }
    this.lang = result.language;
    this.highlightedCode = htmlSafe(stripIndent(result.value));
  }
}
