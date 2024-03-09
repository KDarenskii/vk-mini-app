export const isCancelError = (error: unknown) => {
  return typeof error === 'object' && error && 'silent' in error;
};
