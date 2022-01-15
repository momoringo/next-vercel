import yup from '../yup'

export const schema = yup.object().shape({
  name: yup.string().required(),
  mom: yup.string().required().max(2, '10文字以下を入れてください') 
})