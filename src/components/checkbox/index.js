import { h, Component } from 'preact';
import connector from '../../connector'

function Checkbox ({ val, checked, onChecked, ...props }) {
  return (
    <div class="checkboxControl"
      role="checkbox"
      onClick={ ev => onChecked(val) }
      { ...props }
    >

      <div class="checkboxControl__checkbox">
        <div class="checkboxControl__icon">
          { checked ?
              'X'
            : '+'
          }
        </div>
        <span class="checkboxControl__label"> { val.label } </span>
      </div>

    </div>
  )
}

export default Checkbox
