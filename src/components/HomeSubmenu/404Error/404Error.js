import React from 'react';
import Title from '../../Title/Title';
import ErrorMain from './404ErrorMain';
import './404Error.css'
export default function Error() {
  return (
      <div>
          <Title titl="404 Error"/>
          <ErrorMain/>
      </div>
  )
}
