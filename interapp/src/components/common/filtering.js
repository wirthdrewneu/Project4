import React from 'react';
import "../../css/designs.css";

export default function Filters ({ items, textProperty, valueProperty, onItemSelect, selectedItem }) {
    return (
        <div class="filter-by shadow">
            <h2 className="header-std padding-std no-margin full-width center-text head-text">Filter By</h2>
            <ul class="list-group">
                { items.map ((item, index) => 
                    <li 
                        onClick={() => onItemSelect(item)}
                        key={item[valueProperty]}
                        tabIndex={0}
                        class={(item.stage === selectedItem) ? "list-group-item active" : "list-group-item"}>
                            {item[textProperty]}
                    </li>
                )}
            </ul>
        </div>
    );
}