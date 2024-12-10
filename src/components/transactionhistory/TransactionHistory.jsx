import css from "./TransactionHistory.module.css";
import Transe from '../transe/Transe';

export default function TransactionHistory({ tran }) {

  return (
    <table className={css.transactionHistory}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

          <tbody>
              {
                tran.map(tran =>
                    <Transe
                        key={tran.id}
                        type={tran.type}
                        amount={tran.amount}
                        currency={tran.currency}
                    />
              )}
        </tbody>
    </table>
  );
};