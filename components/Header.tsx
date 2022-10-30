import React, {FC} from "react";
import style from "/styles/components/Header.module.scss";

const Header: FC = () => {
	return (
		<div className={style.header}>
			<div className={style.logoPart}>
				CRASH
				<span className={style.accent}>
					*
				</span>
			</div>
			<a
				className={style.link}
				rel={'noreferrer'}
				target={'_blank'}
				href="https://github.com/alternatio">
				Github
			</a>
		</div>
	)
}

export default React.memo(Header)