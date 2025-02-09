// components/ButtonGroup.tsx
import { useState } from 'react';
import ItemsModal from './ItemsModal';
import LitUpButton from './litUpButton';

const ButtonGroup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveItem = (data: { title: string; description: string; image: string }) => {
    console.log('Item Saved:', data);
    // You can add logic to save the item data (e.g., API call, state update, etc.)
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="space-x-4">
      <LitUpButton
          title="Items"
          icon={null}
          position="left"
          handleClick={() => setIsModalOpen(true)}
        />
        <LitUpButton
          title="Tutoring"
          icon={null}
          position="left"
          otherClasses="cursor-not-allowed"
          handleClick={() => {}}
        />
        <LitUpButton
          title="Buddy Finder"
          icon={null}
          position="left"
          otherClasses="cursor-not-allowed"
          handleClick={() => {}}
        />
        <LitUpButton
          title="Housing Sublease"
          icon={null}
          position="left"
          otherClasses="cursor-not-allowed"
          handleClick={() => {}}
        />

      </div>

      <ItemsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSaveItem}
      />
    </div>
  );
};

export default ButtonGroup;