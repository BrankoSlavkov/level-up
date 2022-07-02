import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ProductFormData } from '../../store/product/productTypes';

import { IMAGE_URL_REGEX } from '../../helpers/regexConstants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { postProduct } from '../../store/product/productAction';

import styles from './productForm.module.css';
import { StateSelect } from '../stateSelect/StateSelect';
import { getStates } from '../../store/state/stateSelector';
import { CategorySelect } from '../categorySelect/CategorySelect';

type ProductFormProps = {
  closeModalHandler: () => void;
};

const defaultValues: ProductFormData = {
  title: '',
  picture: '',
  description: '',
  price: 0,
  categoryId: 1,
  stateId: 1,
};

const schema = yup
  .object()
  .shape({
    title: yup.string().required('Title is required'),
    picture: yup.string().required('Provide url for the image').matches(IMAGE_URL_REGEX, 'Invalid image url'),
    price: yup.number().required('Price is required').min(0.01, 'Price must be greater than 0'),
    description: yup.string().required('Description is required'),
    categoryId: yup.number().required(),
    stateId: yup.number().required(),
  })
  .required();

export const ProductForm: FC<ProductFormProps> = ({ closeModalHandler }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({ defaultValues, resolver: yupResolver(schema) });
  const { states, isLoading, error } = useAppSelector(getStates);

  const submitHandler = (data: ProductFormData) => {
    dispatch(postProduct(data));
    closeModalHandler();
  };

  return (
    <>
      <h2 className={styles.title}>Create Product</h2>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.product__form}>
        <div>
          <StateSelect register={register('stateId')} states={states} />
          <CategorySelect register={register('categoryId')} />
        </div>
        <div className={styles.horizontal__group}>
          <input type="text" {...register('title')} placeholder="Title" />
          <input type="number" {...register('price')} placeholder="Price" min={0} />
          {errors.title && <span className={styles.error}>{errors.title.message}</span>}
          {errors.price && <span className={styles.error}>{errors.price.message}</span>}
        </div>
        <div className={styles.form__group}>
          <input type="text" {...register('picture')} placeholder="Image url" />
          {errors.picture && <span className={styles.error}>{errors.picture.message}</span>}
        </div>
        <div className={styles.form__group}>
          <textarea {...register('description')} placeholder="Description" />
          {errors.description && <span className={styles.error}>{errors.description.message}</span>}
        </div>

        <div className={styles.controls}>
          <button type="button" onClick={closeModalHandler} className={styles.cancel}>
            Cancel
          </button>
          <button type="submit" className={styles.confirm}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
