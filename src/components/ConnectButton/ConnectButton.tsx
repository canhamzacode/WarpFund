'use client';

import { useAppKit, useAppKitAccount } from '@reown/appkit/react';
import React, { useState } from 'react';

const ConnectButton = () => {
  const { open } = useAppKit();
  const { isConnected } = useAppKitAccount();
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    try {
      await open();
    } catch (err) {
      setError('Failed to connect wallet. Please try again.');
      console.error(err);
    }
  };

  return (
    <div>
      <button
        onClick={handleConnect}
        className="text-sm font-semibold bg-primary text-white px-4 py-2 rounded-md"
      >
        {isConnected ? 'Disconnect' : 'Connect Wallet'}
      </button>
      {error && <div className="text-red-500 text-xs mt-2">{error}</div>}
    </div>
  );
};

export default ConnectButton;
