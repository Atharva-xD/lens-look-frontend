import React from 'react';
import { useForm } from 'react-hook-form';

function ProductForm({ onSubmit, defaultValues = {} }) {
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Product Name</label>
      <input {...register('name')} placeholder="Product Name" />

      <label>Price</label>
      <input {...register('price')} placeholder="Price" type="number" />

      <label>Description</label>
      <textarea {...register('description')} placeholder="Product Description" />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ProductForm;
