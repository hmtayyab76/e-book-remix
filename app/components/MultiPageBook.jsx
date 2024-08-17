import  { useState } from 'react';
import PropTypes from 'prop-types';

const MultiPageBook = ({ pages }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="flex relative flex-col items-center justify-center h-screen w-screen p-4">
            {/* Page Number Display */}
            <div className="absolute top-4 flex justify-center w-full">
                <span className="text-lg font-semibold">
                    Page {currentPage + 1} of {pages.length}
                </span>
            </div>

            <div className="relative w-full max-w-3xl h-[80vh] bg-white shadow-lg rounded-lg overflow-hidden">
                <div
                    className="absolute top-0 bottom-0 left-0 right-0 flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentPage * 100}%)` }}
                >
                    {pages.map((page, index) => (
                        <div key={index} className="w-full h-full flex flex-col p-6 shrink-0">
                            {page.map((item, i) => (
                                <div key={i} className="mb-6">
                                    <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
                                    <p className="text-gray-700">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-4 flex justify-center w-full">
                <button
                    className="bg-gray-700 w-24 text-white p-2 rounded mx-2"
                    onClick={handlePrev}
                    disabled={currentPage === 0}
                >
                    Previous
                </button>
                <button
                    className="bg-gray-700 w-24 text-white p-2 rounded mx-2"
                    onClick={handleNext}
                    disabled={currentPage === pages.length - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

MultiPageBook.propTypes = {
    pages: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            })
        )
    ).isRequired,
};

export default MultiPageBook;
