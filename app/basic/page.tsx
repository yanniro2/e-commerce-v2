import React from 'react'
import Number from '../../components/Number';
import Input from "../../components/Input";
import Radio from "../../components/Radio";
const page = () => {
  return (
    <div>
      <div className="container mx-auto py-[1rem]">
        <div className="py-10">
          <h1 className="text-center text-[58px] font-bold py-5">Typography</h1>
          <div className="flex flex-col">
            <h1 className="h1">Morbi interdum mollis sapien</h1>
            <h2 className="h2">Donec nec justo eget felis facilisis</h2>
            <h3 className="h3">Nunc sem lacus accum</h3>
            <h4 className="h4">interdum consectetuer</h4>
            <h5 className="h5">nascetur ridiculus mus</h5>
            <h6 className="h6">natoque penatibus et</h6>
            <p className="p text-primary">LOREM IPSUM</p>
            <p className="p-sub text-primary">
              Fusce ut est sed dolor gravida convallis
            </p>
            <p className="p-body">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum
              mollis sapien. Sed ac risus. Phasellus lacinia, magna a
              ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
              libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
              varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna.
              Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis
              eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare
              a, lacinia eu, vulputate vel, nisl. Suspendisse mauris. Fusce
              accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper
              vehicula. Integer adipiscing risus a sem. Nullam quis massa sit
              amet nibh viverra malesuada. Nunc sem lacus, accumsan quis,
              faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus.
              Integer sagittis. Vivamus a mauris eget arcu gravida tristique.
              Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat est. Ut
              convallis, sem sit amet interdum consectetuer, odio augue aliquam
              leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet
              metus fermentum posuere. Morbi sit amet nulla sed dolor elementum
              imperdiet. Quisque fermentum. Cum sociis natoque penatibus et
              magnis xdis parturient montes, nascetur ridiculus mus.
              Pellentesque adipiscing eros ut libero. Ut condimentum mi vel
              tellus. Suspendisse laoreet. Fusce ut est sed dolor gravida
              convallis.
            </p>
          </div>
        </div>

        <div className="py-10">
          <h1 className="text-center text-[58px] font-bold py-5">Buttons</h1>
          <div className="flex justify-between items-start gap-5">
            <button className="btn btn-1">See Product</button>
            <button className="btn btn-2">See Product</button>
            <button className="btn btn-3">Shop &#8250; </button>
          </div>
        </div>

        <div className="py-10">
          <h1 className="text-center text-[58px] font-bold py-5">Form Elements</h1>
          <div className="flex justify-between  items-end gap-5">
            <Input  />
            <Radio  />
            <Number  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page
