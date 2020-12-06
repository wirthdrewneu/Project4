import React, { useState } from 'react';
import _ from 'lodash';

export default function Pagination(props) {

    const {itemsCount, pageSize, onPageChange, currentPage} = props;
    console.log(currentPage);
    const pagesCount = Math.ceil(itemsCount / pageSize);
    const [pages] = useState(_.range(1, pagesCount + 1));

    if (pagesCount <= 1) return null;
    
    return (
        <div>
            <nav aria-label="...">
                <ul class="pagination">
                    {
                        pages.map((page, index) => (
                            <li 
                                class={page === currentPage ? "page-item active" : "page-item"} 
                                key={page}
                                tabIndex={0}
                                >
                                <a class="page-link" onClick={() => {onPageChange(page)}}>
                                    {page}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
}