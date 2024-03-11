import { Age } from 'entities/age';

export interface AgeFormProps {
  isLoading?: boolean;
  age: Age | null;
  onSubmit: (name: string) => Promise<void>;
  onNameChange: (name: string) => void;
  cancelCallback: () => void;
}

export interface AgeFormState {
  name: string;
}
