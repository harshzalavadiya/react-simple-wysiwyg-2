import React from 'react';

import { DefaultEditor } from '../src';

const meta = {
  title: 'Welcome',
  component: DefaultEditor,
};

export default meta;

const Template = () => {
  const [html, setHtml] = React.useState('first line <br> <b>second</b> line');

  function onChange(e) {
    setHtml(e.target.value);
  }

  return (
    <>
      <DefaultEditor value={html} onChange={onChange} title="ed1" />
      <hr />
      <DefaultEditor value={html} onChange={onChange} title="ed2" />
      {html}
    </>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {};
