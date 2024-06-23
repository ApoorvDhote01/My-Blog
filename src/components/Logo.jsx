import React from 'react';

function Logo({ width = "100px" }) {
    return (
        <div className="flex justify-center items-center">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoiqcN97BiiyPgKOFxrq_SPvxpNyrUbjSUgA&s"
                alt="Logo"
                style={{ width }}
                className="max-w-full h-auto"
            />
        </div>
    );
}

export default Logo;
