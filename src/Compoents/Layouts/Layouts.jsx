import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function Layouts() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          sequi aliquid error temporibus asperiores qui dignissimos optio
          expedita provident magnam in quis, obcaecati eveniet ratione? Unde,
          nisi. Dicta quas, reiciendis ipsum maxime nihil ratione rem vitae.
          Harum repellat optio eos dolores quod molestias omnis nulla culpa
          illo cumque quae, accusantium corrupti ex nemo asperiores mollitia
          fugit corporis similique, iusto unde! Nostrum architecto ducimus
          consectetur perferendis natus cum alias distinctio unde eum itaque
          voluptatem, laudantium recusandae eius, quidem libero corporis
          perspiciatis harum? Voluptatibus vitae cupiditate est inventore
          accusamus voluptatem mollitia voluptas incidunt unde, odit tenetur
          esse nostrum molestiae molestias similique magnam!
        </p>
      </footer>
    </div>
  );
}

