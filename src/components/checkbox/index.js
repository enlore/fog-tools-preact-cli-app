import { h, Component } from 'preact';
// import connector from '../../connector'

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
              <img style="transform: rotate(45deg);" src="/assets/plus-add-white.png" />
            :
              <img src="/assets/plus-add-white.png" />
          }
        </div>

        <div class="checkboxControl__label"> { val.label } </div>
      </div>

    </div>
  )
}

export default Checkbox
