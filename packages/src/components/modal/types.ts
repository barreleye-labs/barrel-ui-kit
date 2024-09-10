export interface ResponsiveModalProps {
  open: boolean;
  title: string;
  sub: string;
  onClose: () => void;
  onConfirm: () => void;
}