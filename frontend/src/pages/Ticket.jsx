import { useSelector, useDispatch } from 'react-redux';
import { getTicket, closeTicket } from '../features/tickets/ticketSlice';
import BackButton from '../components/BackButton';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

function Ticket() {
  const { ticket, isLoading, isError, message } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();
  const { ticketId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));

    return () => {};
  }, [message, isError, ticketId, dispatch]);

  const onTicketClosed = () => {
    dispatch(closeTicket(ticket._id));

    toast.success('Ticket closed!');
    navigate('/tickets');
  };

  if (isLoading) return <Spinner />;
  if (isError)
    return (
      <>
        <BackButton url='/tickets' />
        <h3>Something went wrong</h3>
      </>
    );

  return (
    <div className='ticket-page'>
      <header className='ticket-header'>
        <BackButton url='/tickets' />
        <h2>
          Ticket Id: {ticket._id}{' '}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}
        </h3>
        <h3>Product: {ticket.product}</h3>
        <hr />
        <div className='ticket-desc'>
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>

      {ticket.status !== 'closed' && (
        <button onClick={onTicketClosed} className='btn btn-block btn-danger'>
          Close ticket
        </button>
      )}
    </div>
  );
}
export default Ticket;
