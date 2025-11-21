import React from "react";
import "./ConfirmModal.css";

export default function ConfirmModal({ open, title, message, onConfirm, onCancel }) {
  if (!open) return null;

  return (
    <div className="cm-backdrop" role="dialog" aria-modal="true" aria-labelledby="cm-title">
      <div className="cm-panel">
        <h3 id="cm-title" className="cm-title">{title}</h3>
        <p className="cm-message">{message}</p>

        <div className="cm-actions">
          <button className="cm-btn cm-btn-confirm" onClick={onConfirm}>Aceptar</button>
          <button className="cm-btn cm-btn-cancel" onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
