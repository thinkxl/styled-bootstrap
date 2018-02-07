import { css } from 'styled-components';

import { boxShadow } from './box-shadow';

import {
  inputColorFocus,
  inputBgFocus,
  inputBorderColorFocus,
  inputBoxShadowFocus
} from './defaultTheme';

// Form validation states
//
// Used in _forms.scss to generate the form validation CSS for warnings, errors,
// and successes.

// export function formControlValidation(color) {
//   // Color the label and help text
//   .form-control-feedback,
//   .form-control-label,
//   .col-form-label,
//   .form-check-label,
//   .custom-control {
//     color: $color;
//   }

//   // Set the border and box shadow on specific inputs to match
//   .form-control,
//   .custom-select,
//   .custom-file-control {
//     border-color: $color;

//     &:focus {
//       @include box-shadow($input-box-shadow, 0 0 6px lighten($color, 20%));
//     }
//   }

//   // Set validation states also for addons
//   .input-group-addon {
//     color: $color;
//     background-color: lighten($color, 40%);
//     border-color: $color;
//   }
// }

// Form control focus state
//
// Generate a customized focus state and for any input with the specified color,
// which defaults to the `@input-border-color-focus` variable.
//
// We highly encourage you to not customize the default value, but instead use
// this to tweak colors on an as-needed basis. This aesthetic change is based on
// WebKit's default styles, but applicable to a wider range of browsers. Its
// usability and accessibility should be taken into account with any change.
//
// Example usage: change the default blue border and shadow to white for better
// contrast against a dark gray background.
export function formControlFocus() {
  return css`
    &:focus {
      color: ${inputColorFocus};
      background-color: ${inputBgFocus};
      border-color: ${inputBorderColorFocus};
      outline: none;
      ${boxShadow(inputBoxShadowFocus)};
    }
  `;
}

export default formControlFocus;
