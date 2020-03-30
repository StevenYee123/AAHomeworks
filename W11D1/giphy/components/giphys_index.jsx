import React from 'react';

import GiphysIndexItem from './giphys_index_item';

function GiphysIndex({giphys}) {
    return (
        <div>
            {giphys.map((gif) => <GiphysIndexItem key={gif.id} giphy={gif}/> )}
        </div>
    )
}

export default GiphysIndex;
