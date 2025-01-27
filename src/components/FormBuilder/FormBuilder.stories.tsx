import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, Modal, Typography } from '@devoinc/genesys-ui';

import { FormBuilder } from './FormBuilder';
import { IModel } from '../../definitions';

const meta: Meta<typeof FormBuilder> = {
  title: 'FormBuilder',
  component: FormBuilder,
};

export default meta;
type Story = StoryObj<typeof FormBuilder>;

export const Example: Story = {
  render: ({ model }) => {
    const [innerModel, setInnerModel] = React.useState(model);
    return <FormBuilder model={innerModel} onChange={setInnerModel} />;
  },
  args: {
    model: {
      children: [
        {
          key: 'groupInfo',
          type: 'group',
          name: 'Info Group',
          children: [
            {
              key: 'info',
              type: 'info',
              name: 'Info',
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
  Maecenas vitae elementum neque.',
              status: 'success',
            },
            {
              key: 'label',
              type: 'label',
              name: 'Label',
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
          Maecenas vitae elementum neque.',
            },
          ],
        },
        {
          key: 'groupBasicFields',
          type: 'group',
          name: 'Basic Fields Group',
          children: [
            {
              key: 'bool',
              name: 'Bool',
              type: 'bool',
              value: false,
            },
            {
              key: 'text',
              name: 'Text',
              type: 'text',
              helper:
                'Helper: Lorem ipsum dolor sit amet, consectetur adipiscing \
      elit. Maecenas vitae elementum neque.',
              method: 'onBlur',
              placeholder: 'Placeholder...',
            },
            {
              key: 'list',
              name: 'List',
              type: 'list',
              options: [
                { value: 'op1', label: 'Option 1' },
                { value: 'op2', label: 'Option 2' },
              ],
              value: 'op1',
            },
            {
              key: 'textarea',
              name: 'Text Area',
              type: 'textarea',
              placeholder: 'Placeholder...',
            },
            {
              key: 'color',
              name: 'Color',
              type: 'color',
            },
            {
              key: 'number',
              name: 'Number',
              type: 'number',
              method: 'onBlur',
            },
          ],
        },
        {
          key: 'groupListField',
          type: 'group',
          name: 'List Group',
          children: [
            {
              key: 'list100',
              name: 'List With 100 Elements',
              type: 'list',
              options: Array(3)
                .fill(0)
                .map((_, idx) => ({
                  value: `op${idx}`,
                  label: `Item ${idx}`,
                })),
              value: 'op1',
            },
            {
              key: 'multi',
              name: 'Multiple & Sortable',
              type: 'list',
              options: Array(3)
                .fill(0)
                .map((_, idx) => ({
                  value: `item${idx}`,
                  label: `Item ${idx}`,
                })),
              isMulti: true,
              isSortable: true,
            },
          ],
        },
        {
          key: 'specialGroup',
          type: 'group',
          name: 'Special Group',
          children: [
            {
              key: 'hflex',
              type: 'hflex',
              children: [
                {
                  key: 'left',
                  name: 'Left',
                  type: 'text',
                  method: 'onBlur',
                  placeholder: 'Placeholder...',
                },
                {
                  key: 'right',
                  name: 'Right',
                  type: 'text',
                  method: 'onBlur',
                  placeholder: 'Placeholder...',
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

export const WithoutGroup: Story = {
  render: ({ model }) => {
    const [innerModel, setInnerModel] = React.useState(model);
    return <FormBuilder model={innerModel} onChange={setInnerModel} />;
  },
  args: {
    model: {
      children: [
        {
          key: 'bool',
          name: 'Bool',
          type: 'bool',
          value: false,
        },
        {
          key: 'text',
          name: 'Text',
          type: 'text',
          helper: 'Helper: Lorem ipsum dolor sit amet, consectetur ',
          method: 'onBlur',
          placeholder: 'Placeholder...',
        },
        {
          key: 'list',
          name: 'List',
          type: 'list',
          options: [
            { value: 'op1', label: 'Option 1' },
            { value: 'op2', label: 'Option 2' },
          ],
          value: 'op1',
        },
        {
          key: 'textarea',
          name: 'Text Area',
          type: 'textarea',
          placeholder: 'Placeholder...',
        },
        {
          key: 'color',
          name: 'Color',
          type: 'color',
        },
        {
          key: 'number',
          name: 'Number',
          type: 'number',
          method: 'onBlur',
        },
      ],
    },
  },
};

export const CustomField: Story = {
  render: ({ model, fields }) => {
    const [innerModel, setInnerModel] = React.useState(model);
    return (
      <FormBuilder
        model={innerModel}
        onChange={setInnerModel}
        fields={fields}
      />
    );
  },
  args: {
    fields: {
      custom: ({ value }) => {
        return <Typography.Heading>{value as string}</Typography.Heading>;
      },
    },
    model: {
      children: [
        {
          key: 'custom',
          name: 'Custom Field',
          type: 'custom',
          value: 'custom field value',
        },
      ],
    },
  },
};

export const Actions: Story = {
  render: () => {
    const [model, setModel] = React.useState<IModel>({
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
            params: {
              title: 'Are you sure?',
            },
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
                title: props.action.params.title,
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
  },
};
