import React, { useState } from 'react';
import Modal from 'src/components/templates/Modal';
import FormSuccess from './FormSuccess';
import ShareForm from './ShareForm';

type Props = {
  onClose: () => void;
};

const ShareOption = ({ onClose }: Props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [errors, setErrors] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const isValid = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test(inputValue);

    if (!inputValue) {
      setErrors('Email required');
    } else if (isValid) {
      setErrors('Email address is invalid');
    } else {
      setIsSuccess(true);
    }
  };

  return (
    <Modal
      height="300"
      width="500"
      onClose={onClose}
      title="Share"
      top="30"
      left="30"
    >
      {!isSuccess ? (
        <ShareForm
          errors={errors}
          value={inputValue}
          onInputChange={handleChange}
          onSubmitButton={onSubmit}
          onClose={onClose}
        />
      ) : (
        <FormSuccess />
      )}
    </Modal>
  );
};

export default ShareOption;
