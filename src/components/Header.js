import React from 'react';
import Paper from 'material-ui/Paper';
import logo from './logo.png';

const Header = () => (
    <Paper
        zDepth={5}
        style={{
            height: '64px',
            backgroundColor: '#212121',
            zIndex: 5,
        }}
    >
        <div
            style={{
                width: '100%',
            }}
        >
            <img
                style={{
                    float: 'left',
                    height: '40px',
                    bottom: '60px',
                }}
                src={logo}
                alt="logo"
            />
            <h2 style={{ height: '100%' }}>Halo Forge</h2>
        </div>
    </Paper>
);

export default Header;
