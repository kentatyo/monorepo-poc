// src/components/PageTitle.stories.js
import PageTitle from '@/components/PageTitle.vue';

export default {
  title: 'Components/PageTitle',
  component: PageTitle,
  argTypes: {
    pageTitle: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { PageTitle },
  setup() {
    return { args };
  },
  template: '<PageTitle v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  pageTitle: 'デフォルトページタイトル',
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  pageTitle: '非常に長いページタイトルの例です',
};

export const ShortTitle = Template.bind({});
ShortTitle.args = {
  pageTitle: '短いタイトル',
};
