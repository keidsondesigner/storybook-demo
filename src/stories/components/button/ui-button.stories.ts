import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import UiButtonComponent from './ui-button.component';
import { UiButtonModule } from './ui-button.module';

export default {
  title: 'ui/ui-button',
  component: UiButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [UiButtonModule],
    })
  ],

} as Meta;

const Template: Story<UiButtonComponent> = (args: UiButtonComponent) => ({
  props: args,
  template: `
  <ui-button
    [isPrimary]="isPrimary"
    [backgroundColor]="backgroundColor"
    [label]="label"
    [buttonSize]="buttonSize"
  >
  </ui-button>
  `
});

export const Primary = Template.bind({});
Primary.args = {
  isPrimary: true,
  label: 'Teste button 2',
  buttonSize: 'small',
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonSize: 'medium',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  buttonSize: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  buttonSize: 'small',
  label: 'Button',
};
