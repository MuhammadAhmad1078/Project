import React from 'react'

const Pagination = () => {
  return (
    <div className='mt-5'>
        <nav className="inline-flex gap-2 justify-center rounded-md items-center w-full" aria-label="Pagination">
            <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400">
                <span className="sr-only">Previous</span>
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
            </a>
            <a href="#" aria-current="page" className="relative bg-[#E2BF4B] inline-flex items-center px-4 py-2 text-sm font-semibold text-[#FCFCFD] rounded-lg">1</a>
            <a href="#" className="relative bg-[#23262F] inline-flex items-center px-4 py-2 text-sm font-semibold text-[#FCFCFD] rounded-lg">2</a>
            <span className="relative bg-[#23262F] inline-flex items-center px-4 py-2 text-sm font-semibold text-[#FCFCFD] rounded-lg">...</span>
            <a href="#" className="relative bg-[#23262F] inline-flex items-center px-4 py-2 text-sm font-semibold text-[#FCFCFD] rounded-lg">5</a>
            <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-[#FCFCFD]">
                <span className="sr-only">Next</span>
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
            </a>
        </nav>
    </div>
  )
}

export {Pagination}