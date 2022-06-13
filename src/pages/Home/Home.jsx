import './Home.css'; 
import TitelGhost from '../../components/Titel/TitelGhost';
import MiniAll from '../../components/Mini/MiniAll';
import Ghost from '../../components/Ghost/Ghost';
import Titel from '../../components/Titel/Titel';
import Me from '../../components/Me/Me';
import Border from '../../components/Border/Border';
import Start from '../../components/Start/Start';
import Finish from '../../components/Finish/Finish';
import Inky from '../../recursos/ThreeD/inky.glb';
import Blnky from '../../recursos/ThreeD/blinky.glb';
import Pinky from '../../recursos/ThreeD/pinky.glb';
import Clyde from '../../recursos/ThreeD/clyde.glb';

export default function Home() {
  return (<>
      <Border />
      <div className='max-w'>
          <Titel />
          <Me />
      </div>
      <Start />
      <MiniAll />
      <div className='max-wghost drc inky'>
        <TitelGhost
          name="INKY"
          />
        <Ghost 
          text="Proyects UX/UI" 
          about='about'
          modelo= {Inky}
          link='/proyectsUXUI'
        />
      </div>
      <div className='max-wghost izq blinky'>
        <TitelGhost
          name="BLINKY"
          />
        <Ghost 
          text="Proyects Product" 
          about='about'
          modelo={Blnky}
          link='/proyects-product'
        />
      </div>
      <div className='max-wghost drc pinky'>
        <TitelGhost
          name="PINKY"
          />
        <Ghost 
          text="Skills" 
          about='about'
          modelo={Pinky}
          link='/skills'
        />
      </div>
      <div className='max-wghost izq clyde'>
        <TitelGhost
          name="Clyde"
          />
        <Ghost 
          text="Trajectory" 
          about='about'
          modelo={Clyde}
          link='/trajectory'
        />
      </div>
      <Finish />
    </>
  )
}