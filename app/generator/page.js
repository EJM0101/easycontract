
'use client';
import { useState } from 'react';
import ContractForm from '@/components/ContractForm';

export default function GeneratorPage() {
  const [type, setType] = useState('');

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Générateur de contrat</h2>

      <select
        onChange={(e) => setType(e.target.value)}
        className="border p-2 rounded mb-4 w-full"
        defaultValue=""
      >
        <option value="" disabled>Choisissez un type de contrat</option>
        <option value="licence">Licence logicielle</option>
        <option value="maintenance">Maintenance</option>
        <option value="hebergement">Hébergement</option>
        <option value="infogerance">Infogérance</option>
      </select>

      {type && <ContractForm type={type} />}
    </div>
  );
}
