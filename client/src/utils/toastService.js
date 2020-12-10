import { useToasts } from 'react-toast-notifications';

export const ErrorToast = ({ content }) => {
  const { addToast } = useToasts();

  return addToast(content, {
    appearance: 'error',
    autoDismiss: true,
  });
};

export const SuccessToast = ({ content }) => {
  const { addToast } = useToasts();

  return addToast(content, {
    appearance: 'success',
    autoDismiss: true,
  });
};

export const InfoToast = ({ content }) => {
  const { addToast } = useToasts();

  return addToast(content, {
    appearance: 'info',
    autoDismiss: true,
  });
};

export const WarningToast = ({ content }) => {
  const { addToast } = useToasts();

  return addToast(content, {
    appearance: 'warning',
    autoDismiss: true,
  });
};

export default {
  ErrorToast,
  WarningToast,
  InfoToast,
  SuccessToast,
};
