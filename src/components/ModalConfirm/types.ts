export interface ModalConfirmProps {
  isOpen: boolean;
  closeModal(): void;
  onYesClick(): void;
  message: string;
}
