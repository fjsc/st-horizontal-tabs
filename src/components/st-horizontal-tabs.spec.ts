import { StHorizontalTabs } from './st-horizontal-tabs';
import { fixture, html } from '@open-wc/testing';

const assert = chai.assert;

suite('st-horizontal-tabs', () => {
  test('is defined', () => {
    const el = document.createElement('st-horizontal-tabs');
    assert.instanceOf(el, StHorizontalTabs);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<st-horizontal-tabs></st-horizontal-tabs>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });
});
