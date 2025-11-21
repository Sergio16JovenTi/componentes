import React, { useState } from "react";
import ConfirmModal from "./ConfirmModal";

export default function GameCard({ game, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeleteClick = () => setShowConfirm(true);
  const handleConfirm = async () => {
    setShowConfirm(false);
    // llama al backend para borrar
    await onDelete(game._id);
  };
  const handleCancel = () => setShowConfirm(false);

  return (
    <div className="game-card">
      <h4>{game.title}</h4>
      {/* ...resto de la tarjeta */}
      <div>
        <button onClick={handleDeleteClick} className="btn-delete">Eliminar</button>
      </div>

      <ConfirmModal
        open={showConfirm}
        title="Eliminar este juego?"
        message={`¿Estás seguro que quieres eliminar "${game.title}"? Esta acción no se puede deshacer.`}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
}
