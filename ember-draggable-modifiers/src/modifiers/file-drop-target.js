import { modifier } from 'ember-modifier';
import { dropTargetForExternal } from '@atlaskit/pragmatic-drag-and-drop/external/adapter';
import {
  containsFiles,
  getFiles,
} from '@atlaskit/pragmatic-drag-and-drop/external/file';

/**
 */
export default modifier(
  function dropTarget(element) {
    return dropTargetForExternal({
      element: element,
      canDrop: containsFiles,
      onDragEnter: (a) => {
        console.log('>>>> DRAG ENTER', a, getFiles(a));
      },
      onDrop: (a) => {
        console.log('>>>> ON DROP', a, getFiles(a));
      },
    });
  },
  { eager: false },
);
