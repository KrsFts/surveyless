import React, {useState} from 'react';

import DraftPreview from './DraftPreview';

function DraftNavBar() {
  const [enablePreview, setIsEnablePreview] = useState(false);
  return (
    <div>
      <button onClick={() => setIsEnablePreview(!enablePreview)}>
        Preview
      </button>
      {enablePreview}
      {enablePreview && <DraftPreview />}
    </div>
  );
}

export default DraftNavBar;