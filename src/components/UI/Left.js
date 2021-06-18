import styles from './Left.module.css'


function Left() {
    return (
        <div className={styles.leftBox}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWECAViZ_Ai7M_w1shmeZ89YjDs3HNEh1sg&usqp=CAU"
                className={styles.logoImg} alt="logo_img" />
            <h2 className="heading1">#1 Great Drive Apllication where
                you can store your important files</h2>
            <img src="https://cdn.dribbble.com/users/2019344/screenshots/14202833/media/f02877d39115001f0f562466955317f6.png"
                alt="left_bottom_img" className={styles.leftBottomImg} />
        </div>
    )
}

export default Left
