import React, {FC} from "react";
import style from "/styles/components/Header.module.scss";

export const Header: FC = React.memo(() => {
	return (
		<div className={style.header}>
			<div className={style.logoPart}>
				CRASH
				<span className={style.accent}>
					*
				</span>
			</div>
			<a className={style.link} target={'_blank'} href="https://github.com/alternatio">
				Github
			</a>
		</div>
	)
})