const InputGroupRadio = (props) => {
    const handleInputChange = (ev) => {
        props.handleChange(ev.target.value);
    }
    return (
        <div className="input-group-radio">
        <label className="label-radio" htmlFor={props.inputId}>
         {props.labelText}
        </label>
        {/* Este radio solo debe aparecer activo cuando paymentType sea creditCard */}
        <input
          type="radio"
          name={props.inputName}
          id={props.inputId}
          value={props.value}
          checked={props.paymentType}
          onChange={handleInputChange}
        />
      </div>
    )
}
export default InputGroupRadio;