import { run } from '@ember/runloop';
import { modifier } from 'ember-modifier';
import {
  draggable,
  dropTargetForElements,
  monitorForElements
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';

import {
  attachClosestEdge,
  extractClosestEdge
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';

export const groupsRegistry = new Map;
window.r = groupsRegistry;

export default modifier(function sortableGroup (element, positional, {
  name,
  group = Math.random(),
  onSort = () => {},
  onAdd = () => {},
  onRemove = () => {},
} = {}) {
  // console.log('>>>> MEGAFART', { ...arguments[2] });

  element.dataset.sortableGroup = '';
  groupsRegistry.set(element, {
    group,
    name
  });

  const cleanup = combine(
    () => {
      groupsRegistry.delete(element);
    },
    monitorForElements({
      // onDragStart: (a) => {
      //   // source.data.srcgroup = group;
      //   // source.data.srcname = name;
      //   console.log('MONITOR onDragStart', a);
      // },
      // onDrop: ({ source, location }) => {
      //   // source.data.srcgroup = group;
      //   // source.data.srcname = name;
      //   console.log('>> MONITOR onDrop', a);
      // }
      onDrop: (event) => {
        const extractFromData = function (event, group, name) {
          const source = event.source;
          const data = source.data;

          return {
            element: source.element,
            group: data.group,
            name: data.name,
            isThisList: data.group === group && data.name === name,
            data: data.data,
          };
        };
        const extractToData = function (event, group, name) {
          const target = event.location.current.dropTargets[0];
          if (!target) {
            return {
              isThisList: false,
            };
          }

          const data = target?.data || {};

          return {
            element: target.element,
            group: data.group,
            name: data.name,
            isThisList: data.group === group && data.name === name,
            // isOutsideList: !data.group && !data.name,
            edge: extractClosestEdge(data),
            data: data.data,
          };
        };




        const from = extractFromData(event, group, name);
        const to = extractToData(event, group, name);

        // Ignore if element dragged is dropped on itself.
        if (from.element === to.element) {
          return;
        }

        if (!from.isThisList && !to.isThisList) {
          return;
        }

        console.log(`MONITORRR - GROUP(${group}:${name}) > ON DROP`, event);
        console.log('> FROM:', from.group, from.name, '>', from.data);
        console.log('> TO:', to.group, to.name, '>', to.data);
        // console.log('> IS OUTSIDE', isToOutside);
        console.log('> to.edge', to.edge);
        console.log('> from.isThisList', from.isThisList);
        console.log('> to.isThisList', to.isThisList);

        if (from.isThisList && to.isThisList) {
          return onSort({
            draggedItem: from.data,
            dropTarget: to.data,
            edge: to.edge,
            fromGroup: from.group,
            fromList: from.name,
            event
          });
        }
        if (from.isThisList && !to.isThisList) {
          return onRemove({
            draggedItem: from.data,
            dropTarget: to.data,
            edge: to.edge,
            fromGroup: from.group,
            fromList: from.name,
            toGroup: to.group,
            toList: to.name,
            event
          });
        }
        if (!from.isThisList && to.isThisList) {
          return onAdd({
            draggedItem: from.data,
            dropTarget: to.data,
            edge: to.edge,
            fromGroup: from.group,
            fromList: from.name,
            toGroup: to.group,
            toList: to.name,
            event
          });
        }

      },
    })
  );

  return cleanup;
}, { eager: false });
