import styles from './Footer.module.scss';
import { useRouter } from 'next/router';

type NaveItem = {
    icon: string;
    link: string;
};

const navItems: NaveItem[] = [
    {
        icon: 'home',
        link: '/'
    },
    {
        icon: 'explore',
        link: '/explore'
    },
    {
        icon: 'place',
        link: '/place/moscow'
    },
    {
        icon: 'person_outline',
        link: '/profile'
    }
];

const Footer = () => {
    const { push, pathname } = useRouter();

    return (
        <footer className={styles.footer}>
            <nav>
                {navItems.map(item =>
                    <button
                        key={item.icon}
                        className={pathname === item.link ? styles.active : ''}
                        onClick={() => push(item.link)}
                    >
                        <span className='material-icons-outlined'>{item.icon}</span>
                    </button>
                )}
            </nav>
        </footer>
    )
}

export default Footer;
