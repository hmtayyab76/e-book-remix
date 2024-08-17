// Book.tsx

import MultiPageBook from '../components/MultiPageBook';

const pages = [
    [
        { title: 'Page 1 - Title 1', description: 'Description for page 1 - item 1' },
        { title: 'Page 1 - Title 2', description: 'Description for page 1 - item 2' },
        { title: 'Page 1 - Title 3', description: 'Description for page 1 - item 3' },
    ],
    [
        { title: 'Page 2 - Title 1', description: 'Description for page 2 - item 1' },
        { title: 'Page 2 - Title 2', description: 'Description for page 2 - item 2' },
        { title: 'Page 2 - Title 3', description: 'Description for page 2 - item 3' },
    ],
    [
        { title: 'Page 3 - Title 1', description: 'Description for page 3 - item 1' },
        { title: 'Page 3 - Title 2', description: 'Description for page 3 - item 2' },
        { title: 'Page 3 - Title 3', description: 'Description for page 3 - item 3' },
    ],
];

const Book = () => {
    return (
        <div className="">
        <MultiPageBook pages={pages} />
    </div>
    );
};

export default Book;
