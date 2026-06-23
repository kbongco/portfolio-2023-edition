import bg from './midgar-bg.png';
import './BackgroundLayer.scss';

export default function BackgroundLayer({ children }) {
  return (
    <div className='chbi-background-layer'>
      <img src={bg} className='chbi-background-img' />
      <div className='chbi-bg-overlay'></div>
      <div className='chbi-bg-gradient'></div>
      {children}
    </div>
  );
}