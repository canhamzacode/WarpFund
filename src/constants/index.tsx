export const FILTERS = ['All Campaigns', 'Trending', 'Ending Soon', 'Fully Funded'] as const;

export const campaigns = [
  {
    title: 'Clean Water Initiative',
    description:
      'Providing clean water access to remote villages through sustainable well systems.',
    amountRaised: 2000,
    targetAmount: 4000,
    image: ''
  }
];

export const CATEGORIES = [
  {
    label: 'Select Category',
    value: 'default'
  },
  {
    label: 'Education',
    value: 'education'
  },
  {
    label: 'Health',
    value: 'health'
  },
  {
    label: 'Technology',
    value: 'technology'
  },
  {
    label: 'Environment',
    value: 'environment'
  },
  {
    label: 'Social',
    value: 'social'
  }
];
