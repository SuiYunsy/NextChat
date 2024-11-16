import React, { ComponentType } from "react";

interface WithModalMaskProps {
  onClose: () => void;
}

function withModalMask<P extends object>(WrappedComponent: ComponentType<P>) {
  return class WithModalMask extends React.Component<P & WithModalMaskProps> {
    handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        this.props.onClose();
      }
    };

    render() {
      return (
        <div className="modal-mask" onMouseDown={this.handleClick}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}

export default withModalMask;
