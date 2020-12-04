import React from 'react'
import Link from 'next/link'

const GoBack: React.FC = () => (
  <Link href="/">
    <a>
      Voltar
    </a>
  </Link>
);

export default GoBack;