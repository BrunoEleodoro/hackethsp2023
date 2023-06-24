import Head from 'next/head';
import { useState } from 'react';
import { Web3Connection } from '@taikai/dappkit';

export default function Home() {
  const [web3Host, setWeb3Host] = useState('https://kovan.infura.io/v3/');
  const [privateKey, setPrivateKey] = useState('');
  const [web3Connection, setWeb3Connection] = useState(null);
  const [address, setAddress] = useState('');

  async function connect() {
    const _web3Connection = new Web3Connection({ web3Host, privateKey });
    _web3Connection.start();
    if (!_web3Connection.options.privateKey) await _web3Connection.connect();
    setAddress(await _web3Connection.getAddress());
    setWeb3Connection(_web3Connection);
  }

  return (
    <div >
      <Head>
        <title>@taikai/dappkit</title>
      </Head>

      <main>
        
      </main>
    </div>
  );
}
