import s from "./style.module.sass";

function Header() {
  return (
    <div className={s.header}>
      <div className={s.headerInner}>
        <div className={s.logo}>
          <div className={s.logoLeft}>SWAPI</div>
          <div className={s.logoBottom}>Example from eKunitsa</div>
        </div>
      </div>
    </div>
  )
}

export default Header;