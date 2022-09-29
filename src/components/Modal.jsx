import './Modal.css'

function Modal({ title, onModalCancel, onModalConfirm }) {
    return (
        <>
            <div className="modal">
                <p className="modal__title">{title}</p>
                <div className="modal__buttons">
                    <button onClick={onModalCancel} className="btn btn__cancel">Cancel</button>
                    <button onClick={onModalConfirm} className="btn">Confirm</button>
                </div>
            </div>
            <div className="backdrop" />
        </>
    )
}

export default Modal