import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { FormBuilder } from '../src/';
import { Button, Modal } from '@devoinc/genesys-ui';

const meta: Meta = {
  title: 'Actions',
};

export default meta;
type Story = StoryObj<typeof Template>;

const Template = () => {
  const [model, setModel] = React.useState({
    children: [
      {
        key: 'test',
        name: 'Test',
        type: 'text',
        helper: 'Write anything...',
        method: 'onBlur',
        placeholder: 'Placeholder...',
        action: {
          id: 'showConfirmationModal',
          title: 'Are you sure?',
        },
        value: '',
      },
    ],
  });
  const [modal, setModal] = React.useState({
    showModal: false,
    onApply: null,
    onCancel: null,
    title: null,
    text: null,
  });
  return (
    <>
      {modal.showModal && (
        <Modal onRequestClose={() => modal?.onCancel()} windowSize={'sm'}>
          <Modal.Header title={modal.title} />
          <Modal.Body>{modal.text}</Modal.Body>
          <Modal.Footer
            actions={[
              <Button
                colorScheme="quiet"
                key={'cancel'}
                onClick={() => {
                  modal?.onCancel();
                }}
              >
                Cancel
              </Button>,
              <Button
                colorScheme="accent"
                key={'apply'}
                onClick={() => {
                  modal?.onApply();
                }}
              >
                Apply
              </Button>,
            ]}
          />
        </Modal>
      )}
      <FormBuilder
        actions={{
          showConfirmationModal: ({ next, prev, props, change, reset }) => {
            setModal({
              onApply: () => {
                change(next);
                setModal((prev) => ({ ...prev, showModal: false }));
              },
              onCancel: () => {
                reset();
                setModal((prev) => ({ ...prev, showModal: false }));
              },
              showModal: true,
              text: `Replace '${prev}' with '${next}'?`,
              title: props.action.title,
            });
          },
        }}
        model={model}
        onChange={(newModel) => {
          setModel(newModel);
        }}
      />
    </>
  );
};

export const Example: Story = {
  render: () => <Template />,
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `<FormBuilder
  actions={{
    showConfirmationModal: ({ next, prev, props, change, reset }) => {
      // If you want to change the value to the new value
      change(next);
      // If you want to back to previous value
      reset();
      // An example of text to show
      const text = \`Replace '\${prev}' with '\${next}'?\`;
      // An example of use the actions extra parameters
      const title = props.action.title;
    },
  }}
  model={{
    children: [
      {
        key: 'test',
        name: 'Test',
        type: 'text',
        helper: 'Write anything...',
        method: 'onBlur',
        placeholder: 'Placeholder...',
        action: {
          id: 'showConfirmationModal',
          title: 'Are you sure?',
        },
        value: '',
      }
    ]
  }}
/>`,
      },
    },
  },
};
