import React, { useEffect, useState, Fragment, useCallback  } from "react";

import "./useInput.css";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [nameError, setNameError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      
      switch (validation) {
        case "minLength":
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
          break;
          
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;

        case "isEmail":
          const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
          break;

        case "isName":
          const regEx = /^[а-яА-ЯёЁa-zA-Z\-\s]+$/;
          regEx.test(String(value).toLowerCase()) ? setNameError(false) : setNameError(true);
          break;
        
        default:
          break;

      }
    }
  }, [value]);

  useEffect(() => {
    if(isEmpty || minLengthError || emailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, emailError])

  return {
    isEmpty,
    minLengthError,
    emailError,
    nameError,
    inputValid
  }

}

const useInput = (initialValue, validations) => {

  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onBlur = (e) => {
    setDirty(true);
  }

  const resetForm = useCallback(
    (newValue = "") => {
      setValue(newValue);
    },
    [setValue]
  )
  
  const result = () => {
    return (
      <Fragment>
        <div className="error-wrapper">
          {(isDirty && valid.isEmpty) && <span className="input-error" >Поле не может быть пустым. </span>}
          {(isDirty && valid.emailError && !valid.isEmpty) && <span className="input-error">Некорректный емэйл. </span>}
          {(isDirty && valid.minLengthError && !valid.isEmpty) && <span className="login__input-error">Некорректная длина. </span>}

          {(isDirty && valid.nameError && !valid.isEmpty) && <span className="input-error" >Только буквы пробел и дефис </span>}
        </div>
      </Fragment>
    )
  }

  return {
    result,
    value,
    onChange,
    onBlur,
    isDirty,
    resetForm,
    ...valid

  }


}

export default useInput;