import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IRequirement {
  title: string;
  description?: string;
}

interface GatherRequirementsFormValues {
  requirementTitle: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<IRequirement[]>([]);
  const { register, handleSubmit, reset } = useForm<GatherRequirementsFormValues>();

  const onSubmit: SubmitHandler<GatherRequirementsFormValues> = (data) => {
    if (!data.requirementTitle.trim()) return;
    setRequirements([...requirements, { title: data.requirementTitle, description: data.requirementDescription }]);
    reset();
  };

  const removeRequirement = (index: number) => {
    const newRequirements = requirements.filter((_, i) => i !== index);
    setRequirements(newRequirements);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Gather Requirements</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="requirementTitle" className="block text-sm font-medium text-gray-700">
            Requirement Title
          </label>
          <input
            type="text"
            id="requirementTitle"
            {...register('requirementTitle', { required: true })}
            className={twMerge(
              'w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500',
              !register('requirementTitle').ref.current?.valid && 'border-red-500'
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="requirementDescription" className="block text-sm font-medium text-gray-700">
            Requirement Description
          </label>
          <textarea
            id="requirementDescription"
            {...register('requirementDescription')}
            rows={3}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Add Requirement
        </button>
      </form>

      {requirements.length > 0 && (
        <ul className="mt-8 space-y-3">
          {requirements.map((requirement, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">{requirement.title}</h3>
                {requirement.description && <p className="mt-1 text-sm text-gray-600">{requirement.description}</p>}
              </div>
              <button
                type="button"
                onClick={() => removeRequirement(index)}
                aria-label={`Remove requirement ${index + 1}`}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IRequirement {
  title: string;
  description?: string;
}

interface GatherRequirementsFormValues {
  requirementTitle: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<IRequirement[]>([]);
  const { register, handleSubmit, reset } = useForm<GatherRequirementsFormValues>();

  const onSubmit: SubmitHandler<GatherRequirementsFormValues> = (data) => {
    if (!data.requirementTitle.trim()) return;
    setRequirements([...requirements, { title: data.requirementTitle, description: data.requirementDescription }]);
    reset();
  };

  const removeRequirement = (index: number) => {
    const newRequirements = requirements.filter((_, i) => i !== index);
    setRequirements(newRequirements);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Gather Requirements</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="requirementTitle" className="block text-sm font-medium text-gray-700">
            Requirement Title
          </label>
          <input
            type="text"
            id="requirementTitle"
            {...register('requirementTitle', { required: true })}
            className={twMerge(
              'w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500',
              !register('requirementTitle').ref.current?.valid && 'border-red-500'
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="requirementDescription" className="block text-sm font-medium text-gray-700">
            Requirement Description
          </label>
          <textarea
            id="requirementDescription"
            {...register('requirementDescription')}
            rows={3}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Add Requirement
        </button>
      </form>

      {requirements.length > 0 && (
        <ul className="mt-8 space-y-3">
          {requirements.map((requirement, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">{requirement.title}</h3>
                {requirement.description && <p className="mt-1 text-sm text-gray-600">{requirement.description}</p>}
              </div>
              <button
                type="button"
                onClick={() => removeRequirement(index)}
                aria-label={`Remove requirement ${index + 1}`}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GatherRequirements;