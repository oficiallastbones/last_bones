import styles from "./Menu.module.css"
import Link from "next/link";
import SocialIcons from "@/components/atoms/SocialIcons/SocialIcons";
import { useEffect, useState } from 'react'

const Menu = ({ current_page }) => {
	const menu_pages = [
		{
			key: 'home',
			name: "HOME",
			link: "/",
		},
		{
			key: 'produtos',
			name: "PRODUTOS",
			link: "/produtos",
		},
		{
			key: 'agenda',
			name: "AGENDA",
			link: "/agenda",
		},
		{
			key: 'videos',
			name: "VÍDEOS",
			link: "/videos",
		},
		{
			key: 'contato',
			name: "CONTATO",
			link: "/contato",
		},
	];

	const [proximoShow, setProximoShow] = useState(undefined);

	useEffect(() => {
		const fetchProximoShow = async () => {
			try {
				const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
				const response = await fetch(`${baseUrl}/api/agenda`)
				const database_ = await response.json()

				console.log(database_[0])

				setProximoShow(database_[0] || undefined)
			} catch (error) {
				console.error('Erro ao buscar o próximo show:', error);
			};
		};

		fetchProximoShow();
	}, []);


	const formatarDataHora = (dataString) => {
		const data = new Date(dataString);
		const dataFormatada = data.toLocaleDateString('pt-BR', {
			day: '2-digit',
			month: '2-digit',
		});
		const horaFormatada = data.toLocaleTimeString('pt-BR', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		});

		return `${dataFormatada} às ${horaFormatada}`;
	};

	return (
		<>
			<nav className={`${styles.nav} ${(current_page === 'home') ? styles.home : ''}`}>
				<div className={styles.menu}>
					<div className={styles.show}>
						{/* Deverá ser pego pela api */}
						<Link href="agenda">
							{proximoShow
								? `Próximo show: ${proximoShow.name} - ${formatarDataHora(proximoShow.date)}`
								: 'Nenhum show agendado'}
						</Link>
					</div>

					<div className={styles.secoes}>
						<ul className={styles.list_secoes}>
							{menu_pages.map((page) => {
								if (page.key !== current_page) {
									return (
										< li key={page.key} > <Link href={page.link}>{page.name}</Link></li>
									)
								}
							})}
						</ul>
						<SocialIcons className={styles.socials} />
					</div>
				</div>
			</nav >
		</>
	)
}

export default Menu;