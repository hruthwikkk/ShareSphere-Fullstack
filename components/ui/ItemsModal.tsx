// components/ItemsModal.tsx
import { useState } from 'react';
import LitUpButton from './litUpButton';

type ItemsModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { title: string; description: string; image: string }) => void;
};

const ItemsModal = ({ isOpen, onClose, onSubmit }: ItemsModalProps) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, description, image });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-black p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-600">
                <h2 className="text-xl font-bold text-white mb-4">Enter Item Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-400 mb-1">Upload Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    const reader = new FileReader();
                                    reader.onload = (event) => {
                                        if (event.target && typeof event.target.result === 'string') {
                                            setImage(event.target.result);
                                        }
                                    };
                                    reader.readAsDataURL(e.target.files[0]);
                                }
                            }}
                            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                            required
                        />
                    </div>
                    <div className="flex justify-end gap-3">
                        <LitUpButton
                            title="Cancel"
                            icon={null}
                            position="left"
                            handleClick={onClose}
                            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                        <LitUpButton
                            title="Save"
                            icon={null}
                            position="left"
                            handleClick={handleSubmit}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ItemsModal;