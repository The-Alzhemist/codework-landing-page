export interface PDPAPopupAcceptProps {
  onAccept?: () => void;
};

export interface PDPAPopupProps {
  isOpen: boolean;
  handleClose: () => void;
  shouldRender: boolean
}