import _isNull from 'lodash/isNull'
import * as yup from 'yup'

/* eslint no-template-curly-in-string: off */
yup.setLocale({
  mixed: {
    default: '${path} is invalid',
    required: '必須項目です',
    oneOf: '${path} must be one of the following values: ${values}',
    notOneOf: '${path} must not be one of the following values: ${values}',
    notType: (_ref) => {
      switch (_ref.type) {
        case 'number':
          return '数値を入力してください'
        case 'date':
          return '不正な日付です'
        default:
          return '不正な値です'
      }
    },
  },
  string: {
    length: '${path} must be exactly ${length} characters',
    min: '${path} must be at least ${min} characters',
    max: '${path} must be at most ${max} characters',
    matches: '${path} must match the following: "${regex}"',
    email: '${path} must be a valid email',
    url: '${path} must be a valid URL',
    trim: '${path} must be a trimmed string',
    lowercase: '${path} must be a lowercase string',
    uppercase: '${path} must be a upper case string',
  },
  number: {
    min: '${min}以上の数値を入力してください',
    max: '${max}以下の数値を入力してください',
    lessThan: '${path} must be less than ${less}',
    moreThan: '${path} must be greater than ${more}',
    positive: '正の整数を入力してください',
    negative: '${path} must be a negative number',
    integer: '${path} must be an integer',
  },
  date: {
    min: '${path} field must be later than ${min}',
    max: '${path} field must be at earlier than ${max}',
  },
  object: {
    noUnknown: '${path} field has unspecified keys: ${unknown}',
  },
  array: {
    min: '${path} field must have at least ${min} items',
    max: '${path} field must have less than or equal to ${max} items',
  },
})

yup.addMethod<yup.DateSchema<Date | null | undefined>>(
  yup.date,
  'required',
  // eslint-disable-next-line func-names
  function () {
    return this.nullable().test('required', '必須項目です', (value) => {
      return !_isNull(value)
    })
  }
)

export default yup