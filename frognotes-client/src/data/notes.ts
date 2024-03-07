import { v4 as uuidv4 } from 'uuid';

const notes = {
    notes: [
        {
            id: uuidv4(), // Add UUID to Example Note 1
            title: 'Example Note 1',
            short_description: 'This is a short description for Example Note 1.',
            long_description: 'This is a longer description providing more details about Example Note 1.',
            timestamp: '2024-03-04T12:30:00',
            sources: ['file1.txt', 'file2.txt'], // Sources for Example Note 1
        },
        {
            id: uuidv4(), // Add UUID to Example Note 2
            title: 'Example Note 2',
            short_description: 'This is a short description for Example Note 2.',
            long_description: 'This is a longer description providing more details about Example Note 2.',
            timestamp: '2024-03-03T15:45:00',
            sources: ['file3.txt'], // Sources for Example Note 2
        },
        {
            id: uuidv4(), // Add UUID to Example Note 3
            title: 'Example Note 3',
            short_description: 'This is a short description for Example Note 3.',
            long_description: 'This is a longer description providing more details about Example Note 3.',
            timestamp: '2024-03-02T09:00:00',
            sources: ['file4.txt', 'file5.txt', 'file6.txt'], // Sources for Example Note 3
        },
    ],
};

module.exports = notes;
