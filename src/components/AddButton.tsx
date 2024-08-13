import React, {ReactElement} from 'react';
import '../css/AddButton.css';

interface IAddButtonProps { disabled: boolean; onClick: () => void; }

export function AddButton(props: IAddButtonProps): ReactElement {
  return (
    <button disabled={props.disabled} onClick={props.onClick} className='addButton'> Add </button>
  );
}
