import { Age } from 'entities';

export interface AgeFormProps {
  isLoading?: boolean;
  age: Age | null;
  onSubmit: (name: string) => Promise<void>;
  onNameChange: (name: string) => void;
}

export interface AgeFormState {
  name: string;
}
