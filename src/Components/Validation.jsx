import * as Yup from 'yup'

export const Validation = Yup.object({
    name: Yup.string().max(15, "Must be 15 Characters or less").required('Field is required'),
    username: Yup.string().max(15, "Must be 15 Characters or less").required('Field is required'),
    email: Yup.string().email("Email is invalid").required('Field is required'),
    mobile: Yup.number().positive().integer().required('Field is required'),
    terms: Yup.string().required("Check this box if you want to proceed")
  })