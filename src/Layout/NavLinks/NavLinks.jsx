import './NavLinks.scss';

export default function NavLink({ to, label, onClick }) {
  return ( 
    <li>
      <a className='chbi-links' href={to} onClick={() => onClick(to)}>
        {label}
      </a>
    </li>
  )
}