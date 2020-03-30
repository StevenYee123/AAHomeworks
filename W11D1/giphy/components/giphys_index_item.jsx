import React from "react";

function GiphysIndexItem({giphy}) {
    debugger;
    return (
      <li>
        <img src={giphy.images.downsized_medium.url} alt="gif..." />
      </li>
    );
}

export default GiphysIndexItem;