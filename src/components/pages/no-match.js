import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
    return (
        <div>
            <h2>
                Woops! I don't even know how you got here...
            </h2>
            <Link to="/">
                Return to Homepage
            </Link>
        </div>
    )
}