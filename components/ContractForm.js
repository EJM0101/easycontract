
'use client';
import { useState } from 'react';
import { exportToPDF } from '@/utils/pdfUtils';

const clauses = {
  licence: ['Durée de la licence', 'Nombre d’utilisateurs', 'Interdiction de modification du logiciel', 'Prix et paiement'],
  maintenance: ['Délai d’intervention', 'Services inclus', 'SLA (accord de niveau de service)', 'Tarification'],
  hebergement: ['Disponibilité', 'Sauvegarde et sécurité', 'Support technique', 'Limitation de responsabilité'],
  infogerance: ['Nature de la prestation', 'Engagement de confidentialité', 'Durée et renouvellement', 'Responsabilités du prestataire']
};

export default function ContractForm({ type }) {
  const [formData, setFormData] = useState({});
  const [username, setUsername] = useState('');

  const handleChange = (clause, value) => {
    setFormData({ ...formData, [clause]: value });
  };

  const handleGenerate = () => {
    if (!username) return alert('Veuillez saisir votre nom complet.');
    exportToPDF(`${type.toUpperCase()} - ${username}`, { ...formData, Signataire: username });
  };

  return (
    <div className="space-y-4">
      <label className="block font-semibold">Votre nom complet (signataire)</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded w-full mb-4"
        placeholder="Ex : Jean Dupont"
      />

      <h3 className="text-xl font-bold mb-2">Clauses pour contrat de {type}</h3>
      {clauses[type].map((clause) => (
        <div key={clause}>
          <label className="block font-semibold">{clause}</label>
          <input
            type="text"
            onChange={(e) => handleChange(clause, e.target.value)}
            className="border p-2 rounded w-full"
            placeholder={`Décrivez "${clause.toLowerCase()}"`}
          />
        </div>
      ))}

      <button
        onClick={handleGenerate}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        📄 Générer le contrat PDF
      </button>
    </div>
  );
}
