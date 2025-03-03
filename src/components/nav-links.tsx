import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Badges', href: '/badges' },
  { name: 'Banners', href: '/banners' },
  { name: 'Cards', href: '/cards' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Toasts', href: '/toasts' },
  { name: 'Tooltips', href: '/tooltips' },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.href}
          className={({ isActive }) =>
            clsx(
              'flex h-[40px] grow items-center justify-center gap-2 rounded-md bg-(--fg-color) p-3 text-sm font-medium hover:bg-(--hover-bg-color) hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              isActive && 'bg-(--hover-bg-color) text-(--base-color)'
            )
          }
        >
          <p className="block">{link.name}</p>
        </NavLink>
      ))}
    </>
  );
}
