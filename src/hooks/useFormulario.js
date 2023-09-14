import { useState } from "react";


export const useFormulario = (initialState, addCategoria) => {
  const [values, setValues] = useState(initialState);

  const handleChange = ({target}) => {
    const { name, value } = target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.categoria) {
     addCategoria(values.categoria);
     reset();
    }
   
  };

  const reset = () => {
    setValues(initialState);
  };

  return [values, handleChange, handleSubmit, reset];
};
