import * as Yup from 'yup';

export const campaignDetailsSchema = Yup.object().shape({
  title: Yup.string().required('Campaign Title is required'),
  categoryIndex: Yup.string().required('Category is required'),
  goal: Yup.number().required('Fundraising goal is required').min(1, 'Goal must be at least 1'),
  endDate: Yup.date().required('End date is required')
});

export const mediaAndStorySchema = Yup.object().shape({
  campaignImage: Yup.mixed()
    .required('Campaign image is required')
    .test('fileType', 'Only image files are allowed', (value) => {
      return value instanceof File && value.type.startsWith('image/');
    }),
  description: Yup.string()
    .required('Campaign description is required')
    .min(50, 'Description must be at least 50 characters')
    .max(1000, 'Description cannot exceed 1000 characters'),
  aboutYou: Yup.string().max(500, 'About You section cannot exceed 500 characters').optional()
});
