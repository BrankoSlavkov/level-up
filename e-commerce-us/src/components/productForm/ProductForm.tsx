import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number } from 'yup';

import { ProductFormData } from '../../store/product/productTypes';
import { getStates } from '../../store/state/stateSelector';
import { postProduct } from '../../store/product/productAction';
import { State } from '../../store/state/stateTypes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchStates } from '../../store/state/stateAction';

import { StateSelect } from '../stateSelect/StateSelect';
import { IMAGE_URL_REGEX } from '../../helpers/regexConstants';
import { CategorySelect } from '../categorySelect/CategorySelect';
import { Spinner } from '../spinner/Spinner';

import styles from './productForm.module.css';

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

export const ProductForm: FC<ProductFormProps> = ({ closeModalHandler }) => {
  const { states, isLoading, error } = useAppSelector(getStates);

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ProductFormData>({
    defaultValues,
    resolver: yupResolver(
      object()
        .shape({
          title: string()
            .required('Title is required')
            .min(4, 'Title should contain 4 characters'),
          picture: string()
            .required('Provide url for the image')
            .matches(IMAGE_URL_REGEX, 'Invalid image url'),
          price: number()
            .required('Price is required')
            .min(4, 'Price must be greater than 3')
            .test(
              'Price must be greater than 6',
              'price must be greater than 6',
              (value) => {
                if (!value) {
                  return false;
                }

                const state: State | undefined = states.find(
                  (eachState) => eachState.id === watch('stateId'),
                );
                if (!state) {
                  return false;
                }

                return Boolean(
                  (0.25 <= state.tax && value > 6) ||
                    (state.tax < 0.25 && value > 3),
                );
              },
            ),
          description: string().required('Description is required'),
          categoryId: number(),
          stateId: number(),
        })
        .required(),
    ),
  });

  useEffect(() => {
    dispatch(fetchStates());
  }, [dispatch]);

  const submitHandler = (data: ProductFormData) => {
    dispatch(postProduct(data));
    closeModalHandler();
  };

  const stateSelectOrLoading = isLoading ? (
    <Spinner size="sm" />
  ) : (
    <StateSelect
      register={register('stateId', { valueAsNumber: true })}
      states={states}
    />
  );

  const stateSelectOrError = error ? (
    <span className="error">{error}</span>
  ) : (
    stateSelectOrLoading
  );

  if (error) {
    return <span className="error">{error}</span>;
  }

  return (
    <>
      <h2 className={styles.title}>Create Product</h2>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className={styles.product__form}
      >
        <div className={styles.select__container}>
          {stateSelectOrError}
          <CategorySelect
            register={register('categoryId', { valueAsNumber: true })}
          />
        </div>
        <div className={styles.horizontal__group}>
          <input type="text" {...register('title')} placeholder="Title" />
          <input
            type="number"
            {...register('price', { valueAsNumber: true })}
            placeholder="Price"
            min={0}
          />
          {errors.title && (
            <span className="error">{errors.title.message}</span>
          )}
          {errors.price && (
            <span className="error">{errors.price.message}</span>
          )}
        </div>
        <div className={styles.form__group}>
          <input type="text" {...register('picture')} placeholder="Image url" />
          {errors.picture && (
            <span className="error">{errors.picture.message}</span>
          )}
        </div>
        <div className={styles.form__group}>
          <textarea {...register('description')} placeholder="Description" />
          {errors.description && (
            <span className="error">{errors.description.message}</span>
          )}
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            onClick={closeModalHandler}
            className={styles.cancel}
          >
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
