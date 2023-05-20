import ReactPaginate from 'react-paginate';


export default function Paginate({onClick, totalPages}) {
    return (
        <div className='mt-8 float-right'>
            <ReactPaginate
                nextLabel=">"
                onPageChange={onClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={totalPages}
                previousLabel="<"
                pageClassName="relative bg-white inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:opacity-90 focus:z-20 focus:outline-offset-0"
                previousLinkClassName="relative bg-white inline-flex items-center rounded-l-md px-2 py-2 text-sm text-gray-400 ring-1 ring-inset ring-gray-300 hover:opacity-95 focus:z-20 focus:outline-offset-0"
                nextLinkClassName="relative bg-white inline-flex items-center rounded-r-md px-2 py-2 text-sm text-gray-400 ring-1 ring-inset ring-gray-300 hover:opacity-95 focus:z-20 focus:outline-offset-0"
                breakLabel="..."
                breakLinkClassName="relative bg-white inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                containerClassName="isolate inline-flex -space-x-px rounded-md shadow-sm"
                activeClassName="bg-blue-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}
