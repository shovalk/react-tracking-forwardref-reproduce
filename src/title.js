import React from "react";
import track from 'react-tracking';

const TitleInput = React.forwardRef((props, ref) => (
    <input ref={ref} {...props} type="text" />
));

// export default TitleInput; // working
export default track({}, { forwardRef: true })(TitleInput); // not working