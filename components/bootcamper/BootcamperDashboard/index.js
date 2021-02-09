import React from "react";
import styles from "./bootcamperDashboard.module.css";
import Link from "next/link";

export default function BootcamperDashboard() {
	return (
		<div className={styles.container}>
			<Link href="/masterytasks">
				<a className={styles.imageLink}>
					<img
						className={styles.icons}
						src="/diagram.png"
						alt="mastery graph image"
					/>
					<p className={styles.link_text}>Mastery tasks</p>
				</a>
			</Link>
			<Link href="/recaptasks">
				<a className={styles.imageLink}>
					<img
						className={styles.icons}
						src="/bar-chart.png"
						alt="recap graph image"
					/>
					<p className={styles.link_text}>Recap tasks</p>
				</a>
			</Link>
		</div>
	);
}
