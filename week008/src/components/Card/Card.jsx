import PropTypes from 'prop-types';

import styles from './Card.module.css';

export const Card = ({ produto }) => (
  <div className={styles.card}>
    <img className={styles.img} alt='Foto do prato' src={produto.img} height={200} />

    <div className={styles.info}>
      <h2 className={styles.infoTitulo}>{produto.nome}</h2>

      <p className={styles.infoDescricao}>{produto.descricao}</p>
    </div>

    <div className={styles.footer}>
      <strong className={styles.footerValor}>
        {`R$ ${produto.valor.toFixed(2).replace('.', `,`)}`}
      </strong>

      <p>{produto.tempoPreparo}</p>
    </div>
  </div>
);

Card.propTypes = {
  produto: PropTypes.shape({
    img: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired,
    tempoPreparo: PropTypes.string.isRequired,
  }),
};
