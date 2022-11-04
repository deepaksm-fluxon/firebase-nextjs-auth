import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useState } from 'react';

export default (_props: any) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <div>
      <Link href="/">
        <a>Go back to home page</a>
      </Link>
      <br />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={'Email'}
      />
      <input
        type={'password'}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder={'Password'}
      />
      <button
        onClick={async () => {
          await createUserWithEmailAndPassword(getAuth(), email, pass);
          window.location.href = '/';
        }}
      >
        Create account
      </button>
      <button
        onClick={async () => {
          await signInWithEmailAndPassword(getAuth(), email, pass);
          window.location.href = '/';
        }}
      >
        Log in
      </button>
    </div>
  );
};
